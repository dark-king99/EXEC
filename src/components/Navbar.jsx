import { useState } from "react";
import { Search, Moon, Sun } from "lucide-react";
import { useSidebar } from "./SidebarContext";

import {
  Home,
  Grid,
  Link as LinkIcon,
  CreditCard,
} from "lucide-react";

// Reusable NavItem
function NavItem({ icon: Icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 hover:text-indigo-600 transition"
    >
      <Icon size={18} />
      <span>{label}</span>
    </button>
  );
}

export default function Navbar({ user, onLogout, setActiveView }) {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useSidebar();

  return (
    <header className="h-14 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center px-12 shrink-0">
      {/* SEARCH */}
      <div className="relative">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />
        <input
          type="text"
          placeholder="Search…"
          className="pl-9 pr-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* LINKS */}
      <nav className="flex px-12 h-14 shrink-0 items-center border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        <NavItem icon={Home} label="Home" onClick={() => setActiveView("home")} />
        <NavItem icon={Grid} label="Services" onClick={() => setActiveView("crm")} />
        <NavItem icon={LinkIcon} label="Connect" onClick={() => setActiveView("network")} />
        <NavItem icon={CreditCard} label="Access" onClick={() => setActiveView("analytics")} />
        <button
  onClick={toggleTheme}
  className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-3 py-1 text-xs dark:border-slate-700"
>
  {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
  {theme === "dark" ? "Light" : "Dark"}
</button>
      </nav>

      {/* USER MENU */}
      <div className="relative ml-auto">
        <button
          onClick={() => setOpen(!open)}
          className="w-9 h-9 rounded-full bg-slate-800 text-white flex items-center justify-center text-sm font-semibold"
        >
          {user?.name?.[0] || "U"}
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-md shadow-lg text-sm z-50">
            <div className="px-4 py-3 border-b border-slate-200 dark:border-slate-800">
              <div className="font-medium">{user?.name || "User"}</div>
              <div className="text-xs text-slate-500">
                Role: {user?.role || "unknown"}
              </div>
            </div>

            <div className="py-1">
              <button className="w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800">
                Profile
              </button>
              <button
                onClick={onLogout}
                className="w-full text-left px-4 py-2 text-red-600 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}