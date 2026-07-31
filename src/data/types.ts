export type ElementKey = "wood" | "fire" | "earth" | "metal" | "water";
export type LangKey = "en" | "ko" | "zh";

export interface ElementReport {
  name: string;
  symbol: string;
  hanja: string;
  tagline: string;
  personality: {
    summary: string;
    traits: string[];
    strengths: string[];
    cautions: string[];
  };
  body: {
    organs: string;
    organTraits: string[];
    emotion: string;
    links: string[];
  };
  wellness: {
    teas: { name: string; note: string }[];
    exercises: string[];
    morning: string[];
  };
  busan: { spot: string; action: string; note: string }[];
  daily: {
    season: string;
    seasonNote: string;
    checklist: string[];
    quotes: { text: string; source: string }[];
  };
}

export type ElementReportSet = Record<ElementKey, ElementReport>;

export interface UiStrings {
  langName: string;
  brandTagline: string;
  heroTitle: string;
  heroSubtitle: string;
  heroNote: string;
  formName: string;
  formNamePlaceholder: string;
  formBirth: string;
  formYear: string;
  formMonth: string;
  formDay: string;
  formSubmit: string;
  formError: string;
  reportTitle: string;
  reportFor: string;
  born: string;
  balance: string;
  sectionLabels: string[];
  sectionTitles: string[];
  download: string;
  downloading: string;
  restart: string;
  changeLanguage: string;
  traits: string;
  strengths: string;
  cautions: string;
  organs: string;
  emotion: string;
  links: string;
  teas: string;
  exercises: string;
  morning: string;
  spotAction: string;
  powerSeason: string;
  checklist: string;
  quotes: string;
  elementNames: Record<ElementKey, string>;
  footer: string;
  chooseLanguage: string;
}
