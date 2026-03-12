import { useState } from "react";
import {
  LayoutDashboard,
  DatabaseBackup,
  Bell,
  Activity,
  Settings,
  ChevronDown,
  ChevronRight,
  ShoppingCart,
  Laptop2,
  BotIcon,
  ScreenShareIcon,
} from "lucide-react";
import { useSidebar } from "../SidebarContext";

export default function MarketingSidebar() {
  const { setAppSection, setMarketingView, marketingView } = useSidebar();

  // Track open/closed sections
  const [open, setOpen] = useState({});

  const toggle = (id) => {
    setOpen((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const Section = ({ id, icon: Icon, label, children }) => {
    const isOpen = !!open[id];

    return (
      <div className="space-y-1  text-slate-900 dark:text-white">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setMarketingView(id)}
            className={`flex items-center gap-2 w-full p-2 rounded ${
              marketingView === id
                ? "text-slate-900 dark:text-white"
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
    <aside className="w-64 bg-white dark:bg-gray-800 text-white p-0 space-y-6">
      {/* Back to main */}
      <button
        onClick={() => setAppSection("main")}
        className="text-sm text-slate-400 hover:text-white"
      >
        ← Back to Main
      </button>

      <div className="mt-8 space-y-8">
        <Section id="stream" icon={LayoutDashboard} label="Stream" />
        <Section id="marketingai" icon={BotIcon} label="Marketing AI" />
        <Section id="campaign" icon={ScreenShareIcon} label="Campaign">
  <button onClick={() => setMarketingView("campaign.overview")}>Overview</button>
  <button onClick={() => setMarketingView("campaign.automation")}>Automation</button>
  <button onClick={() => setMarketingView("campaign.analytics")}>Analytics</button>
  <button onClick={() => setMarketingView("campaign.scheduler")}>Schedule</button>
</Section>
        <Section id="e.m.m.a" icon={Laptop2} label="E.M.M.A" />
        <Section id="b2b" icon={Bell} label="B2B Marketing" />
        <Section id="personalization" icon={Activity} label="Personalization" />
        <Section id="team" icon={Settings} label="Team" />
        <Section id="cdp" icon={DatabaseBackup} label="Customer Data Platform" />
        <Section id="commercecommand" icon={ShoppingCart} label="Commerce Command" />
        <Section id="marketingAnalytics" icon={Activity} label="Marketing Analytics" />
      </div>
    </aside>
  );
}