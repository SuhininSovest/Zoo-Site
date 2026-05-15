import { UserCircle, Construction } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-10rem)] bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
      <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mb-6 shadow-inner">
        <UserCircle className="w-20 h-20 text-gray-400" />
      </div>
      <h1 className="text-3xl font-bold text-gray-800 mb-1">Admin User</h1>
      <p className="text-zoo-primary font-medium mb-6">Administrator</p>
      
      <div className="w-full max-w-md bg-gray-50 rounded-xl p-6 border border-gray-100 mb-8 text-left space-y-4">
        <div>
          <p className="text-sm text-gray-500 font-medium">Email Address</p>
          <p className="text-gray-800">admin@zoomanager.app</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 font-medium">Department</p>
          <p className="text-gray-800">IT & Operations</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 font-medium">Joined Date</p>
          <p className="text-gray-800">March 15, 2026</p>
        </div>
      </div>

      <div className="flex items-center gap-2 text-sm font-medium text-amber-600 bg-amber-50 px-4 py-2 rounded-full border border-amber-100">
        <Construction className="w-4 h-4" /> Profile editing coming soon
      </div>
    </div>
  );
}
