'use client'
import React from 'react'
import Button from './Button'
import useDarkMode from '@/hooks/use-dark-mode'
import { Moon, Sun } from 'lucide-react'

export default function DarkModeToggle({ defaultMode = 'dark' }) {
    const { theme, toggleTheme } = useDarkMode(defaultMode)
    return <Button variant="ghost" size="sm" onClick={toggleTheme}>
        {theme === 'light' && <Moon className="w-4 h-4" />}
        {theme === 'dark' && <Sun className="w-4 h-4" />}
    </Button>
}
