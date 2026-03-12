import  { useSidebar } from "../SidebarContext";
import { Server, Home, Users, TrendingUp, BarChart3, UserLock, Building2 } from "lucide-react";

export default function Sidebar({ user }) {
  const { setAppSection } = useSidebar();

  const enterpriseName =
  user?.enterprise?.name || "My Enterprise";



  return (
    <aside className="w-64 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 p-4 space-y-8">

      {/* 🔷 Enterprise Header */}
      <div className="flex items-center gap-2 px-2 py-3 border-slate-200 dark:border-slate-800">
        <div className="h-8 w-8 flex items-center justify-center rounded bg-indigo-600 text-white">
          <Building2 size={18} />
        </div>
        <div className="text-sm font-semibold truncate">
          {enterpriseName}
        </div>
      </div>

      
      <button
  onClick={() => setAppSection("main")}
  className="flex items-center gap-2 w-full p-2 rounded hover:bg-slate-800"
>
  <Home size={18} /> Home
</button>

      <button
        onClick={() => setAppSection("account")} 
        className="flex items-center gap-2 w-full p-2 rounded hover:bg-slate-800">
        <UserLock size={18} /> Account
      </button>

      <button
        onClick={() => setAppSection("crm")}
        className="flex items-center gap-2 w-full p-2 rounded hover:bg-slate-800"
      >
        <Users size={18} /> CRM
      </button>

      <button
        onClick={() => setAppSection("market")}
        className="flex items-center gap-2 w-full p-2 rounded hover:bg-slate-800"
      >
        <TrendingUp  size={18} /> Marketing
      </button>

      <button
        onClick={() => setAppSection("network")}
        className="flex items-center gap-2 w-full p-2 rounded hover:bg-slate-800"
      >
        <Server size={18} /> Networks
      </button>

      <button 
        onClick={() => setAppSection("analytics")} 
        className="flex items-center gap-2 w-full p-2 rounded hover:bg-slate-800">
        <BarChart3 size={18} /> Analytics
      </button>
    </aside>
  );
}
