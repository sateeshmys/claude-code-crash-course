'use client';

import { useEffect, useState } from 'react';

export default function TerminalMockup() {
  const [typedText, setTypedText] = useState('');
  const [showOutput, setShowOutput] = useState(false);
  const fullCommand = 'npx hookhub install auto-test';

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullCommand.length) {
        setTypedText(fullCommand.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setShowOutput(true), 500);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="relative animate-fade-in animation-delay-400">
      <div className="relative bg-[#1e1e1e] rounded-lg shadow-2xl border border-[var(--border)] overflow-hidden">
        {/* Window chrome */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#2d2d2d] border-b border-[#3e3e3e]">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <div className="ml-4 text-xs text-gray-400 font-mono">terminal — bash — 80x24</div>
        </div>

        {/* Terminal content */}
        <div className="p-6 font-mono text-sm min-h-[300px] relative">
          <div className="space-y-4 relative z-10">
            <div className="text-[#6a9bcc]">~ Welcome to HookHub CLI ~</div>
            <div className="text-[#788c5d] text-xs">Version 1.0.0 | Node v20.10.0</div>
            <div className="h-4" />

            <div className="flex items-center">
              <span className="text-[#d97757]">➜</span>
              <span className="text-[#6a9bcc] ml-2">~</span>
              <span className="text-gray-400 ml-2">$</span>
              <span className="ml-2 text-white">{typedText}</span>
              <span className="ml-0.5 inline-block w-2 h-5 bg-[#d97757] animate-terminal-cursor" />
            </div>

            {showOutput && (
              <div className="space-y-2 animate-fade-in">
                <div className="text-[#788c5d]">✓ Downloading hook: auto-test</div>
                <div className="text-[#788c5d]">✓ Installing dependencies...</div>
                <div className="text-[#788c5d]">✓ Hook installed successfully!</div>
                <div className="h-2" />
                <div className="text-gray-400 text-xs">
                  Run <span className="text-[#d97757]">claude-code --help</span> to see available commands
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="absolute -inset-4 bg-[#d97757] opacity-10 blur-3xl rounded-full -z-10 animate-pulse" />
    </div>
  );
}
