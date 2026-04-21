'use client';

import React, { useEffect, useState, memo } from 'react';

interface TerminalCommandProps {
  command: string;
  onComplete?: () => void;
}

const TerminalCommand = memo(function TerminalCommand({ command, onComplete }: TerminalCommandProps) {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= command.length) {
        setTypedText(command.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        if (onComplete) {
          onComplete();
        }
      }
    }, 100);

    return () => {
      clearInterval(typingInterval);
    };
  }, [command, onComplete]);

  return (
    <div className="flex items-center">
      <span className="text-[#d97757]">➜</span>
      <span className="text-[#6a9bcc] ml-2">~</span>
      <span className="text-gray-400 ml-2">$</span>
      <span className="ml-2 text-white">{typedText}</span>
      {/* Optimized cursor using CSS animation instead of React state */}
      <span className="ml-0.5 inline-block w-2 h-5 bg-[#d97757] animate-pulse" />
    </div>
  );
});

export default TerminalCommand;
