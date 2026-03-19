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
  ClipboardList,
  CheckCircle,
  Users,
  Zap,
  ArrowRight,
  Code,
  Activity,
  HeartPulse,
  Palette,
  Edit2,
  Brain,
  Terminal,
  ChevronRight,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
      {/* Sidebar */}
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
            href="/dashboard/results"
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

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Bar */}
        <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-bold">Welcome back, John 👋</h2>
            <div className="hidden md:flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg px-3 py-1.5 w-64">
              <Search className="text-slate-400 w-4 h-4" />
              <input
                className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-slate-400 ml-2 outline-none"
                placeholder="Search assessments..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-slate-200 dark:border-slate-800">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold">John Doe</p>
                <p className="text-xs text-slate-500">
                  Computer Science Student
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-200 relative overflow-hidden border-2 border-primary/20">
                <Image
                  alt="User avatar"
                  fill
                  className="object-cover"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {/* Overview Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                  <ClipboardList className="w-5 h-5" />
                </div>
              </div>
              <p className="text-sm text-slate-500 font-medium">
                Assessments Taken
              </p>
              <h3 className="text-2xl font-bold mt-1">12</h3>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-green-100 text-green-600 rounded-lg">
                  <CheckCircle className="w-5 h-5" />
                </div>
              </div>
              <p className="text-sm text-slate-500 font-medium">
                Completed Tests
              </p>
              <h3 className="text-2xl font-bold mt-1">8</h3>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
                  <Users className="w-5 h-5" />
                </div>
              </div>
              <p className="text-sm text-slate-500 font-medium">
                Career Matches
              </p>
              <h3 className="text-2xl font-bold mt-1">15</h3>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-orange-100 text-orange-600 rounded-lg">
                  <Zap className="w-5 h-5" />
                </div>
              </div>
              <p className="text-sm text-slate-500 font-medium">Skills Score</p>
              <h3 className="text-2xl font-bold mt-1">85%</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Left Column: Latest & Skills */}
            <div className="xl:col-span-2 space-y-8">
              {/* Latest Result */}
              <section>
                <h3 className="text-lg font-bold mb-4">Latest Result</h3>
                <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm flex flex-col md:flex-row">
                  <div className="md:w-1/3 bg-slate-100 dark:bg-slate-800 relative h-48 md:h-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/90 dark:bg-slate-900/90 p-4 rounded-full shadow-lg">
                        <span className="text-3xl font-bold text-primary">
                          92%
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 md:w-2/3 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-xl font-bold">
                          Career Aptitude Test
                        </h4>
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">
                          EXCELLENT
                        </span>
                      </div>
                      <p className="text-slate-500 text-sm mb-4">
                        Completed on Oct 24, 2023. This assessment evaluates
                        your logical reasoning, personality traits, and
                        technical inclinations.
                      </p>
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                          <p className="text-xs text-slate-400 uppercase">
                            Score
                          </p>
                          <p className="font-bold">92/100</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-400 uppercase">
                            Duration
                          </p>
                          <p className="font-bold">45 Mins</p>
                        </div>
                      </div>
                    </div>
                    <button className="w-full sm:w-auto px-6 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
                      View Detailed Report
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </section>

              {/* Career Recommendations */}
              <section>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold">
                    Recommended Career Paths
                  </h3>
                  <a
                    className="text-sm text-primary font-semibold hover:underline"
                    href="#"
                  >
                    View All
                  </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-primary/50 transition-all group">
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 rounded-lg">
                        <Code className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-bold text-primary">
                        98% Match
                      </span>
                    </div>
                    <h4 className="font-bold text-lg mb-1">
                      Software Developer
                    </h4>
                    <p className="text-sm text-slate-500 mb-4 line-clamp-2">
                      Design, build and maintain complex software systems using
                      modern frameworks.
                    </p>
                    <button className="w-full py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                      Explore Career
                    </button>
                  </div>
                  <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-primary/50 transition-all group">
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-lg">
                        <Activity className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-bold text-primary">
                        92% Match
                      </span>
                    </div>
                    <h4 className="font-bold text-lg mb-1">Data Analyst</h4>
                    <p className="text-sm text-slate-500 mb-4 line-clamp-2">
                      Analyze large datasets to help businesses make data-driven
                      decisions.
                    </p>
                    <button className="w-full py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                      Explore Career
                    </button>
                  </div>
                  <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-primary/50 transition-all group">
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2 bg-red-50 dark:bg-red-900/30 text-red-600 rounded-lg">
                        <HeartPulse className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-bold text-primary">
                        75% Match
                      </span>
                    </div>
                    <h4 className="font-bold text-lg mb-1">
                      Health Informatics
                    </h4>
                    <p className="text-sm text-slate-500 mb-4 line-clamp-2">
                      Bridge the gap between technology and patient care in
                      modern hospitals.
                    </p>
                    <button className="w-full py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                      Explore Career
                    </button>
                  </div>
                  <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-primary/50 transition-all group">
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2 bg-pink-50 dark:bg-pink-900/30 text-pink-600 rounded-lg">
                        <Palette className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-bold text-primary">
                        68% Match
                      </span>
                    </div>
                    <h4 className="font-bold text-lg mb-1">UX Designer</h4>
                    <p className="text-sm text-slate-500 mb-4 line-clamp-2">
                      Create user-centric interfaces and meaningful experiences
                      for digital products.
                    </p>
                    <button className="w-full py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                      Explore Career
                    </button>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column: Profile & Skills */}
            <div className="space-y-8">
              {/* Profile Summary */}
              <section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-lg font-bold">Profile Summary</h3>
                  <button className="text-primary hover:bg-primary/5 p-1 rounded">
                    <Edit2 className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-center mb-6">
                  <div className="relative inline-block">
                    <div className="w-20 h-20 rounded-full mx-auto mb-3 bg-slate-100 border-2 border-white dark:border-slate-800 shadow-md relative overflow-hidden">
                      <Image
                        alt="Profile picture"
                        fill
                        className="object-cover"
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <span className="absolute bottom-3 right-0 w-4 h-4 bg-green-500 border-2 border-white dark:border-slate-800 rounded-full"></span>
                  </div>
                  <h4 className="font-bold text-lg">John Doe</h4>
                  <p className="text-sm text-slate-500">john.doe@example.com</p>
                </div>
                <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-semibold">
                      Education
                    </p>
                    <p className="text-sm font-medium">
                      BS in Computer Science
                    </p>
                    <p className="text-xs text-slate-500">
                      Global Tech University (Year 3)
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-semibold">
                      Location
                    </p>
                    <p className="text-sm font-medium">San Francisco, CA</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-semibold">
                      Interests
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs">
                        AI/ML
                      </span>
                      <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs">
                        Sustainability
                      </span>
                      <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs">
                        Gaming
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Skills Analysis */}
              <section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
                <h3 className="text-lg font-bold mb-6">Skills Analysis</h3>
                <div className="space-y-5">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">Analytical</span>
                      <span className="text-slate-500">90%</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">Technical</span>
                      <span className="text-slate-500">85%</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">Communication</span>
                      <span className="text-slate-500">72%</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2">
                      <div
                        className="bg-secondary h-2 rounded-full"
                        style={{ width: "72%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">Creativity</span>
                      <span className="text-slate-500">65%</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2">
                      <div
                        className="bg-secondary h-2 rounded-full"
                        style={{ width: "65%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">Leadership</span>
                      <span className="text-slate-500">58%</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2">
                      <div
                        className="bg-slate-300 dark:bg-slate-600 h-2 rounded-full"
                        style={{ width: "58%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Upcoming Assessments */}
              <section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
                <h3 className="text-lg font-bold mb-4">Upcoming Assessments</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                    <div className="bg-primary/10 text-primary p-2 rounded">
                      <Brain className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold truncate">
                        Soft Skills Evaluation
                      </p>
                      <p className="text-xs text-slate-500">Due in 2 days</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                    <div className="bg-primary/10 text-primary p-2 rounded">
                      <Terminal className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold truncate">
                        Python Proficiency
                      </p>
                      <p className="text-xs text-slate-500">Due in 5 days</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </div>
                  <button className="w-full py-2.5 bg-primary/10 text-primary rounded-lg text-sm font-bold hover:bg-primary/20 transition-all">
                    Take New Assessment
                  </button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
