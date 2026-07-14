import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type PortfolioCardProps = {
  title: string;
  description: string;
  tags: string[];
  href: string;
  image: string;
};

export function PortfolioCard({ title, description, tags, href, image }: PortfolioCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur-xl transition hover:border-cyan-400/30"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/10 bg-zinc-950">
        <Image
          src={image}
          alt={`${title} screenshot`}
          fill
          className="object-cover object-top transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <ArrowUpRight className="h-5 w-5 shrink-0 text-cyan-300 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
        <p className="mt-3 text-sm leading-7 text-zinc-400">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-zinc-950/50 px-3 py-1 text-xs font-medium text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
