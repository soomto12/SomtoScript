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
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:border-slate-300">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        <span className="text-base font-medium text-slate-900">{question}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen ? (
        <p className="border-t border-slate-100 px-6 py-4 text-sm leading-7 text-slate-600">{answer}</p>
      ) : null}
    </div>
  );
}
