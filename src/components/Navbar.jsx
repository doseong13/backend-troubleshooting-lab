import React from 'react';
import { Activity, Code2, ShieldAlert, Cpu } from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <header className="border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur sticky top-0 z-30 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-indigo-600 text-white rounded-lg shadow-sm">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <h1 className="font-bold text-slate-900 dark:text-white text-base tracking-tight flex items-center gap-2">
              Backend Troubleshooting Lab
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800">
                v1.0 Live
              </span>
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              실무 백엔드 핵심 병목 재현 & 성능 벤치마크 대시보드
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            title="다크 모드 전환"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition"
          >
            <Code2 className="w-4 h-4 text-indigo-500" />
            <span>GitHub Repository</span>
          </a>
        </div>
      </div>
    </header>
  );
}
