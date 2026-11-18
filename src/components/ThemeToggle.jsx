"use client";

import React, { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className, isDark: controlledDark, onToggle, accentColor, surfaceColor }) {
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

  const accent = accentColor || (isDark ? '#D23A00' : '#FFC900');
  const surface = surfaceColor || (isDark ? '#0e375c' : '#FFC900');

  return (
    <div
      className={cn(
        "flex w-16 h-8 p-1 rounded-full cursor-pointer transition-all duration-300 select-none border shadow-md",
        isDark 
          ? "bg-[#092742]/80 border-white/20 hover:border-white/40" 
          : "bg-white/80 border-black/20 hover:border-black/40",
        className
      )}
      style={{
        borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)'
      }}
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
      <div className="flex justify-between items-center w-full relative">
        <div
          className={cn(
            "flex justify-center items-center w-6 h-6 rounded-full transition-transform duration-300 shadow-sm",
            isDark 
              ? "transform translate-x-0" 
              : "transform translate-x-8"
          )}
          style={{
            backgroundColor: isDark ? surface : accent
          }}
        >
          {isDark ? (
            <Moon 
              className="w-3.5 h-3.5 text-white" 
              strokeWidth={1.8}
            />
          ) : (
            <Sun 
              className="w-3.5 h-3.5 text-black" 
              strokeWidth={1.8}
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
              className="w-3.5 h-3.5 text-white/40" 
              strokeWidth={1.5}
            />
          ) : (
            <Moon 
              className="w-3.5 h-3.5 text-black/40" 
              strokeWidth={1.5}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ThemeToggle;
