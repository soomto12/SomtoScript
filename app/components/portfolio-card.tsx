import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type PortfolioCardProps = {
  title: string;
  description: string;
  tags: string[];
  href: string;
  image: string;
  /** Horizontal split layout — use when a project is shown on its own. */
  featured?: boolean;
};

export function PortfolioCard({
  title,
  description,
  tags,
  href,
  image,
  featured = false,
}: PortfolioCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:border-brand-200 hover:shadow-xl hover:shadow-slate-900/5 ${
        featured ? "grid lg:grid-cols-2" : "flex flex-col"
      }`}
    >
      <div
        className={`relative w-full overflow-hidden bg-slate-100 ${
          featured
            ? "aspect-16/10 border-b border-slate-200 lg:aspect-auto lg:border-b-0 lg:border-r"
            : "aspect-16/10 border-b border-slate-200"
        }`}
      >
        <Image
          src={image}
          alt={`${title} screenshot`}
          fill
          sizes={featured ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 768px) 50vw, 100vw"}
          className="object-cover object-top transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className={`flex flex-1 flex-col ${featured ? "p-8 lg:p-10" : "p-6"}`}>
        <div className="flex items-center justify-between gap-3">
          <h3 className={`font-semibold text-slate-900 ${featured ? "text-2xl" : "text-lg"}`}>
            {title}
          </h3>
          <ArrowUpRight className="h-5 w-5 shrink-0 text-brand-600 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
        <p className={`mt-3 flex-1 leading-7 text-slate-600 ${featured ? "text-base" : "text-sm"}`}>
          {description}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
