import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { BirthForm } from "@/components/BirthForm";
import { LanguageGate } from "@/components/LanguageGate";
import { LANGUAGES } from "@/data/locales";
import type { LangKey } from "@/data/types";

export const Route = createFileRoute("/")({
  validateSearch: (search: Record<string, unknown>): { lang?: LangKey } => {
    const raw = search["lang"];
    return typeof raw === "string" && LANGUAGES.includes(raw as LangKey)
      ? { lang: raw as LangKey }
      : {};
  },
  head: () => ({
    meta: [
      { title: "Five Elements Wellness Report | CenLuck K-Wellness" },
      {
        name: "description",
        content:
          "Find your Ohaeng (Five Elements) constitution from your birth date and get a Korean wellness plan, Busan healing journey and PDF report in English, Korean or Chinese.",
      },
      { property: "og:title", content: "Five Elements Wellness Report | CenLuck" },
      {
        property: "og:description",
        content:
          "Ohaeng constitution, K-wellness plan, Busan healing spots and a downloadable PDF report — multilingual and fully private.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const { lang: langParam } = Route.useSearch();
  const navigate = useNavigate();
  const [lang, setLang] = useState<LangKey | null>(langParam ?? null);

  const chooseLang = (next: LangKey) => {
    setLang(next);
    navigate({ to: "/", search: { lang: next } });
  };

  if (!lang) return <LanguageGate onSelect={chooseLang} />;

  return (
    <BirthForm
      lang={lang}
      onChangeLang={chooseLang}
      onSubmit={(input) =>
        navigate({
          to: "/report",
          search: { lang, name: input.name, y: input.year, m: input.month, d: input.day },
        })
      }
    />
  );
}
