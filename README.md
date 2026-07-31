# Wellness Compass

Create a static web app using React, TypeScript, and Tailwind CSS for international tourists to generate a Five Elements Wellness Report.

1. Initial Language Selection & Multilingual Data:

- The app must first prompt the user to select a language (English, Korean, Chinese) upon entry.

- Implement a structured repository/object structure inside the code to manage localized texts and report data separately for each language, ensuring that the input form and generated reports strictly match the selected language.

2. Client-Side Saju AI Logic (Zero Server Cost):

- Without any backend server communication, implement a lightweight browser-based JavaScript algorithm using birth year, month, and day to calculate and determine the dominant Ohaeng (Wood, Fire, Earth, Metal, Water) constitution and personality.

- Exclude complex hour or timezone calculation to prevent international compatibility errors; rely strictly on local birth date inputs.

3. Report UI Structure (5 Sections):

- Cover: User's name, Ohaeng symbol, and CenLuck brand logo.

- Section 1: Ohaeng Personality Type (traits, strengths, and cautions).

- Section 2: Body Constitution (traditional oriental medicine connection, organ traits, and emotional-physical links).

- Section 3: K-Wellness Plan (custom herbal tea recommendations, tailored exercises, and morning 5-minute routines).

- Section 4: Busan Healing Journey (3 curated Busan spots and wellness actions matching the Ohaeng type).

- Section 5: Daily Wellness Tips (power season weekly checklist and Korean wellness quotes).

4. PDF Export Feature:

- Include a button that allows users to export and download the generated report layout into an English/localized PDF file.

- Apply a clean, card-style responsive design optimized for both mobile and desktop screens.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://ohaeng-guide-compass.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/cbea9181-5244-4493-b8c9-6f2c324c07f7).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
