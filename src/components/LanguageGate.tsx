import { LANG_LABELS, LANGUAGES, UI } from "@/data/locales";
import type { LangKey } from "@/data/types";
import { CenLuckLogo } from "./CenLuckLogo";

export function LanguageGate({ onSelect }: { onSelect: (lang: LangKey) => void }) {
  return (
    <main className="paper flex min-h-screen flex-col items-center justify-center px-5 py-16">
      <CenLuckLogo />
      <div className="mt-10 w-full max-w-lg text-center">
        <p className="section-index">Five Elements · 五行 · 오행</p>
        <h1 className="mt-4 text-3xl leading-tight font-semibold text-foreground sm:text-4xl">
          Wellness Report
        </h1>
        <div className="rule-gold mx-auto mt-6 w-32" />
        <p className="mt-6 text-sm text-muted-foreground">
          Select your language · 언어 선택 · 选择语言
        </p>

        <div className="mt-7 grid gap-3">
          {LANGUAGES.map((lang) => (
            <button
              key={lang}
              type="button"
              onClick={() => onSelect(lang)}
              className="card-report group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 text-left transition-all hover:-translate-y-0.5 hover:border-celadon/50 hover:shadow-lift"
            >
              <span className="min-w-0">
                <span className="block font-display text-lg font-semibold text-foreground">
                  {LANG_LABELS[lang].native}
                </span>
                <span className="mt-0.5 block truncate text-xs tracking-wide text-muted-foreground">
                  {UI[lang].brandTagline}
                </span>
              </span>
              <span className="shrink-0 text-xs tracking-[0.2em] text-celadon uppercase transition-transform group-hover:translate-x-1">
                {LANG_LABELS[lang].latin}
              </span>
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
