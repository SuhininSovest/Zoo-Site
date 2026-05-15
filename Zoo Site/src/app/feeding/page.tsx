import { MOCK_FEEDING_SCHEDULE } from "@/lib/mockData";
import { Apple, Package, Truck, Clock, Info } from "lucide-react";
import Link from "next/link";

export default function FeedingPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-zoo-dark">Feeding & Diet Schedule</h1>
          <p className="text-gray-500 mt-1">Daily menus, rations, and feed inventory management.</p>
        </div>
        <Link href="/feeding/order" className="bg-zoo-primary hover:bg-zoo-primary/90 text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-sm flex items-center gap-2">
          <Truck className="w-4 h-4" /> Create Order
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        {/* Left Side: Daily Feeding Menu Table (Takes 3 columns) */}
        <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
            <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
              <Clock className="w-5 h-5 text-zoo-primary" /> Daily Schedule
            </h2>
            <div className="text-sm font-medium text-gray-500">
              {MOCK_FEEDING_SCHEDULE.length} scheduled feeds
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50/80">
                <tr>
                  <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Time</th>
                  <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Animal Name</th>
                  <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Species</th>
                  <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Feed Type</th>
                  <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Quantity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {MOCK_FEEDING_SCHEDULE.sort((a, b) => a.time.localeCompare(b.time)).map((schedule) => (
                  <tr key={schedule.id} className="hover:bg-zoo-light/30 transition-colors">
                    <td className="py-4 px-6 text-sm font-bold text-gray-900 border-l-4 border-transparent hover:border-zoo-primary">
                      {schedule.time}
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-gray-800">{schedule.animalName}</td>
                    <td className="py-4 px-6 text-sm text-gray-500">{schedule.species}</td>
                    <td className="py-4 px-6 text-sm">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border
                        ${schedule.feedType === 'Vegetation' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 
                          schedule.feedType === 'Meat' ? 'bg-rose-50 text-rose-700 border-rose-100' : 
                          schedule.feedType === 'Live Feed' ? 'bg-orange-50 text-orange-700 border-orange-100' : 
                          'bg-amber-50 text-amber-700 border-amber-100'}
                      `}>
                        {schedule.feedType === 'Vegetation' && <Apple className="w-3 h-3 mr-1 mt-0.5" />}
                        {schedule.feedType}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-gray-600">{schedule.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Side: Inventory Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-5 py-4 border-b border-gray-100 bg-gray-50/50 flex items-center gap-2">
              <Package className="w-5 h-5 text-gray-600" />
              <h2 className="text-md font-bold text-gray-800">Feed Inventory</h2>
            </div>
            
            <div className="p-5 space-y-4">
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-gray-700">Vegetation</span>
                  <span className="text-emerald-600 font-bold">Good (320 kg)</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-emerald-400 h-2 rounded-full w-[80%]"></div>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-gray-700">Compound Feed</span>
                  <span className="text-blue-600 font-bold">Adequate (150 bags)</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-blue-400 h-2 rounded-full w-[60%]"></div>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-gray-700 flex items-center gap-1">
                    Meat <Info className="w-3 h-3 text-gray-400" />
                  </span>
                  <span className="text-rose-600 font-bold animate-pulse">Low (40 kg)</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-rose-500 h-2 rounded-full w-[15%]"></div>
                </div>
              </div>
              
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-gray-700">Live Feed</span>
                  <span className="text-orange-600 font-bold">Low (20 units)</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-orange-400 h-2 rounded-full w-[20%]"></div>
                </div>
              </div>
            </div>

            <div className="px-5 py-3 bg-rose-50 border-t border-rose-100">
              <p className="text-xs text-rose-700 font-medium">
                Action required: Meat and Live Feed stocks fall below the 3-day minimum requirement.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 border-l-4 border-l-zoo-primary">
            <h3 className="font-bold text-gray-800 text-sm mb-1">Active Suppliers</h3>
            <p className="text-xs text-gray-500 mb-3">Next scheduled delivery in 2 days from "BioFeed Intl".</p>
            <button className="w-full text-sm font-medium text-zoo-primary border border-zoo-primary/30 hover:bg-zoo-primary/5 py-2 rounded transition-colors">
              Manage Suppliers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
