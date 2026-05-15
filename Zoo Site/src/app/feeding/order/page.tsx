import { ArrowLeft, CheckCircle2, Truck } from "lucide-react";
import Link from "next/link";

export default function CreateOrderPage() {
  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <div className="flex items-center gap-4">
        <Link 
          href="/feeding"
          className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-zoo-dark">Create Feed Order</h1>
          <p className="text-gray-500 mt-1">Submit a new procurement request to our suppliers.</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <div className="flex flex-col items-center text-center space-y-4 mb-8">
          <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
            <Truck className="w-8 h-8 text-blue-500" />
          </div>
          <h2 className="text-xl font-bold text-gray-800">Order Form Configuration</h2>
          <p className="text-gray-500 max-w-md">
            Our automated supply chain integration is currently being configured. 
            Detailed order forms will be available in the next system deployment.
          </p>
        </div>

        <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-5 flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
          <div>
            <h3 className="font-semibold text-emerald-800">Automated Restocking Active</h3>
            <p className="text-sm text-emerald-600 mt-1">
              Do not worry! The emergency autonomous restocking protocol is currently active. 
              Suppliers have been notified logically of our low meat and live feed levels and will deliver within 2 days.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end">
          <Link 
            href="/feeding"
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2.5 rounded-lg font-medium transition-colors"
          >
            Return to Schedule
          </Link>
        </div>
      </div>
    </div>
  );
}
