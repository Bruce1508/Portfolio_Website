---
name: Bruce Vo Portfolio
description: Real software on a quiet chalk ground, with restrained moss accents.
colors:
  background: "hsl(90 20% 98%)"
  foreground: "hsl(120 9% 14%)"
  moss: "#355e43"
  moss-hover: "#244730"
  ink: "#202620"
  secondary-text: "#626c60"
  rule: "#dce2d8"
  field: "#edf1e9"
  white: "#ffffff"
  input-border: "#b7c2b0"
typography:
  display:
    fontFamily: '"Hanken Grotesk Variable", sans-serif'
    fontSize: "clamp(64px, 6.6vw, 96px)"
    fontWeight: 650
    lineHeight: 1.08
    letterSpacing: "-0.04em"
  headline:
    fontFamily: '"Hanken Grotesk Variable", sans-serif'
    fontSize: "36px"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  title:
    fontFamily: '"Hanken Grotesk Variable", sans-serif'
    fontSize: "29px"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.035em"
  body:
    fontFamily: '"Hanken Grotesk Variable", sans-serif'
    fontSize: "16px"
    lineHeight: 1.6
  label:
    fontFamily: '"Hanken Grotesk Variable", sans-serif'
    fontSize: "12px"
    lineHeight: 1.6
rounded:
  control: "4px"
  button: "5px"
  artwork: "6px"
  panel: "7px"
  preview: "9px"
spacing:
  small: "8px"
  control: "12px"
  inset: "16px"
  medium: "20px"
  group: "24px"
  grid: "32px"
components:
  button-primary:
    backgroundColor: "{colors.moss}"
    textColor: "{colors.white}"
    rounded: "{rounded.button}"
    padding: "12px 20px"
  button-primary-hover:
    backgroundColor: "{colors.moss-hover}"
    textColor: "{colors.white}"
  text-link:
    textColor: "{colors.ink}"
  input:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.control}"
    padding: "12px"
  preview-selector-selected:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "6px 8px"
  preview-panel:
    backgroundColor: "{colors.field}"
    rounded: "{rounded.preview}"
    padding: "16px 16px 0"
---

# Design System: Bruce Vo Portfolio

## Overview

**Creative North Star: "Real software leads"**

The built portfolio follows the user-approved Aman-inspired professional direction: a light ground, restrained green, generous separation, and direct sans-serif typography. Application imagery and readable project descriptions carry its identity. This records the current implementation, replacing the older Mechanic Noir description as visual guidance.

The result feels calm and practical. Professional claims are supported by actual work; the interface gives screenshots, project names, and links room to explain that work. The accepted direction lives in `docs/design-direction.md`; content constraints live in `PRODUCT.md`.

**Key Characteristics:**
- Chalk surfaces and moss actions.
- Self-hosted Hanken Grotesk throughout the interface.
- Open project compositions with metadata below titles.
- Skills connected to projects that use them.
- Quiet interaction states and visible keyboard focus.

## Colors

The palette is green-tinted and low contrast between surfaces, with dark text providing the reading contrast. Frontmatter values are extracted from `src/app/globals.css`; the body background and foreground preserve their normative HSL declarations rather than substituting the near-identical concept colors.

### Primary
- **Moss:** primary actions, skill icons, wordmark punctuation, and focus outlines.
- **Deep moss:** primary button hover.

### Neutral
- **Chalk background:** page canvas.
- **Foreground / ink:** body and strong text; the two source declarations are deliberately recorded separately.
- **Secondary text:** descriptions, metadata, navigation at rest, and technology lists.
- **Rule:** section and skill-row dividers.
- **Field:** screenshot selector surround and places copy panel.
- **White:** selected screenshot control, form fields, and primary-button text.
- **Input border:** field boundaries.

Project artwork retains its own source-specific colors: dark evergreen terminal art, pale blue language art, and the actual RootLens application UI. These are artwork treatments rather than global action colors.

**The Evidence Color Rule.** Keep global controls moss; allow actual project imagery to preserve its own palette.

## Typography

Display and body use self-hosted **Hanken Grotesk Variable**, imported through `@fontsource-variable/hanken-grotesk` in `src/app/layout.tsx`, with sans-serif fallback. System monospace is confined to terminal artwork (`SFMono-Regular`, Consolas, monospace).

The hierarchy uses size, weight, and spacing rather than a second editorial font. Headings have close tracking; descriptive copy keeps comfortable line spacing.

- **Display:** homepage name uses the frontmatter clamp; responsive overrides are (72px) below 1000px, (80px) below 760px, and (72px) below 520px.
- **Page title:** interior pages use (64px), then (52px) below 760px and (43px) below 520px.
- **Headline:** section headings use the headline role, reduced to (30px) on narrow screens.
- **Project title:** standard role is (29px); the featured home title is (40px). Narrow cards use (30px).
- **Body:** project summaries use (16px/1.65), introductory description (16px/1.75), and long detail prose (16px/1.85). Summary width is capped at (60ch), page leads at (65ch), and detail text at (72ch).
- **Labels:** metadata and technology lists are (12px), sentence case. Navigation and primary buttons are (14px); button weight is (550).

**The Title First Rule.** Project titles precede category metadata. An optional in-progress status sits alongside the title, not above it.

## Layout

The shared container is `min(1160px, calc(100% - 80px))`, centered. Gutters become (28px) per side below 1000px and (18px) below 520px. Main sections use top borders and desktop vertical padding of (58px 0 65px), reduced to (40px 0 45px) on small screens.

The home introduction has two columns (0.88fr / 1.12fr), a (48px) gap, and (65px 0 90px) padding. It becomes a single column below 760px. Screenshot controls remain above the image and the caption below it.

Project grids use two equal columns with (55px) row gaps and (32px) column gaps. The first selected home project spans both columns and pairs artwork with text (1.28fr / 1fr); it stacks below 760px. All project grids become one column below 520px. Cards have open copy rather than enclosing borders or filled text boxes.

Skill rows pair a (240px) category column with a four-column inventory. Below 1000px this becomes (190px) plus three columns; below 760px the category stacks above a four-column inventory; below 520px the inventory uses two columns. The full skills page shows all project evidence links, while home shows one example per skill.

The header is ordinary document flow. On narrow screens the navigation wraps to a complete second row with evenly distributed links. Interior reading pages reuse the same container and spacing grammar. The places panel and contact layout stack on small screens.

## Elevation & Depth

The site is mostly flat. Background tone, thin rules, and generous spacing create grouping. Depth belongs to application screenshots and the map marker, not to every content block. Screenshot shadows are (0 7px 20px #26332012) in the hero preview and (0 5px 20px #152c241a) in project artwork. The map marker uses (0 2px 8px #0004).

Motion is limited to interaction: buttons transition background over (0.2s); image links darken slightly on hover; text links underline. Smooth scrolling is enabled normally. Reduced-motion preferences disable smooth scroll and reduce animation and transition durations to (0.01ms).

## Shapes

Small curved corners soften rectangular controls and imagery. Controls, buttons, artwork, panels, and the hero preview use the frontmatter radius roles. Project copy itself has no bounding shape. Dividers and form borders are (1px). The round map marker is a localized map convention, not the default shape for other UI.

## Components

### Buttons and links

Primary actions use moss with white text, a matching (1px) border, (14px) type, and a minimum height of (45px). Hover darkens the fill. Secondary actions are text links with a small arrow and an underline on hover. Focus uses a (2px) moss outline offset by (5px). Disabled buttons reduce opacity to (0.6) and use a wait cursor.

### RootLens preview

A pale field surrounds real application screenshots. Overview, Investigation, and Evidence are buttons with `aria-pressed`; the active view gains a white background. The screen clips at its top-left origin using `object-fit: cover`. Its aspect ratio varies with breakpoint: (1.35) desktop, (1.15) below 1000px, (1.65) below 760px, and (1.3) below 520px. Small labels and the project detail link sit below the image. Preserve genuine screenshots and distinct selectable views.

### Project cards

Artwork comes first; title and optional status follow; category metadata sits below the title, then summary, a plain wrapping technology list, and the project-detail link. Technology names are unboxed text rather than pill badges. RootLens uses its real screenshot; projects without screenshots use purpose-specific typographic illustrations. Artwork links darken to brightness (0.97) on hover.

### Skills inventory

Each entry combines a moss icon with a (15px, 550-weight) name. Beneath it, small project links provide evidence of use. The grouped rows use rules and whitespace, not raised cards or proficiency meters. Project links underline and turn moss on hover.

### Inputs / Fields

Contact fields use a white background, input-border stroke, control radius, and (12px) padding. Text is (16px); labels are (14px). The textarea has a (160px) minimum height and can resize vertically. Focus follows the shared outline. Status text is (14px); no separate custom error-field palette is established.

### Navigation

Navigation is secondary-colored (14px) text, with (30px) desktop gaps. Active and hovered links become ink; the active page also receives a thin inset underline. On small screens the links remain visible in their own row at (13px), rather than collapsing into a menu. A focus-revealed skip link precedes the header.

### Places panel

The illustration is explicitly labeled as a preview. Copy and a primary action sit beside it on desktop and below it on mobile. The map dialog uses a map/sidebar arrangement which stacks on mobile. The live map can show a Toronto preview; personal memories remain explicitly pending until provided.

## Do's and Don'ts

### Do:
- **Do** use the self-hosted sans-serif hierarchy and quiet moss actions.
- **Do** keep project titles above metadata and connect skills to real project use.
- **Do** retain source-specific colors in actual product imagery.
- **Do** preserve visible keyboard focus, responsive stacking, and reduced-motion behavior.

### Don't:
- **Don't** replace the accepted light/green direction with the obsolete dark Mechanic Noir styling.
- **Don't** add decorative numbered eyebrows, warm serif monograms, or repeated filler copy.
- **Don't** turn plain project metadata and technology lists into decorative pill collections.
- **Don't** invent screenshots, résumé claims, experience, or personal map locations.

### Résumé surfaces

Experience uses a date column and a one-pixel timeline beside role, organization, and achievement text. At narrow widths, dates stack above entries. Education exposes coursework in a native disclosure. The Skills page separates résumé-listed technologies from project-linked evidence, retaining explicit Fundamentals qualifiers. Résumé links open the original PDF or download it.
