import { Users, Construction } from "lucide-react";

export default function PersonnelPage() {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-10rem)] bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
      <div className="w-20 h-20 bg-zoo-light rounded-full flex items-center justify-center mb-6">
        <Users className="w-10 h-10 text-zoo-primary" />
      </div>
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Personnel Management</h1>
      <p className="text-gray-500 max-w-md mb-8">
        This module is currently under active development. You'll soon be able to manage staff schedules, roles, and contacts here.
      </p>
      <div className="flex items-center gap-2 text-sm font-medium text-amber-600 bg-amber-50 px-4 py-2 rounded-full border border-amber-100">
        <Construction className="w-4 h-4" /> Coming soon in next update
      </div>
    </div>
  );
}
