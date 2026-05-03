# Design Brief

## Direction

Padma Home Food — Warm, vibrant South Indian restaurant website celebrating authentic home food with modern elegance.

## Tone

Welcoming and celebratory, like entering a traditional South Indian home kitchen with contemporary polish and refinement.

## Differentiation

Rich spice-inspired color palette (saffron, turmeric, curry) paired with elegant serif typography creates an unforgettable premium home food experience.

## Color Palette

| Token              | OKLCH          | Role                                    |
| :----------------- | :------------- | :-------------------------------------- |
| background         | 0.96 0.018 65  | Warm cream base for food photography  |
| foreground         | 0.18 0.025 50  | Deep warm brown text                  |
| primary            | 0.58 0.19 40   | Saffron/curry orange — buttons, CTAs |
| accent             | 0.48 0.16 155  | Deep warm green — secondary accents  |
| muted              | 0.92 0.025 75  | Warm beige — subtle backgrounds      |
| border             | 0.88 0.02 65   | Warm neutral dividers                 |
| card               | 0.98 0.008 65  | Off-white surface for menu cards     |

## Typography

- Display: Fraunces (serif) — Restaurant name, hero headlines, section titles
- Body: Satoshi (warm sans-serif) — Menu descriptions, body text, UI labels
- Scale: Hero 6xl-7xl bold tight, Headings 3xl-5xl bold, Labels sm uppercase semibold, Body base-lg

## Elevation & Depth

Warm subtle shadows (offset 2-4px, blur 8-16px with warm undertone) create gentle card separation without harshness; content sections alternate background density.

## Structural Zones

| Zone    | Background         | Border             | Notes                                     |
| :------ | :----------------- | :----------------- | :---------------------------------------- |
| Header  | primary / warm bg  | primary underline  | Fixed, logo + nav, warm spice dominance  |
| Content | background         | —                  | Warm cream, card grid sections alternate |
| Footer  | primary / muted    | subtle top border  | Warm footer with contact, hours, links   |

## Spacing & Rhythm

Generous spacing (6rem+ sections, 2rem gaps) with tight 12px rounded corners on cards; micro-spacing 1rem for menu item padding, creating rhythm through grouping and breathing room.

## Component Patterns

- Buttons: Saffron primary with white text, 12px radius, hover darkens chroma and lightens slightly
- Cards: Off-white surface, 12px radius, warm shadow, food photo full-width top, veg/non-veg badge top-right
- Badges: Veg (green/accent), Non-Veg (saffron/primary), rounded pill shape, 2px border

## Motion

- Entrance: Subtle fade-in (300ms) staggered by card; menu items slide up on load
- Hover: Card shadow intensifies, primary buttons shift hue slightly darker
- Decorative: None — focus on content and food photography

## Constraints

- No gradients, patterns, or decorative overlays — let food photos be the hero
- Light mode only (food needs bright, appetizing context)
- Every menu item must display food photo, price, name, and veg/non-veg badge
- Opening hours (8:00 AM - 10:00 PM) prominently in header or hero
- Contact phone (9666817773) visible in footer and support page

## Signature Detail

Veg/non-veg badges with distinct color coding (green for veg, saffron for non-veg) in pill shapes reinforce menu clarity while celebrating the restaurant's dual offering.
