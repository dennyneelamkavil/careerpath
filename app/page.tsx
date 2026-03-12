import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { 
  Rocket, Brain, UserSearch, FileText, Target, 
  FileEdit, BarChart, Lightbulb, ChevronRight, 
  Terminal, HeartPulse, Wrench, CircleDollarSign, 
  Palette, Landmark, Star 
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <header className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight text-slate-900 dark:text-white mb-6">
                Discover the Right Career Path for Your Future
              </h1>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0">
                AI-powered career assessment helping you find the perfect career match based on your skills, personality, and interests.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Link href="/assessment" className="px-8 py-4 bg-primary text-white font-bold rounded-xl text-lg shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform text-center">
                  Take Free Assessment
                </Link>
                <Link href="/dashboard" className="px-8 py-4 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white font-bold rounded-xl text-lg hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors text-center">
                  Explore Careers
                </Link>
              </div>
            </div>
            <div className="flex-1 w-full max-w-[600px]">
              <div className="relative rounded-2xl overflow-hidden aspect-video bg-gradient-to-br from-primary/10 to-purple-500/10 border border-slate-200 dark:border-slate-800 flex items-center justify-center shadow-2xl">
                <Rocket className="w-32 h-32 text-primary/40" />
                <div className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-30" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80')" }}></div>
              </div>
            </div>
          </div>
        </header>

        {/* Features Section */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Our Features</h2>
              <p className="text-slate-600 dark:text-slate-400">Comprehensive tools to guide your professional journey.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                  <Brain className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Career Aptitude Tests</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Science-backed tests to find your professional strengths and natural abilities.</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                  <UserSearch className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Skill & Personality Analysis</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Deep dive into your traits, soft skills, and work-style preferences.</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Personalized Career Reports</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Detailed insights and actionable roadmaps tailored specifically for your profile.</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Career Recommendations</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">AI-driven matches for your unique profile based on market trends.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-16 text-center lg:text-left">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-800 -translate-y-12"></div>
              <div className="relative flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-6 relative z-10 shadow-lg shadow-primary/30">
                  <FileEdit className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold mb-2">Take Assessment</h4>
                <p className="text-slate-600 dark:text-slate-400">Complete our AI-driven questionnaire designed by psychologists.</p>
              </div>
              <div className="relative flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-6 relative z-10 shadow-lg shadow-primary/30">
                  <BarChart className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold mb-2">Analyze Skills</h4>
                <p className="text-slate-600 dark:text-slate-400">We evaluate your strengths, interests, and potential growth areas.</p>
              </div>
              <div className="relative flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-6 relative z-10 shadow-lg shadow-primary/30">
                  <Lightbulb className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold mb-2">Get Recommendations</h4>
                <p className="text-slate-600 dark:text-slate-400">Receive your personalized career path with learning steps.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Career Categories */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Explore Career Categories</h2>
                <p className="text-slate-600 dark:text-slate-400">Find opportunities in the most in-demand industries.</p>
              </div>
              <a className="text-primary font-bold flex items-center gap-1 hover:underline" href="#">View All Categories <ChevronRight className="w-5 h-5" /></a>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="group relative bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-primary transition-all overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-[0.03] transition-opacity"></div>
                <Terminal className="w-10 h-10 text-primary mb-4 block" />
                <h3 className="text-xl font-bold mb-2">Technology</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Software, AI, Cyber, Cloud</p>
              </div>
              <div className="group relative bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-primary transition-all overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-[0.03] transition-opacity"></div>
                <HeartPulse className="w-10 h-10 text-primary mb-4 block" />
                <h3 className="text-xl font-bold mb-2">Medicine</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Healthcare, Biotech, Nursing</p>
              </div>
              <div className="group relative bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-primary transition-all overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-[0.03] transition-opacity"></div>
                <Wrench className="w-10 h-10 text-primary mb-4 block" />
                <h3 className="text-xl font-bold mb-2">Engineering</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Civil, Mechanical, Robotics</p>
              </div>
              <div className="group relative bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-primary transition-all overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-[0.03] transition-opacity"></div>
                <CircleDollarSign className="w-10 h-10 text-primary mb-4 block" />
                <h3 className="text-xl font-bold mb-2">Business</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Finance, Marketing, HR</p>
              </div>
              <div className="group relative bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-primary transition-all overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-[0.03] transition-opacity"></div>
                <Palette className="w-10 h-10 text-primary mb-4 block" />
                <h3 className="text-xl font-bold mb-2">Creative Arts</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Design, Music, Content</p>
              </div>
              <div className="group relative bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-primary transition-all overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-[0.03] transition-opacity"></div>
                <Landmark className="w-10 h-10 text-primary mb-4 block" />
                <h3 className="text-xl font-bold mb-2">Government</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Policy, Public Service, Law</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-16">What Our Students Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <div className="flex gap-1 text-orange-400 mb-4">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <p className="text-slate-600 dark:text-slate-300 italic mb-8 leading-relaxed">
                  &quot;The AI assessment was scarily accurate. It helped me switch from Business to UX Design, and I&apos;ve never been happier!&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200 relative">
                    <Image alt="Sarah Johnson" fill className="object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 dark:text-white">Sarah Johnson</h5>
                    <p className="text-sm text-slate-500">Design Student</p>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <div className="flex gap-1 text-orange-400 mb-4">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <p className="text-slate-600 dark:text-slate-300 italic mb-8 leading-relaxed">
                  &quot;The personalized report gave me a clear roadmap for the skills I needed to learn. It removed all the confusion about my future.&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200 relative">
                    <Image alt="David Chen" fill className="object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 dark:text-white">David Chen</h5>
                    <p className="text-sm text-slate-500">Engineering Grad</p>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <div className="flex gap-1 text-orange-400 mb-4">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <p className="text-slate-600 dark:text-slate-300 italic mb-8 leading-relaxed">
                  &quot;Highly recommend for anyone feeling stuck in their current path. The insights into personality traits were eye-opening.&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200 relative">
                    <Image alt="Elena Rodriguez" fill className="object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 dark:text-white">Elena Rodriguez</h5>
                    <p className="text-sm text-slate-500">Marketing Professional</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto rounded-3xl bg-primary px-8 py-16 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black mb-6">Start Discovering Your Ideal Career Today</h2>
              <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto leading-relaxed">Join over 50,000 students who have found their professional purpose through CareerGuide.</p>
              <Link href="/assessment" className="inline-block px-10 py-4 bg-white text-primary font-bold rounded-xl text-xl hover:bg-slate-100 transition-colors shadow-lg">
                Start Assessment
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
