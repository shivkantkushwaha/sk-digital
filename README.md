# SKDigital — Premium Web Agency Portfolio

A modern, high-performance, single-page agency portfolio built for **SKDigital**. Designed with a sophisticated, monochromatic, editorial aesthetic to instantly communicate trust, credibility, and professionalism.

## 🚀 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Package Manager:** [pnpm](https://pnpm.io/)
- **Fonts:** Inter (Sans-serif) & Caveat (Cursive for logo)

## ✨ Key Features

- **Pristine Single-Page Architecture:** All sections seamlessly exist on one page with programmatic smooth-scrolling, ensuring the URL remains completely clean (no `#hashtags`).
- **Editorial Design System:** High-contrast layouts, massive typography, and a strict monochromatic palette (near-black, white, muted grays).
- **Interactive Contact Modal:** A globally accessible, animated modal for immediate client inquiries without leaving the current view.
- **Fully Responsive:** Meticulously crafted grid layouts that adapt perfectly from mobile to large desktop displays.
- **Optimized Assets:** Uses `next/image` for highly performant, lazy-loaded portfolio concepts and UI abstractions.

## 🛠️ Getting Started

### Prerequisites
Make sure you have Node.js installed along with `pnpm`.

### Installation

1. Clone the repository and navigate to the project folder:
   ```bash
   cd sk-digital
   ```

2. Install the dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

```text
sk-digital/
├── public/                 # Static assets and high-end concept images
├── src/
│   ├── app/
│   │   ├── globals.css     # Global Tailwind v4 theme & button resets
│   │   ├── layout.tsx      # Root layout, font configuration, and metadata
│   │   └── page.tsx        # The main single-page dashboard
│   └── components/
│       ├── Navbar.tsx             # Sticky navigation with smooth scroll
│       ├── Footer.tsx             # Premium dark footer with watermark logo
│       ├── StartProjectButton.tsx # Shared interactive contact modal
│       ├── ViewWorkButton.tsx     # Smooth scroll trigger for portfolio
│       └── ContactSection.tsx     # Shared call-to-action block
└── README.md
```

## 🌐 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

## ✉️ Contact

**SKDigital**  
Shivkant Kushwaha  
Email: [agencyshivkant@gmail.com](mailto:agencyshivkant@gmail.com)  
Phone: +91 9219772561  
Web: [shivkantkushwaha.online](https://shivkantkushwaha.online)
