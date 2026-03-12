"use client";

import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon, Monitor } from "lucide-react";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const options = [
    { value: "light", icon: Sun },
    { value: "system", icon: Monitor },
    { value: "dark", icon: Moon },
  ];

  const activeIndex = options.findIndex((o) => o.value === theme);

  return (
    <div className="relative flex items-center bg-slate-200 dark:bg-slate-800 p-1 rounded-full">
      {/* Sliding highlight */}
      <span
        className="absolute top-1 left-1 h-8 w-8 rounded-full bg-primary shadow-sm transition-transform duration-300 ease-in-out"
        style={{
          transform: `translateX(${activeIndex * 32}px)`,
        }}
      />

      {options.map(({ value, icon: Icon }, index) => {
        const isActive = theme === value;

        return (
          <button
            key={value}
            onClick={() => setTheme(value as any)}
            className="relative z-10 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer"
          >
            <Icon
              size={16}
              className={`transition-colors ${
                isActive ? "text-white" : "text-slate-600 dark:text-slate-300"
              }`}
            />
          </button>
        );
      })}
    </div>
  );
}
