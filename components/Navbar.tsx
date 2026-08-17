'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Printer, ShieldCheck } from 'lucide-react';

const navItems = [
  'Printer Setup',
  'Printer Offline',
  'Scanner Setup',
  'Support Home',
  'Ink Cartridges',
  'Diagnostics',
  'Business Support',
];

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-blue-600">
            <Printer className="w-7 h-7" />
            <span>Printer <span className="text-gray-800">Services</span></span>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-md hidden md:block relative">
            <input
              type="text"
              placeholder="Type and Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
            />
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
          </div>

          {/* Action Button */}
          <Link
            href="#support"
            className="text-sm font-medium text-blue-600 hover:text-blue-700 px-4 py-2 rounded-lg border border-blue-600 hover:bg-blue-50 transition"
          >
            Sign In
          </Link>
        </div>

        {/* Navigation Categories */}
        <nav className="flex items-center space-x-6 overflow-x-auto py-2.5 text-xs sm:text-sm font-medium text-gray-600 no-scrollbar border-t border-gray-100">
          {navItems.map((item) => (
            <Link key={item} href="#" className="whitespace-nowrap hover:text-blue-600 transition">
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}