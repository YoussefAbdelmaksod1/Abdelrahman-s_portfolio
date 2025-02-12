'use client'

import { useTheme } from '@/lib/ThemeContext'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/90 text-gray-600 transition-colors hover:bg-gray-100 dark:bg-gray-800/90 dark:text-gray-300 dark:hover:bg-gray-700/90"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="relative h-5 w-5">
        <motion.div
          initial={false}
          animate={{
            scale: theme === 'dark' ? 0 : 1,
            opacity: theme === 'dark' ? 0 : 1,
            rotate: theme === 'dark' ? 90 : 0,
          }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <SunIcon className="h-5 w-5" />
        </motion.div>
        <motion.div
          initial={false}
          animate={{
            scale: theme === 'dark' ? 1 : 0,
            opacity: theme === 'dark' ? 1 : 0,
            rotate: theme === 'dark' ? 0 : -90,
          }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <MoonIcon className="h-5 w-5" />
        </motion.div>
      </div>
    </motion.button>
  )
} 