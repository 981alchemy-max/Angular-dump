# AngularApp

A barebones Angular 19 starter project generated with Angular CLI conventions.

## Prerequisites

- Node.js (v18 or later)
- npm (v9 or later)

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm start
```

Navigate to `http://localhost:4200/`. The app will automatically reload on file changes.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start dev server at `localhost:4200` |
| `npm run build` | Build for production to `dist/` |
| `npm run watch` | Build in watch mode (development) |
| `npm test` | Run unit tests via Karma |

## Project Structure

```
angular-app/
├── src/
│   ├── app/
│   │   ├── app.component.ts       # Root component
│   │   ├── app.component.html     # Root template
│   │   ├── app.component.css      # Root styles
│   │   ├── app.component.spec.ts  # Root component tests
│   │   ├── app.config.ts          # App configuration (providers)
│   │   └── app.routes.ts          # Route definitions
│   ├── index.html                 # Entry HTML
│   ├── main.ts                    # App bootstrap
│   └── styles.css                 # Global styles
├── angular.json                   # Angular CLI config
├── package.json
├── tsconfig.json
├── tsconfig.app.json
└── tsconfig.spec.json
```

## Adding Components

```bash
ng generate component components/my-component
```

## Adding Routes

Edit `src/app/app.routes.ts`:

```typescript
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' }
];
```
