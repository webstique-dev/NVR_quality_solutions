# NVR Quality Solutions — Website Frontend

React 19 + Vite frontend for NVR Quality Solutions, a healthcare quality training
and consultancy provider.

## Getting Started

```bash
npm install
npm run dev      # local dev server
npm run build     # production build
```

## Tech Stack

React 19, Vite, React Router DOM, Framer Motion, React Icons, Swiper.js, Axios
(integration-ready), React Hook Form. External CSS only — no Tailwind/Bootstrap/CSS-in-JS.

## Content Status — IMPORTANT

This project was built from two source documents:

1. A frontend build specification (tech stack, design system, page structure)
2. An SEO & Content Strategy Brief (keywords, brand voice, core positioning)

**Neither document contained actual page copy** (headlines, service descriptions,
About/Mission/Vision text, FAQ answers, legal text, contact details, etc.).

Per project rules, no content was invented. Every section that needs real copy is
marked in the UI with a dashed **"Content not yet provided in source documents"**
placeholder (see `src/components/Common/ContentPending.jsx`).

### Where to add real content once available

| Location | What's needed |
|---|---|
| `src/pages/About.jsx` | Company story, mission, vision, core values |
| `src/data/services.js` | Description/benefits/features/process per service |
| `src/data/trainingPrograms.js` | Program overview, learning areas, benefits |
| `src/data/faqs.js` | FAQ answers (2 of 4 are already populated from the brief) |
| `src/pages/Contact.jsx` | Email, phone, address, business hours, map embed |
| `src/pages/PrivacyPolicy.jsx` / `TermsConditions.jsx` | Legal text (have counsel review) |

Service and training program **names** are real (drawn directly from the brief):
Healthcare Quality Training, Patient Safety Training, NABH Training, JCI Training,
CAAM HP Training, Healthcare Quality Consultancy.

## Project Structure

```
src/
  assets/
  components/
    Common/     Button, Input, Textarea, SectionTitle, FAQAccordion,
                ServiceCard, TrainingCard, ContentPending, ScrollToTop*
    Layout/     Navbar, Footer, PageBanner, CTABanner
    Home/       Hero
    Contact/    InquiryForm
  pages/        Home, About, Services, ServiceDetail, TrainingPrograms,
                TrainingDetail, Contact, FAQ, PrivacyPolicy, TermsConditions, NotFound
  data/         services.js, trainingPrograms.js, faqs.js
  styles/       variables.css, reset.css, globals.css
  App.jsx
  main.jsx
```

## Notes

- The inquiry form (`Contact/InquiryForm.jsx`) is UI-only — no backend wired yet.
  Simulates success state after submit; connect to a real endpoint via axios.
- Google Maps embed on the Contact page is a visual placeholder pending a
  confirmed business address.
- Testimonials section was intentionally omitted from Home per project rules
  (no fake testimonials) — add a `Testimonials` component when real quotes exist.
