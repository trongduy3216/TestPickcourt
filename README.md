# PickCourt FE Web

- Frontend web app.  

# Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Form Handling**: React Hook Form + Zod
- **Validation & Typing**: TypeScript
- **i18n**: next-i18next
- **Routing**: Dynamic App Router
- **Architecture**: Feature-Sliced Design
- **Quality**: Eslint, Prettier, Husky, lint-staged

---

# Setup & Development

### 1. Clone project

```bash
git clone https://github.com/laztar/pickcourt-fe-web.git
cd pickcourt-fe-web
```

### 2. Install dependencies

```bash
yarn install
```

### 3. Create `.env`
```env
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_DEFAULT_LOCALE=vi
```

### 4. Start development server

```bash
yarn dev


# Project Structure (FSD)
src/
├── app/                  # Next.js App Router entrypoint
├── shared/               # Base UI, config, constants
├── entities/             # Business models 
├── features/             # User interactions
├── widgets/              # Composite UI 
├── processes/            # Business flows 
├── store/                # Zustand stores
├── hooks/                # Custom React hooks
└── utils/                # Shared utility functions


