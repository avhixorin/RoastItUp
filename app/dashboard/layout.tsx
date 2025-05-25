"use client";

import { useState } from "react";
import {
  Home,
  Sword,
  Trophy,
  User,
  Settings,
  LogOut,
  Bell,
  FlameIcon,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  
  console.log("Current Pathname:", pathname);
  const navigationItems = [
    { name: "Home", icon: Home, href: "home" },
    { name: "Battles", icon: Sword, href: "battles" },
    { name: "Leaderboard", icon: Trophy, href: "leaderboard" },
    { name: "Profile", icon: User, href: "profile" },
    { name: "Settings", icon: Settings, href: "settings" },
  ];

  return (
    <div className="flex h-screen bg-black text-white">
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 h-full w-64 transform border-r border-gray-800 bg-black/90 backdrop-blur-xl transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0`}
      >
        <div className="flex h-full flex-col">
          <div className="flex h-16 items-center justify-between border-b border-gray-800 px-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-600">
                <FlameIcon className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
                RoastItUp
              </span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <nav className="flex-1 space-y-2 p-4">
            {navigationItems.map((item) => {
              const isActive = pathname === ("/dashboard/" + item.href);
              console.log("Pathname Check:", pathname);
                console.log("Item Href Check:", item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                  group flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition-all duration-200
                  ${
                    isActive
                      ? "bg-gradient-to-r from-orange-500/20 to-red-600/20 text-orange-400 shadow-lg shadow-orange-600/10"
                      : "text-gray-400 hover:bg-gray-800/50 hover:text-white"
                  }
                `}
                >
                  <item.icon
                    className={`h-5 w-5 transition-colors ${isActive ? "text-orange-400" : "text-gray-500 group-hover:text-white"}`}
                  />
                  {item.name}
                  {isActive && (
                  <div className="ml-auto h-2 w-2 rounded-full bg-gradient-to-r from-orange-500 to-red-600"></div>
                )}
                </Link>
              );
            })}
          </nav>

          <div className="border-t border-gray-800 p-4">
            <button className="group flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-gray-400 transition-all duration-200 hover:bg-red-900/20 hover:text-red-400">
              <LogOut className="h-5 w-5 text-gray-500 group-hover:text-red-400" />
              Logout
            </button>
          </div>
        </div>
      </aside>

      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex h-16 items-center justify-between border-b border-gray-800 bg-black/80 px-4 backdrop-blur-sm md:px-6">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="relative text-gray-400 hover:text-white"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-xs font-bold text-white">
                3
              </span>
            </Button>

            <div className="flex items-center gap-3">
              <div className="hidden text-right md:block">
                <p className="text-sm font-medium text-white">RoastMaster</p>
                <p className="text-xs text-gray-400">Level 15</p>
              </div>
              <Avatar className="h-10 w-10 border-2 border-orange-500/20">
                <AvatarImage src="/placeholder.svg" alt="User" />
                <AvatarFallback className="bg-gradient-to-br from-orange-500 to-red-600 text-white font-bold">
                  RM
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-auto bg-gradient-to-br from-black to-gray-900 p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
