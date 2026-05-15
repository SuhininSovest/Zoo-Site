import { MOCK_METRICS, MOCK_TASKS } from "@/lib/mockData";
import { Users, AlertCircle, Home, ShoppingBag, CheckCircle2, Circle } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-zoo-dark">Dashboard Overview</h1>
        <p className="text-gray-500 mt-1">Welcome back. Here's what's happening at the zoo today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Metric Cards */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center">
          <div className="bg-emerald-100 p-4 rounded-xl mr-5">
            <Users className="w-6 h-6 text-emerald-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Total Animals</p>
            <h3 className="text-3xl font-bold text-gray-800">{MOCK_METRICS.totalAnimals}</h3>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center">
          <div className="bg-rose-100 p-4 rounded-xl mr-5">
            <AlertCircle className="w-6 h-6 text-rose-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Sick (Isolation)</p>
            <h3 className="text-3xl font-bold text-rose-600">{MOCK_METRICS.sickInIsolation}</h3>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center">
          <div className="bg-blue-100 p-4 rounded-xl mr-5">
            <Home className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Empty Enclosures</p>
            <h3 className="text-3xl font-bold text-gray-800">{MOCK_METRICS.emptyEnclosures}</h3>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-orange-100 flex items-center">
          <div className="bg-orange-100 p-4 rounded-xl mr-5">
            <ShoppingBag className="w-6 h-6 text-orange-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Low Feed Stock</p>
            <h3 className="text-3xl font-bold text-orange-500">{MOCK_METRICS.lowStockItems} Items</h3>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mt-8">
        <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <h2 className="text-lg font-semibold text-gray-800">Today's Tasks</h2>
          <span className="bg-zoo-primary text-white text-xs px-3 py-1 rounded-full font-medium">
            {MOCK_TASKS.length} pending
          </span>
        </div>
        <div className="p-0">
          <ul className="divide-y divide-gray-100">
            {MOCK_TASKS.map((task) => (
              <li key={task.id} className="p-6 hover:bg-gray-50 transition-colors flex items-start gap-4">
                <button className="mt-0.5 text-gray-300 hover:text-zoo-primary transition-colors">
                  <Circle className="w-6 h-6" />
                </button>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <p className="text-gray-800 font-medium">{task.title}</p>
                    <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {task.time}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium 
                      ${task.role === 'Veterinarian' ? 'bg-purple-100 text-purple-700' : 
                        task.role === 'Zookeeper' ? 'bg-zoo-accent text-zoo-primary' : 
                        task.role === 'Maintenance' ? 'bg-blue-100 text-blue-700' : 
                        'bg-gray-200 text-gray-700'}`}
                    >
                      {task.role}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
