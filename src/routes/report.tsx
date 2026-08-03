import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { WellnessReport } from "@/components/WellnessReport";
import { LANGUAGES } from "@/data/locales";
import type { CalendarType, LangKey } from "@/data/types";

export interface ReportSearch {
  lang: LangKey;
  name: string;
  y: number;
  m: number;
  d: number;
  h: number | null;
  cal: CalendarType;
}

function toInt(value: unknown, fallback: number) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? Math.trunc(parsed) : fallback;
}

export const Route = createFileRoute("/report")({
  validateSearch: (search: Record<string, unknown>): ReportSearch => {
    const rawLang = String(search["lang"] ?? "en") as LangKey;
    const rawName = search["name"];
    const rawHour = search["h"];
    const rawCal = String(search["cal"] ?? "solar");
    return {
      lang: LANGUAGES.includes(rawLang) ? rawLang : "en",
      name: typeof rawName === "string" ? rawName.slice(0, 60) : "",
      y: Math.min(2025, Math.max(1930, toInt(search["y"], 1995))),
      m: Math.min(12, Math.max(1, toInt(search["m"], 5))),
      d: Math.min(31, Math.max(1, toInt(search["d"], 15))),
      h:
        rawHour === undefined || rawHour === null || rawHour === ""
          ? null
          : Math.min(23, Math.max(0, toInt(rawHour, 0))),
      cal: rawCal === "lunar" ? "lunar" : "solar",
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
  const { lang, name, y, m, d, h, cal } = Route.useSearch();
  const navigate = useNavigate();

  return (
    <WellnessReport
      lang={lang}
      input={{ name: name || "Guest", year: y, month: m, day: d, hour: h, calendar: cal }}
      onChangeLang={(next) =>
        navigate({
          to: "/report",
          search: { lang: next, name, y, m, d, cal, ...(h != null ? { h } : {}) },
        })
      }
      onRestart={() => navigate({ to: "/", search: { lang } })}
    />
  );
}
