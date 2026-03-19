import Link from "next/link";
import {
  Sparkles,
  LayoutDashboard,
  HelpCircle,
  Route,
  Library,
  LineChart,
  Settings,
} from "lucide-react";

export default function DashboardSidebar() {
  return (
    <aside className="w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hidden lg:flex flex-col">
      <div className="p-6 flex items-center gap-3">
        <div className="bg-primary rounded-lg p-2 text-white">
          <Sparkles className="w-5 h-5" />
        </div>
        <div>
          <h1 className="text-lg font-bold tracking-tight">CareerPath AI</h1>
          <p className="text-xs text-slate-500">Student Portal</p>
        </div>
      </div>
      <nav className="flex-1 px-4 space-y-1">
        <Link
          href="/dashboard"
          className="flex items-center gap-3 px-3 py-2 bg-primary/10 text-primary rounded-lg font-medium"
        >
          <LayoutDashboard className="w-5 h-5" />
          <span>Dashboard</span>
        </Link>
        <Link
          href="/dashboard/assessments/results/69bb9907b04adf595bb77105"
          className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
        >
          <HelpCircle className="w-5 h-5" />
          <span>Assessments</span>
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
        >
          <Route className="w-5 h-5" />
          <span>Career Path</span>
        </Link>
        <Link
          href="/design"
          className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
        >
          <Library className="w-5 h-5" />
          <span>Resources</span>
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
        >
          <LineChart className="w-5 h-5" />
          <span>Skill Analysis</span>
        </Link>
      </nav>
      <div className="p-4 mt-auto">
        <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            Pro Plan
          </p>
          <p className="text-sm mb-3">Unlock advanced AI recommendations</p>
          <button className="w-full bg-primary text-white py-2 rounded-lg text-sm font-medium hover:bg-primary/90">
            Upgrade Now
          </button>
        </div>
      </div>
      <div className="p-4 border-t border-slate-200 dark:border-slate-800">
        <Link
          href="#"
          className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
        >
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </Link>
      </div>
    </aside>
  );
}
