"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { LineChart, LogOut, User, ArrowLeft, ArrowRight } from "lucide-react";

export default function Assessment() {
  const assessmentId = "69ba8bf5d0d70f148c2121a8";
  const studentId = "6953a0cd97ab2e22865a0940";

  const [questions, setQuestions] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [attemptId, setAttemptId] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);

  // 🚀 Fetch questions + start attempt
  useEffect(() => {
    async function init() {
      try {
        // 1️⃣ Fetch questions
        const res = await fetch(
          `/api/student/v1/assessments/${assessmentId}/questions`,
        );
        const data = await res.json();
        setQuestions(data || []);

        // 2️⃣ Start attempt
        const attemptRes = await fetch(`/api/student/v1/assessments/start`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ studentId, assessmentId }),
        });

        const attempt = await attemptRes.json();
        setAttemptId(attempt._id);
      } catch (error) {
        console.error("Failed to initialize assessment:", error);
      } finally {
        setLoading(false);
      }
    }

    init();
  }, [assessmentId, studentId]);

  const currentQuestion = questions[currentIndex];

  // ✅ Save answer
  async function handleAnswer(optionIndex: number) {
    if (!attemptId || !currentQuestion) return;

    setAnswers((prev) => ({
      ...prev,
      [currentQuestion._id]: optionIndex,
    }));

    try {
      await fetch(`/api/student/v1/assessments/answer`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          attemptId,
          questionId: currentQuestion._id,
          selectedOptionIndex: optionIndex,
        }),
      });
    } catch (error) {
      console.error("Failed to save answer:", error);
    }
  }

  // ✅ Next
  async function handleNext() {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // 🔥 Submit at last question
      try {
        await fetch(`/api/student/v1/assessments/submit`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ attemptId }),
        });
        window.location.href = `/result/${attemptId}`;
      } catch (error) {
        console.error("Failed to submit assessment:", error);
      }
    }
  }

  // ✅ Previous
  function handlePrev() {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  }

  // Loading State
  if (loading || !currentQuestion) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const progress = ((currentIndex + 1) / questions.length) * 100;
  const optionLetters = ["A", "B", "C", "D", "E", "F"];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans flex flex-col">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                <LineChart className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                CareerGuide
              </span>
            </Link>

            <div className="hidden md:flex flex-col items-center gap-1 flex-1 max-w-md px-8">
              <div className="flex justify-between w-full text-xs font-medium text-slate-500 uppercase tracking-wider">
                <span>Progress</span>
                <span>
                  Question {currentIndex + 1} of {questions.length}
                </span>
              </div>
              <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-600 transition-all duration-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>Exit Test</span>
              </Link>
              <div className="h-8 w-8 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center border border-blue-100 dark:border-blue-800">
                <User className="w-4 h-4 text-blue-600 dark:text-blue-400" />
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
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-widest">
                Question Navigator
              </h3>
              <div className="grid grid-cols-5 gap-2">
                {questions.map((q, idx) => {
                  const isCurrent = idx === currentIndex;
                  const isAnswered = answers[q._id] !== undefined;

                  let btnStyle =
                    "w-10 h-10 rounded-lg flex items-center justify-center text-sm transition-colors ";

                  if (isCurrent) {
                    btnStyle +=
                      "border-2 border-blue-600 text-blue-600 font-bold";
                  } else if (isAnswered) {
                    btnStyle += "bg-blue-600 text-white font-bold";
                  } else {
                    btnStyle +=
                      "border border-slate-200 dark:border-slate-700 text-slate-400 dark:text-slate-500 hover:border-blue-300";
                  }

                  return (
                    <button
                      key={q._id || idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={btnStyle}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 rounded-full bg-blue-600"></div>
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
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                Career Aptitude Assessment
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-lg">
                Answer honestly based on your true preferences, not what others
                expect of you.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <div className="p-8">
                <span className="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
                  Question {currentIndex + 1} of {questions.length}
                </span>

                {/* Dynamically render the question text */}
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-8">
                  {currentQuestion.question ||
                    currentQuestion.title ||
                    "Loading question..."}
                </h2>

                {/* Options List Layout */}
                <div className="flex flex-col gap-4">
                  {currentQuestion.options?.map(
                    (option: any, optIdx: number) => {
                      const isSelected =
                        answers[currentQuestion._id] === optIdx;
                      const optionText =
                        typeof option === "string" ? option : option.text;

                      return (
                        <button
                          key={optIdx}
                          onClick={() => handleAnswer(optIdx)}
                          className={`group flex items-center gap-4 p-4 rounded-xl border transition-all text-left ${
                            isSelected
                              ? "border-blue-600 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-500 ring-1 ring-blue-600"
                              : "border-slate-200 dark:border-slate-700 hover:border-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800 bg-white dark:bg-slate-900"
                          }`}
                        >
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0 transition-colors ${
                              isSelected
                                ? "bg-blue-600 text-white"
                                : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:bg-blue-100 dark:group-hover:text-blue-600"
                            }`}
                          >
                            {optionLetters[optIdx] || optIdx + 1}
                          </div>
                          <span
                            className={`font-semibold text-lg transition-colors ${
                              isSelected
                                ? "text-blue-700 dark:text-blue-300"
                                : "text-slate-800 dark:text-slate-200"
                            }`}
                          >
                            {optionText}
                          </span>
                        </button>
                      );
                    },
                  )}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="bg-slate-50 dark:bg-slate-800/40 px-8 py-6 flex justify-between items-center border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className={`flex items-center gap-2 px-6 py-3 font-semibold transition-colors ${
                    currentIndex === 0
                      ? "text-slate-300 dark:text-slate-700 cursor-not-allowed"
                      : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span>Previous Question</span>
                </button>
                <button
                  onClick={handleNext}
                  className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all"
                >
                  <span>
                    {currentIndex === questions.length - 1
                      ? "Submit Assessment"
                      : "Next Question"}
                  </span>
                  {currentIndex < questions.length - 1 && (
                    <ArrowRight className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
