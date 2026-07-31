import type { ElementKey } from "@/data/types";

export const ELEMENT_ORDER: ElementKey[] = ["wood", "fire", "earth", "metal", "water"];

/** Heavenly-stem element cycle: 0-9 -> wood, wood, fire, fire, earth, earth, metal, metal, water, water */
const STEM_ELEMENTS: ElementKey[] = [
  "wood",
  "wood",
  "fire",
  "fire",
  "earth",
  "earth",
  "metal",
  "metal",
  "water",
  "water",
];

/** Earthly-branch element by index 0-11 (starting at 子 / rat). */
const BRANCH_ELEMENTS: ElementKey[] = [
  "water",
  "earth",
  "wood",
  "wood",
  "earth",
  "fire",
  "fire",
  "earth",
  "metal",
  "metal",
  "earth",
  "water",
];

/** Seasonal element of the birth month (solar-month approximation, no hour/timezone math). */
const MONTH_ELEMENTS: ElementKey[] = [
  "water", // Jan
  "wood", // Feb
  "wood", // Mar
  "earth", // Apr
  "fire", // May
  "fire", // Jun
  "earth", // Jul
  "metal", // Aug
  "metal", // Sep
  "earth", // Oct
  "water", // Nov
  "water", // Dec
];

export interface OhaengResult {
  dominant: ElementKey;
  scores: Record<ElementKey, number>;
  percentages: Record<ElementKey, number>;
  yearStemElement: ElementKey;
  yearBranchElement: ElementKey;
}

/**
 * Lightweight, fully client-side Ohaeng (Five Elements) calculation.
 * Uses birth year / month / day only — no birth hour, no timezone conversion,
 * so the same local date always produces the same result anywhere in the world.
 */
export function calculateOhaeng(year: number, month: number, day: number): OhaengResult {
  const stemIndex = (((year - 4) % 10) + 10) % 10;
  const branchIndex = (((year - 4) % 12) + 12) % 12;

  const at = <T,>(arr: T[], i: number): T => arr[((i % arr.length) + arr.length) % arr.length] as T;

  const yearStemElement = at(STEM_ELEMENTS, stemIndex);
  const yearBranchElement = at(BRANCH_ELEMENTS, branchIndex);
  const monthElement = at(MONTH_ELEMENTS, Math.min(Math.max(month, 1), 12) - 1);

  // Day pillar stem, derived from a fixed reference day count (Julian-style day number).
  const dayNumber = Math.floor(Date.UTC(year, month - 1, day) / 86400000);
  const dayStemElement = at(STEM_ELEMENTS, dayNumber + 9);
  const dayBranchElement = at(BRANCH_ELEMENTS, dayNumber + 1);

  const scores: Record<ElementKey, number> = {
    wood: 0,
    fire: 0,
    earth: 0,
    metal: 0,
    water: 0,
  };

  // Weighted pillars: day stem carries the self, month carries the season.
  scores[dayStemElement] += 3.2;
  scores[monthElement] += 2.8;
  scores[yearStemElement] += 2.1;
  scores[dayBranchElement] += 1.6;
  scores[yearBranchElement] += 1.3;

  // Small deterministic nudge so neighbouring dates differ smoothly.
  scores[at(ELEMENT_ORDER, day)] += 0.6;
  scores[at(ELEMENT_ORDER, year + month)] += 0.4;

  const total = ELEMENT_ORDER.reduce((sum, key) => sum + scores[key], 0);
  const percentages = {} as Record<ElementKey, number>;
  ELEMENT_ORDER.forEach((key) => {
    percentages[key] = Math.round((scores[key] / total) * 1000) / 10;
  });

  const dominant = ELEMENT_ORDER.reduce<ElementKey>(
    (best, key) => (scores[key] > scores[best] ? key : best),
    "wood",
  );

  return { dominant, scores, percentages, yearStemElement, yearBranchElement };
}
