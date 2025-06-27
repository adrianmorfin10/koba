'use client';
import Image from 'next/image';
import { FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaShoppingCart, FaShieldAlt } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#141414] text-white py-12 px-6 md:px-16 mt-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Columna 1 - Logo y redes (se mantiene igual) */}
          
          {/* Columna 2 - Enlaces rápidos (corregida) */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center" style={{ fontFamily: 'Play, sans-serif' }}>
              <span className="text-[#FF4646]">E</span>nlaces
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#productos" scroll={false}>
                  <a className="text-gray-300 hover:text-[#FF4646] transition-colors flex items-center">
                    <span className="mr-2">•</span> Productos
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#nosotros" scroll={false}>
                  <a className="text-gray-300 hover:text-[#FF4646] transition-colors flex items-center">
                    <span className="mr-2">•</span> Nosotros
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#contacto" scroll={false}>
                  <a className="text-gray-300 hover:text-[#FF4646] transition-colors flex items-center">
                    <span className="mr-2">•</span> Contacto
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Resto del footer (se mantiene igual) */}
        </div>
      </div>
    </footer>
  );
}