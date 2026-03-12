import Link from 'next/link';
import { LineChart, LogOut, User, Brain, Palette, Users, Wrench, CheckCircle2, ArrowLeft, ArrowRight } from 'lucide-react';

export default function Assessment() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display flex flex-col">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                <LineChart className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">CareerGuide</span>
            </Link>
            
            <div className="hidden md:flex flex-col items-center gap-1 flex-1 max-w-md px-8">
              <div className="flex justify-between w-full text-xs font-medium text-slate-500 uppercase tracking-wider">
                <span>Progress</span>
                <span>Question 5 of 30</span>
              </div>
              <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[16.6%] transition-all duration-500"></div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                <LogOut className="w-4 h-4" />
                <span>Exit Test</span>
              </Link>
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                <User className="w-4 h-4 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar: Question Navigator */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 sticky top-24">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-widest">Question Navigator</h3>
              <div className="grid grid-cols-5 gap-2">
                {[1, 2, 3, 4].map(num => (
                  <button key={num} className="w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center text-sm font-bold">{num}</button>
                ))}
                <button className="w-10 h-10 rounded-lg border-2 border-primary text-primary flex items-center justify-center text-sm font-bold">5</button>
                {[6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(num => (
                  <button key={num} className="w-10 h-10 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-400 dark:text-slate-500 flex items-center justify-center text-sm">{num}</button>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <span className="text-xs text-slate-500">Answered</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full border border-slate-300 dark:border-slate-600"></div>
                  <span className="text-xs text-slate-500">Unanswered</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Question Area */}
          <div className="lg:col-span-9 flex flex-col gap-8">
            <div className="text-center lg:text-left space-y-2">
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Career Aptitude Assessment</h1>
              <p className="text-slate-500 dark:text-slate-400 text-lg">Answer honestly based on your true preferences, not what others expect of you.</p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <div className="p-8">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">Question 5 of 30</span>
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-8">Which activity do you enjoy the most?</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button className="group relative flex flex-col p-6 rounded-xl border-2 border-slate-100 dark:border-slate-800 hover:border-primary/50 text-left transition-all bg-slate-50/50 dark:bg-slate-800/50">
                    <div className="w-full aspect-[4/3] rounded-lg mb-4 overflow-hidden bg-slate-200 dark:bg-slate-700">
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-500 to-primary/40">
                        <Brain className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-primary transition-colors">Solving problems</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Analytical, logic, and puzzles appeal to your curiosity.</p>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    </div>
                  </button>

                  <button className="group relative flex flex-col p-6 rounded-xl border-2 border-slate-100 dark:border-slate-800 hover:border-primary/50 text-left transition-all bg-slate-50/50 dark:bg-slate-800/50">
                    <div className="w-full aspect-[4/3] rounded-lg mb-4 overflow-hidden bg-slate-200 dark:bg-slate-700">
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-pink-500 to-purple-500 opacity-80">
                        <Palette className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-primary transition-colors">Designing visuals</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Creative expression and visual aesthetics are your forte.</p>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    </div>
                  </button>

                  <button className="group relative flex flex-col p-6 rounded-xl border-2 border-slate-100 dark:border-slate-800 hover:border-primary/50 text-left transition-all bg-slate-50/50 dark:bg-slate-800/50">
                    <div className="w-full aspect-[4/3] rounded-lg mb-4 overflow-hidden bg-slate-200 dark:bg-slate-700">
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-500 opacity-80">
                        <Users className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-primary transition-colors">Helping people</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Social interaction and making a positive impact on others.</p>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    </div>
                  </button>

                  <button className="group relative flex flex-col p-6 rounded-xl border-2 border-slate-100 dark:border-slate-800 hover:border-primary/50 text-left transition-all bg-slate-50/50 dark:bg-slate-800/50">
                    <div className="w-full aspect-[4/3] rounded-lg mb-4 overflow-hidden bg-slate-200 dark:bg-slate-700">
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-500 to-orange-500 opacity-80">
                        <Wrench className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-primary transition-colors">Building/repairing</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Working with tools, mechanics, or physical objects.</p>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    </div>
                  </button>
                </div>
              </div>
              
              <div className="bg-slate-50 dark:bg-slate-800/40 px-8 py-6 flex justify-between items-center border-t border-slate-100 dark:border-slate-800">
                <button className="flex items-center gap-2 px-6 py-3 font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                  <ArrowLeft className="w-5 h-5" />
                  <span>Previous Question</span>
                </button>
                <Link href="/dashboard" className="flex items-center gap-2 px-8 py-3 bg-primary text-white font-bold rounded-lg shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
                  <span>Next Question</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
