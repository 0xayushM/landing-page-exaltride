import { NextResponse } from 'next/server';
import * as XLSX from 'xlsx';
import * as fs from 'fs';
import * as path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');
const VISITORS_FILE = path.join(DATA_DIR, 'visitors.xlsx');


interface VisitorData {
  location: {
    city: string;
    region: string;
    country: string;
    ip: string;
  };
  timestamp: string;
}

interface VisitorRow {
  'Visit Date': string;
  'Visit Time': string;
  'IP Address': string;
  City: string;
  Region: string;
  Country: string;
  Timestamp: string;
}

export async function POST(request: Request) {
  try {
    const visitorData: VisitorData = await request.json();
    const { location, timestamp } = visitorData;

    // Ensure data directory exists
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }

    let workbook: XLSX.WorkBook;
    let worksheet: XLSX.WorkSheet;
    let data: VisitorRow[] = [];

    // Read existing Excel file or create new one
    if (fs.existsSync(VISITORS_FILE)) {
      try {
        const fileBuffer = fs.readFileSync(VISITORS_FILE);
        workbook = XLSX.read(fileBuffer, { type: 'buffer' });
        worksheet = workbook.Sheets[workbook.SheetNames[0]];
        data = XLSX.utils.sheet_to_json<VisitorRow>(worksheet);
      } catch (error) {
        console.error('Error reading existing file, creating new one');
        workbook = XLSX.utils.book_new();
      }
    } else {
      workbook = XLSX.utils.book_new();
    }

    // Add new visitor
    const visitDate = new Date(timestamp);
    const newRow: VisitorRow = {
      'Visit Date': visitDate.toLocaleDateString('en-IN'),
      'Visit Time': visitDate.toLocaleTimeString('en-IN'),
      'IP Address': location.ip || 'Unknown',
      City: location.city || 'Unknown',
      Region: location.region || 'Unknown',
      Country: location.country || 'Unknown',
      Timestamp: timestamp,
    };

    data.push(newRow);

    // Convert to worksheet
    worksheet = XLSX.utils.json_to_sheet(data);

    // Auto-size columns
    const colWidths = [
      { wch: 15 }, // Visit Date
      { wch: 15 }, // Visit Time
      { wch: 18 }, // IP Address
      { wch: 20 }, // City
      { wch: 20 }, // Region
      { wch: 20 }, // Country
      { wch: 25 }, // Timestamp
    ];
    worksheet['!cols'] = colWidths;

    // Update workbook
    if (workbook.SheetNames.length === 0) {
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Visitors');
    } else {
      workbook.Sheets[workbook.SheetNames[0]] = worksheet;
    }

    // Write to file using buffer approach
    const buffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });
    fs.writeFileSync(VISITORS_FILE, buffer);

    // Get total visitor count
    const totalVisitors = data.length;

    return NextResponse.json(
      { 
        message: 'Visitor tracked successfully',
        totalVisitors,
        success: true 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error tracking visitor:', error);
    return NextResponse.json(
      { message: 'Failed to track visitor' },
      { status: 500 }
    );
  }
}
