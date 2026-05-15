import { MOCK_ENCLOSURES } from "@/lib/mockData";
import { AlertOctagon, Info, MapPin, ThermometerSnowflake, ThermometerSun, Users } from "lucide-react";

export default function EnclosuresPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-zoo-dark">Enclosures & Housing Management</h1>
          <p className="text-gray-500 mt-1">Manage sectors, view inhabitants, and monitor compatibility.</p>
        </div>
        <button className="bg-zoo-primary hover:bg-zoo-primary/90 text-white px-4 py-2 rounded-lg font-medium transition-colors">
          Add Enclosure
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_ENCLOSURES.map((enclosure) => {
          const hasWarning = !!enclosure.warningMessage;
          
          return (
            <div 
              key={enclosure.id} 
              className={`bg-white rounded-2xl shadow-sm border overflow-hidden relative
                ${hasWarning ? 'border-rose-300 ring-1 ring-rose-300 ring-offset-1' : 'border-gray-100'}
              `}
            >
              {/* Card Header */}
              <div className={`px-5 py-4 border-b flex justify-between items-center
                ${hasWarning ? 'bg-rose-50 border-rose-100' : 'bg-gray-50/50 border-gray-100'}
              `}>
                <div className="flex items-center gap-2">
                  <MapPin className={`w-5 h-5 ${hasWarning ? 'text-rose-500' : 'text-gray-400'}`} />
                  <h3 className="font-bold text-gray-800">{enclosure.number}</h3>
                </div>
                {hasWarning && (
                  <span className="flex h-3 w-3 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
                  </span>
                )}
              </div>

              {/* Warning Banner */}
              {hasWarning && (
                <div className="px-5 py-3 bg-rose-100/50 border-b border-rose-100 flex items-start gap-3">
                   <AlertOctagon className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                   <div>
                     <p className="text-sm font-semibold text-rose-800">Critical Warning</p>
                     <p className="text-xs text-rose-700 mt-0.5">{enclosure.warningMessage}</p>
                   </div>
                </div>
              )}

              {/* Card Body */}
              <div className="p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Heating Status</span>
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold
                    ${enclosure.heatingStatus === 'Heated' ? 'bg-orange-50 text-orange-700 border border-orange-100' : 
                      enclosure.heatingStatus === 'Outdoor' ? 'bg-blue-50 text-blue-700 border border-blue-100' : 
                      'bg-gray-100 text-gray-700 border border-gray-200'}
                  `}>
                    {enclosure.heatingStatus === 'Heated' && <ThermometerSun className="w-3.5 h-3.5" />}
                    {enclosure.heatingStatus === 'Outdoor' && <ThermometerSnowflake className="w-3.5 h-3.5" />}
                    {enclosure.heatingStatus}
                  </span>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span className="text-sm font-semibold text-gray-700">Inhabitants</span>
                  </div>
                  
                  {enclosure.inhabitants.length > 0 ? (
                    <div className="space-y-2">
                      {enclosure.inhabitants.map(animal => (
                        <div key={animal.id} className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-lg border border-gray-100">
                          <div>
                            <p className="text-sm font-medium text-gray-800">{animal.name}</p>
                            <p className="text-xs text-gray-500">{animal.species}</p>
                          </div>
                          <span className="text-xs font-medium text-gray-400 bg-white px-2 py-0.5 rounded border border-gray-200">
                            ID: {animal.id}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-sm text-gray-400 italic bg-gray-50 px-3 py-2 rounded-lg border border-gray-100 border-dashed">
                      <Info className="w-4 h-4" /> Empty Enclosure
                    </div>
                  )}
                </div>
              </div>
              
              {/* Card Footer Actions */}
              <div className="px-5 py-3 border-t border-gray-100 bg-gray-50/50 flex justify-end gap-2">
                <button className="text-xs font-semibold text-gray-600 hover:text-zoo-primary transition-colors px-3 py-1.5 rounded hover:bg-gray-100">
                  Edit
                </button>
                <button className="text-xs font-semibold text-white bg-zoo-dark hover:bg-black transition-colors px-3 py-1.5 rounded shadow-sm">
                  Transfer Animals
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
