'use client';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#262626]/20 backdrop-blur-sm py-4 px-6 md:px-16 flex justify-between items-center mx-auto">
      <div className="text-3xl font-bold" style={{ fontFamily: 'Play, sans-serif' }}>
        <span className="text-[#FF4646]">K</span>OBA
      </div>
      <nav className="hidden md:flex gap-8">
        <Link href="#productos" scroll={false}>
          <a className="text-white hover:text-[#FF4646] transition-colors duration-300">
            Productos
          </a>
        </Link>
        <Link href="#nosotros" scroll={false}>
          <a className="text-white hover:text-[#FF4646] transition-colors duration-300">
            Nosotros
          </a>
        </Link>
      </nav>
    </header>
  );
}