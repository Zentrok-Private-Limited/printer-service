import { PricingPlan } from '@/types/support';
import { CheckCircle2, ShieldCheck, Zap, Headphones } from 'lucide-react';

const plans: PricingPlan[] = [
  {
    id: '1-year',
    duration: '1-Year Subscription',
    devices: 'Plan for 1 Device',
    pricePerMonth: 12.99,
    totalPrice: 155.88,
    badge: 'Best Value',
    highlighted: false,
  },
  {
    id: '2-year',
    duration: '2-Year Subscription',
    devices: 'Plan for 2 Devices',
    pricePerMonth: 12.99,
    totalPrice: 623.52,
    badge: 'Popular',
    highlighted: true,
  },
  {
    id: '5-year',
    duration: '5-Year Subscription',
    devices: 'Plan for 5 Devices',
    pricePerMonth: 12.99,
    totalPrice: 779.40,
    badge: 'Recommended',
    highlighted: false,
  },
];

export default function PricingSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Smart Printer Setup Plans</h2>
          <p className="text-gray-500 mt-2">Affordable · Reliable · Hassle-Free Support Plans</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl p-8 border ${
                plan.highlighted
                  ? 'border-blue-600 shadow-xl ring-2 ring-blue-600/20'
                  : 'border-gray-200 shadow-sm hover:shadow-md'
              } flex flex-col justify-between transition`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                  {plan.badge}
                </span>
              )}

              <div>
                <h3 className="text-xl font-bold text-gray-900">{plan.duration}</h3>
                <p className="text-sm text-gray-500 mt-1">{plan.devices}</p>

                <div className="my-6">
                  <span className="text-4xl font-extrabold text-gray-900">${plan.pricePerMonth}</span>
                  <span className="text-gray-500 text-sm"> / Month</span>
                  <p className="text-xs text-gray-400 mt-1">Total: ${plan.totalPrice.toFixed(2)}</p>
                </div>

                <ul className="space-y-3 mb-8 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    Instant Priority Activation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    Remote Diagnostics & Fixes
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    Driver & Software Setup
                  </li>
                </ul>
              </div>

              <button
                className={`w-full py-3 rounded-xl font-semibold transition ${
                  plan.highlighted
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                Contact Us
              </button>
            </div>
          ))}
        </div>

        {/* Guarantees Bar */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-gray-100 text-center">
          <div className="p-4">
            <Zap className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <p className="text-sm font-semibold text-gray-800">Immediate Activation</p>
          </div>
          <div className="p-4">
            <ShieldCheck className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <p className="text-sm font-semibold text-gray-800">7-Day Guarantee</p>
          </div>
          <div className="p-4">
            <Headphones className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <p className="text-sm font-semibold text-gray-800">24/7 Live Assistance</p>
          </div>
          <div className="p-4">
            <CheckCircle2 className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <p className="text-sm font-semibold text-gray-800">Easy Cancellation</p>
          </div>
        </div>
      </div>
    </section>
  );
}