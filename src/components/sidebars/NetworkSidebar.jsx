import { useState } from "react";
import { useSidebar } from "../SidebarContext";
import {
  LayoutDashboard,
  Database,
  Bell,
  Activity,
  ArrowLeft,
  Library,
  Settings,
  Map,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

export default function NetworkSidebar() {
  const { setAppSection, networkView, setNetworkView } = useSidebar();

  // Track open/closed sections
  const [open, setOpen] = useState({});

  const toggle = (id) => {
    setOpen((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const Section = ({ id, icon: Icon, label, children }) => {
    const isOpen = !!open[id];

    return (
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setNetworkView(id)}
            className={`flex items-center gap-2 w-full p-2 rounded ${
              networkView === id
                ? "bg-indigo-600 text-white"
                : "hover:bg-slate-800"
            }`}
          >
            <Icon size={18} />
            {label}
          </button>

          <button
            onClick={() => toggle(id)}
            className="p-1 rounded hover:bg-slate-800"
          >
            {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </button>
        </div>

        {isOpen && (
          <div className="ml-6 space-y-1 text-sm text-slate-400">
            {children || (
              <div className="italic text-slate-500">No subpages yet</div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 text-white p-4 space-y-4">
      <button
        onClick={() => setAppSection("main")}
        className="flex items-center gap-2 w-full p-2 rounded hover:bg-slate-800 text-slate-300"
      >
        <ArrowLeft size={18} /> Back to Main
      </button>

      <div className="mt-10 space-y-4">
        <Section id="dashboard" icon={LayoutDashboard} label="Dashboard" />
        <Section id="inventory" icon={Database} label="Inventory" />
        <Section id="docs" icon={Library} label="Documentation" />
        <Section id="map" icon={Map} label="Topology" />
        <Section id="alerts" icon={Bell} label="Alerts" />
        <Section id="traffic" icon={Activity} label="Traffic" />
        <Section id="settings" icon={Settings} label="Settings" />
      </div>
    </aside>
  );
}