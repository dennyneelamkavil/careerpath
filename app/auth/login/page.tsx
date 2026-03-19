"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { User, Lock, Eye, EyeOff, Star, Sparkles } from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex font-sans text-slate-900">
      {/* Left Panel - Branding & Testimonial (Hidden on small screens) */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#0a0f1c] bg-gradient-to-br from-[#16123f] to-[#0a0f1c] text-white p-12 xl:p-20 flex-col justify-between relative overflow-hidden">
        {/* Abstract background blur effect */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-2/3 h-2/3 rounded-full bg-indigo-600/10 blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-2/3 h-2/3 rounded-full bg-purple-600/10 blur-[120px]"></div>
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-16">
            <Sparkles className="w-6 h-6 text-indigo-400" />
            <span className="text-2xl font-bold tracking-tight">
              CareerPath
            </span>
          </div>

          <div className="max-w-xl">
            <h1 className="text-5xl xl:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              Architecture for your intellectual future.
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-md">
              Precision-engineered career assessments and curriculum guidance
              for the modern scholar.
            </p>
          </div>
        </div>

        {/* Testimonial Card */}
        <div className="relative z-10 mt-12">
          <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-lg shadow-2xl">
            <div className="flex gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-4 h-4 fill-indigo-500 text-indigo-500"
                />
              ))}
            </div>
            <p className="text-slate-200 text-lg italic leading-relaxed mb-6">
              &quot;The assessment wasn&apos;t just another quiz. It provided a
              structured, editorial-level breakdown of my potential that felt
              like a premium physical planner in digital form.&quot;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20 bg-slate-800">
                <Image
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80"
                  alt="Elena Rodriguez"
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <h4 className="font-bold text-white">Elena Rodriguez</h4>
                <p className="text-sm text-slate-400">
                  Data Architect at Vertex Systems
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="flex-1 flex flex-col bg-white">
        {/* Mobile Header */}
        <div className="lg:hidden p-6 flex items-center gap-2 border-b border-slate-100">
          <Sparkles className="w-6 h-6 text-indigo-600" />
          <span className="text-xl font-bold tracking-tight">CareerPath</span>
        </div>

        <div className="flex-1 flex flex-col justify-center px-8 sm:px-16 lg:px-24">
          <div className="w-full max-w-md mx-auto">
            <div className="mb-10">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-2">
                Welcome back
              </h2>
              <p className="text-slate-500">
                Continue your journey toward academic excellence.
              </p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              {/* Username / Email Field */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                  Username or Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-11 pr-4 py-3 bg-slate-50 border-transparent rounded-xl text-slate-900 placeholder-slate-400 focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors sm:text-sm"
                    placeholder="j.scholar@university.edu"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                    Password
                  </label>
                  <Link
                    href="/forgot-password"
                    className="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    className="block w-full pl-11 pr-12 py-3 bg-slate-50 border-transparent rounded-xl text-slate-900 placeholder-slate-400 focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors sm:text-sm"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-slate-400 hover:text-slate-600 transition-colors" />
                    ) : (
                      <Eye className="h-5 w-5 text-slate-400 hover:text-slate-600 transition-colors" />
                    )}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
              >
                Sign In
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-slate-600 font-medium">
                Don&apos;t have an account?{" "}
                <Link
                  href="/auth/signup"
                  className="text-indigo-600 font-bold hover:text-indigo-500"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="py-6 px-8 sm:px-16 border-t border-slate-100 flex justify-center lg:justify-start gap-8 mt-auto">
          <Link
            href="/privacy"
            className="text-[11px] font-bold text-slate-400 hover:text-slate-600 uppercase tracking-wider"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-[11px] font-bold text-slate-400 hover:text-slate-600 uppercase tracking-wider"
          >
            Terms of Service
          </Link>
          <Link
            href="/support"
            className="text-[11px] font-bold text-slate-400 hover:text-slate-600 uppercase tracking-wider"
          >
            Support
          </Link>
        </div>
      </div>
    </div>
  );
}
