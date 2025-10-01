# TaleWeaver  

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
taleweaver/
├── docs/                  # Documentation (contribution guides, use cases, design notes)
│   ├── CONTRIBUTING.md    # Guidelines for contributors
│   ├── ISSUE_TEMPLATE.md  # Standardized issue reporting
│   └── PROJECT_OVERVIEW.md# Expanded vision and structure
│
├── src/                   # Application source code (React Native)
│   ├── components/        # UI components (cards, buttons, typography, etc.)
│   ├── screens/           # App screens (Home, Quick Generate, Custom Story, Parental Controls)
│   ├── storage/           # Local storage, caching, and profile handling
│   └── utils/             # Helper functions (formatting, validation, etc.)
│
├── assets/                # Fonts, icons, illustrations, sounds, background music
│
├── tests/                 # Unit/integration tests
│
├── .gitignore             # Ignore build artifacts & local files
├── README.md              # Project overview (you're reading this)
└── LICENSE                # Open source license
```

---

## 📋 Development Guidelines

### Code Style
- Follow existing code patterns and conventions in the repository
- Use TypeScript for type safety across React Native components
- Keep components focused and single-purpose
- Maintain consistency with the minimalist design aesthetic

### Key Types & Interfaces
- **ChildProfile**: Contains child information, default settings, and content filters
- **StorySettings**: Defines themes, characters, voice preferences, length, and educational topics
- **ContentFilters**: Manages age-appropriate content and parental restrictions
- **Story**: Represents generated stories with metadata and caching info

### Local Storage First
- All data must be stored locally using device storage
- No external API calls for user data persistence
- Implement proper caching strategies (favorites permanent, others ~2 weeks)
- Ensure offline-first functionality

### UI/UX Principles
- Prioritize the Quick Generate flow as the primary user journey
- Use bottom sheets/modals for settings instead of new screens
- Keep navigation shallow (max 1-2 taps to main actions)
- Ensure all text and UI elements are family-friendly and accessible
- Use playful icons and rounded UI elements for child-friendly aesthetic

### Privacy & Security
- Never implement analytics or tracking
- All child data must remain on-device
- Implement proper parental controls for content filtering
- Ensure age-appropriate content filtering is always active

### Testing
- Write tests for critical flows (story generation, profile management, content filtering)
- Test offline functionality
- Validate privacy controls and data isolation
- Test parental control features thoroughly
