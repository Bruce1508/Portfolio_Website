# Personal workspace redesign

The site uses a near-white palette, restrained green accents, compact navigation and project-focused content. No preloader or third-party map request blocks the homepage.

## Content

- `src/data/projects.tsx`: all project summaries, details, links and screenshots. Featured projects appear on the homepage. Each project has a static `/projects/[slug]` page.
- `src/data/config.ts`: identity, social links and metadata.
- `src/data/places.ts`: 13 Bruce-confirmed event entries. Each includes a title, role, city, venue, coordinates ([longitude, latitude]), description, and optional location precision note. Dates were not supplied.
- The homepage leads with Bruce’s name and a selectable RootLens screenshot preview. No portrait or résumé is published until provided.
- `src/data/skill-groups.ts` groups technologies already present in project data. `/skills` links each technology to the projects that use it.
- The homepage map illustration is explicitly labeled as a preview. Project artwork for bb-cli and Linguistic Twin is illustrative typography, not an application screenshot.

## Mapbox setup

Set `NEXT_PUBLIC_MAPBOX_TOKEN` in `.env.local` and your deployment environment, then rebuild. Use your own public Mapbox token with URL restrictions appropriate for your site. The map loads only after opening its dialog. Mapbox Standard provides 3D buildings. No token is borrowed from the reference website.

Event stories remain readable without a token. Shared campus coordinates produce one numbered marker that cycles through its events; every event is independently selectable in the sidebar. Show all places fits the map to all venues. Reduced motion disables the camera animation. Radix handles dialog focus, Escape and focus restoration.

Live tiles, credentials, billing and personal locations require owner configuration. Verify live map rendering after supplying the token.

## Contact and analytics

`RESEND_API_KEY` enables `/api/send`. Without it, validated submissions receive 503 and the UI provides the email alternative. The form preserves input after failure. Analytics loads only when both `UMAMI_DOMAIN` and `UMAMI_SITE_ID` are set.

## Review

Run `npm run lint` and `npm run build`. Preview desktop/mobile home, project details, About, Contact and Blog. Test map open/close/focus, missing-token state, reduced motion, and contact success/error with mocked responses (avoid sending real email during UI tests).

## Validation completed

- Production build and TypeScript checks passed (15 generated pages).
- Browser review at 1440px desktop, 900px intermediate, 390px mobile and 320px narrow mobile.
- Nine content routes return 200 with one h1 and no horizontal overflow at 390px.
- Contact success and failure simulated in the browser; no actual email sent.
- Invalid API submission returns 400.
- Missing-token map state, Escape dismissal, restored focus and reduced motion checked.
- Live Mapbox tile rendering and real email delivery still require configured services.

The cross-project ledger path `~/.Codex/projects-ledger.md` was not present during this session. Existing project entries cover bb-cli and Linguistic Twin from the supplied project ledger; RootLens is preserved from the portfolio data.

The frontend-design and Impeccable pass uses self-hosted Hanken Grotesk. Its independent reviewer scored two fixes (project metadata position and caption size) resolved. Screenshot evidence is in `.impeccable/review/`; the mechanical detector returned no findings. The RootLens view selector and mobile map focus restoration were checked. No actual email was sent.

## Résumé integration

Bruce supplied `BruceVo_SWE_Intern.pdf`; the unchanged file is served from `/resume/BruceVo_SWE_Intern.pdf`. `src/data/resume.ts` is the source for work history, project/community roles, education and résumé skills. Dates marked Present and quantified outcomes follow the supplied résumé. Experience has a full `/experience` page and a compact homepage summary. SkipClassPro and CSHub now have project pages, without invented source/demo links.

The supplied public Mapbox token is stored only in ignored `.env.local` (and necessarily included in the client build by Mapbox). Live Mapbox loading was confirmed locally. The map now contains 13 event entries across 11 pins, including Hack The North marked Incoming. Deployment still needs the token configured in its environment.

## Event map content

Participation and status come from Bruce’s supplied list. Campus pins are explicitly approximate, and the unspecified UofT locations use a labeled St. George reference pin. The Anthropic entry distinguishes online participation from its UofT presentation. The College Street entry aggregates unnamed events. No dates, awards, or project claims were inferred. BrainStation uses its current 482 Front Street address at The Well (approximate venue pin), verified at https://brainstation.io/toronto; STACKT address verified at https://stacktmarket.com/visit/toronto/.

Validation: production build and lint pass; browser checks confirmed 13 selectable entries, 11 markers, Incoming and hybrid text, Vancouver selection, Show all places, mobile width, and Escape dismissal.

## Homepage simplification

The homepage is now a personal introduction: supplied portrait, a compact Currently row sourced from the résumé, and links to projects, experience, skills, and personal places. Full project cards, skill lists, and experience details remain on their dedicated routes. Places & memories moved to About and is directly linked from the homepage. The RootLens hero preview was replaced with Bruce’s supplied camera portrait.

The portrait uses an SVG displacement filter only during hover/focus/press, settles after interaction, and cancels its animation frame on unmount. Reduced-motion CSS disables the effect. Original photo is preserved. Verified desktop/mobile screenshots, no horizontal overflow at 390px, hover displacement, reduced motion, and access to all 13 map entries from the new homepage link. Production build and lint pass.

## About: map-first redesign

About now opens directly into a large live map and event sidebar. Removed the prose biography, duplicate education/skills content, illustrated preview, dialog entry step, and Say hello CTA. All 13 entries remain selectable. Optional `photos` (src/alt/caption) and `reflection` fields render inside the selected event; no personal photos or feelings are invented. Asset instructions live in public/assets/memories/README.md. Desktop/mobile browser checks confirmed selection, 13 entries, removed CTA, and no horizontal overflow; production build and lint passed.

## Skills energy-bar prototype

Skills now retains the résumé's 29 entries in six groups, with technology icons, five-segment frequency bars, and expandable category context. Desktop uses two columns; mobile uses one. Frequency levels are explicitly illustrative, not verified usage or proficiency claims. Replace the prototype level calculation with Bruce-confirmed values before presenting these as actual usage. Browser checks verified all entries, expandable rows, final filled segment colors, and no horizontal overflow at 390px. Production build (including lint/type checks) passed.

## Homepage hackathon emphasis

Hero copy now identifies Seneca studies, Toronto, web/local AI work, eight attended hackathons, one upcoming Hack The North, and pool/football interests. A compact nine-entry hackathon passport links each event directly to its selected map story via ?place=. Incoming is visually distinct. Counts derive from confirmed place roles; no networking events counted as hackathons and no GitHub/token heatmap statistics invented. Desktop/mobile and event selection checks passed; build and lint passed.


## Publish cleanup

Removed the homepage hackathon passport and the Portfolio Website project entry at Bruce’s request. Restored Real Fruit to the homepage organization row, labeled Work & education because that role ended January 2026. Experience retains Maple first, Real Fruit ending January 2026, and the user-supplied May 2025 volunteer entry. The portrait and thought bubble remain. Fixed the invalid SiOpenapi import present on main; local production build passes.
