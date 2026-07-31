import { useRef, useState } from "react";
import { LANG_LABELS, LANGUAGES, REPORTS, UI } from "@/data/locales";
import type { ElementKey, LangKey } from "@/data/types";
import { ELEMENT_ORDER, calculateOhaeng } from "@/lib/ohaeng";
import { exportReportPdf } from "@/lib/pdf";
import { CenLuckLogo } from "./CenLuckLogo";
import type { BirthInput } from "./BirthForm";

const BAR_COLOR: Record<ElementKey, string> = {
  wood: "bg-el-wood",
  fire: "bg-el-fire",
  earth: "bg-el-earth",
  metal: "bg-el-metal",
  water: "bg-el-water",
};

function SectionShell({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="card-report mt-6 p-6 sm:p-9">
      <p className="section-index">{label}</p>
      <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">{title}</h2>
      <div className="rule-gold mt-5 w-full" />
      <div className="mt-6">{children}</div>
    </section>
  );
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-xl border border-border bg-secondary/40 p-5">
      <h3 className="text-xs font-semibold tracking-[0.14em] text-celadon uppercase">{title}</h3>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2.5 text-sm leading-relaxed">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function WellnessReport({
  lang,
  input,
  onChangeLang,
  onRestart,
}: {
  lang: LangKey;
  input: BirthInput;
  onChangeLang: (lang: LangKey) => void;
  onRestart: () => void;
}) {
  const t = UI[lang];
  const result = calculateOhaeng(input.year, input.month, input.day);
  const element = REPORTS[lang][result.dominant];
  const reportRef = useRef<HTMLDivElement>(null);
  const [busy, setBusy] = useState(false);

  const handleDownload = async () => {
    if (!reportRef.current) return;
    setBusy(true);
    try {
      await exportReportPdf(reportRef.current, input.name, lang);
    } finally {
      setBusy(false);
    }
  };

  const birth = `${input.year}.${String(input.month).padStart(2, "0")}.${String(input.day).padStart(2, "0")}`;

  return (
    <main className="paper min-h-screen px-4 py-8 sm:px-6">
      <div className="mx-auto grid max-w-3xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
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
        <button
          type="button"
          onClick={onRestart}
          className="shrink-0 rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          {t.restart}
        </button>
      </div>

      <div ref={reportRef} className="mx-auto mt-6 max-w-3xl">
        {/* Cover */}
        <section className="card-report overflow-hidden">
          <div className="bg-primary px-6 py-10 text-center sm:px-10 sm:py-14">
            <div className="flex justify-center">
              <span className="rounded-full border border-primary-foreground/25 px-4 py-1.5 font-display text-xs tracking-[0.3em] text-primary-foreground uppercase">
                CenLuck
              </span>
            </div>
            <div className="mt-8 flex justify-center">
              <span className="grid size-28 place-items-center rounded-full border border-gold/50 bg-primary-foreground/5">
                <span className="font-display text-5xl text-gold">{element.hanja}</span>
              </span>
            </div>
            <p className="mt-4 text-3xl">{element.symbol}</p>
            <h1 className="mt-6 text-2xl font-semibold text-primary-foreground sm:text-3xl">
              {t.reportTitle}
            </h1>
            <p className="mt-3 text-sm text-primary-foreground/70">
              {t.reportFor} <span className="text-primary-foreground">{input.name}</span> ·{" "}
              {t.born} {birth}
            </p>
            <p className="mt-6 inline-block rounded-full bg-primary-foreground/10 px-5 py-2 font-display text-lg text-primary-foreground">
              {element.name}
            </p>
          </div>

          <div className="px-6 py-7 sm:px-10">
            <p className="text-center font-display text-base leading-relaxed text-foreground">
              {element.tagline}
            </p>
            <div className="rule-gold mt-7 w-full" />
            <h3 className="mt-6 text-xs font-semibold tracking-[0.14em] text-celadon uppercase">
              {t.balance}
            </h3>
            <div className="mt-4 space-y-2.5">
              {ELEMENT_ORDER.map((key) => (
                <div key={key} className="grid grid-cols-[4.5rem_minmax(0,1fr)_3rem] items-center gap-3">
                  <span
                    className={`truncate text-xs font-medium ${key === result.dominant ? "text-foreground" : "text-muted-foreground"}`}
                  >
                    {t.elementNames[key]}
                  </span>
                  <span className="h-2 rounded-full bg-secondary">
                    <span
                      className={`block h-2 rounded-full ${BAR_COLOR[key]}`}
                      style={{ width: `${Math.min(100, result.percentages[key] * 2.6)}%` }}
                    />
                  </span>
                  <span className="text-right text-xs text-muted-foreground">
                    {result.percentages[key]}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 1 */}
        <SectionShell label={t.sectionLabels[0]!} title={t.sectionTitles[0]!}>
          <p className="text-sm leading-relaxed text-foreground sm:text-base">
            {element.personality.summary}
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <ListBlock title={t.traits} items={element.personality.traits} />
            <ListBlock title={t.strengths} items={element.personality.strengths} />
            <ListBlock title={t.cautions} items={element.personality.cautions} />
          </div>
        </SectionShell>

        {/* Section 2 */}
        <SectionShell label={t.sectionLabels[1]!} title={t.sectionTitles[1]!}>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-accent/40 p-5">
              <h3 className="text-xs font-semibold tracking-[0.14em] text-celadon uppercase">
                {t.organs}
              </h3>
              <p className="mt-2 font-display text-xl">{element.body.organs}</p>
              <h3 className="mt-5 text-xs font-semibold tracking-[0.14em] text-celadon uppercase">
                {t.emotion}
              </h3>
              <p className="mt-2 text-sm leading-relaxed">{element.body.emotion}</p>
            </div>
            <ListBlock title={t.traits} items={element.body.organTraits} />
          </div>
          <div className="mt-4">
            <ListBlock title={t.links} items={element.body.links} />
          </div>
        </SectionShell>

        {/* Section 3 */}
        <SectionShell label={t.sectionLabels[2]!} title={t.sectionTitles[2]!}>
          <h3 className="text-xs font-semibold tracking-[0.14em] text-celadon uppercase">
            {t.teas}
          </h3>
          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            {element.wellness.teas.map((tea) => (
              <div key={tea.name} className="rounded-xl border border-gold/40 bg-gold/10 p-5">
                <p className="font-display text-lg">{tea.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{tea.note}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <ListBlock title={t.exercises} items={element.wellness.exercises} />
            <div className="rounded-xl border border-border bg-secondary/40 p-5">
              <h3 className="text-xs font-semibold tracking-[0.14em] text-celadon uppercase">
                {t.morning}
              </h3>
              <ol className="mt-3 space-y-2">
                {element.wellness.morning.map((step, i) => (
                  <li key={step} className="flex gap-3 text-sm leading-relaxed">
                    <span className="grid size-5 shrink-0 place-items-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </SectionShell>

        {/* Section 4 */}
        <SectionShell label={t.sectionLabels[3]!} title={t.sectionTitles[3]!}>
          <div className="grid gap-4">
            {element.busan.map((place, i) => (
              <div
                key={place.spot}
                className="grid grid-cols-[minmax(0,1fr)] gap-3 rounded-xl border border-border bg-card p-5 sm:grid-cols-[2.5rem_minmax(0,1fr)]"
              >
                <span className="hidden font-display text-2xl text-gold sm:block">
                  0{i + 1}
                </span>
                <div className="min-w-0">
                  <p className="font-display text-xl">{place.spot}</p>
                  <p className="mt-2 text-xs font-semibold tracking-[0.14em] text-celadon uppercase">
                    {t.spotAction}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed">{place.action}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground italic">
                    {place.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </SectionShell>

        {/* Section 5 */}
        <SectionShell label={t.sectionLabels[4]!} title={t.sectionTitles[4]!}>
          <div className="rounded-xl border border-celadon/30 bg-primary/5 p-5">
            <h3 className="text-xs font-semibold tracking-[0.14em] text-celadon uppercase">
              {t.powerSeason}
            </h3>
            <p className="mt-2 font-display text-xl">{element.daily.season}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {element.daily.seasonNote}
            </p>
          </div>
          <div className="mt-4 rounded-xl border border-border bg-secondary/40 p-5">
            <h3 className="text-xs font-semibold tracking-[0.14em] text-celadon uppercase">
              {t.checklist}
            </h3>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {element.daily.checklist.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm leading-relaxed">
                  <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-[4px] border border-celadon/60 text-[9px] text-celadon">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {element.daily.quotes.map((quote) => (
              <blockquote
                key={quote.text}
                className="rounded-xl border border-gold/40 bg-gold/10 p-5 text-center"
              >
                <p className="font-display text-lg leading-relaxed">“{quote.text}”</p>
                <footer className="mt-3 text-xs tracking-[0.14em] text-muted-foreground uppercase">
                  {quote.source}
                </footer>
              </blockquote>
            ))}
          </div>
        </SectionShell>

        <footer className="mt-6 flex flex-col items-center gap-4 py-6 text-center">
          <CenLuckLogo />
          <p className="text-xs text-muted-foreground">{t.footer}</p>
        </footer>
      </div>

      <div className="mx-auto mt-2 max-w-3xl pb-10">
        <button
          type="button"
          onClick={handleDownload}
          disabled={busy}
          className="w-full rounded-xl bg-primary px-5 py-4 font-display text-sm font-semibold tracking-[0.08em] text-primary-foreground transition-all hover:shadow-lift hover:brightness-110 disabled:opacity-60"
        >
          {busy ? t.downloading : t.download}
        </button>
      </div>
    </main>
  );
}
