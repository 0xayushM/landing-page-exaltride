import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#003AAD] text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-4">
          <Image src="/logo.png" alt="Exaltride" width={150} height={45} className="h-24 w-auto mx-auto mb-3" />
        </div>
        <div className="space-y-2 text-sm">
          <p className="font-semibold">Made for Indian car owners. Built by people who've lived the same problems.</p>
        </div>
        <div className="mt-4 text-gray-400 text-xs">
          <p>&copy; 2025 Exaltride. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
