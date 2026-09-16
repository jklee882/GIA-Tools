import { Link } from 'react-router-dom';

// Simple array for your tools. Add or remove items as you grow.
const TOOLS = [
  {
    name: 'HSBBM Access',
    description: 'Use this tool for any HSBBM tickets',
    path: '/HSBBM',
  },
  {
    name: 'Timecard & Hours Calc',
    description: 'Calculate weekly hours and overtime estimates.',
    path: '/tools/timecard',
  },
  {
    name: 'Quick Log',
    description: 'Minimal scratchpad for daily personal notes.',
    path: '/tools/quick-log',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 px-6 py-12">
      <div className="max-w-3xl mx-auto space-y-8">

        {/* Simple Header */}
        <header className="border-b border-slate-200 pb-6">
          <h1 className="text-2xl font-bold tracking-tight">GIA Tools</h1>
          <p className="text-sm text-slate-500 mt-1">
            Personal & work utilities.
          </p>
        </header>

        {/* Clean Grid of Links */}
        <main className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {TOOLS.map((tool) => (
            <Link
              key={tool.path}
              to={tool.path}
              className="group block p-4 rounded-lg border border-slate-200 bg-white hover:border-slate-400 transition-colors"
            >
              <div className="flex items-center justify-between">
                <h2 className="font-medium text-slate-900 group-hover:underline decoration-slate-400 underline-offset-4">
                  {tool.name}
                </h2>
                <span className="text-slate-400 group-hover:translate-x-0.5 transition-transform text-sm">
                  →
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                {tool.description}
              </p>
            </Link>
          ))}
        </main>

      </div>
    </div>
  );
}
