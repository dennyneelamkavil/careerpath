import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  LayoutDashboard,
  HelpCircle,
  Route,
  Library,
  LineChart,
  Settings,
  Search,
  Bell,
  ChevronRight,
  Code,
  Palette,
  Brain,
  Download,
  RotateCcw,
  LayoutTemplate,
  CheckCircle2,
} from "lucide-react";

export default function AssessmentResult() {
  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hidden lg:flex flex-col">
        <div className="p-6 flex items-center gap-3">
          <div className="text-indigo-600 dark:text-indigo-400">
            {/* Custom Icon matching the "Indigo Scholar" style */}
            <div className="flex flex-col gap-0.5">
              <span className="text-xl font-bold leading-none tracking-tight">
                CareerPath
              </span>
              <span className="text-[0.65rem] font-medium text-slate-400 uppercase tracking-widest">
                Academic Architect
              </span>
            </div>
          </div>
        </div>
        <nav className="flex-1 px-4 space-y-1 mt-4">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors font-medium"
          >
            <LayoutDashboard className="w-5 h-5" />
            <span>Dashboard</span>
          </Link>
          <Link
            href="/dashboard/results"
            className="flex items-center gap-3 px-3 py-2 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-lg font-medium"
          >
            <HelpCircle className="w-5 h-5 fill-indigo-100 dark:fill-indigo-900" />
            <span>Assessments</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors font-medium"
          >
            <Route className="w-5 h-5" />
            <span>Career Path</span>
          </Link>
          <Link
            href="/resources"
            className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors font-medium"
          >
            <Library className="w-5 h-5" />
            <span>Resources</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors font-medium"
          >
            <LineChart className="w-5 h-5" />
            <span>Skill Analysis</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors font-medium"
          >
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </Link>
        </nav>

        {/* Next Step Card */}
        <div className="p-4 mt-auto">
          <div className="p-4 bg-indigo-600 rounded-xl text-white shadow-lg shadow-indigo-600/20">
            <p className="text-xs font-medium text-indigo-200 mb-1">
              Next Step
            </p>
            <p className="text-sm font-bold mb-4">View Career Roadmap</p>
            <button className="w-full bg-white text-indigo-600 py-2 rounded-lg text-sm font-bold hover:bg-indigo-50 transition-colors">
              Go Now
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Bar */}
        <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-4 flex-1">
            <div className="hidden md:flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg px-3 py-2 w-full max-w-md">
              <Search className="text-slate-400 w-4 h-4" />
              <input
                className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-slate-400 ml-2 outline-none"
                placeholder="Search assessments or careers..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-indigo-500 rounded-full border-2 border-white dark:border-slate-900"></span>
            </button>
            <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full">
              <HelpCircle className="w-5 h-5" />
            </button>
            <div className="w-8 h-8 rounded-full bg-orange-100 relative overflow-hidden ml-2 border border-orange-200">
              <Image
                alt="User avatar"
                fill
                className="object-cover"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80"
              />
            </div>
          </div>
        </header>

        {/* Result Content */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-10 space-y-8 max-w-7xl mx-auto w-full">
          {/* Header Section */}
          <div>
            <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-4 font-medium">
              <Link
                href="/assessments"
                className="hover:text-indigo-600 transition-colors"
              >
                Assessments
              </Link>
              <ChevronRight className="w-4 h-4 mx-1" />
              <span className="text-indigo-600 dark:text-indigo-400">
                Results
              </span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
              <div className="max-w-2xl">
                <h1 className="text-3xl font-extrabold tracking-tight mb-2 text-slate-900 dark:text-white">
                  Your Career Assessment Result
                </h1>
                <p className="text-slate-500 dark:text-slate-400 text-lg">
                  Based on your responses, here are your personality strengths
                  and career matches designed to align with your natural
                  aptitudes.
                </p>
              </div>
              <div className="flex flex-col items-start lg:items-end gap-2">
                <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-widest rounded-full">
                  RIASEC Advanced Inventory
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Completed on October 24, 2023
                </span>
              </div>
            </div>
          </div>

          {/* Top Two Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Holland Code Card */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-center">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                Holland Code Summary
              </p>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-8">
                Your Holland <br /> Code:{" "}
                <span className="text-indigo-600">IAS</span>
              </h2>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3 bg-indigo-50 dark:bg-indigo-900/20 px-4 py-3 rounded-xl">
                  <span className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold">
                    I
                  </span>
                  <span className="font-bold text-indigo-900 dark:text-indigo-200">
                    Investigative
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-purple-50 dark:bg-purple-900/20 px-4 py-3 rounded-xl">
                  <span className="w-8 h-8 rounded-lg bg-purple-500 text-white flex items-center justify-center font-bold">
                    A
                  </span>
                  <span className="font-bold text-purple-900 dark:text-purple-200">
                    Artistic
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-cyan-50 dark:bg-cyan-900/20 px-4 py-3 rounded-xl">
                  <span className="w-8 h-8 rounded-lg bg-cyan-500 text-white flex items-center justify-center font-bold">
                    S
                  </span>
                  <span className="font-bold text-cyan-900 dark:text-cyan-200">
                    Social
                  </span>
                </div>
              </div>
            </div>

            {/* Radar Chart Card */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  RIASEC Score Profile
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                  <span className="text-xs font-bold text-slate-500 uppercase">
                    Primary Strength
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-8 flex-1">
                {/* SVG Radar Chart Representation */}
                <div className="w-48 h-48 relative flex-shrink-0">
                  <svg
                    viewBox="0 0 200 200"
                    className="w-full h-full transform -rotate-90"
                  >
                    {/* Background Hexagons */}
                    {[40, 60, 80].map((radius, i) => (
                      <polygon
                        key={i}
                        points="100,20 169.28,60 169.28,140 100,180 30.72,140 30.72,60"
                        fill="none"
                        stroke="#e2e8f0"
                        strokeWidth="1"
                        style={{
                          transform: `scale(${radius / 80})`,
                          transformOrigin: "center",
                        }}
                      />
                    ))}
                    {/* Axes lines */}
                    <line
                      x1="100"
                      y1="100"
                      x2="100"
                      y2="20"
                      stroke="#e2e8f0"
                      strokeWidth="1"
                    />
                    <line
                      x1="100"
                      y1="100"
                      x2="169.28"
                      y2="60"
                      stroke="#e2e8f0"
                      strokeWidth="1"
                    />
                    <line
                      x1="100"
                      y1="100"
                      x2="169.28"
                      y2="140"
                      stroke="#e2e8f0"
                      strokeWidth="1"
                    />
                    <line
                      x1="100"
                      y1="100"
                      x2="100"
                      y2="180"
                      stroke="#e2e8f0"
                      strokeWidth="1"
                    />
                    <line
                      x1="100"
                      y1="100"
                      x2="30.72"
                      y2="140"
                      stroke="#e2e8f0"
                      strokeWidth="1"
                    />
                    <line
                      x1="100"
                      y1="100"
                      x2="30.72"
                      y2="60"
                      stroke="#e2e8f0"
                      strokeWidth="1"
                    />

                    {/* Data Polygon */}
                    <polygon
                      points="100,30 155,60 145,140 100,165 40,140 65,60"
                      fill="rgba(79, 70, 229, 0.1)"
                      stroke="#4f46e5"
                      strokeWidth="3"
                      strokeLinejoin="round"
                    />
                    {/* Data Points */}
                    <circle cx="100" cy="30" r="4" fill="#4f46e5" />
                    <circle cx="155" cy="60" r="4" fill="#4f46e5" />
                    <circle cx="145" cy="140" r="4" fill="#4f46e5" />
                    <circle cx="100" cy="165" r="4" fill="#4f46e5" />
                    <circle cx="40" cy="140" r="4" fill="#4f46e5" />
                    <circle cx="65" cy="60" r="4" fill="#4f46e5" />
                  </svg>
                  {/* Fake Labels for radar chart to match image layout */}
                  <span className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-400">
                    I: 18
                  </span>
                  <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-400">
                    E: 7
                  </span>
                  <span className="absolute top-1/4 right-0 text-[10px] font-bold text-slate-400">
                    A: 15
                  </span>
                  <span className="absolute top-1/4 left-0 text-[10px] font-bold text-slate-400">
                    R: 6
                  </span>
                </div>

                {/* Score Bars */}
                <div className="flex-1 w-full space-y-4">
                  {[
                    {
                      label: "Investigative",
                      score: 18,
                      max: 20,
                      color: "bg-indigo-500",
                    },
                    {
                      label: "Artistic",
                      score: 15,
                      max: 20,
                      color: "bg-purple-500",
                    },
                    {
                      label: "Social",
                      score: 14,
                      max: 20,
                      color: "bg-cyan-500",
                    },
                    {
                      label: "Enterprising",
                      score: 7,
                      max: 20,
                      color: "bg-slate-300",
                    },
                    {
                      label: "Realistic",
                      score: 6,
                      max: 20,
                      color: "bg-slate-300",
                    },
                    {
                      label: "Conventional",
                      score: 5,
                      max: 20,
                      color: "bg-slate-300",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="w-full">
                      <div className="flex justify-between text-xs font-bold mb-1">
                        <span className="text-slate-700 dark:text-slate-300">
                          {item.label}
                        </span>
                        <span className="text-slate-400">
                          {item.score}/{item.max}
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${item.color} rounded-full`}
                          style={{ width: `${(item.score / item.max) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Personality Type Split Card */}
          <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800">
            {/* Left Dark Side */}
            <div className="bg-[#0f172a] text-white p-8 md:p-12 md:w-1/3 flex flex-col justify-center">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6">
                <Brain className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Your Personality Type</h3>
              <p className="text-slate-400 font-medium text-lg">
                The Intuitive Architect
              </p>
            </div>
            {/* Right Light Side */}
            <div className="bg-white dark:bg-slate-900 p-8 md:p-12 md:w-2/3 flex flex-col justify-center">
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed italic mb-8">
                &quot;You possess a unique blend of analytical rigor and
                creative expression. Your high Investigative score suggests a
                deep-seated need to understand how systems work, while your
                Artistic affinity drives you to find elegant, human-centric
                solutions. You aren&apos;t just a problem-solver; you are a
                conceptual builder who values social impact and intellectual
                discovery.&quot;
              </p>
              <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 pt-6 border-t border-slate-100 dark:border-slate-800">
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                    Core Strength
                  </p>
                  <p className="font-bold text-slate-900 dark:text-white">
                    Abstract Reasoning
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                    Key Motivator
                  </p>
                  <p className="font-bold text-slate-900 dark:text-white">
                    Meaningful Innovation
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Career Recommendations */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Career Recommendations
              </h3>
              <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-bold rounded-full">
                Top 4 Matches
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {/* Card 1 */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col hover:border-indigo-300 transition-colors">
                <div className="p-6 flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center text-indigo-600">
                      <LayoutTemplate className="w-5 h-5" />
                    </div>
                    <div className="text-right">
                      <span className="text-xl font-bold text-indigo-600">
                        96%
                      </span>
                      <p className="text-[10px] font-bold text-slate-400 uppercase">
                        Match
                      </p>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold mb-2">Software Developer</h4>
                  <p className="text-sm text-slate-500 mb-6">
                    Create complex systems and applications that solve
                    real-world problems.
                  </p>
                  <div className="flex gap-2">
                    <span className="w-6 h-6 flex items-center justify-center rounded bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-600">
                      I
                    </span>
                    <span className="w-6 h-6 flex items-center justify-center rounded bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-600">
                      A
                    </span>
                  </div>
                </div>
                <div className="border-t border-slate-100 dark:border-slate-800 p-4">
                  <button className="w-full text-center text-sm font-bold text-indigo-600 hover:text-indigo-700">
                    Explore Career
                  </button>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col hover:border-purple-300 transition-colors">
                <div className="p-6 flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-600">
                      <Palette className="w-5 h-5" />
                    </div>
                    <div className="text-right">
                      <span className="text-xl font-bold text-purple-600">
                        94%
                      </span>
                      <p className="text-[10px] font-bold text-slate-400 uppercase">
                        Match
                      </p>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold mb-2">UX Designer</h4>
                  <p className="text-sm text-slate-500 mb-6">
                    Bridge the gap between technology and human psychology
                    through design.
                  </p>
                  <div className="flex gap-2">
                    <span className="w-6 h-6 flex items-center justify-center rounded bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-600">
                      A
                    </span>
                    <span className="w-6 h-6 flex items-center justify-center rounded bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-600">
                      S
                    </span>
                  </div>
                </div>
                <div className="border-t border-slate-100 dark:border-slate-800 p-4">
                  <button className="w-full text-center text-sm font-bold text-purple-600 hover:text-purple-700">
                    Explore Career
                  </button>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col hover:border-cyan-300 transition-colors">
                <div className="p-6 flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-900/20 flex items-center justify-center text-cyan-600">
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    <div className="text-right">
                      <span className="text-xl font-bold text-cyan-600">
                        92%
                      </span>
                      <p className="text-[10px] font-bold text-slate-400 uppercase">
                        Match
                      </p>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold mb-2">Psychologist</h4>
                  <p className="text-sm text-slate-500 mb-6">
                    Analyze human behavior and mental processes to provide
                    insights and care.
                  </p>
                  <div className="flex gap-2">
                    <span className="w-6 h-6 flex items-center justify-center rounded bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-600">
                      I
                    </span>
                    <span className="w-6 h-6 flex items-center justify-center rounded bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-600">
                      S
                    </span>
                  </div>
                </div>
                <div className="border-t border-slate-100 dark:border-slate-800 p-4">
                  <button className="w-full text-center text-sm font-bold text-cyan-600 hover:text-cyan-700">
                    Explore Career
                  </button>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col hover:border-blue-300 transition-colors">
                <div className="p-6 flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600">
                      <LineChart className="w-5 h-5" />
                    </div>
                    <div className="text-right">
                      <span className="text-xl font-bold text-blue-600">
                        91%
                      </span>
                      <p className="text-[10px] font-bold text-slate-400 uppercase">
                        Match
                      </p>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold mb-2">Data Analyst</h4>
                  <p className="text-sm text-slate-500 mb-6">
                    Inspect, cleanse, and model data to discover useful
                    information and metrics.
                  </p>
                  <div className="flex gap-2">
                    <span className="w-6 h-6 flex items-center justify-center rounded bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-600">
                      I
                    </span>
                    <span className="w-6 h-6 flex items-center justify-center rounded bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-600">
                      S
                    </span>
                  </div>
                </div>
                <div className="border-t border-slate-100 dark:border-slate-800 p-4">
                  <button className="w-full text-center text-sm font-bold text-blue-600 hover:text-blue-700">
                    Explore Career
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Action Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 pb-12">
            <button className="w-full sm:w-auto px-6 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <RotateCcw className="w-4 h-4" />
              Retake Assessment
            </button>
            <button className="w-full sm:w-auto px-8 py-3 bg-indigo-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-indigo-700 shadow-lg shadow-indigo-600/20 transition-all">
              Explore More Careers
            </button>
            <button className="w-full sm:w-auto px-6 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <Download className="w-4 h-4" />
              Download Report
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
