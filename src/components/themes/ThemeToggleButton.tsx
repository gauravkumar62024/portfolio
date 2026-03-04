// components/ThemeToggleButton.tsx
'use client';

import { useTheme } from '../../context/ThemeContext';
import { SunIcon, MoonIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

const ThemeToggleButton: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div className="w-10 h-10 p-2 rounded-lg bg-gray-100 dark:bg-gray-800" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 group"
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <SunIcon className='w-6 h-6 text-yellow-500 group-hover:rotate-90 transition-transform duration-300' />
      ) : (
        <MoonIcon className='w-6 h-6 text-gray-700 group-hover:rotate-12 transition-transform duration-300' />
      )}
    </button>
  );
};

export default ThemeToggleButton;