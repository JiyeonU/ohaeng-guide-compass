import { Lunar, Solar } from "lunar-typescript";
import type { CalendarType, ElementKey } from "@/data/types";

export const ELEMENT_ORDER: ElementKey[] = ["wood", "fire", "earth", "metal", "water"];

/** Chinese five-element character (from the library's WuXing strings) -> our key. */
const CN_ELEMENT: Record<string, ElementKey> = {
  木: "wood",
  火: "fire",
  土: "earth",
  金: "metal",
  水: "water",
};

/** Heavenly stem (天干) -> element, used for the hidden stems (지장간/藏干) of each branch. */
const STEM_ELEMENT: Record<string, ElementKey> = {
  甲: "wood",
  乙: "wood",
  丙: "fire",
  丁: "fire",
  戊: "earth",
  己: "earth",
  庚: "metal",
  辛: "metal",
  壬: "water",
  癸: "water",
};

export interface OhaengResult {
  dominant: ElementKey;
  scores: Record<ElementKey, number>;
  percentages: Record<ElementKey, number>;
  /** Four-pillar Gan-Zhi (사주팔자). hour is null when the birth time is unknown. */
  pillars: { year: string; month: string; day: string; hour: string | null };
}

/**
 * Real, solar-term-aware Saju (BaZi) five-element calculation, fully client-side.
 *
 * Uses lunar-typescript so the YEAR pillar changes at 입춘 (立春) — not Jan 1 —
 * and the MONTH pillar changes at the solar terms (節/절기), not the calendar month.
 * The five-element distribution is a transparent tally of the pillars' visible
 * stems and branches (weight 1) plus the branch hidden stems / 지장간 (weight 0.3).
 * No random values and no date-arithmetic nudges.
 *
 * @param hour     0–23 birth hour, or null when unknown (then only 3 pillars are used).
 * @param calendar "solar" (양력, default) or "lunar" (음력) interpretation of the input date.
 */
export function calculateOhaeng(
  year: number,
  month: number,
  day: number,
  hour: number | null = null,
  calendar: CalendarType = "solar",
): OhaengResult {
  let lunar: Lunar;
  if (calendar === "lunar") {
    lunar =
      hour == null
        ? Lunar.fromYmd(year, month, day)
        : Lunar.fromYmdHms(year, month, day, hour, 0, 0);
  } else {
    const solar =
      hour == null
        ? Solar.fromYmd(year, month, day)
        : Solar.fromYmdHms(year, month, day, hour, 0, 0);
    lunar = solar.getLunar();
  }

  const ec = lunar.getEightChar();

  const scores: Record<ElementKey, number> = {
    wood: 0,
    fire: 0,
    earth: 0,
    metal: 0,
    water: 0,
  };

  // Visible stem + branch element of each pillar (WuXing string is two chars).
  const addWuXing = (wuxing: string, weight: number) => {
    for (const ch of wuxing) {
      const el = CN_ELEMENT[ch];
      if (el) scores[el] += weight;
    }
  };
  // Hidden stems (지장간) stored inside each earthly branch, at a smaller weight.
  const addHidden = (stems: string[], weight: number) => {
    for (const stem of stems) {
      const el = STEM_ELEMENT[stem];
      if (el) scores[el] += weight;
    }
  };

  addWuXing(ec.getYearWuXing(), 1);
  addWuXing(ec.getMonthWuXing(), 1);
  addWuXing(ec.getDayWuXing(), 1);
  addHidden(ec.getYearHideGan(), 0.3);
  addHidden(ec.getMonthHideGan(), 0.3);
  addHidden(ec.getDayHideGan(), 0.3);

  let hourPillar: string | null = null;
  if (hour != null) {
    addWuXing(ec.getTimeWuXing(), 1);
    addHidden(ec.getTimeHideGan(), 0.3);
    hourPillar = ec.getTime();
  }

  const total = ELEMENT_ORDER.reduce((sum, key) => sum + scores[key], 0) || 1;
  const percentages = {} as Record<ElementKey, number>;
  ELEMENT_ORDER.forEach((key) => {
    percentages[key] = Math.round((scores[key] / total) * 1000) / 10;
  });

  const dominant = ELEMENT_ORDER.reduce<ElementKey>(
    (best, key) => (scores[key] > scores[best] ? key : best),
    "wood",
  );

  return {
    dominant,
    scores,
    percentages,
    pillars: {
      year: ec.getYear(),
      month: ec.getMonth(),
      day: ec.getDay(),
      hour: hourPillar,
    },
  };
}
