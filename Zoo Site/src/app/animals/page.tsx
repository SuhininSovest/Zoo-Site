"use client";

import { useState } from "react";
import { MOCK_ANIMALS, Animal } from "@/lib/mockData";
import { Search, Filter, X, Stethoscope, Apple, Info, PawPrint } from "lucide-react";

export default function AnimalsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);
  const [activeTab, setActiveTab] = useState<"general" | "vet" | "feeding">("general");

  const filteredAnimals = MOCK_ANIMALS.filter(
    (a) =>
      a.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.species.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex h-[calc(100vh-8rem)] gap-6">
      {/* Left side: Animal Grid/Table */}
      <div className={`flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 ${selectedAnimal ? 'w-2/3' : 'w-full'}`}>
        <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
          <h2 className="text-xl font-bold text-gray-800">Animal Directory</h2>
          <div className="flex gap-2">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search animals..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-zoo-primary"
              />
            </div>
            <button className="p-2 border border-gray-200 text-gray-600 hover:text-zoo-primary rounded-lg transition-colors">
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-0">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50/80 sticky top-0 backdrop-blur-sm z-10 border-b border-gray-200">
              <tr>
                <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">ID</th>
                <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Name</th>
                <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Species</th>
                <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Climate Zone</th>
                <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredAnimals.map((animal) => (
                <tr 
                  key={animal.id} 
                  onClick={() => {
                    setSelectedAnimal(animal);
                    setActiveTab("general");
                  }}
                  className={`cursor-pointer transition-colors hover:bg-zoo-light/50 ${selectedAnimal?.id === animal.id ? 'bg-zoo-light/80' : ''}`}
                >
                  <td className="py-4 px-6 text-sm text-gray-500 font-mono">{animal.id}</td>
                  <td className="py-4 px-6 text-sm font-semibold text-gray-900">{animal.name}</td>
                  <td className="py-4 px-6 text-sm text-gray-600">{animal.species}</td>
                  <td className="py-4 px-6 text-sm text-gray-600">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                      {animal.climate}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-sm">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                      ${animal.status === 'Healthy' ? 'bg-emerald-50 text-emerald-700' : 
                        animal.status === 'Sick' || animal.status === 'In Treatment' ? 'bg-rose-50 text-rose-700' : 
                        'bg-amber-50 text-amber-700'}
                    `}>
                      {animal.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredAnimals.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              No animals found matching "{searchTerm}"
            </div>
          )}
        </div>
      </div>

      {/* Right side: Detail View Panel */}
      {selectedAnimal && (
        <div className="w-1/3 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col overflow-hidden animate-in fade-in slide-in-from-right-4 duration-300">
          <div className="px-6 py-5 border-b border-gray-100 bg-zoo-primary text-white flex justify-between items-center relative overflow-hidden">
            <div className="absolute right-0 top-0 opacity-10 scale-150 -translate-y-4 translate-x-4">
               <PawPrint className="w-32 h-32" />
            </div>
            <div className="relative z-10">
              <span className="text-zoo-accent text-xs font-bold tracking-wider">{selectedAnimal.id}</span>
              <h2 className="text-2xl font-bold">{selectedAnimal.name}</h2>
              <p className="text-white/80">{selectedAnimal.species}</p>
            </div>
            <button 
              onClick={() => setSelectedAnimal(null)}
              className="relative z-10 p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          <div className="flex border-b border-gray-100 bg-gray-50">
            <button 
              onClick={() => setActiveTab("general")}
              className={`flex-1 py-3 text-sm font-medium flex items-center justify-center gap-2 border-b-2 transition-colors ${activeTab === 'general' ? 'border-zoo-primary text-zoo-primary bg-white' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
              <Info className="w-4 h-4" /> Info
            </button>
            <button 
              onClick={() => setActiveTab("vet")}
              className={`flex-1 py-3 text-sm font-medium flex items-center justify-center gap-2 border-b-2 transition-colors ${activeTab === 'vet' ? 'border-zoo-primary text-zoo-primary bg-white' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
              <Stethoscope className="w-4 h-4" /> Vet History
            </button>
            <button 
              onClick={() => setActiveTab("feeding")}
              className={`flex-1 py-3 text-sm font-medium flex items-center justify-center gap-2 border-b-2 transition-colors ${activeTab === 'feeding' ? 'border-zoo-primary text-zoo-primary bg-white' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
              <Apple className="w-4 h-4" /> Diet
            </button>
          </div>

          <div className="flex-1 p-6 overflow-y-auto">
            {activeTab === "general" && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Basic Information</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Age</p>
                      <p className="font-medium text-gray-900">{selectedAnimal.age} years</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Sex</p>
                      <p className="font-medium text-gray-900">{selectedAnimal.sex}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Climate Reqs</p>
                      <p className="font-medium text-gray-900">{selectedAnimal.climate}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Diet Type</p>
                      <p className="font-medium text-gray-900">{selectedAnimal.type}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "vet" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Health Status</h4>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold
                      ${selectedAnimal.status === 'Healthy' ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`}>
                    {selectedAnimal.status}
                  </span>
                </div>
                
                <div className="relative pl-4 border-l-2 border-gray-100 space-y-6 mt-4">
                  <div className="relative">
                    <div className="absolute w-3 h-3 bg-zoo-primary rounded-full -left-[23px] top-1"></div>
                    <p className="text-xs text-gray-400 font-semibold mb-1">Oct 12, 2025</p>
                    <p className="text-sm text-gray-800 font-medium">Routine Checkup</p>
                    <p className="text-sm text-gray-500 mt-1">Weight normal. No signs of illness.</p>
                  </div>
                  <div className="relative">
                    <div className="absolute w-3 h-3 bg-gray-300 rounded-full -left-[23px] top-1"></div>
                    <p className="text-xs text-gray-400 font-semibold mb-1">Apr 04, 2025</p>
                    <p className="text-sm text-gray-800 font-medium">Annual Vaccination</p>
                    <p className="text-sm text-gray-500 mt-1">Administered rabies and DHPP.</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "feeding" && (
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Daily Schedule</h4>
                <div className="bg-orange-50/50 rounded-lg p-4 border border-orange-100">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-gray-800">Morning Feed</span>
                    <span className="text-xs font-bold text-orange-600 bg-orange-100 px-2 py-1 rounded">08:00 AM</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    {selectedAnimal.type === "Predator" ? "7kg Raw Meat (Beef/Chicken)" : 
                     selectedAnimal.type === "Prey" ? "15kg Fresh Hay & Vegetables" : "Mixed species-specific diet"}
                  </p>
                </div>
                {selectedAnimal.type === "Predator" && (
                  <div className="bg-orange-50/50 rounded-lg p-4 border border-orange-100">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-gray-800">Evening Feed</span>
                      <span className="text-xs font-bold text-orange-600 bg-orange-100 px-2 py-1 rounded">05:00 PM</span>
                    </div>
                    <p className="text-sm text-gray-600">3kg Supplemental Protein</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
