"use client"

import { useState } from 'react'
import { Search, Undo2, Redo2, Trash2, Plus, Play, ChevronDown, ChevronRight, Copy, Terminal } from 'lucide-react'

export default function SimulationWorkspace() {
  const [codePaneOpen, setCodePaneOpen] = useState(true)

  return (
    <div className="flex flex-col flex-1 h-full overflow-hidden bg-background">
      {/* Top 3 Quadrants Container */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* 1. Left Palette */}
        <aside className="w-[260px] border-r border-zinc-800 bg-surface flex flex-col shrink-0">
          <div className="p-3 border-b border-zinc-800">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">Gates Library</h2>
            <div className="relative">
              <Search className="absolute left-2.5 top-2 h-4 w-4 text-zinc-500" />
              <input 
                type="text" 
                placeholder="Filter gates..." 
                className="w-full bg-background border border-zinc-800 rounded-md pl-9 pr-3 py-1.5 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-2 space-y-4">
            {/* Single Qubit Accordion */}
            <div>
              <button className="flex items-center w-full text-left px-2 py-1 text-sm font-medium text-zinc-300 hover:text-zinc-100 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded-sm">
                <ChevronDown className="w-4 h-4 mr-1 opacity-70" />
                Single Qubit
              </button>
              <div className="grid grid-cols-4 gap-2 mt-2 px-2">
                <GateTile label="H" type="hadamard" tooltip="Hadamard: Creates superposition" />
                <GateTile label="X" type="single" tooltip="Pauli-X: Bit-flip (NOT)" />
                <GateTile label="Y" type="single" tooltip="Pauli-Y: Bit and phase flip" />
                <GateTile label="Z" type="single" tooltip="Pauli-Z: Phase flip" />
                <GateTile label="S" type="single" tooltip="Phase (S): π/2 rotation" />
                <GateTile label="T" type="single" tooltip="T gate: π/4 rotation" />
              </div>
            </div>

            {/* Multi Qubit Accordion */}
            <div>
              <button className="flex items-center w-full text-left px-2 py-1 text-sm font-medium text-zinc-300 hover:text-zinc-100 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded-sm">
                <ChevronDown className="w-4 h-4 mr-1 opacity-70" />
                Multi Qubit
              </button>
              <div className="grid grid-cols-4 gap-2 mt-2 px-2">
                <GateTile label="CX" type="multi" tooltip="CNOT: Controlled-NOT" />
                <GateTile label="CZ" type="multi" tooltip="Controlled-Z" />
                <GateTile label="SW" type="multi" tooltip="SWAP: Swaps two qubits" />
              </div>
            </div>

            {/* Operations Accordion */}
            <div>
              <button className="flex items-center w-full text-left px-2 py-1 text-sm font-medium text-zinc-300 hover:text-zinc-100 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded-sm">
                <ChevronDown className="w-4 h-4 mr-1 opacity-70" />
                Operations
              </button>
              <div className="grid grid-cols-4 gap-2 mt-2 px-2">
                <GateTile label="M" type="measure" tooltip="Measurement: Collapses superposition" />
                <GateTile label="|0⟩" type="measure" tooltip="Reset: Sets state to |0⟩" />
                <GateTile label="||" type="measure" tooltip="Barrier: Prevents optimization" />
              </div>
            </div>
          </div>
        </aside>

        {/* 2. Central Circuit Builder Canvas */}
        <main className="flex-1 flex flex-col min-w-0 bg-background relative" 
              style={{ backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
          
          <div className="h-12 border-b border-zinc-800 bg-surface/80 backdrop-blur-sm flex items-center justify-between px-4 sticky top-0 z-10">
            <div className="flex items-center gap-1">
              <IconButton icon={<Undo2 className="w-4 h-4" />} title="Undo" />
              <IconButton icon={<Redo2 className="w-4 h-4" />} title="Redo" />
              <div className="w-px h-4 bg-zinc-800 mx-2" />
              <IconButton icon={<Trash2 className="w-4 h-4" />} title="Clear Circuit" />
              <IconButton icon={<Plus className="w-4 h-4" />} title="Add Qubit" />
            </div>
            <button className="bg-primary hover:bg-blue-500 text-white px-3 py-1.5 rounded-md text-sm font-medium flex items-center gap-2 transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-primary">
              <Play className="w-4 h-4 fill-current" />
              Run Simulation
            </button>
          </div>

          <div className="flex-1 overflow-auto p-8">
            <div className="flex flex-col gap-12 relative min-w-max">
              {[0, 1, 2, 3].map((q) => (
                <div key={q} className="flex items-center group">
                  <div className="w-12 font-mono text-xs text-zinc-500 font-medium">q[{q}]</div>
                  <div className="flex-1 h-px bg-zinc-700 relative flex items-center min-w-[600px]">
                    {/* Snap Grid targets (visual only for demo) */}
                    <div className="absolute inset-0 flex items-center justify-around opacity-0 group-hover:opacity-100 transition-opacity">
                      {[1,2,3,4,5,6,7,8].map(i => (
                        <div key={i} className="w-6 h-6 border border-dashed border-zinc-600 rounded-sm bg-zinc-800/30" />
                      ))}
                    </div>
                    {/* Demo gates placed on the rail */}
                    {q === 0 && (
                      <div className="absolute left-[10%] -translate-y-1/2">
                        <GateTile label="H" type="hadamard" tooltip="" size="lg" />
                      </div>
                    )}
                    {q === 0 && (
                      <div className="absolute left-[30%] -translate-y-1/2 flex flex-col items-center z-10">
                        <div className="w-3 h-3 bg-primary rounded-full relative z-10" />
                        <div className="w-px h-[48px] bg-primary absolute top-1.5" />
                      </div>
                    )}
                    {q === 1 && (
                      <div className="absolute left-[30%] -translate-y-1/2 z-10">
                        <GateTile label="X" type="primary" tooltip="" size="lg" />
                      </div>
                    )}
                    {q === 1 && (
                      <div className="absolute left-[50%] -translate-y-1/2">
                        <GateTile label="H" type="hadamard" tooltip="" size="lg" />
                      </div>
                    )}
                    {q === 2 && (
                      <div className="absolute left-[70%] -translate-y-1/2">
                        <GateTile label="M" type="measure" tooltip="" size="lg" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* 3. Right Inspector & State Vector Panel */}
        <aside className="w-[320px] border-l border-zinc-800 bg-surface flex flex-col shrink-0">
          <div className="flex border-b border-zinc-800">
            <button className="flex-1 py-2 text-xs font-medium text-white border-b-2 border-primary bg-zinc-800/50">Inspector</button>
            <button className="flex-1 py-2 text-xs font-medium text-zinc-500 hover:text-zinc-300">State Vector</button>
            <button className="flex-1 py-2 text-xs font-medium text-zinc-500 hover:text-zinc-300">Probabilities</button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            {/* Selected Gate Info */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-semibold text-zinc-200">Hadamard Gate (H)</h3>
                <span className="text-[10px] bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-400 font-mono">q[0]</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                Creates a basic superposition state. Maps the basis state |0⟩ to (|0⟩ + |1⟩)/√2 and |1⟩ to (|0⟩ - |1⟩)/√2.
              </p>
              
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold">Unitary Matrix</span>
                <div className="bg-background border border-zinc-800 rounded-md p-3 font-mono text-xs text-zinc-300 flex items-center justify-center">
                  <div className="flex items-center">
                    <span className="mr-2">1/√2</span>
                    <div className="border-l border-r border-zinc-600 px-3 py-1">
                      <div className="flex gap-4 mb-2"><span>1</span><span>1</span></div>
                      <div className="flex gap-4"><span>1</span><span className="text-zinc-500">-1</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-zinc-800" />

            {/* Probabilities Preview */}
            <div>
              <h3 className="text-xs uppercase tracking-wider text-zinc-500 font-semibold mb-3">Measurement Probabilities</h3>
              <div className="space-y-2">
                <ProbabilityBar state="|0000⟩" probability={50} color="bg-primary" />
                <ProbabilityBar state="|0010⟩" probability={50} color="bg-primary" />
                <ProbabilityBar state="|0001⟩" probability={0} color="bg-zinc-800" />
                <ProbabilityBar state="|0011⟩" probability={0} color="bg-zinc-800" />
              </div>
            </div>
          </div>
        </aside>

      </div>

      {/* 4. Bottom Dock: Synchronized Code Pane */}
      <div className={`border-t border-zinc-800 bg-surface flex flex-col shrink-0 transition-all duration-300 ${codePaneOpen ? 'h-[220px]' : 'h-10'}`}>
        <div className="h-10 px-4 flex items-center justify-between border-b border-zinc-800 bg-surface cursor-pointer" onClick={() => setCodePaneOpen(!codePaneOpen)}>
          <div className="flex items-center gap-2">
            {codePaneOpen ? <ChevronDown className="w-4 h-4 text-zinc-500" /> : <ChevronRight className="w-4 h-4 text-zinc-500" />}
            <Terminal className="w-4 h-4 text-zinc-400" />
            <span className="text-sm font-medium text-zinc-300">Code Preview</span>
          </div>
          {codePaneOpen && (
            <div className="flex items-center gap-2" onClick={e => e.stopPropagation()}>
              <select className="bg-background border border-zinc-700 text-xs text-zinc-300 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-primary">
                <option>Qiskit (Python)</option>
                <option>OpenQASM 2.0</option>
                <option>Cirq (Python)</option>
              </select>
              <button className="p-1 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 rounded transition-colors" title="Copy Code">
                <Copy className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
        
        {codePaneOpen && (
          <div className="flex-1 overflow-auto bg-[#0d0d0f] p-4 font-mono text-sm leading-relaxed text-zinc-300">
<pre><code><span className="text-pink-500">from</span> qiskit <span className="text-pink-500">import</span> QuantumCircuit, QuantumRegister, ClassicalRegister

<span className="text-zinc-500"># Initialize a quantum circuit with 4 qubits</span>
qr = QuantumRegister(<span className="text-orange-400">4</span>, <span className="text-green-400">'q'</span>)
cr = ClassicalRegister(<span className="text-orange-400">4</span>, <span className="text-green-400">'c'</span>)
qc = QuantumCircuit(qr, cr)

<span className="text-zinc-500"># Apply gates</span>
qc.h(qr[<span className="text-orange-400">0</span>])
qc.cx(qr[<span className="text-orange-400">0</span>], qr[<span className="text-orange-400">1</span>])
qc.h(qr[<span className="text-orange-400">1</span>])
qc.measure(qr[<span className="text-orange-400">2</span>], cr[<span className="text-orange-400">2</span>])
</code></pre>
          </div>
        )}
      </div>
    </div>
  )
}

function GateTile({ label, type, tooltip, size = 'md' }: { label: string, type: string, tooltip: string, size?: 'md' | 'lg' }) {
  const baseClasses = "flex items-center justify-center font-mono rounded-[4px] border font-semibold select-none cursor-grab active:cursor-grabbing transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-surface focus-visible:ring-primary"
  
  const sizeClasses = size === 'md' ? "w-10 h-10 text-sm" : "w-12 h-12 text-base shadow-lg"
  
  let colorClasses = ""
  switch (type) {
    case 'hadamard': colorClasses = "bg-slate-900 border-slate-700 text-slate-100 hover:bg-slate-800"; break;
    case 'single': colorClasses = "bg-zinc-800 border-zinc-600 text-zinc-100 hover:bg-zinc-700"; break;
    case 'multi': colorClasses = "bg-indigo-950 border-indigo-800 text-indigo-100 hover:bg-indigo-900"; break;
    case 'measure': colorClasses = "bg-zinc-900 border-zinc-500 text-zinc-300 hover:bg-zinc-800"; break;
    case 'primary': colorClasses = "bg-primary border-blue-400 text-white shadow-[0_0_12px_rgba(37,99,235,0.4)]"; break; // Selected state
    default: colorClasses = "bg-zinc-800 border-zinc-700 text-zinc-200 hover:bg-zinc-700";
  }

  return (
    <button className={`${baseClasses} ${sizeClasses} ${colorClasses}`} title={tooltip}>
      {label}
    </button>
  )
}

function IconButton({ icon, title }: { icon: React.ReactNode, title: string }) {
  return (
    <button 
      title={title}
      className="p-1.5 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
    >
      {icon}
    </button>
  )
}

function ProbabilityBar({ state, probability, color }: { state: string, probability: number, color: string }) {
  return (
    <div className="flex items-center text-xs">
      <span className="w-12 font-mono text-zinc-400">{state}</span>
      <div className="flex-1 h-2 bg-background border border-zinc-800 rounded-full overflow-hidden mx-2">
        <div className={`h-full ${color}`} style={{ width: `${probability}%` }} />
      </div>
      <span className="w-10 text-right font-mono text-zinc-400">{probability}%</span>
    </div>
  )
}
