import type { ElementReportSet, UiStrings } from "./types";

export const uiEn: UiStrings = {
  langName: "English",
  brandTagline: "K-Wellness Intelligence",
  heroTitle: "Five Elements Wellness Report",
  heroSubtitle:
    "Discover your Ohaeng constitution from your birth date, and receive a Korean wellness plan built around it.",
  heroNote: "Calculated entirely in your browser. Your birth date never leaves this device.",
  formName: "Your name",
  formNamePlaceholder: "e.g. Emma Laurent",
  formBirth: "Date of birth",
  formYear: "Year",
  formMonth: "Month",
  formDay: "Day",
  formTime: "Birth time (optional)",
  timeUnknown: "Unknown",
  calendarLabel: "Calendar",
  solar: "Solar",
  lunar: "Lunar",
  formSubmit: "Generate my report",
  formError: "Please enter your name and a valid birth date.",
  reportTitle: "Five Elements Wellness Report",
  reportFor: "Prepared for",
  born: "Born",
  balance: "Elemental balance",
  sectionLabels: ["Section 01", "Section 02", "Section 03", "Section 04", "Section 05"],
  sectionTitles: [
    "Ohaeng Personality Type",
    "Body Constitution",
    "K-Wellness Plan",
    "Busan Healing Journey",
    "Daily Wellness Tips",
  ],
  download: "Download PDF report",
  downloading: "Preparing your PDF…",
  restart: "Start over",
  changeLanguage: "Language",
  traits: "Core traits",
  strengths: "Strengths",
  cautions: "Cautions",
  organs: "Related organs",
  emotion: "Governing emotion",
  links: "Emotional–physical links",
  teas: "Herbal tea prescription",
  exercises: "Tailored movement",
  morning: "Morning 5-minute routine",
  spotAction: "Wellness action",
  powerSeason: "Your power season",
  checklist: "Weekly checklist",
  quotes: "Korean wellness wisdom",
  elementNames: { wood: "Wood", fire: "Fire", earth: "Earth", metal: "Metal", water: "Water" },
  footer: "CenLuck · Five Elements Wellness Report · For wellness guidance only, not medical advice.",
  chooseLanguage: "Choose your language",
  shareTitle: "Save & share your report",
  copyLink: "Copy link",
  copied: "Copied!",
  share: "Share",
  scanToOpen: "Scan to open your report",
};

export const reportEn: ElementReportSet = {
  wood: {
    name: "Wood",
    symbol: "🌿",
    hanja: "木",
    tagline: "The Grower — rising energy, spring green, forward motion.",
    personality: {
      summary:
        "Wood people move like a young tree in spring: upward, curious and impossible to keep still. You plan, you start, you grow.",
      traits: ["Pioneering and idea-driven", "Warm, sociable, quick to trust", "Restless without a project"],
      strengths: ["Natural initiative and leadership", "Fast learner with wide interests", "Recovers energy quickly in nature"],
      cautions: ["Starts more than you finish", "Irritability when blocked or rushed", "Neglects rest during exciting phases"],
    },
    body: {
      organs: "Liver and gallbladder",
      organTraits: [
        "Tension gathers in the neck, shoulders and jaw",
        "Digestion reacts strongly to stress and late meals",
        "Eyes tire early after screens or travel",
      ],
      emotion: "Anger and frustration — the pressure of growth with nowhere to go",
      links: [
        "Suppressed frustration shows up as tight ribs and shallow breathing",
        "Sleep becomes light between 1–3 a.m. when the liver is overworked",
        "Stretching the sides of the body releases mood faster than talking",
      ],
    },
    wellness: {
      teas: [
        { name: "Mugwort tea (Ssuk-cha)", note: "Warm, softly bitter. Smooths liver energy — best mid-afternoon." },
        { name: "Chrysanthemum & goji tea", note: "Cools tired eyes and heat in the head. Take after screen work." },
      ],
      exercises: [
        "20 minutes of forest or riverside walking, no headphones",
        "Side-bending and twisting stretches to open the ribcage",
        "Gentle hiking twice a week instead of one hard gym session",
      ],
      morning: [
        "1 min — stand tall, roll shoulders back 10 times",
        "1 min — side stretch, 30 seconds each side",
        "1 min — spinal twist, breathing out on the turn",
        "1 min — press the point between your eyebrows and temples",
        "1 min — warm water, then name one single priority for today",
      ],
    },
    busan: [
      {
        spot: "Igidae Coastal Trail",
        action: "Walk the pine section slowly and breathe in a 4-6 count",
        note: "Sea wind plus forest air is the classic Wood reset.",
      },
      {
        spot: "Beomeosa Temple, Geumjeongsan",
        action: "Join a temple stay morning session or simply sit for 15 minutes",
        note: "Stillness among old trees settles restless upward energy.",
      },
      {
        spot: "Oncheoncheon Citizens' Park",
        action: "Stretch by the stream at sunset, then a bowl of wild greens bibimbap",
        note: "Green food for a green constitution.",
      },
    ],
    daily: {
      season: "Spring (February–April)",
      seasonNote: "Your energy peaks as buds open. Launch new plans here and rest in late summer.",
      checklist: [
        "Mon — write only three tasks, finish all three",
        "Tue — 20-minute green walk",
        "Wed — mugwort tea instead of a second coffee",
        "Thu — 10 minutes of side stretching before bed",
        "Fri — one meal with bitter greens",
        "Weekend — one hour outdoors with no screen",
      ],
      quotes: [
        { text: "A tree that bends in the wind does not break.", source: "Korean proverb" },
        { text: "Movement is the cheapest medicine.", source: "Oriental medicine saying" },
      ],
    },
  },
  fire: {
    name: "Fire",
    symbol: "🔥",
    hanja: "火",
    tagline: "The Illuminator — bright presence, fast heart, summer warmth.",
    personality: {
      summary:
        "Fire people warm every room they enter. You feel first and think second, and your enthusiasm is contagious.",
      traits: ["Expressive and charismatic", "Emotionally quick and generous", "Bores easily with routine"],
      strengths: ["Inspires and connects people effortlessly", "Decisive under pressure", "Rich intuition and humour"],
      cautions: ["Burns energy faster than you replace it", "Sleep suffers when the mind stays lit", "Says yes too often"],
    },
    body: {
      organs: "Heart and small intestine",
      organTraits: [
        "Palpitations or flushing when overstimulated",
        "Warm palms, dry mouth, thirst in the evening",
        "Appetite drops when emotions run high",
      ],
      emotion: "Joy and over-excitement — beautiful until it becomes agitation",
      links: [
        "Late-night talking or scrolling directly shortens deep sleep",
        "Chest tightness usually means emotion, not exertion",
        "Cooling the chest and feet calms the mind faster than willpower",
      ],
    },
    wellness: {
      teas: [
        { name: "Jujube & lotus seed tea", note: "Sweet and calming. Take one hour before bed to quiet the heart." },
        { name: "Omija (schisandra) tea", note: "Five-flavour berry, served cool. Restores fluids after heat or exercise." },
      ],
      exercises: [
        "Swimming or water walking twice a week",
        "Slow yin yoga or long exhale breathing, 15 minutes",
        "Avoid high-intensity training after 8 p.m.",
      ],
      morning: [
        "1 min — palms on chest, feel the heartbeat slow",
        "1 min — 6 long exhales, twice as long as the inhale",
        "1 min — shake out hands and feet",
        "1 min — press the centre of each palm and the inner wrist",
        "1 min — room-temperature water and one honest sentence in a journal",
      ],
    },
    busan: [
      {
        spot: "Haeundae Beach at sunrise",
        action: "Barefoot walk on wet sand for 20 minutes before the crowds",
        note: "Cool water grounding for an overheated constitution.",
      },
      {
        spot: "Hurshimchung hot spring, Dongnae",
        action: "Short warm soak, then a full cool rinse — repeat twice, no longer",
        note: "Contrast bathing regulates Fire circulation.",
      },
      {
        spot: "Dalmaji Hill moon-viewing path",
        action: "Evening walk, phone off, watch the moon over the sea",
        note: "Quiet beauty is medicine for the heart.",
      },
    ],
    daily: {
      season: "Summer (May–July)",
      seasonNote: "You shine strongest in heat — but schedule deliberate cool-down weeks.",
      checklist: [
        "Mon — screens off 60 minutes before bed",
        "Tue — swim or water walk",
        "Wed — jujube tea in the evening",
        "Thu — say no to one optional request",
        "Fri — 15 minutes of slow breathing",
        "Weekend — one full afternoon with nothing scheduled",
      ],
      quotes: [
        { text: "A calm heart makes a long life.", source: "Korean proverb" },
        { text: "Rest before you are tired; drink before you are thirsty.", source: "Dongui Bogam tradition" },
      ],
    },
  },
  earth: {
    name: "Earth",
    symbol: "⛰️",
    hanja: "土",
    tagline: "The Nurturer — steady centre, late-summer gold, deep roots.",
    personality: {
      summary:
        "Earth people are the ground others stand on. Reliable, hospitable and thoughtful, you carry more than you admit.",
      traits: ["Loyal and deeply caring", "Practical, methodical, patient", "Slow to change direction"],
      strengths: ["Builds trust and lasting relationships", "Excellent at finishing what matters", "Calm in a crisis"],
      cautions: ["Over-gives until you are empty", "Worry loops and overthinking", "Comfort eating when stressed"],
    },
    body: {
      organs: "Spleen and stomach",
      organTraits: [
        "Digestion is your weather vane — bloating signals overload",
        "Heaviness in the limbs after irregular meals",
        "Sweet cravings rise with mental fatigue",
      ],
      emotion: "Worry and rumination — care turned inward",
      links: [
        "Skipped or rushed meals show up as low mood by afternoon",
        "Sitting too long thickens the heaviness in the legs",
        "Warm cooked food lifts thinking, cold raw food dulls it",
      ],
    },
    wellness: {
      teas: [
        { name: "Roasted barley tea (Bori-cha)", note: "Everyday base drink. Warm, easy on the stomach, no caffeine." },
        { name: "Ginger & jujube tea", note: "Warms a damp middle. Ideal after a heavy or cold meal." },
      ],
      exercises: [
        "Brisk 30-minute walk right after lunch",
        "Core and hip strengthening twice a week",
        "Abdominal self-massage, clockwise, 3 minutes nightly",
      ],
      morning: [
        "1 min — knead the belly clockwise",
        "1 min — 10 slow squats or chair stands",
        "1 min — tap along the front of the thighs downward",
        "1 min — warm ginger water, sipped slowly",
        "1 min — decide what you will not carry for others today",
      ],
    },
    busan: [
      {
        spot: "Jagalchi & Bupyeong Kkangtong Market",
        action: "Eat one warm, freshly cooked meal seated — no walking and eating",
        note: "Earth heals through unhurried nourishment.",
      },
      {
        spot: "Geumgang Park & Geumjeongsanseong Fortress",
        action: "Gentle uphill walk for 40 minutes, steady rhythm",
        note: "Regular pace strengthens the Earth centre.",
      },
      {
        spot: "Songdo Yonggung Suspension Bridge",
        action: "Slow crossing with grounding breath, three stops to look down",
        note: "Trusting your footing is the Earth lesson.",
      },
    ],
    daily: {
      season: "Late summer (August)",
      seasonNote: "Your steadiness peaks in the harvest weeks. Guard your meal times year-round.",
      checklist: [
        "Mon — three meals at fixed times",
        "Tue — walk after lunch",
        "Wed — barley tea replaces one sweet drink",
        "Thu — 3-minute belly massage before bed",
        "Fri — ask someone for help once",
        "Weekend — cook one warm meal from scratch",
      ],
      quotes: [
        { text: "Food is the best medicine.", source: "Korean saying (Yaksik dongwon)" },
        { text: "A slow step still reaches the mountain top.", source: "Korean proverb" },
      ],
    },
  },
  metal: {
    name: "Metal",
    symbol: "⚪",
    hanja: "金",
    tagline: "The Refiner — clear lines, autumn air, precision and principle.",
    personality: {
      summary:
        "Metal people see the structure inside the mess. You value clarity, quality and doing things properly.",
      traits: ["Disciplined and detail-aware", "Principled, private, self-contained", "Strong sense of fairness"],
      strengths: ["Exceptional focus and standards", "Cuts clutter and decides cleanly", "Trustworthy under scrutiny"],
      cautions: ["Perfectionism turns into self-criticism", "Holds grief and disappointment silently", "Rigid when plans change"],
    },
    body: {
      organs: "Lungs and large intestine",
      organTraits: [
        "Dry skin, dry nose and throat, especially in autumn",
        "Shallow breathing when concentrating hard",
        "Sensitive to dust, dry air and sudden cold",
      ],
      emotion: "Grief and letting go — the season of release",
      links: [
        "Unspoken sadness sits as a weight on the upper chest",
        "Posture collapse reduces breath before you notice the mood",
        "Deep breathing plus hydration lifts low mood measurably",
      ],
    },
    wellness: {
      teas: [
        { name: "Pear & balloon-flower root tea (Doraji)", note: "Moistens the lungs and soothes the throat. Best in dry weather." },
        { name: "Job's tears tea (Yulmu-cha)", note: "Creamy and grounding. A gentle daily lung and skin tonic." },
      ],
      exercises: [
        "Breath-led practice: 10 minutes of 4-7-8 breathing daily",
        "Chest-opening stretches and doorway pec stretch",
        "Steady cardio in clean air — pool, coastal path, or early morning",
      ],
      morning: [
        "1 min — arms wide, open the chest, breathe deep",
        "1 min — 4-7-8 breathing, four rounds",
        "1 min — tap the upper chest and collarbone lightly",
        "1 min — warm pear or doraji tea",
        "1 min — write one thing you are willing to release today",
      ],
    },
    busan: [
      {
        spot: "Haedong Yonggungsa Temple",
        action: "Breathe with the wave rhythm at the sea-cliff shrine, 10 minutes",
        note: "Sea mist is natural lung therapy for Metal types.",
      },
      {
        spot: "Museum of Contemporary Art Busan, Eulsukdo",
        action: "One slow gallery loop, then 20 minutes in the wetland",
        note: "Clean form and quiet order restore Metal clarity.",
      },
      {
        spot: "Taejongdae cliffs",
        action: "Walk the pine loop and stop at each viewpoint for five long breaths",
        note: "Wide horizons loosen a tight chest.",
      },
    ],
    daily: {
      season: "Autumn (September–October)",
      seasonNote: "Clarity and stamina peak in dry, bright air. Humidify and hydrate in winter.",
      checklist: [
        "Mon — 10 minutes of breathwork",
        "Tue — chest-opening stretch twice",
        "Wed — pear or doraji tea",
        "Thu — finish something at 80% and let it go",
        "Fri — 2 litres of water, tracked",
        "Weekend — one hour of sea or forest air",
      ],
      quotes: [
        { text: "Even white jade needs polishing.", source: "Korean proverb" },
        { text: "Breath is the bridge between body and mind.", source: "Oriental medicine saying" },
      ],
    },
  },
  water: {
    name: "Water",
    symbol: "💧",
    hanja: "水",
    tagline: "The Deep Thinker — winter stillness, quiet strength, long memory.",
    personality: {
      summary:
        "Water people go deep rather than wide. Observant, imaginative and self-reliant, you conserve energy until it matters.",
      traits: ["Reflective and perceptive", "Independent, comfortable alone", "Strong intuition about people"],
      strengths: ["Endurance and long-term thinking", "Creative depth and originality", "Reads a room without speaking"],
      cautions: ["Withdraws instead of asking", "Fear and hesitation delay action", "Cold hands, feet and low reserves in winter"],
    },
    body: {
      organs: "Kidneys and bladder",
      organTraits: [
        "Lower back and knees signal fatigue first",
        "Cold sensitivity, especially feet and lower belly",
        "Energy dips sharply after poor sleep",
      ],
      emotion: "Fear and caution — the instinct to conserve",
      links: [
        "Chronic overwork drains reserves before you feel tired",
        "Warming the lower back visibly improves mood and sleep",
        "Hydration and salt balance affect your focus more than most",
      ],
    },
    wellness: {
      teas: [
        { name: "Black bean tea (Geomeun-kong-cha)", note: "Nutty and warming. A traditional kidney and hair tonic." },
        { name: "Cinnamon & ginger tea (Sujeonggwa style)", note: "Warms the core in cold months. Take mid-morning." },
      ],
      exercises: [
        "Warm-up first, always — never train cold",
        "Lower-back and hamstring strengthening twice a week",
        "Hot spring or warm bath, 15 minutes, twice a week",
      ],
      morning: [
        "1 min — rub the lower back until warm",
        "1 min — 10 slow heel raises",
        "1 min — squat-hold breathing, hands on knees",
        "1 min — warm black bean or ginger tea",
        "1 min — one small action toward a long-term goal",
      ],
    },
    busan: [
      {
        spot: "Hurshimchung / Dongnae hot springs",
        action: "Warm soak with the lower back submerged, 15 minutes maximum",
        note: "Mineral heat is the direct Water prescription.",
      },
      {
        spot: "Gamcheon Culture Village",
        action: "Slow uphill wander, sketch or photograph one detail",
        note: "Creative attention feeds Water energy.",
      },
      {
        spot: "Gwangalli Beach at night",
        action: "Sit with the bridge lights, 10 minutes of silent watching",
        note: "Water restores by stillness, not stimulation.",
      },
    ],
    daily: {
      season: "Winter (November–January)",
      seasonNote: "Your reserves are deepest in the cold — but this is also when you must protect them.",
      checklist: [
        "Mon — warm the lower back and feet",
        "Tue — strength session with a full warm-up",
        "Wed — black bean tea",
        "Thu — sleep before 11 p.m. once this week",
        "Fri — ask for one thing you would normally handle alone",
        "Weekend — warm bath or hot spring",
      ],
      quotes: [
        { text: "Still water runs deep.", source: "Korean proverb" },
        { text: "Warm the lower body, cool the head.", source: "Dongui Bogam principle" },
      ],
    },
  },
};
