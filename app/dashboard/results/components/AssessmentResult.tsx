"use client";

import { useState, useEffect } from "react";
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
} from "lucide-react";

type Props = {
  id: string; // attemptId from params
};

// Mapping dictionary for Holland Code letters to UI elements
const HOLLAND_MAP: Record<
  string,
  {
    name: string;
    color: string;
    bgLight: string;
    bgDark: string;
    textColor: string;
  }
> = {
  R: {
    name: "Realistic",
    color: "bg-slate-600",
    bgLight: "bg-slate-50",
    bgDark: "dark:bg-slate-900/20",
    textColor: "text-slate-900 dark:text-slate-200",
  },
  I: {
    name: "Investigative",
    color: "bg-indigo-600",
    bgLight: "bg-indigo-50",
    bgDark: "dark:bg-indigo-900/20",
    textColor: "text-indigo-900 dark:text-indigo-200",
  },
  A: {
    name: "Artistic",
    color: "bg-purple-500",
    bgLight: "bg-purple-50",
    bgDark: "dark:bg-purple-900/20",
    textColor: "text-purple-900 dark:text-purple-200",
  },
  S: {
    name: "Social",
    color: "bg-cyan-500",
    bgLight: "bg-cyan-50",
    bgDark: "dark:bg-cyan-900/20",
    textColor: "text-cyan-900 dark:text-cyan-200",
  },
  E: {
    name: "Enterprising",
    color: "bg-orange-500",
    bgLight: "bg-orange-50",
    bgDark: "dark:bg-orange-900/20",
    textColor: "text-orange-900 dark:text-orange-200",
  },
  C: {
    name: "Conventional",
    color: "bg-emerald-500",
    bgLight: "bg-emerald-50",
    bgDark: "dark:bg-emerald-900/20",
    textColor: "text-emerald-900 dark:text-emerald-200",
  },
};

export default function AssessmentResult({ id }: Props) {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchResult() {
      try {
        const res = await fetch(`/api/student/v1/results/${id}`);
        const data = await res.json();
        setResult(data);
      } catch (error) {
        console.error("Failed to fetch assessment result:", error);
      } finally {
        setLoading(false);
      }
    }

    if (id) fetchResult();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-500">Result not found.</p>
      </div>
    );
  }

  // Safe destructure with defaults
  const scores = result.scores || { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
  const maxScore = Math.max(
    ...Object.values(scores as Record<string, number>),
    20,
  ); // Scale chart relative to highest score, min 20
  const hollandLetters = (result.hollandCode || "IAS").split("");

  // Format Completion Date
  const completedDate = result.createdAt
    ? new Date(result.createdAt).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "Recently";

  // Radar Chart calculation (6 axes evenly spaced around a circle)
  const getRadarPoint = (score: number, angleIdx: number) => {
    const radius = (score / maxScore) * 80; // 80 is max radius of the SVG polygon
    const angle = (angleIdx * Math.PI) / 3 - Math.PI / 2; // Start at top (-90deg), distribute by 60deg
    const x = 100 + radius * Math.cos(angle);
    const y = 100 + radius * Math.sin(angle);
    return `${x},${y}`;
  };

  // Order maps directly to radar chart points [Top, Top-Right, Bottom-Right, Bottom, Bottom-Left, Top-Left]
  const radarOrder = [
    { key: "R", val: scores.R },
    { key: "I", val: scores.I },
    { key: "A", val: scores.A },
    { key: "S", val: scores.S },
    { key: "E", val: scores.E },
    { key: "C", val: scores.C },
  ];

  const radarPolygonPoints = radarOrder
    .map((item, idx) => getRadarPoint(item.val, idx))
    .join(" ");

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hidden lg:flex flex-col">
        <div className="p-6 flex items-center gap-3">
          <div className="text-indigo-600 dark:text-indigo-400">
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
                  Completed on {completedDate}
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
                <span className="text-indigo-600">{result.hollandCode}</span>
              </h2>

              <div className="flex flex-wrap gap-4">
                {hollandLetters.map((letter: string, index: number) => {
                  const style = HOLLAND_MAP[letter] || HOLLAND_MAP.I; // Fallback to Investigative colors
                  return (
                    <div
                      key={index}
                      className={`flex items-center gap-3 ${style.bgLight} ${style.bgDark} px-4 py-3 rounded-xl`}
                    >
                      <span
                        className={`w-8 h-8 rounded-lg ${style.color} text-white flex items-center justify-center font-bold`}
                      >
                        {letter}
                      </span>
                      <span className={`font-bold ${style.textColor}`}>
                        {style.name}
                      </span>
                    </div>
                  );
                })}
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
                {/* Dynamic SVG Radar Chart */}
                <div className="w-48 h-48 relative flex-shrink-0">
                  <svg
                    viewBox="0 0 200 200"
                    className="w-full h-full transform -rotate-90 overflow-visible"
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
                    {[0, 1, 2, 3, 4, 5].map((idx) => {
                      const angle = (idx * Math.PI) / 3 - Math.PI / 2;
                      return (
                        <line
                          key={idx}
                          x1="100"
                          y1="100"
                          x2={100 + 80 * Math.cos(angle)}
                          y2={100 + 80 * Math.sin(angle)}
                          stroke="#e2e8f0"
                          strokeWidth="1"
                        />
                      );
                    })}

                    {/* Dynamic Data Polygon */}
                    <polygon
                      points={radarPolygonPoints}
                      fill="rgba(79, 70, 229, 0.15)"
                      stroke="#4f46e5"
                      strokeWidth="3"
                      strokeLinejoin="round"
                    />

                    {/* Dynamic Data Points */}
                    {radarOrder.map((item, idx) => {
                      const [cx, cy] = getRadarPoint(item.val, idx).split(",");
                      return (
                        <circle
                          key={idx}
                          cx={cx}
                          cy={cy}
                          r="4"
                          fill="#4f46e5"
                        />
                      );
                    })}
                  </svg>

                  {/* Axis Labels */}
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-400">
                    R
                  </span>
                  <span className="absolute top-1/4 -right-2 text-[10px] font-bold text-slate-400">
                    I
                  </span>
                  <span className="absolute bottom-1/4 -right-2 text-[10px] font-bold text-slate-400">
                    A
                  </span>
                  <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-400">
                    S
                  </span>
                  <span className="absolute bottom-1/4 -left-2 text-[10px] font-bold text-slate-400">
                    E
                  </span>
                  <span className="absolute top-1/4 -left-2 text-[10px] font-bold text-slate-400">
                    C
                  </span>
                </div>

                {/* Score Progress Bars */}
                <div className="flex-1 w-full space-y-4">
                  {radarOrder.map((item, idx) => (
                    <div key={idx} className="w-full">
                      <div className="flex justify-between text-xs font-bold mb-1">
                        <span className="text-slate-700 dark:text-slate-300">
                          {HOLLAND_MAP[item.key].name}
                        </span>
                        <span className="text-slate-400">
                          {item.val}/{maxScore}
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${HOLLAND_MAP[item.key].color} rounded-full`}
                          style={{ width: `${(item.val / maxScore) * 100}%` }}
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
            <div className="bg-[#0f172a] text-white p-8 md:p-12 md:w-1/3 flex flex-col justify-center">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6">
                <Brain className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Your Personality Type</h3>
              <p className="text-slate-400 font-medium text-lg">
                The {HOLLAND_MAP[hollandLetters[0]]?.name || "Versatile"}{" "}
                Architect
              </p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-8 md:p-12 md:w-2/3 flex flex-col justify-center">
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed italic mb-8">
                &quot;You possess a unique blend of attributes guided by your{" "}
                {result.hollandCode} profile. Your high{" "}
                {HOLLAND_MAP[hollandLetters[0]]?.name} score suggests a
                deep-seated need for your primary motivators, while your{" "}
                {HOLLAND_MAP[hollandLetters[1]]?.name} affinity drives you to
                find elegant, human-centric solutions. You aren&apos;t just a
                participant; you are a conceptual builder who values impact and
                intellectual discovery.&quot;
              </p>
              <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 pt-6 border-t border-slate-100 dark:border-slate-800">
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                    Primary Drive
                  </p>
                  <p className="font-bold text-slate-900 dark:text-white">
                    {HOLLAND_MAP[hollandLetters[0]]?.name} Excellence
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
                Top Matches
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {result.careers && result.careers.length > 0 ? (
                result.careers.slice(0, 4).map((career: any, idx: number) => {
                  // Fallback icons/colors for dynamic lists
                  const cardStyles = [
                    {
                      icon: <LayoutTemplate className="w-5 h-5" />,
                      bg: "bg-indigo-50 dark:bg-indigo-900/20",
                      color: "text-indigo-600",
                      hover: "hover:border-indigo-300",
                    },
                    {
                      icon: <Palette className="w-5 h-5" />,
                      bg: "bg-purple-50 dark:bg-purple-900/20",
                      color: "text-purple-600",
                      hover: "hover:border-purple-300",
                    },
                    {
                      icon: <HelpCircle className="w-5 h-5" />,
                      bg: "bg-cyan-50 dark:bg-cyan-900/20",
                      color: "text-cyan-600",
                      hover: "hover:border-cyan-300",
                    },
                    {
                      icon: <LineChart className="w-5 h-5" />,
                      bg: "bg-blue-50 dark:bg-blue-900/20",
                      color: "text-blue-600",
                      hover: "hover:border-blue-300",
                    },
                  ];
                  const style = cardStyles[idx % cardStyles.length];

                  return (
                    <div
                      key={idx}
                      className={`bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col transition-colors ${style.hover}`}
                    >
                      <div className="p-6 flex-1">
                        <div className="flex justify-between items-start mb-4">
                          <div
                            className={`w-10 h-10 rounded-xl ${style.bg} flex items-center justify-center ${style.color}`}
                          >
                            {style.icon}
                          </div>
                          <div className="text-right">
                            {/* Assuming a match property exists, else provide fallback */}
                            <span
                              className={`text-xl font-bold ${style.color}`}
                            >
                              {career.matchPercentage || 95 - idx}%
                            </span>
                            <p className="text-[10px] font-bold text-slate-400 uppercase">
                              Match
                            </p>
                          </div>
                        </div>
                        <h4 className="text-lg font-bold mb-2">
                          {career.title || career.name || "Career Title"}
                        </h4>
                        <p className="text-sm text-slate-500 mb-6 line-clamp-3">
                          {career.description ||
                            "Exciting career aligning perfectly with your personality and aptitudes."}
                        </p>

                        {/* If career has specific tags/holland letters, render them, otherwise render default from user */}
                        <div className="flex gap-2">
                          {(career.tags || hollandLetters.slice(0, 2)).map(
                            (tag: string, tIdx: number) => (
                              <span
                                key={tIdx}
                                className="w-6 h-6 flex items-center justify-center rounded bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-600"
                              >
                                {tag.charAt(0).toUpperCase()}
                              </span>
                            ),
                          )}
                        </div>
                      </div>
                      <div className="border-t border-slate-100 dark:border-slate-800 p-4">
                        <button
                          className={`w-full text-center text-sm font-bold ${style.color}`}
                        >
                          Explore Career
                        </button>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="col-span-full py-8 text-center text-slate-500">
                  No specific careers found for this assessment attempt.
                </div>
              )}
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
