import type { ElementReportSet, LangKey, UiStrings } from "./types";
import { reportEn, uiEn } from "./report-en";
import { reportKo, uiKo } from "./report-ko";
import { reportZh, uiZh } from "./report-zh";

export const LANGUAGES: LangKey[] = ["en", "ko", "zh"];

export const LANG_LABELS: Record<LangKey, { native: string; latin: string }> = {
  en: { native: "English", latin: "International" },
  ko: { native: "한국어", latin: "Korean" },
  zh: { native: "中文", latin: "Chinese" },
};

export const UI: Record<LangKey, UiStrings> = { en: uiEn, ko: uiKo, zh: uiZh };
export const REPORTS: Record<LangKey, ElementReportSet> = {
  en: reportEn,
  ko: reportKo,
  zh: reportZh,
};
