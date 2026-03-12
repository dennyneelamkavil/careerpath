import Link from 'next/link';
import { Users, Share2, Rss } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Users className="text-primary w-8 h-8" />
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">CareerGuide</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
              Empowering the next generation of professionals through science-backed AI career discovery.
            </p>
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-primary hover:bg-primary/10 transition-all" href="#">
                <Share2 className="w-5 h-5" />
              </a>
              <a className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-primary hover:bg-primary/10 transition-all" href="#">
                <Rss className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h6 className="font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-wider text-xs">Platform</h6>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
              <li><Link className="hover:text-primary transition-colors" href="/assessment">Career Test</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="#">Skill Library</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="#">Career Maps</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/dashboard">Student Dashboard</Link></li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-wider text-xs">Company</h6>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
              <li><a className="hover:text-primary transition-colors" href="#">About Us</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Our Team</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Careers</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Press Kit</a></li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-wider text-xs">Support</h6>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
              <li><a className="hover:text-primary transition-colors" href="#">Help Center</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Terms of Service</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
          <p>© 2024 CareerGuide Platform. All rights reserved.</p>
          <div className="flex gap-8">
            <span>English (US)</span>
            <span>System Status: Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
