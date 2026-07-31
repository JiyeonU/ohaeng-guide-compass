import { useState } from "react";
import { LANG_LABELS, LANGUAGES, UI } from "@/data/locales";
import type { LangKey } from "@/data/types";
import { CenLuckLogo } from "./CenLuckLogo";

export interface BirthInput {
  name: string;
  year: number;
  month: number;
  day: number;
}

const YEARS = Array.from({ length: 96 }, (_, i) => 2025 - i);
const MONTHS = Array.from({ length: 12 }, (_, i) => i + 1);

const selectClass =
  "w-full appearance-none rounded-xl border border-input bg-card px-3 py-3 font-sans text-sm text-foreground outline-none transition-colors focus:border-celadon focus:ring-2 focus:ring-ring/25";

export function BirthForm({
  lang,
  onChangeLang,
  onSubmit,
}: {
  lang: LangKey;
  onChangeLang: (lang: LangKey) => void;
  onSubmit: (input: BirthInput) => void;
}) {
  const t = UI[lang];
  const [name, setName] = useState("");
  const [year, setYear] = useState(1995);
  const [month, setMonth] = useState(5);
  const [day, setDay] = useState(15);
  const [error, setError] = useState(false);

  const daysInMonth = new Date(year, month, 0).getDate();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!name.trim() || day > daysInMonth) {
      setError(true);
      return;
    }
    setError(false);
    onSubmit({ name: name.trim(), year, month, day });
  };

  return (
    <main className="paper min-h-screen px-5 py-10">
      <header className="mx-auto grid max-w-3xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <CenLuckLogo />
        <div className="flex shrink-0 gap-1 rounded-full border border-border bg-card p-1">
          {LANGUAGES.map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => onChangeLang(key)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                key === lang
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {LANG_LABELS[key].native}
            </button>
          ))}
        </div>
      </header>

      <section className="mx-auto mt-14 max-w-3xl text-center">
        <p className="section-index">{t.brandTagline}</p>
        <h1 className="mt-4 text-3xl leading-tight font-semibold sm:text-5xl">{t.heroTitle}</h1>
        <div className="rule-gold mx-auto mt-6 w-40" />
        <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {t.heroSubtitle}
        </p>
      </section>

      <form onSubmit={submit} className="card-report mx-auto mt-10 max-w-xl p-6 sm:p-8">
        <label className="block">
          <span className="text-xs font-medium tracking-[0.14em] text-celadon uppercase">
            {t.formName}
          </span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t.formNamePlaceholder}
            className="mt-2 w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-celadon focus:ring-2 focus:ring-ring/25"
          />
        </label>

        <fieldset className="mt-6">
          <legend className="text-xs font-medium tracking-[0.14em] text-celadon uppercase">
            {t.formBirth}
          </legend>
          <div className="mt-2 grid grid-cols-3 gap-3">
            <select
              aria-label={t.formYear}
              className={selectClass}
              value={year}
              onChange={(e) => setYear(Number(e.target.value))}
            >
              {YEARS.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
            <select
              aria-label={t.formMonth}
              className={selectClass}
              value={month}
              onChange={(e) => setMonth(Number(e.target.value))}
            >
              {MONTHS.map((m) => (
                <option key={m} value={m}>
                  {m} {t.formMonth}
                </option>
              ))}
            </select>
            <select
              aria-label={t.formDay}
              className={selectClass}
              value={Math.min(day, daysInMonth)}
              onChange={(e) => setDay(Number(e.target.value))}
            >
              {days.map((d) => (
                <option key={d} value={d}>
                  {d} {t.formDay}
                </option>
              ))}
            </select>
          </div>
        </fieldset>

        {error && <p className="mt-4 text-sm text-destructive">{t.formError}</p>}

        <button
          type="submit"
          className="mt-7 w-full rounded-xl bg-primary px-5 py-3.5 font-display text-sm font-semibold tracking-[0.08em] text-primary-foreground transition-all hover:shadow-lift hover:brightness-110"
        >
          {t.formSubmit}
        </button>
        <p className="mt-4 text-center text-xs leading-relaxed text-muted-foreground">
          {t.heroNote}
        </p>
      </form>
    </main>
  );
}
