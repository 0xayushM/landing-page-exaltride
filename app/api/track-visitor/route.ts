import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

interface VisitorData {
  location: {
    city: string;
    region: string;
    country: string;
    ip: string;
  };
  timestamp: string;
}

export async function POST(request: Request) {
  try {
    const visitorData: VisitorData = await request.json();
    const { location, timestamp } = visitorData;

    // Insert visitor into Supabase
    const { data, error } = await supabase
      .from('visitors')
      .insert([
        {
          ip: location.ip || 'Unknown',
          city: location.city || 'Unknown',
          region: location.region || 'Unknown',
          country: location.country || 'Unknown',
        }
      ])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      // Don't fail the request if visitor tracking fails
      return NextResponse.json(
        { 
          message: 'Visitor tracked (with warnings)',
          success: true 
        },
        { status: 200 }
      );
    }

    console.log('Visitor tracked:', data);

    return NextResponse.json(
      { 
        message: 'Visitor tracked successfully',
        success: true 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error tracking visitor:', error);
    // Don't fail the request if visitor tracking fails
    return NextResponse.json(
      { message: 'Visitor tracked (with errors)' },
      { status: 200 }
    );
  }
}
