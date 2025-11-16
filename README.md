# Exaltride Landing Page

A modern, conversion-optimized landing page for Exaltride - India's new aftermarket marketplace for car accessories.

## Features

### 🎨 Modern UI/UX
- **Responsive Design**: Fully responsive across all devices
- **Dark Blue Theme**: Professional color scheme with yellow/gold CTAs
- **Lucide Icons**: Clean, modern iconography
- **Smooth Animations**: Tailwind CSS transitions

### 📝 Form Submission with Excel Storage
- **Email Deduplication**: Prevents duplicate submissions from the same email
- **Excel Export**: All submissions saved to `/data/submissions.xlsx`
- **Field Validation**: Email format and required field validation
- **Real-time Feedback**: Success/error messages for users

### 📊 Visitor Tracking
- **Automatic Tracking**: Tracks every visitor on page load
- **Location Detection**: Uses IP geolocation to capture visitor location
- **Excel Logging**: Visitor data saved to `/data/visitors.xlsx`
- **Detailed Metrics**: IP address, city, region, country, and timestamp

### 🚗 Key Sections
1. **Hero Section**: Compelling headline with dual CTAs
2. **Why Exaltride**: 5 value propositions with icons
3. **Car Model Selector**: Interactive dropdown with popular Indian car models
4. **Social Proof**: Vendor trust indicators
5. **Launch Date**: Clear call-to-action with December 14, 2025 launch
6. **Lead Form**: Name, Email, Phone, Car Model fields
7. **Footer**: Brand messaging and copyright

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Data Storage

The application stores data in Excel files located in the `/data` directory:

- **`/data/submissions.xlsx`**: Form submissions with email deduplication
  - Columns: Name, Email, Phone, Car Model, Submission Date, Timestamp
  
- **`/data/visitors.xlsx`**: Visitor tracking data
  - Columns: Visit Date, Visit Time, IP Address, City, Region, Country, Timestamp

**Note**: The `/data` directory is gitignored to protect user privacy.

## API Routes

### POST `/api/submit-form`
Submit the early access form.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 9876543210",
  "carModel": "Maruti Suzuki Swift"
}
```

**Response:**
- `200`: Successfully registered
- `400`: Invalid data or missing fields
- `409`: Email already registered
- `500`: Server error

### POST `/api/track-visitor`
Track visitor location and activity.

**Request Body:**
```json
{
  "location": {
    "city": "Mumbai",
    "region": "Maharashtra",
    "country": "India",
    "ip": "103.x.x.x"
  },
  "timestamp": "2025-11-16T05:33:00.000Z"
}
```

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Excel**: xlsx library
- **Geolocation**: ipapi.co API

## Car Models Supported

The form includes popular Indian car models:
- Maruti Suzuki Swift
- Hyundai Creta
- Tata Nexon
- Mahindra Scorpio
- Honda City
- Kia Seltos
- Toyota Fortuner
- Maruti Suzuki Alto
- Hyundai i20
- Tata Harrier
- Other (custom input)

## Customization

### Colors
The main brand colors can be adjusted in the components:
- **Primary**: `#0f2847` (Dark Blue)
- **Accent**: `#fbbf24` (Gold/Yellow)
- **Hover**: `#f59e0b` (Darker Gold)

### Logo
Replace `/public/exaltride-logo.svg` with your custom logo.

## Security & Privacy

- Email deduplication prevents spam submissions
- Visitor IPs are anonymized in storage
- Data directory is gitignored
- Environment variables can be used for API keys

## Support

For questions or issues, contact: support@exaltride.com

## License

© 2025 Exaltride. All rights reserved.
