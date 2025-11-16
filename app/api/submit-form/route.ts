import { NextResponse } from 'next/server';
import * as XLSX from 'xlsx';
import * as fs from 'fs';
import * as path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');
const EXCEL_FILE = path.join(DATA_DIR, 'submissions.xlsx');

interface FormData {
  name: string;
  email: string;
  phone: string;
  carModel: string;
}

interface SubmissionRow {
  Name: string;
  Email: string;
  Phone: string;
  'Car Model': string;
  'Submission Date': string;
  Timestamp: string;
}

export async function POST(request: Request) {
  try {
    const formData: FormData = await request.json();
    const { name, email, phone, carModel } = formData;

    // Validate required fields
    if (!name || !email || !phone || !carModel) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Ensure data directory exists
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }

    let workbook: XLSX.WorkBook;
    let worksheet: XLSX.WorkSheet;
    let data: SubmissionRow[] = [];

    // Read existing Excel file or create new one
    if (fs.existsSync(EXCEL_FILE)) {
      try {
        const fileBuffer = fs.readFileSync(EXCEL_FILE);
        workbook = XLSX.read(fileBuffer, { type: 'buffer' });
        worksheet = workbook.Sheets[workbook.SheetNames[0]];
        data = XLSX.utils.sheet_to_json<SubmissionRow>(worksheet);

        // Check for duplicate email
        const existingEntry = data.find(
          (row) => row.Email.toLowerCase() === email.toLowerCase()
        );

        if (existingEntry) {
          return NextResponse.json(
            { message: 'This email is already registered. Please use a different email.' },
            { status: 409 }
          );
        }
      } catch (error) {
        console.error('Error reading existing file, creating new one');
        workbook = XLSX.utils.book_new();
      }
    } else {
      workbook = XLSX.utils.book_new();
    }

    // Add new submission
    const now = new Date();
    const newRow: SubmissionRow = {
      Name: name,
      Email: email,
      Phone: phone,
      'Car Model': carModel,
      'Submission Date': now.toLocaleDateString('en-IN'),
      Timestamp: now.toISOString(),
    };

    data.push(newRow);

    // Convert to worksheet and save
    worksheet = XLSX.utils.json_to_sheet(data);

    // Auto-size columns
    const colWidths = [
      { wch: 20 }, // Name
      { wch: 30 }, // Email
      { wch: 15 }, // Phone
      { wch: 25 }, // Car Model
      { wch: 15 }, // Submission Date
      { wch: 25 }, // Timestamp
    ];
    worksheet['!cols'] = colWidths;

    // Update workbook
    if (workbook.SheetNames.length === 0) {
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Submissions');
    } else {
      workbook.Sheets[workbook.SheetNames[0]] = worksheet;
    }

    // Write to file using buffer approach
    const buffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });
    fs.writeFileSync(EXCEL_FILE, buffer);

    return NextResponse.json(
      { 
        message: 'Successfully registered! We\'ll contact you soon.',
        success: true 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json(
      { message: 'Server error. Please try again later.' },
      { status: 500 }
    );
  }
}
