import TerminalMockup from './TerminalMockup';

export default function HeroTerminal() {
  return (
    <section className="relative w-full overflow-hidden bg-[var(--background)] py-24 lg:py-32">
      {/* Matrix-style background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,var(--foreground)_2px,var(--foreground)_3px)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--background)] shadow-sm animate-fade-in">
              <div className="w-2 h-2 rounded-full bg-[#d97757] animate-pulse" />
              <span className="text-sm font-medium text-[var(--foreground)]">Community-Powered Automation</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[var(--foreground)] animate-fade-in animation-delay-200">
              Supercharge <span className="text-[#d97757]">Claude Code</span> with powerful hooks
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-[var(--slate-light)] max-w-2xl leading-relaxed animate-fade-in animation-delay-400">
              Discover, share, and install community-driven hooks that transform your AI-powered development workflow.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-600">
              <button className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#d97757] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-[#c86647]">
                Browse Hooks
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-[var(--border)] text-[var(--foreground)] font-semibold hover:border-[#6a9bcc] hover:bg-[#6a9bcc]/10 transition-all duration-300">
                <svg className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Submit a Hook
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[var(--border)] animate-fade-in animation-delay-600">
              <div>
                <div className="text-2xl font-bold text-[var(--foreground)] font-mono">50+</div>
                <div className="text-sm text-[var(--slate-light)] mt-1">Hooks Available</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[var(--foreground)] font-mono">1.2k</div>
                <div className="text-sm text-[var(--slate-light)] mt-1">Downloads</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[var(--foreground)] font-mono">200+</div>
                <div className="text-sm text-[var(--slate-light)] mt-1">Contributors</div>
              </div>
            </div>
          </div>

          {/* Right column - Terminal mockup */}
          <TerminalMockup />
        </div>
      </div>
    </section>
  );
}
