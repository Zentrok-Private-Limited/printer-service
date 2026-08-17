'use client';

import { useState } from 'react';
import { DiagnosticIssue } from '@/types/support';
import { AlertCircle, Wrench, Wifi, RefreshCw, FileText } from 'lucide-react';

export const issues: DiagnosticIssue[] = [
  // Printer Issues
  { id: 'p1', title: 'Printer Setup Issues', category: 'printer' },
  { id: 'p2', title: 'Printer Offline', category: 'printer' },
  { id: 'p3', title: 'Wireless Printer Issues', category: 'printer' },
  { id: 'p4', title: 'Scanner Issues', category: 'printer' },
  { id: 'p5', title: 'Color or Black Ink Not Printing', category: 'printer' },
  { id: 'p6', title: 'Cartridge Issues', category: 'printer' },
  { id: 'p7', title: 'Print job stuck in queue', category: 'printer' },
  { id: 'p8', title: 'Paper jam issues', category: 'printer' },
  { id: 'p9', title: 'Instant Ink Issues', category: 'printer' },
  { id: 'p10', title: 'Carriage is jammed', category: 'printer' },

  // Computer Issues
  { id: 'c1', title: 'Computer Setup Issues', category: 'computer' },
  { id: 'c2', title: 'Computer Internet Issues', category: 'computer' },
  { id: 'c3', title: 'Computer Security Issues', category: 'computer' },
  { id: 'c4', title: 'Slow Computer', category: 'computer' },
  { id: 'c5', title: 'System Errors', category: 'computer' },
  { id: 'c6', title: 'Software Installation', category: 'computer' },
  { id: 'c7', title: 'Windows Settings', category: 'computer' },
  { id: 'c8', title: 'Keyboard & Mouse Issues', category: 'computer' },
  { id: 'c9', title: 'Driver Issues', category: 'computer' },
  { id: 'c10', title: 'Computer Support', category: 'computer' },
];

export default function DiagnosticsGrid() {
  const [activeTab, setActiveTab] = useState<'all' | 'printer' | 'computer'>('all');

  const filteredIssues = activeTab === 'all' 
    ? issues 
    : issues.filter((i) => i.category === activeTab);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Choose a Topic to Get Started
          </h2>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Select your specific problem to launch automated diagnostics or connect with support.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-2 mb-8">
          {(['all', 'printer', 'computer'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-medium capitalize transition ${
                activeTab === tab
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {tab === 'all' ? 'All Topics' : `${tab} Issues`}
            </button>
          ))}
        </div>

        {/* Issue Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredIssues.map((issue) => (
            <button
              key={issue.id}
              className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-md transition text-left group"
            >
              <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
                <Wrench className="w-5 h-5" />
              </div>
              <span className="font-semibold text-gray-800 text-sm group-hover:text-blue-600 transition">
                {issue.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}