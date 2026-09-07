# WEDE5020 Part 2 - ST10538510 - Akanyang Cate Montshiwa - Group 7

## Project Overview
Mog Hub is a non-profit dedicated to connecting people with cat companions for pet-therapy. This website provides information about bookings, volunteering, gallery, and membership.

Live Repository: https://github.com/Akanyang99/WEDE5020-Part-2-ST10538510

## Changelog

### Part 1 Feedback Fixes (Section 1 Requirement):
- Fixed navigation menu to be consistent across all 5 pages (index, about, services, enquiry, contact)
- Corrected image alt attributes for accessibility
- Updated footer copyright to 2026 and added IIE reference
- Fixed external stylesheet linking from `href="style.css"` to `href="css/style.css"` for folder structure
- Added sitemap.xml and robots.txt for SEO

### Part 2 Changes Implemented (Section 2 & 3):

**2.1 External Stylesheet:**
- Created `css/style.css` and linked to all HTML pages using consistent naming

**2.2 Base Style:**
- Implemented CSS Reset: `* { margin:0; padding:0; box-sizing:border-box; }`
- Set default styles: font-family Arial, line-height 1.6, colour scheme #fffaf5 / #ff6a00 / #333

**2.3 Typography:**
- Used font-family, font-size (2.25rem, 1.375rem, 1rem), font-weight 800/bold, line-height 1.2/1.6, letter-spacing 1px/0.3px
- Created typography hierarchy: hero h2 > logo > nav links > body

**2.4 Layout Structure:**
- Used Flexbox: `display:flex; justify-content:space-between; align-items:center; flex-direction:column` for navbar and mobile menu
- Used CSS Grid: `display:grid; grid-template-columns: repeat(3, 1fr); grid-template-areas: "card1 card2 card3"; gap:1.5rem` for services

**2.5 Visual Styles:**
- Applied color, background-color #ff6a00/#222, border-radius 1.56rem, box-shadow 0 2px 8px rgba(0,0,0,0.1)
- Added pseudo-classes: `: hover` with `color: #ffe5d0` and `text-decoration:underline`, `. active` state, and `transition: all 0.3s ease`

**3.1 Breakpoints:**
- Tablet: `@media (max-width:768px)` - switches to 2-column grid, hamburger menu, reduced padding
- Mobile: `@media (max-width:480px)` - switches to 1-column grid, 95% width, smaller fonts

**3.2 Relative Units:**
- Replaced px with rem, em, %: `68.75rem` instead of 1100px, `1.25rem` instead of 20px, `90%/95%/100%` for widths

**3.3 Responsive Images:**
- Implemented `srcset` and `sizes` attributes for hero and service images to optimise loading on different devices

**3.4 Test and Iterate:**
- Tested using Chrome DevTools Device Toolbar on Desktop 1920px, Tablet 768px, Mobile 375px

## Responsive Screenshots (Evidence for 3.4)
Add your screenshots to `images/screenshots/` folder and link here:

![Desktop View](images/screenshots/desktop.png)
![Tablet View](images/screenshots/tablet.png)
![Mobile View](images/screenshots/mobile.png)

## Technical Implementation
- **HTML5** semantic tags: header, nav, main, footer
- **CSS3**: Grid, Flexbox, Media Queries, Transitions
- **Git/GitHub**: Version control with descriptive commits

## References
- The IIE Student Materials Portal 2026 - Mog Hub Activity Brief
- W3Schools. (2025). CSS Grid, Flexbox, Media Queries. https://www.w3schools.com/css/
- MDN Web Docs. (2025). Responsive Design. https://developer.mozilla.org/
- Unsplash. (2025). Cat images. https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba

## How to Run
1. Clone repo: `git clone https://github.com/Akanyang99/WEDE5020-Part-2-ST10538510.git`
2. Open `index.html` in browser
3. Test responsiveness: F12 > Toggle Device Toolbar
