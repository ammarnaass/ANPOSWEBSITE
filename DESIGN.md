---
name: Modern Point-of-Sale Design System
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#45474d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#75777d'
  outline-variant: '#c5c6cd'
  surface-tint: '#535e77'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#101b30'
  on-primary-container: '#78849e'
  inverse-primary: '#bbc6e3'
  secondary: '#0051d5'
  on-secondary: '#ffffff'
  secondary-container: '#316bf3'
  on-secondary-container: '#fefcff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#002114'
  on-tertiary-container: '#069669'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d7e2ff'
  primary-fixed-dim: '#bbc6e3'
  on-primary-fixed: '#101b30'
  on-primary-fixed-variant: '#3b475e'
  secondary-fixed: '#dbe1ff'
  secondary-fixed-dim: '#b4c5ff'
  on-secondary-fixed: '#00174b'
  on-secondary-fixed-variant: '#003ea8'
  tertiary-fixed: '#85f8c4'
  tertiary-fixed-dim: '#68dba9'
  on-tertiary-fixed: '#002114'
  on-tertiary-fixed-variant: '#005137'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-total:
    fontFamily: IBM Plex Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: IBM Plex Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: IBM Plex Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
  title-lg:
    fontFamily: IBM Plex Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: IBM Plex Sans
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 24px
  body-md:
    fontFamily: IBM Plex Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-keycap:
    fontFamily: IBM Plex Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.04em
  label-sm:
    fontFamily: IBM Plex Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 0.75rem
  margin: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1.25rem
  space-xl: 1.75rem
---

## Brand & Style
This design system is engineered specifically for fast-paced retail and point-of-sale (POS) environments. The brand personality emphasizes unflinching reliability, razor-sharp operational speed, ergonomic comfort during 8-to-12-hour cashier shifts, and absolute financial clarity. The target users are cashiers, store supervisors, and retail operators handling rapid checkout throughput, barcode scanning, item lookups, and multi-tender transactions.

The visual style blends **Corporate Modern** with a refined **Tactile Utility** aesthetic:
- **Ergonomic Tactility:** Buttons mimic responsive physical pads, giving instant feedback on touchscreens and handheld scanners.
- **Cognitive Clarity:** High-contrast data hierarchy prioritizes total payable sums, tax breakdowns, and remaining change, eliminating operational errors.
- **Bilingual & RTL-First Harmony:** Seamless native Arabic and English alignment with embedded keyboard accelerators (`F1`, `F12`, `Enter`, `Space`) integrated directly into interactive visual anchors.

## Colors
The palette balances institutional calm with high-visibility actionable signals designed for low-glare indoor terminal displays:

- **Primary (`#0E1A2F` - Deep Navy):** Anchors headers, master totals, primary navigation rail, and high-impact semantic chrome. Communicates precision and systemic solidity.
- **Secondary (`#2563EB` - Interactive Indigo):** Active states, selected cart items, focus rings, operational shortcuts, and secondary transaction triggers.
- **Tertiary (`#059669` - Emerald / Mint Green):** Dedicated strictly to checkout completion, "Pay Now", change receipt, payment clearance, and confirmation actions.
- **Neutral (`#64748B` - Slate Neutral):** Structural gray scale paired with `#F8FAFC` base canvas and `#F1F5F9` utility surfaces, preventing eye fatigue under harsh retail fluorescent lighting.
- **Functional Semantics:**
  - `Warning / Hold Cart`: `#D97706` (Amber)
  - `Void / Refund / Error`: `#DC2626` (Crimson)
  - `Display Counter Screen`: `#0B1120` canvas with `#10B981` numeric glow for dual-facing customer displays.

## Typography
Typographic rules are anchored in **IBM Plex Sans** (with full fallback to IBM Plex Sans Arabic). This provides a technical, balanced aesthetic with open counters and unmistakable character distinction—crucial for differentiating zero (`0`) from uppercase `O`, and recognizing Arabic diacritics and ligatures at glancing distances.

- **Tabular Numerals:** All numeric figures (monetary totals, quantities, SKU identifiers, barcodes) must mandate `font-variant-numeric: tabular-nums` to prevent column shifting during live cart updates.
- **Keyboard Shortcuts (`label-keycap`):** Uppercase, bold, monospace-aligned glyph badges positioned inside interactive touch controls.
- **RTL Baseline:** Text metrics are aligned symmetrically so Arabic labels and Latin numerical suffixes (`SAR`, `EGP`, `AED`, `USD`, `QTY`) sit flush along the same optical baseline without vertical jitter.

## Layout & Spacing
The terminal layout follows a split-view work surface model designed for 10" to 24" touchscreens:

- **Split Workspace:**
  - **Left Rail / Primary Panel (Cart & Subtotals):** 38%–42% fixed width. Houses scanned item records, quantity adjusters, discounts, and aggregate payment totals.
  - **Right Canvas (Quick Picks & Categories):** 58%–62% dynamic grid for item tiles, category tabs, and numerical keypad overlays.
- **Touch-First Sizing:** Interactive buttons adhere to an absolute minimum touch zone of `48px × 48px`, expanding to `64px` height for primary tender and checkout actions.
- **Adaptability:**
  - **Terminal / Desktop (>= 1024px):** Fixed split column, persistent order stream, instant single-tap payment panel.
  - **Tablet Mobile POS (768px - 1023px):** Two-pane view with collapsible drawer for categories.
  - **Handheld Mobile (< 768px):** Bottom sheet cart summary with prominent floating "Charge / Pay" bar.

## Elevation & Depth
Depth is expressed through subtle ambient drops and crisp micro-borders, avoiding heavy drop shadows that produce visual noise on high-brightness POS screens:

- **Level 0 (Surface Base):** Canvas background `#F8FAFC`.
- **Level 1 (Card & Product Tiles):** Flat `#FFFFFF` with `1px solid #E2E8F0` hairline border and soft ambient shadow: `0 1px 3px rgba(15, 23, 42, 0.05)`.
- **Level 2 (Active Touch & Keypad Buttons):** Slight extrusion via bottom-rim depth: `0 2px 4px rgba(14, 26, 47, 0.08), 0 1px 0 rgba(0, 0, 0, 0.04)`. On `:active`, transforms downward with `translateY(1px)`.
- **Level 3 (Cart Footer & Pay Dock):** Sticky elevated drawer with `0 -4px 16px rgba(14, 26, 47, 0.06)` and top border `1px solid #CBD5E1`.
- **Level 4 (Modal Dialogs & Payment Terminals):** `0 20px 35px -5px rgba(14, 26, 47, 0.25)` over a `#0E1A2F` backdrop with 60% opacity.

## Shapes
A conservative, structural roundedness (`roundedness: 1` — Soft, `0.25rem` / `4px` base to `0.5rem` / `8px` container) is enforced. This ensures high spatial density, allowing maximum visual data per square inch without visual clutter. Keypad cells and grid elements form clean, flush architectural blocks that fit tight checkout ergonomics.

## Components

### 1. POS Action Buttons & Touch Keycaps
- **Payment Button (Emerald):** Background `#059669`, hover `#047857`, active `#065F46`. Bold white text, display total prominently aligned. Features an integrated keycap badge on the corner (`F12` or `Enter`).
- **Standard Action Tiles:** Background `#FFFFFF` with border `#E2E8F0`. Features item title, price in tabular bold, and quick-add shortcut badge (`1`–`9` or barcode shortcode).
- **Shortcut Keycap Badge:** Embedded chip in top-left (LTR) or top-right (RTL) of buttons. Stylized with `#F1F5F9` background, `#334155` text, and `0.5px` border.

### 2. Transaction Cart Line Items
- Alternating subtle rows (`#FFFFFF` to `#F8FAFC`) with border-bottom `1px solid #F1F5F9`.
- Quantity controls: Large square touch buttons (`36px × 36px`) flanking a bold number block.
- Swiping a row reveals rapid `Void` (Red) or `Hold` (Amber) actions.

### 3. Grand Total Callout Box
- High-contrast block using `#0E1A2F` background with `#F8FAFC` text and emerald accents.
- Grand total styled with `display-total` (40px tabular digits) ensuring legible confirmation from across the counter.

### 4. Input Fields & Barcode Scanner Feeds
- Input fields use `#FFFFFF` background with `1.5px solid #CBD5E1`, focusing to `#2563EB` with an ergonomic `0 0 0 3px rgba(37, 99, 235, 0.15)` ring.
- Contains an active pulsing scanner indicator dot (green) denoting hardware laser connectivity.

### 5. Numerical Touchpad (Numpad)
- 3x4 grid with large, center-aligned numbers (`title-lg`), dedicated decimal separator, quick preset denominations (`+10`, `+50`, `+100`), and a prominent backspace key.