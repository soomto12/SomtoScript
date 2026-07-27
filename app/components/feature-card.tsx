import { Check, type LucideIcon } from "lucide-react";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  points?: string[];
};

export function FeatureCard({ icon: Icon, title, description, points }: FeatureCardProps) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-brand-200 hover:shadow-lg hover:shadow-slate-900/5">
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-slate-600">{description}</p>
      {points?.length ? (
        <ul className="mt-5 space-y-2 border-t border-slate-100 pt-5">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-2 text-sm text-slate-600">
              <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-brand-600" />
              {point}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
