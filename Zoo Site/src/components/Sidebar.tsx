"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Users, 
  PawPrint, 
  Stethoscope, 
  School, 
  Apple, 
  Wrench, 
  HeartHandshake
} from "lucide-react";

const NAV_ITEMS = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Personnel", href: "/personnel", icon: Users },
  { name: "Animals", href: "/animals", icon: PawPrint },
  { name: "Veterinary", href: "/veterinary", icon: Stethoscope },
  { name: "Enclosures", href: "/enclosures", icon: School },
  { name: "Feeding", href: "/feeding", icon: Apple },
  { name: "Maintenance", href: "/maintenance", icon: Wrench },
  { name: "Breeding", href: "/breeding", icon: HeartHandshake },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full md:w-64 bg-zoo-dark text-zoo-light flex flex-col min-h-screen md:min-h-0 md:h-screen transition-all shadow-xl">
      <div className="p-6 flex items-center justify-center border-b border-white/10">
        <PawPrint className="w-8 h-8 text-zoo-secondary mr-3" />
        <h1 className="text-xl font-bold tracking-tight">ZooManager</h1>
      </div>
      <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== "/");
          
          return (
            <Link 
              key={item.name} 
              href={item.href}
              className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 group
                ${isActive 
                  ? "bg-zoo-primary text-white shadow-md" 
                  : "hover:bg-white/10 text-white/70 hover:text-white"
                }`}
            >
              <Icon className={`w-5 h-5 mr-4 transition-transform group-hover:scale-110 ${isActive ? "text-zoo-accent" : ""}`} />
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t border-white/10 text-xs text-center text-white/40">
        &copy; 2026 Admin
      </div>
    </aside>
  );
}
