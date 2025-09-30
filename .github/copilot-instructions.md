# TaleWeaver - GitHub Copilot Instructions

TaleWeaver is a **mobile-first storytelling app** that generates **magical, personalized bedtime stories** for children aged 4–8.  
The app focuses on **privacy, simplicity, and imagination** — helping parents create fun, safe, and educational bedtime routines.

---

## 🌟 What the Project is About

- **AI-Powered Storytelling**: Generate unique bedtime stories tailored to each child.  
- **Child Profiles**: Parents create multiple profiles with age, name, and preferences.  
- **Quick Generate**: One-tap story creation using stored defaults for rushed evenings.  
- **Customization**: Override settings on the fly (voice, length, music, themes).  
- **Educational Themes**: Science, math, history, and nature woven into adventures.  
- **Local & Private**: All data and stories are stored on the device — no cloud sync, no data collection.  
- **Offline First**: Favorites stored indefinitely, other stories cached for ~2 weeks.  

The guiding principle:  
> **Bedtime should be magical, not stressful.**

---

## 🎯 Use Cases

### 👨‍👩‍👧 Parents at Bedtime
- Need a quick bedtime story when time is short → use **Quick Generate**.  
- Want to reinforce learning (math, science, history) → enable **educational topics**.  
- Want to filter content → use **Parental Controls** to block scary or inappropriate themes.  

### 🧒 Children (Ages 4–8)
- Hear stories where they are the **main character**.  
- Enjoy adventures with favorite characters (dragons, unicorns, fairies).  
- Experience bedtime as fun, imaginative, and safe.  

### 🛡 Privacy-Conscious Families
- Require apps that store data **locally only**, without tracking.  
- Want clear and simple **Parental Controls**.

---

## 🔒 Privacy Considerations

- **No server-side persistence**: All data (child profiles, preferences, stories) is stored **only on the device**.  
- **No analytics or trackers**: The app does not send usage data to external servers.  
- **App Store compliance**: Fully aligned with privacy requirements for iOS App Store and Google Play.  
- **Offline-first**: Stories and favorites remain accessible without internet access.  

This ensures TaleWeaver is a **safe choice for families**, protecting children's privacy and parents' peace of mind.

---

## 🎨 Design Paradigm

TaleWeaver follows a **minimalist but fun** design philosophy:

- **Minimal Navigation**:  
  - No deep menu trees or hidden screens.  
  - Parents should be able to start a story in **1–2 taps max**.  

- **Interaction Model**:  
  - Use **lightweight in-app popups** and **slide-up sheets** (iOS-style bottom drawers) for customization and quick settings.  
  - Avoid sending users to new screens unless absolutely necessary (e.g., creating a new child profile).  

- **Aesthetic**:  
  - **Minimalist** layout with playful touches — soft colors, rounded elements, friendly icons.  
  - **Fun but clear** typography: rounded fonts for kid-facing flows, clean sans-serif for parental/legal sections.  

- **Focus Areas**:  
  - **Quick Generate** is the hero action — fast, accessible, and visually emphasized.  
  - Secondary actions (Custom Story, Parental Controls, Privacy Policy) are always available but do not distract from the main flow.  

The design goal:  
> **Simplicity for parents, magic for kids.**

---

## 🏗 Project Structure

```plaintext
app.taleweaver/
├── .github/                    # GitHub configuration
│   ├── workflows/              # CI/CD workflows
│   └── copilot-instructions.md # This file
│
├── src/                        # Application source code
│   ├── frontend/               # React web application (TypeScript)
│   │   ├── public/             # Static assets
│   │   ├── src/
│   │   │   ├── components/     # Reusable UI components
│   │   │   ├── pages/          # Page/screen components
│   │   │   ├── repositories/   # Data persistence layer
│   │   │   ├── store/          # Redux store configuration
│   │   │   ├── styles/         # Styled-components theme and global styles
│   │   │   └── types/          # TypeScript type definitions
│   │   ├── tests/              # Playwright E2E tests
│   │   └── package.json        # Frontend dependencies
│   │
│   └── native/                 # React Native mobile application
│       └── TaleWeaverNative/   # Expo-based native app
│           ├── assets/         # Fonts, icons, images
│           ├── src/
│           │   ├── components/ # React Native components
│           │   ├── pages/      # Screen components
│           │   ├── storage/    # Local storage and caching
│           │   ├── styles/     # React Native styles and theme
│           │   └── types/      # TypeScript type definitions
│           └── package.json    # Native app dependencies
│
└── README.md                   # Project overview
```

---

## 🛠 Tech Stack

### Frontend (Web)
- **Framework**: React 18 with TypeScript
- **Routing**: React Router DOM v6
- **State Management**: Redux Toolkit
- **Styling**: Styled Components
- **Build Tool**: React Scripts (Create React App)
- **Testing**: Playwright for E2E tests

### Native (Mobile)
- **Framework**: React Native with Expo
- **Navigation**: React Navigation v7
- **State Management**: Redux Toolkit
- **Platform Support**: iOS, Android, and Web
- **Build System**: Expo Application Services (EAS)

### Common
- **Language**: TypeScript
- **Package Manager**: npm
- **Version Control**: Git

---

## 📝 Coding Conventions

### General Guidelines
- Use **TypeScript** for all new code with proper type definitions
- Follow **functional component patterns** with React Hooks
- Keep components **small and focused** on a single responsibility
- Use **meaningful variable and function names** that reflect their purpose
- Avoid deep nesting — refactor complex logic into helper functions

### React/React Native
- Use **functional components** with hooks (no class components)
- Prefer `const` over `let` where possible
- Use **destructuring** for props and state
- Keep **state local** when possible; use Redux only for truly global state
- Use **custom hooks** to encapsulate reusable logic

### TypeScript
- Define **interfaces** for all component props
- Use **type inference** where possible, but be explicit for public APIs
- Avoid `any` — use `unknown` or proper types instead
- Export types from `types/index.ts` for shared use across the application

### Styling
- **Frontend**: Use styled-components with theme integration
- **Native**: Use StyleSheet.create() for performance
- Follow the **design tokens** defined in the theme file
- Keep styles **colocated** with components unless they're shared
- Use **responsive units** and avoid hardcoded pixel values when possible

### File Naming
- Components: `PascalCase.tsx` (e.g., `FeatureCard.tsx`)
- Utilities: `camelCase.ts` (e.g., `formatDate.ts`)
- Types: `PascalCase` for interfaces (e.g., `ChildProfile`)
- Constants: `UPPER_SNAKE_CASE` for true constants

---

## 🏛 Architecture & Patterns

### Data Flow
- **Redux Store**: Centralized state for profiles, stories, and app configuration
- **Repository Pattern**: Abstract data persistence (localStorage for web, AsyncStorage for native)
- **Local-First**: All data operations prioritize local storage; no external APIs for user data

### Key Patterns
1. **Repository Pattern**: `ProfileRepository`, `StoryRepository` handle data persistence
2. **Component Composition**: Small, reusable components composed into larger features
3. **Theme Provider**: Centralized design tokens for consistent styling
4. **Type Safety**: Strong typing throughout with shared type definitions

### Data Models
Core interfaces defined in `src/types/index.ts`:
- `ChildProfile`: User profile with preferences and restrictions
- `StorySettings`: Configuration for story generation
- `Story`: Generated story with metadata
- `ContentFilters`: Parental control settings
- `Character`, `Theme`: Story elements and options

---

## 🧪 Testing Approach

### Frontend Testing
- **E2E Tests**: Playwright for user flow testing
- **Test Location**: `src/frontend/tests/`
- **Run Tests**: `npm test` (Jest) or Playwright for E2E
- **Focus Areas**: Navigation flows, form interactions, data persistence

### Native Testing
- **Component Tests**: React Native Testing Library (when implemented)
- **Manual Testing**: Expo Go for rapid testing on devices
- **Platform Coverage**: Test on both iOS and Android simulators/devices

### Testing Guidelines
- Write tests for **critical user flows** (profile creation, story generation)
- Focus on **integration tests** over unit tests for UI components
- Ensure **accessibility** is maintained in all components
- Test **edge cases** for data validation and error handling

---

## 🚀 Development Workflow

### Getting Started
```bash
# Frontend (Web)
cd src/frontend
npm install
npm start  # Runs on http://localhost:3000

# Native (Mobile)
cd src/native/TaleWeaverNative
npm install
npm start  # Opens Expo Dev Tools
```

### Building for Production
```bash
# Frontend
npm run build  # Creates optimized production build

# Native
npm run build:android  # Build for Android
npm run build:ios      # Build for iOS
```

---

## 🎯 When Writing Code for TaleWeaver

### Always Consider
1. **Privacy First**: Never add features that require server-side data storage or tracking
2. **Simplicity**: Can this be achieved with fewer taps or clicks?
3. **Accessibility**: Is this usable for parents in low-light bedtime environments?
4. **Performance**: Will this work smoothly on older devices?
5. **Child Safety**: Does this respect content filtering and age appropriateness?

### Avoid
- Adding new external dependencies unless absolutely necessary
- Creating deep navigation hierarchies
- Implementing features that require cloud synchronization
- Adding analytics or tracking libraries
- Using bright, jarring colors or animations that might overstimulate at bedtime

### Prefer
- Local storage over cloud storage
- Simple, direct user flows
- Reusing existing components and patterns
- Soft, calming color palettes
- Clear, parent-friendly language in UI text

---

## 🔧 Common Tasks

### Adding a New Screen
1. Create component in `src/[frontend|native]/src/pages/`
2. Add route in navigation configuration
3. Ensure it follows the design paradigm (minimal navigation)
4. Add TypeScript interfaces for any new data structures

### Adding a New Feature
1. Check if it aligns with privacy-first principles
2. Design for minimal interaction (1-2 taps)
3. Add types to `src/types/index.ts` if needed
4. Implement repository layer for any data persistence
5. Add to Redux store if state needs to be global
6. Test on both mobile and web if applicable

### Modifying Child Profiles
1. Update `ChildProfile` interface in `types/index.ts`
2. Update repository layer to handle migration
3. Ensure backward compatibility with existing stored data
4. Update all components that consume profile data

---

## 📚 Additional Resources

- React Native Documentation: https://reactnative.dev/
- Expo Documentation: https://docs.expo.dev/
- React Navigation: https://reactnavigation.org/
- Styled Components: https://styled-components.com/
- Redux Toolkit: https://redux-toolkit.js.org/

---

## 💡 Remember

TaleWeaver is built for **busy parents** and **curious children**. Every feature should make bedtime **easier, safer, and more magical**. When in doubt, prioritize **simplicity and privacy** over feature complexity.
