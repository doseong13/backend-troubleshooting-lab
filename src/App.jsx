import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ConcurrencyLab from './components/ConcurrencyLab';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [currentLab, setCurrentLab] = useState('01-concurrency');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row min-h-[calc(100vh-4rem)]">
        <Sidebar currentLab={currentLab} setCurrentLab={setCurrentLab} />

        <main className="flex-1 p-4 sm:p-6 lg:p-8 min-w-0">
          {currentLab === '01-concurrency' && <ConcurrencyLab />}
        </main>
      </div>
    </div>
  );
}
