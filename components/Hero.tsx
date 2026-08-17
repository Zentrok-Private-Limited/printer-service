'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Clock, ChevronRight, Printer, Monitor } from 'lucide-react';

export default function HeroSection() {
  const [activeCategory, setActiveCategory] = useState<'printer' | 'computer'>('printer');

  return (
    <div className="relative w-full bg-[#f4f8fc] overflow-hidden border-b border-gray-200">
      
      {/* 1. BACKGROUND LAYER: Tech Schematic Doodle Pattern (Left & Base) */}
      <div 
        className="absolute inset-0 z-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%230055FF' fill-opacity='0.4'%3E%3Cpath d='M20 20h10v10H20zM60 10h8v8h-8zM15 60a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm70 20h12v12H85z'/%3E%3Ccircle cx='50' cy='50' r='6' stroke='%230055FF' stroke-width='1.5' fill='none'/%3E%3Cpath d='M40 80l5-5 5 5M10 35h15M70 40a8 8 0 1 0 0-16 8 8 0 0 0 0 16z' stroke='%230055FF' stroke-width='1.2' fill='none'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      {/* 2. BACKGROUND LAYER: Blue Gradient Arches (Right Side Behind Hardware) */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 pointer-events-none z-0 overflow-hidden flex items-center justify-end">
        <div className="relative w-[700px] h-[700px] rounded-full bg-gradient-to-br from-blue-300/40 via-sky-200/50 to-blue-500/30 blur-2xl transform translate-x-1/4" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border-[40px] border-blue-200/40 opacity-70" />
        <div className="absolute right-12 top-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full border-[30px] border-blue-300/30 opacity-60" />
      </div>

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10 pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT COLUMN: Main Typography & CTA (7 cols) */}
          <div className="lg:col-span-7 text-left space-y-4">
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#112a46] tracking-tight leading-none">
              Diagnose and Solve
            </h1>
            
            <h2 className="text-2xl sm:text-3xl font-bold text-[#112a46]">
              Printer Problems — Fast & Easy
            </h2>

            {/* Expert Support Sub-bar */}
            <div className="flex items-center gap-2 text-[#0b5cbe] font-semibold text-sm sm:text-base pt-1">
              <div className="p-1 border-2 border-[#0b5cbe] rounded-full">
                <Clock className="w-4 h-4 text-[#0b5cbe]" />
              </div>
              <span>Expert Support Available – We&apos;re Here to Help</span>
            </div>

            {/* Paragraph Text */}
            <div className="space-y-3 text-gray-600 text-sm sm:text-base max-w-xl leading-relaxed pt-2">
              <p>
                Get dependable assistance with printer and computer setup, connectivity, software installation, and common technical issues. Our support resources are designed to make troubleshooting simple, clear, and convenient.
              </p>
              <p>
                Choose a Computer or Printer topic to explore helpful solutions and setup guidance, then connect with a support specialist when you need additional assistance.
              </p>
            </div>

            {/* Blue Pill CTA Button */}
            <div className="pt-4">
              <button className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-base shadow-lg shadow-blue-500/25 hover:from-blue-700 hover:to-blue-800 transition transform hover:-translate-y-0.5">
                <span>Get Started With Setup</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Devices Banner Graphic (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[520px] aspect-[4/3]">
              <Image
                src="/hero-img.png" 
                alt="Printer, desktop monitor, and laptop device bundle"
                fill
                priority
                className="object-contain drop-shadow-xl"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}