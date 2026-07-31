import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BirthForm, type BirthInput } from "@/components/BirthForm";
import { LanguageGate } from "@/components/LanguageGate";
import { WellnessReport } from "@/components/WellnessReport";
import type { LangKey } from "@/data/types";

export const Route = createFileRoute("/")({
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
  const [lang, setLang] = useState<LangKey | null>(null);
  const [input, setInput] = useState<BirthInput | null>(null);

  if (!lang) return <LanguageGate onSelect={setLang} />;

  if (!input) {
    return <BirthForm lang={lang} onChangeLang={setLang} onSubmit={setInput} />;
  }

  return (
    <WellnessReport
      lang={lang}
      input={input}
      onChangeLang={setLang}
      onRestart={() => setInput(null)}
    />
  );
}
