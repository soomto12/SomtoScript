type PortfolioCardProps = {
  title: string;
  description: string;
  tags: string[];
  href: string;
};

export function PortfolioCard({
  title,
  description,
  tags,
  href,
}: PortfolioCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/70 shadow-2xl shadow-black/30 backdrop-blur-xl">
      <div className="h-40 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.25),_transparent_60%)]" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-zinc-400">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300">
              {tag}
            </span>
          ))}
        </div>
        <a
          href={href}
          className="mt-6 inline-flex items-center text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
        >
          View project <span className="ml-2 transition group-hover:translate-x-1">→</span>
        </a>
      </div>
    </article>
  );
}
