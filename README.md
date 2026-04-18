# Ade Consults - Professional Web Design Agency

A modern, responsive website for Ade Consults, a professional web design agency specializing in creating conversion-focused websites for small and medium-sized businesses in Nigeria.

## 🚀 Features

- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Modern UI**: Clean, professional design with smooth animations and transitions
- **Fast Performance**: Optimized for speed and user experience
- **SEO Ready**: Built with SEO best practices in mind
- **Contact Integration**: WhatsApp and email integration for easy client communication
- **Industry Focus**: Tailored solutions for restaurants, salons, real estate, clinics, schools, and more

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Inline CSS with CSS-in-JS approach
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Fonts**: Cormorant Garamond & Plus Jakarta Sans

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Navigation bar with mobile menu
│   ├── Hero.tsx            # Landing section with CTA
│   ├── WhoWeHelp.tsx       # Industries we serve
│   ├── Portfolio.tsx       # Recent projects showcase
│   ├── Pricing.tsx         # Pricing plans
│   ├── WhyChooseUs.tsx     # Benefits and features
│   ├── Testimonials.tsx    # Client reviews
│   ├── Contact.tsx         # Contact form and info
│   ├── Footer.tsx          # Site footer
│   ├── LogoMark.tsx        # Logo component
│   ├── FadeUp.tsx          # Animation wrapper
│   └── BrowserMockup.tsx   # Mock browser UI
├── hooks/
│   └── useInView.ts        # Intersection observer hook
├── App.tsx                 # Main app component
└── main.tsx                # App entry point
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ade-consult
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

## 🎨 Component Architecture

The application is built with a modular component architecture:

- **Hooks**: Custom hooks for reusable logic (e.g., `useInView` for scroll animations)
- **Components**: Reusable UI components with clear props interfaces
- **Styling**: Consistent styling with CSS variables and responsive design
- **State Management**: Local state management with React hooks

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Desktop**: > 768px
- **Tablet**: 480px - 768px
- **Mobile**: < 480px

## 🔧 Customization

### Colors
- Primary: `#0A1628` (Dark Navy)
- Secondary: `#1B3B6F` (Blue)
- Accent: `#2563EB` (Bright Blue)
- Background: `#FAFBFE` (Light Gray)

### Fonts
- Headings: Cormorant Garamond
- Body: Plus Jakarta Sans

## 📞 Contact

For business inquiries:
- **WhatsApp**: +234 800 000 0000
- **Email**: hello@adeconsults.ng
- **Location**: Lagos, Nigeria

## 📄 License

This project is private and proprietary to Ade Consults.
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
