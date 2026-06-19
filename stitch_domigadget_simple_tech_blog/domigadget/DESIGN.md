---
name: Domigadget
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#444651'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#757682'
  outline-variant: '#c5c5d3'
  surface-tint: '#4059aa'
  primary: '#00236f'
  on-primary: '#ffffff'
  primary-container: '#1e3a8a'
  on-primary-container: '#90a8ff'
  inverse-primary: '#b6c4ff'
  secondary: '#0060ac'
  on-secondary: '#ffffff'
  secondary-container: '#64a8fe'
  on-secondary-container: '#003c70'
  tertiary: '#4b1c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#6e2c00'
  on-tertiary-container: '#f39461'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#b6c4ff'
  on-primary-fixed: '#00164e'
  on-primary-fixed-variant: '#264191'
  secondary-fixed: '#d4e3ff'
  secondary-fixed-dim: '#a4c9ff'
  on-secondary-fixed: '#001c39'
  on-secondary-fixed-variant: '#004883'
  tertiary-fixed: '#ffdbcb'
  tertiary-fixed-dim: '#ffb691'
  on-tertiary-fixed: '#341100'
  on-tertiary-fixed-variant: '#773205'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '700'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.7'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  sidebar-width: 300px
  gutter: 24px
  margin-mobile: 16px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  section-gap: 64px
---

## Brand & Style
The brand personality is that of a "Knowledgeable Neighbor"—someone who understands complex technology but explains it with clarity and friendliness. The target audience includes everyday consumers, families, and remote workers looking for practical tech advice.

The design system follows a **Modern Corporate** aesthetic with a humanist touch. It prioritizes extreme legibility and a welcoming interface to lower the barrier to technical entry. The style utilizes flat surfaces, purposeful whitespace, and subtle depth to guide the user’s eye toward editorial content and strategic ad placements without feeling cluttered.

## Colors
The palette is rooted in trust and clarity. 
- **Primary Navy (#1E3A8A):** Used for headers, primary buttons, and authoritative UI elements to establish professional credibility.
- **Secondary Sky (#60A5FA):** Used for highlights, links, and active states to inject a friendly, modern energy.
- **Neutral Background (#F8FAFC):** A very cool, light grey that reduces eye strain compared to pure white, while keeping the "whitespace" feeling clean.
- **Semantic Colors:** Success green is used for "Verified" badges or "Best Buy" recommendations within review articles.

## Typography
This design system utilizes **Inter** across all roles to ensure a systematic, highly legible reading experience. 
- **Headlines:** Use tighter letter spacing and heavier weights (700-800) to create a strong visual hierarchy.
- **Body Text:** Set at 18px for long-form articles to ensure accessibility for all age groups. A generous 1.7 line-height is applied to prevent line-tracking fatigue.
- **Labels:** Uppercase bold labels are used for categories (e.g., "SMART HOME", "REVIEWS") to distinguish metadata from narrative content.

## Layout & Spacing
The layout follows a **Hybrid Fixed Grid**. 
- **Desktop:** A 12-column system with a 300px fixed sidebar on the right for AdSense units and "Trending" widgets. The main content well is optimized for a 700px reading width to maintain ideal characters-per-line.
- **Tablet:** The sidebar drops below the main content or into a 1-column layout depending on ad priority.
- **Mobile:** A single-column fluid layout with 16px side margins. 

Specific "Ad Zones" are reserved at the top (leaderboard), within the article flow (every 4-5 paragraphs), and in the sidebar to maximize revenue without breaking the editorial flow.

## Elevation & Depth
Depth is created through **Tonal Layers** and **Soft Ambient Shadows**. 
- **Level 0 (Background):** Neutral Grey (#F8FAFC).
- **Level 1 (Cards/Content):** Pure White (#FFFFFF) with a subtle 1px border (#E2E8F0) and a soft, low-opacity shadow (Y: 4px, Blur: 6px, 5% Opacity).
- **Level 2 (Modals/Dropdowns):** Pure White with a more pronounced shadow (Y: 10px, Blur: 20px, 10% Opacity) to signify interaction priority.
- **Interaction:** Hovering over article cards should slightly lift the element (increase shadow) to provide tactile feedback.

## Shapes
A "Rounded" strategy (0.5rem base) is used to soften the professional Navy palette, making the site feel approachable rather than stiffly corporate. 
- **Buttons and Inputs:** Use a 0.5rem (8px) corner radius.
- **Article Thumbnails:** Use a 1rem (16px) corner radius to create a modern, "app-like" feel for featured imagery.
- **Ad Placeholders:** Kept with sharp or minimal rounding (4px) to visually distinguish paid placements from native content.

## Components
- **Buttons:** Primary buttons use the Navy Blue background with White text. Secondary "Load More" or "Read Later" buttons use a Sky Blue ghost style (Sky Blue border and text).
- **Article Cards:** Features a large rounded image at the top, followed by a bold Category Label, Headline, and a 2-line excerpt.
- **Chips:** Small, rounded-pill tags used for "Tech Specs" (e.g., "5G", "OLED", "iOS"). Backgrounds should be a pale version of Sky Blue with dark Navy text.
- **Newsletter Sign-up:** A prominent, full-width component with a Sky Blue background to act as a friendly but clear Call-to-Action.
- **Ad Containers:** Clearly marked with a tiny "ADVERTISEMENT" label in 10px bold uppercase grey text. Containers should have a subtle grey background to separate them from editorial content.