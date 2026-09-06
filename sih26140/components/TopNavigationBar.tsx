"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Edit2, Sun, Moon, User, CheckCircle2 } from 'lucide-react'

export default function TopNavigationBar() {
  const pathname = usePathname()

  return (
    <nav className="h-12 border-b border-zinc-800 bg-surface flex items-center justify-between px-4 shrink-0">
      {/* Left Section */}
      <div className="flex items-center gap-4 w-1/3">
        <div className="flex items-baseline gap-2">
          <span className="font-mono font-semibold text-lg">QuantumLearn</span>
          <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded-sm bg-zinc-800 text-zinc-400 font-mono">
            v0.1.0-beta
          </span>
        </div>
        <div className="h-4 w-px bg-zinc-800" />
        <button className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-200 group transition-colors focus-visible:ring-1 focus-visible:ring-primary rounded-md px-2 py-1">
          Untitled Circuit 1
          <Edit2 className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
      </div>

      {/* Center Section */}
      <div className="flex items-center justify-center w-1/3">
        <div className="flex items-center p-0.5 rounded-md bg-background border border-zinc-800">
          <Link
            href="/"
            className={`px-4 py-1 text-sm font-medium rounded-sm transition-all focus-visible:ring-1 focus-visible:ring-primary ${
              pathname === '/' 
                ? 'bg-zinc-800 text-white shadow-sm' 
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900'
            }`}
          >
            Simulation
          </Link>
          <Link
            href="/learn"
            className={`px-4 py-1 text-sm font-medium rounded-sm transition-all focus-visible:ring-1 focus-visible:ring-primary ${
              pathname === '/learn' 
                ? 'bg-zinc-800 text-white shadow-sm' 
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900'
            }`}
          >
            Learning Space
          </Link>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-end gap-4 w-1/3">
        <div className="flex items-center gap-2 px-2 py-1 rounded-md bg-zinc-900/50 border border-zinc-800/50">
          <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
          <span className="text-xs text-zinc-400 font-mono">Local Simulator Ready</span>
        </div>
        <div className="h-4 w-px bg-zinc-800" />
        <button className="p-1.5 text-zinc-400 hover:text-zinc-200 rounded-md hover:bg-zinc-800 transition-colors focus-visible:ring-1 focus-visible:ring-primary">
          <Sun className="w-4 h-4" />
        </button>
        <button className="p-1.5 text-zinc-400 hover:text-zinc-200 rounded-md hover:bg-zinc-800 transition-colors focus-visible:ring-1 focus-visible:ring-primary">
          <User className="w-4 h-4" />
        </button>
      </div>
    </nav>
  )
}
