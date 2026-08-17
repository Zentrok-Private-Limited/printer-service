import Navbar from '@/components/Navbar';
import DiagnosticsGrid from '@/components/DiagnosticsGrid';
import PricingSection from '@/components/PricingSection';
import HeroSection from '@/components/Hero';
import { MessageSquare, LifeBuoy } from 'lucide-react';
import Image from 'next/image';
import { Clock } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <div id="hero">
          <HeroSection />
        </div>

        {/* Diagnostics & Issues */}
        <div id="diagnostics">
          <DiagnosticsGrid />
        </div>

        {/* Pricing */}
        <PricingSection />

        {/* Floating / Sticky Live Chat Callout */}
        <section className="bg-blue-600 py-10 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h3 className="text-2xl font-bold">Need Immediate Help with Your Printer?</h3>
              <p className="text-blue-100 text-sm mt-1">Get connected to a certified support specialist in minutes.</p>
            </div>
            <button className="flex items-center gap-2 bg-white text-blue-600 px-6 py-3.5 rounded-xl font-bold hover:bg-blue-50 transition shadow-lg whitespace-nowrap">
              <MessageSquare className="w-5 h-5" />
              Chat with Support
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-xs py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-2">
          <p>© {new Date().getFullYear()} Printer Services. All rights reserved.</p>
          <p className="text-gray-500">
            Disclaimer: We are an independent third-party technical support provider for printers and computing devices. Brand names and logos are used for informational purposes only.
          </p>
        </div>
      </footer>
    </div>
  );
}