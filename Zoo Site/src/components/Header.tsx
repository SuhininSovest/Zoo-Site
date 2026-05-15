"use client";

import { Search, Bell, Menu, UserCircle } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-6 shadow-sm z-10 shrink-0">
      <div className="flex items-center md:hidden">
        <button className="text-gray-500 hover:text-zoo-primary transition-colors">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <div className="hidden md:flex flex-1 items-center max-w-md">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-full leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-zoo-primary focus:border-transparent transition-all sm:text-sm"
            placeholder="Search animals, tasks..."
          />
        </div>
      </div>

      <div className="flex items-center space-x-6 ml-auto">
        <button className="relative text-gray-500 hover:text-zoo-primary transition-colors">
          <Bell className="w-6 h-6" />
          <span className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full bg-zoo-danger ring-2 ring-white"></span>
        </button>
        
        <Link href="/profile" className="flex items-center cursor-pointer group">
          <div className="mr-3 text-right hidden sm:block">
            <div className="text-sm font-semibold text-gray-800 group-hover:text-zoo-primary transition-colors">Admin User</div>
            <div className="text-xs text-gray-500">Administrator</div>
          </div>
          <UserCircle className="w-10 h-10 text-gray-300 group-hover:text-zoo-secondary transition-colors" />
        </Link>
      </div>
    </header>
  );
}
