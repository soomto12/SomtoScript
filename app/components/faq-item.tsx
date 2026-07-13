"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FaqItemProps = {
  question: string;
  answer: string;
};

export function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl">
      <button
        className="flex w-full items-center justify-between gap-4 text-left"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-white">{question}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-cyan-300 transition ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen ? <p className="mt-3 text-sm leading-7 text-zinc-400">{answer}</p> : null}
    </div>
  );
}
