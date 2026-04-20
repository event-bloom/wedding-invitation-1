# 💍 Wedding Invitation Template System
### By [Your Brand] — Sri Lanka

A reusable Bootstrap-based wedding invitation template.
Edit `wedding.css` variables + `index.html` content to deliver a new invite in minutes.

---

## Files
```
/
├── index.html       ← Main invitation page (edit per client)
├── wedding.css      ← Full design system + utility classes
├── wedding.js       ← Countdown, scroll reveal, RSVP handler
└── assets/
    ├── hero-bg.jpg  ← Couple's photo or venue photo (1920×1080+)
    └── texture-dark.png  ← Optional dark section texture
```

---

## Quick Setup Per Client

### 1. Names & Date
In `index.html`, search and replace:
- `Ishara` → Groom name
- `Dilini` → Bride name
- `17 · October · 2025` → Wedding date

### 2. Countdown Date
In `wedding.js` line 12:
```js
const WEDDING_DATE = new Date('2025-10-17T18:00:00');
```

### 3. Hero Photo
Drop the couple's photo into `assets/hero-bg.jpg`
Or update in `wedding.css`:
```css
--hero-bg-image: url('assets/hero-bg.jpg');
```

### 4. Color Theme (Optional)
In `wedding.css` `:root`, swap:
```css
--clr-accent: #8B2E5A;   /* deep rose (default) */
/* Try:       #2E5A8B  blue, #4A7A4A  green, #8B5E2E  copper */
```

### 5. Google Maps Embed
Replace the `<iframe src="...">` in the map section with:
- Go to Google Maps → Share → Embed a map → Copy HTML

### 6. RSVP
In `wedding.js`, replace the WhatsApp number:
```js
const waURL = `https://wa.me/94771234567?text=...`
```
Or switch to Formspree by uncommenting the fetch block.

---

## Font Classes (use anywhere in HTML)
| Class | Font | Use for |
|---|---|---|
| `.font-script` | Great Vibes | Couple names, romantic headings |
| `.font-serif` | Cormorant Garamond | Body text, descriptions |
| `.font-cinzel` | Cinzel | Labels, dates, uppercase details |
| `.font-fell` | IM Fell English | Italic quotes, poetic lines |
| `.font-sans` | Jost | Form fields, tags, small UI |

## Button Classes
- `.btn-wedding` — gold filled (primary CTA)
- `.btn-wedding-outline` — gold border, transparent
- `.btn-wedding-light` — cream/white (on dark bg)

## Scroll Animations
Add `class="reveal"` to any element to fade in on scroll.
Add `class="reveal-stagger"` to a parent to animate children in sequence.

---

## Sections Included
- [x] Hero with couple names + date
- [x] Save the Date block
- [x] Countdown timer (live JS)
- [x] Quote / verse cards (supports Sinhala text)
- [x] Wedding day timeline (alternating, mobile-friendly)
- [x] Venue map + info panel
- [x] RSVP form (WhatsApp or Formspree)
- [x] Footer

## Coming Soon (build as needed)
- [ ] Photo gallery / slideshow
- [ ] Music player (baila / classical)
- [ ] Dress code color palette
- [ ] Multi-language toggle (Sinhala / Tamil / English)
- [ ] Password-protected private page
