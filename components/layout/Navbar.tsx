import Link from "next/link";
import { Users } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex items-center gap-2">
            <Users className="text-primary w-8 h-8" />
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              CareerPath
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link
              className="text-sm font-medium hover:text-primary transition-colors"
              href="/"
            >
              Home
            </Link>
            <Link
              className="text-sm font-medium hover:text-primary transition-colors"
              href="/assessment"
            >
              Assessments
            </Link>
            <Link
              className="text-sm font-medium hover:text-primary transition-colors"
              href="/dashboard"
            >
              Careers
            </Link>
            <Link
              className="text-sm font-medium hover:text-primary transition-colors"
              href="/design"
            >
              Resources
            </Link>
            <Link
              className="text-sm font-medium hover:text-primary transition-colors"
              href="#"
            >
              About
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-primary transition-colors">
              Login
            </button>
            <button className="px-5 py-2 text-sm font-bold bg-primary text-white rounded-lg hover:opacity-90 transition-opacity">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
