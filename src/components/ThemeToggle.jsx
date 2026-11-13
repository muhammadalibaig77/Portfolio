"use client";

import React, { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className, isDark: controlledDark, onToggle }) {
  const [internalDark, setInternalDark] = useState(true);
  const isDark = controlledDark !== undefined ? controlledDark : internalDark;

  const handleToggle = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (onToggle) {
      onToggle(!isDark);
    } else {
      setInternalDark(!isDark);
    }
  };

  return (
    <div
      className={cn(
        "flex w-16 h-8 p-1 rounded-full cursor-pointer transition-all duration-300 select-none",
        isDark 
          ? "bg-[#092742] border border-[#FEFFFA]/20 shadow-[0_2px_8px_rgba(0,0,0,0.3)] hover:border-[#D23A00]" 
          : "bg-[#F5F3EF] border border-[#08090B]/20 shadow-[0_2px_8px_rgba(8,9,11,0.08)] hover:border-[#FFC900]",
        className
      )}
      onClick={handleToggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          e.stopPropagation();
          handleToggle(e);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="flex justify-between items-center w-full">
        <div
          className={cn(
            "flex justify-center items-center w-6 h-6 rounded-full transition-transform duration-300",
            isDark 
              ? "transform translate-x-0 bg-[#0e375c]" 
              : "transform translate-x-8 bg-[#FFC900]"
          )}
        >
          {isDark ? (
            <Moon 
              className="w-4 h-4 text-[#FEFFFA]" 
              strokeWidth={1.5}
            />
          ) : (
            <Sun 
              className="w-4 h-4 text-[#08090B]" 
              strokeWidth={1.5}
            />
          )}
        </div>
        <div
          className={cn(
            "flex justify-center items-center w-6 h-6 rounded-full transition-transform duration-300",
            isDark 
              ? "bg-transparent" 
              : "transform -translate-x-8"
          )}
        >
          {isDark ? (
            <Sun 
              className="w-4 h-4 text-[#FEFFFA]/35" 
              strokeWidth={1.5}
            />
          ) : (
            <Moon 
              className="w-4 h-4 text-[#08090B]/35" 
              strokeWidth={1.5}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ThemeToggle;
