import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { WellnessReport } from "@/components/WellnessReport";
import { LANGUAGES } from "@/data/locales";
import type { LangKey } from "@/data/types";

export interface ReportSearch {
  lang: LangKey;
  name: string;
  y: number;
  m: number;
  d: number;
}

function toInt(value: unknown, fallback: number) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? Math.trunc(parsed) : fallback;
}

export const Route = createFileRoute("/report")({
  validateSearch: (search: Record<string, unknown>): ReportSearch => {
    const lang = String(search.lang ?? "en") as LangKey;
    return {
      lang: LANGUAGES.includes(lang) ? lang : "en",
      name: typeof search.name === "string" ? search.name.slice(0, 60) : "",
      y: Math.min(2025, Math.max(1930, toInt(search.y, 1995))),
      m: Math.min(12, Math.max(1, toInt(search.m, 5))),
      d: Math.min(31, Math.max(1, toInt(search.d, 15))),
    };
  },
  head: () => ({
    meta: [
      { title: "Your Five Elements Wellness Report | CenLuck" },
      {
        name: "description",
        content:
          "Your personal Ohaeng (Five Elements) constitution report with a Korean wellness plan, Busan healing journey and PDF download — shareable by link, in English, Korean or Chinese.",
      },
      { property: "og:title", content: "Your Five Elements Wellness Report | CenLuck" },
      {
        property: "og:description",
        content:
          "Ohaeng constitution, K-wellness plan, Busan healing spots and a downloadable PDF report — fully private, generated in your browser.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ReportPage,
});

function ReportPage() {
  const { lang, name, y, m, d } = Route.useSearch();
  const navigate = useNavigate();

  return (
    <WellnessReport
      lang={lang}
      input={{ name: name || "Guest", year: y, month: m, day: d }}
      onChangeLang={(next) =>
        navigate({ to: "/report", search: (prev) => ({ ...prev, lang: next }) })
      }
      onRestart={() => navigate({ to: "/", search: { lang } })}
    />
  );
}
