# WEDE5020 Part 2 - ST10538510 - Akanyang Cate Montshiwa - Group 7

## Project Overview
Harvest of Hygiene is a Pretoria-based NPO fighting period poverty. We provide free sanitary packs and health education workshops to 5000+ school girls in Gauteng township schools (Pretoria, Soweto, Tembisa). No girl should miss school because of periods.

Live Site: https://akanyang99.github.io/WEDE5020-Part-2-ST10538510/
Repository: https://github.com/Akanyang99/WEDE5020-Part-2-ST10538510

## Sitemap
- index.html - Home
- about.html - About Us
- services.html - What We Do (Programmes)
- enquiry.html - Get Involved / Donate
- contact.html - Contact

## Changelog (Section 1 Requirement)

| Part 1 Feedback | Action Taken in Part 2 | File & Line |
|---|---|---|
| No responsive design, only desktop | Added 2 breakpoints @media (max-width:768px) tablet and @media (max-width:480px) mobile | css/style.css L45-70 |
| Used px only, not relative units | Converted 1100px to 68.75rem, 20px to 1.25rem, 15px to 0.9375rem, widths to 90%/95% | css/style.css |
| No CSS Grid | Implemented display:grid + grid-template-columns: repeat(3,1fr) + grid-template-areas | css/style.css .services-grid |
| Inline styles in HTML | Removed all style="" attributes, moved to classes: navbar-container, main-content, responsive-img | index.html, css/style.css L72-78 |
| Images not responsive | Added srcset 480w/768w/1100w + sizes + .responsive-img {width:100%; height:auto} | index.html L34-52 |
| Poor typography | Added font-weight:800, line-height:1.2, letter-spacing:1px/0.3px, text-transform:uppercase | css/style.css |
| No hover effects | Added a:hover, a.active, transition: all 0.3s ease, .service-card:hover | css/style.css |
| Inconsistent nav | Fixed nav-links to be same on all 5 pages with mobile hamburger menu | all HTML |

## 2.0 CSS Implementation (Section 2)

**2.1 External Stylesheet:** `css/style.css` linked in all 5 pages with `<link rel="stylesheet" href="css/style.css">`

**2.2 Base Styles:** 
`* {margin:0; padding:0; box-sizing:border-box;}` 
`body {font-family: Arial, sans-serif; line-height:1.6; color:#333; background:#fffaf5;}`

**2.3 Typography:** 
Hierarchy with rem units - hero h2 2.25rem weight 800 line-height 1.2, logo 1.375rem weight 800 letter-spacing 2px uppercase, nav 1rem bold, body 1rem letter-spacing 0.3px

**2.4 Layout:**
Flexbox: navbar `display:flex; justify-content:space-between; align-items:center;`
Grid: services `display:grid; grid-template-columns: repeat(3,1fr); gap:1.5rem; grid-template-areas: "card1 card2 card3";`

**2.5 Visual:**
Colours #ff6a00 / #222 / #fffaf5, border-radius 1.5625rem / 0.5rem, box-shadow 0 2px 8px rgba(0,0,0,0.1), hover color #ffe5d0 underline, transition 0.3s ease

## 3.0 Responsive Design (Section 3)

**3.1 Breakpoints:**
- Tablet 768px: grid 3 -> 2 columns (card1 card2 / card3 card3), nav becomes hamburger, hero padding 5rem -> 3rem, h2 2.25rem -> 1.75rem
- Mobile 480px: grid 2 -> 1 column, container 90% -> 95%, logo 1.375rem -> 1.1rem, body 1rem -> 0.9rem

**3.2 Relative Units:** All px converted - 68.75rem max-width, 1.25rem padding, 1.5rem gap, % widths, em margins

**3.3 Responsive Images:** 
`<img srcset="... 480w, ... 768w, ... 1100w" sizes="(max-width:480px) 95vw, (max-width:768px) 45vw, 30vw">`
CSS `.responsive-img {width:100%; height:auto; display:block; border-radius:0.5rem;}`

**3.4 Test and Iterate:**
Tested with Chrome DevTools Device Toolbar. Screenshots below prove layout, nav, typography, images adapt.

## 3.4 Responsive Screenshots (Evidence)

### Desktop 1920px - 3 Column Grid Layout
![Desktop View](images/screenshots/desktop.png)

### Tablet 768px - 2 Column Grid + Hamburger Menu
![Tablet View](images/screenshots/tablet.png)

### Mobile 375px - 1 Column Stack + Vertical Nav
![Mobile View](images/screenshots/mobile.png)

**Testing Notes:**
- Layout: grid-template-areas changes correctly 3->2->1 column
- Navigation: horizontal links -> hamburger icon (display:block) -> vertical dropdown (flex-direction:column, position:absolute, width:100%)
- Typography: scales down for readability
- Images: srcset loads correct size, width 100% prevents overflow

## Technical Implementation
- HTML5 semantic: header, nav, main, section, footer
- CSS3: Grid, Flexbox, Media Queries, Transitions, Relative Units
- JS: Mobile menu toggle `js/main.js`
- SEO: sitemap.xml, robots.txt, meta description
- Git: 6+ descriptive commits

## References
- The IIE. (2026). WEDE5020 Module Manual Part 2 Requirements.
- W3Schools. (2025). CSS Grid, Flexbox, Media Queries, Responsive Images. https://www.w3schools.com/css/
- MDN Web Docs. (2025). Responsive Design, srcset, grid-template-areas. https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design
- Images: Own photos - hygiene-products.jpg, sanitary-pack-contents.jpg, team-volunteers.jpg

## How to Run
1. Clone: `git clone https://github.com/Akanyang99/WEDE5020-Part-2-ST10538510.git`
2. Open `index.html` in browser
3. Test: Press F12 > Toggle Device Toolbar (Ctrl+Shift+M) > Test 1920px, 768px, 375px
4. Validate HTML/CSS: https://validator.w3.org/

## Student
ST10538510 - Akanyang Cate Montshiwa - Group 7 - IIE Rosebank College Pretoria
