# ElimuPath 🎓

**Democratizing Career Guidance for Every Kenyan Student.**

ElimuPath is an AI-powered platform designed to help Kenyan students navigate the transition from secondary school (KCSE) to university or college. By checking the official placement data against user grades and interests, it provides clarity in a complex ecosystem.

> **Disclaimer**: ElimuPath is an independent advisory tool and is **NOT** affiliated with KUCCPS or the Ministry of Education.

## Why We Built This
The period between receiving KCSE results and university placement is filled with anxiety and confusion for thousands of students. 
- **Information Overload**: Placement rules (Cluster Points) are complex.
- **Lack of Guidance**: Many students lack access to professional career counselors.
- **Missed Opportunities**: Students often apply for courses they don't qualify for or miss out on scholarships.

ElimuPath solves this by offering instant, data-driven recommendations and a friendly AI guide to answer questions 24/7.

## Key Features
- **AI Recommendation Engine**: Calculates weighted cluster points and suggests universities based on 2024 cutoff trends.
- **Interactive Guidance**: A chatbot (mocked/rule-based) that answers queries about the application process.
- **Scholarship Finder**: A curated list of financial aid opportunities.
- **Resource Hub**: Downloadable guides for degree programmes and subject clusters.

## Tech Stack
**Frontend**:
- [Next.js 15 (App Router)](https://nextjs.org/) - Framework
- [React 19](https://react.dev/) - UI Library
- [Tailwind CSS v4](https://tailwindcss.com/) - Styling
- [Lucide React](https://lucide.dev/) - Icons
- [Clerk](https://clerk.com/) - Authentication (Optional/Partially Implemented)

**Backend / Data**:
- **Server Actions**: For secure data fetching and logic execution.
- **JSON Data Layer**: Efficient loading of large cutoff datasets (~800kb).

**Design**:
- **Font**: Raleway (Google Fonts)
- **Palette**: Impactful Black & Yellow (#cce023) branding.

## Getting Started

### Prerequisites
- Node.js 18+ established.
- npm or pnpm.

### Installation
1.  Clone the repository:
    ```bash
    git clone https://github.com/yourusername/elimupath.git
    cd elimupath
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Run the development server:
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) in your browser.

## Collaboration Guide
We welcome contributions! Here is how you can help:

### Project Structure
- `app/`: Main application routes (Home, Guidance, Recommendations).
- `app/lib/`: Core logic (Cluster inputs, Data loaders).
- `app/components/`: Reusable UI components.
- `app/actions/`: Server-side business logic.

### Guidelines
1.  **Keep it Simple**: Prioritize performance and accessibility over complex animations.
2.  **Mobile First**: Most students access this via phone. Ensure responsive design.
3.  **Clean Code**: Remove unused variables and add comments for complex logic (e.g., cluster point formulas).

### Adding Data
To update cutoff data, replace `app/lib/cutoffs.json` with the latest dataset ensuring the structure matches the `CutoffEntry` interface in `data-loader.ts`.

## Deployment
This project is optimized for deployment on **Vercel**.
1. Push to GitHub.
2. Import project in Vercel.
3. Add environment variables (if any).
4. Deploy.

---

*Built with ❤️ for the students of Kenya.*
