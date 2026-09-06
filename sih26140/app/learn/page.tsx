"use client"

import { useState } from 'react'
import { BookOpen, Box, CheckCircle2, ChevronRight, MessageSquare, Send, Sparkles } from 'lucide-react'

export default function LearningSpace() {
  const [chatOpen, setChatOpen] = useState(false)

  return (
    <div className="flex flex-1 h-full overflow-hidden bg-background relative">
      
      {/* 1. Left Curriculum Sidebar */}
      <aside className="w-[280px] border-r border-zinc-800 bg-surface flex flex-col shrink-0">
        <div className="p-4 border-b border-zinc-800">
          <h2 className="text-sm font-semibold text-zinc-200 mb-1">Learning Progress</h2>
          <div className="flex items-center gap-2 mt-2">
            <div className="flex-1 h-1.5 bg-background border border-zinc-800 rounded-full overflow-hidden">
              <div className="h-full bg-primary w-1/3" />
            </div>
            <span className="text-[10px] font-mono text-zinc-500">33%</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-3 space-y-6">
          {/* Curriculum Tracks */}
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500 mb-2 px-1">Curriculum Tracks</h3>
            <div className="space-y-0.5">
              <NavItem icon={<CheckCircle2 className="w-4 h-4 text-emerald-500" />} label="1. Quantum Foundations" />
              <NavItem icon={<div className="w-4 h-4 rounded-full border border-primary flex items-center justify-center"><div className="w-2 h-2 bg-primary rounded-full"/></div>} label="2. Single Qubit Gates" active />
              <NavItem icon={<div className="w-4 h-4 rounded-full border border-zinc-600" />} label="3. Entanglement (Multi-Qubit)" />
              <NavItem icon={<div className="w-4 h-4 rounded-full border border-zinc-600" />} label="4. Quantum Algorithms" />
            </div>
          </div>

          {/* Interactive Tools */}
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500 mb-2 px-1">Interactive Tools</h3>
            <div className="space-y-0.5">
              <NavItem icon={<Box className="w-4 h-4 text-zinc-400" />} label="3D Bloch Sphere" />
              <NavItem icon={<BookOpen className="w-4 h-4 text-zinc-400" />} label="State Vector Sandbox" />
            </div>
          </div>
        </div>
      </aside>

      {/* 2. Center Main Reading & Interaction Area */}
      <main className="flex-1 flex min-w-0 bg-background overflow-hidden">
        
        {/* Left Pane (Academic Text) */}
        <div className="w-[60%] border-r border-zinc-800 overflow-y-auto custom-scrollbar">
          <div className="max-w-3xl mx-auto p-12">
            <div className="mb-8">
              <span className="text-primary text-sm font-semibold tracking-wide uppercase mb-2 block">Module 2 • Single Qubit Gates</span>
              <h1 className="text-3xl font-bold text-zinc-100 tracking-tight mb-4">The Hadamard Gate</h1>
              <p className="text-lg text-zinc-400 leading-relaxed">
                The Hadamard gate (H-gate) is a fundamental quantum logic gate. It is the most common way to create a quantum superposition.
              </p>
            </div>

            <div className="prose prose-invert prose-zinc max-w-none">
              <h3 className="text-xl font-semibold text-zinc-200 mt-8 mb-4">Mathematical Definition</h3>
              <p className="text-zinc-400 leading-relaxed mb-4">
                When applied to the computational basis states |0⟩ and |1⟩, the Hadamard gate maps them into an equal superposition of both states:
              </p>
              
              <div className="bg-surface border border-zinc-800 rounded-lg p-6 my-6 font-mono text-zinc-300 text-center">
                H|0⟩ = (|0⟩ + |1⟩) / √2 = |+⟩
                <br /><br />
                H|1⟩ = (|0⟩ - |1⟩) / √2 = |-⟩
              </div>

              <h3 className="text-xl font-semibold text-zinc-200 mt-8 mb-4">Matrix Representation</h3>
              <p className="text-zinc-400 leading-relaxed mb-4">
                The matrix representing the Hadamard operation in the standard basis is given by:
              </p>

              <div className="bg-surface border border-zinc-800 rounded-lg p-6 my-6 flex justify-center items-center font-mono text-zinc-300">
                <div className="flex items-center gap-4">
                  <span>H =</span>
                  <span>1/√2</span>
                  <div className="border-l-2 border-r-2 border-zinc-600 px-4 py-2">
                    <div className="flex justify-between gap-6 mb-2"><span>1</span><span>1</span></div>
                    <div className="flex justify-between gap-6"><span>1</span><span className="text-zinc-500">-1</span></div>
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 my-8 flex gap-4">
                <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-zinc-200 mb-1">Self-Inverse Property</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    The Hadamard gate is its own inverse (H² = I). Applying it twice to any state returns the original state. Try this in the sandbox to the right!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Pane (Interactive Sandbox) */}
        <div className="w-[40%] bg-[#0a0a0c] flex flex-col relative overflow-hidden">
          <div className="absolute top-4 left-4 z-10 bg-surface/80 backdrop-blur-sm border border-zinc-800 rounded-md px-3 py-1.5 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">Interactive Visualization</span>
          </div>

          <div className="flex-1 flex items-center justify-center relative p-8">
            {/* Mock 3D Bloch Sphere */}
            <div className="relative w-64 h-64">
              {/* Sphere wireframe */}
              <div className="absolute inset-0 rounded-full border border-zinc-800" />
              <div className="absolute inset-0 rounded-full border border-zinc-800 [transform:rotateX(75deg)]" />
              <div className="absolute inset-0 rounded-full border border-zinc-800 [transform:rotateY(75deg)]" />
              
              {/* Axes */}
              <div className="absolute inset-y-0 left-1/2 w-px bg-zinc-700/50 -translate-x-1/2" />
              <div className="absolute inset-x-0 top-1/2 h-px bg-zinc-700/50 -translate-y-1/2" />
              
              {/* Axis Labels */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 font-mono text-xs text-zinc-500">|0⟩ (Z)</div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-mono text-xs text-zinc-500">|1⟩ (-Z)</div>
              <div className="absolute top-1/2 -right-6 -translate-y-1/2 font-mono text-xs text-zinc-500">X</div>
              <div className="absolute top-[85%] right-4 font-mono text-xs text-zinc-500">Y</div>

              {/* State Vector Arrow */}
              <div className="absolute top-1/2 left-1/2 w-px h-32 bg-primary origin-top [transform:rotate(45deg)] z-10 shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 bg-primary rounded-full" />
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="h-40 border-t border-zinc-800 bg-surface p-4 flex flex-col gap-4">
            <div className="flex justify-between items-center text-sm">
              <span className="text-zinc-400 font-mono">Current State:</span>
              <span className="text-zinc-200 font-mono bg-background border border-zinc-800 px-2 py-1 rounded">|+⟩ = (|0⟩ + |1⟩)/√2</span>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs text-zinc-500 mb-1 font-mono">
                  <span>θ (Polar)</span>
                  <span>π/2</span>
                </div>
                <input type="range" className="w-full accent-primary bg-zinc-800 h-1 rounded-full appearance-none outline-none" min="0" max="100" defaultValue="50" />
              </div>
              <div>
                <div className="flex justify-between text-xs text-zinc-500 mb-1 font-mono">
                  <span>φ (Azimuthal)</span>
                  <span>0</span>
                </div>
                <input type="range" className="w-full accent-primary bg-zinc-800 h-1 rounded-full appearance-none outline-none" min="0" max="100" defaultValue="0" />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 3. Dockable AI Tutor Assistant */}
      <div className={`absolute bottom-6 right-6 w-80 bg-surface border border-zinc-800 rounded-xl shadow-2xl flex flex-col transition-all duration-300 transform origin-bottom-right ${chatOpen ? 'h-[450px] scale-100 opacity-100' : 'h-12 scale-95 opacity-90 hover:scale-100 hover:opacity-100'}`}>
        {/* Chat Header */}
        <button 
          onClick={() => setChatOpen(!chatOpen)}
          className="h-12 px-4 flex items-center justify-between border-b border-zinc-800 w-full focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded-t-xl"
        >
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="font-semibold text-sm text-zinc-200">Quantum Assistant</span>
          </div>
          <ChevronRight className={`w-4 h-4 text-zinc-500 transition-transform ${chatOpen ? 'rotate-90' : '-rotate-90'}`} />
        </button>

        {chatOpen && (
          <>
            {/* Chat History */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-md bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
                  <Sparkles className="w-3 h-3 text-primary" />
                </div>
                <p className="text-zinc-300 leading-relaxed">
                  Hello! I'm your quantum research assistant. You're currently learning about the Hadamard gate. What would you like to know?
                </p>
              </div>
            </div>

            {/* Suggestions */}
            <div className="px-4 py-2 flex flex-wrap gap-2">
              <button className="text-[10px] font-medium text-zinc-400 bg-background border border-zinc-800 px-2 py-1 rounded-full hover:text-zinc-200 hover:border-zinc-600 transition-colors">
                Explain phase kickback
              </button>
              <button className="text-[10px] font-medium text-zinc-400 bg-background border border-zinc-800 px-2 py-1 rounded-full hover:text-zinc-200 hover:border-zinc-600 transition-colors">
                Why is H its own inverse?
              </button>
            </div>

            {/* Input Box */}
            <div className="p-3 border-t border-zinc-800 bg-background/50 rounded-b-xl">
              <div className="relative flex items-center">
                <input 
                  type="text" 
                  placeholder="Ask a question..." 
                  className="w-full bg-surface border border-zinc-800 rounded-md pl-3 pr-8 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <button className="absolute right-2 p-1 text-zinc-500 hover:text-primary transition-colors">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </>
        )}
      </div>

    </div>
  )
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <button className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary ${active ? 'bg-zinc-800/50 text-zinc-200 font-medium' : 'text-zinc-400 hover:bg-zinc-900/50 hover:text-zinc-300'}`}>
      <div className="shrink-0">{icon}</div>
      <span className="truncate">{label}</span>
    </button>
  )
}
