import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

interface FormData {
  name: string;
  email: string;
  phone: string;
  carModel: string;
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

    // Check for duplicate email in Supabase
    const { data: existingSubmission, error: checkError } = await supabase
      .from('submissions')
      .select('email')
      .eq('email', email.toLowerCase())
      .single();

    if (existingSubmission) {
      return NextResponse.json(
        { message: 'This email is already registered. Please use a different email.' },
        { status: 409 }
      );
    }

    // Insert new submission into Supabase
    const { data, error } = await supabase
      .from('submissions')
      .insert([
        {
          name,
          email: email.toLowerCase(),
          phone,
          car_model: carModel,
        }
      ])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { message: 'Failed to save submission. Please try again.' },
        { status: 500 }
      );
    }

    console.log('New submission saved:', data);

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
