import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-[#003AAD] z-50 border-b border-[#0047cc] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center md:justify-between items-center h-20">
          <div className="flex items-center">
            <Image src="/logo.png" alt="Exaltride" width={200} height={100} className="h-24 w-auto" />
          </div>
        </div>
      </div>
    </nav>
  );
}
