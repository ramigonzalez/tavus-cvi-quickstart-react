# Tavus Conversational Video Interface

## 🚀 Features

This app includes:
- Welcome screen featuring a "Start Conversation" button to initiate the CVI
- Hair check screen with custom select options to manage audio and video devices
- Video call interface powered by Daily.co
- Integration with Tavus API for conversation management

|                                                                    |                                                                                              |
| ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------- |
| ![Prejoin UI](https://cdn.replica.tavus.io/git-examples/scr-1.png) | ![Hair check UI](https://cdn.replica.tavus.io/git-examples/scr-2.png) |
| ![in-call UI](https://cdn.replica.tavus.io/git-examples/scr-3.png) |


## 🎥 Demo Video

Check out our demo video to see the Conversational Video Interface in action:

[Watch the Demo](https://www.loom.com/share/b4e3ef661e264260a8d8f4cede48aaa8?sid=ada64974-5495-4c52-b635-7ac76b543208)



## 🛠 Getting Started

1. Install dependencies:
   ```
   npm install
   ```

2. Create a `.env` file in the root directory and add your Tavus API key:
   ```
   VITE_APP_TAVUS_API_KEY=your_api_key_here
   ```
   You can create an API key at https://platform.tavus.io/

3. Start the development server:
   ```
   npm run dev
   ```

## 📚 Learn More

- [Developer Documentation](https://docs.tavus.io/)
- [API Reference](https://docs.tavus.io/api-reference/)
- [Tavus Platform](https://platform.tavus.io/)
- [Daily React Reference](https://docs.daily.co/reference/daily-react)

# Tavus Conversational Video Interface – Onboarding Refactor

## Overview
This project refactors the onboarding experience to follow the Arami Design System, with a focus on mobile-first (iPhone) usability, accessibility, and delightful user experience.

## Key Features
- **Mobile-first, card-based onboarding flow**
- **Arami Design System**: gradients, palette, rounded cards, animated feedback
- **Accessibility**: large touch targets, semantic HTML, inputMode/autoComplete, label association
- **Celebration**: Confetti/glow burst animation at onboarding completion

## New Component Library
Reusable UI components in `src/components/ui/`:
- `Button` (primary, secondary, ghost, animated)
- `Input` (animated placeholder, error/success)
- `Card` (rounded, shadow)
- `Badge` (gradient, rounded)
- `ProgressDots` (step indicator)
- `VoiceWaveform` (animated listening state)
- `Avatar` (animated pulse/glow)

## Onboarding Step Components
Located in `src/pages/onboarding/`:
- `WelcomeStep`
- `EmotionalDiscoveryStep`
- `RitualDesignStep`
- `VoiceSelectionStep`
- `CompleteStep` (with celebration)

## How to Use
- The onboarding flow is managed in `OnboardingPage.tsx`.
- Each step is a modular component, receives state and navigation props.
- The flow is mobile-optimized and accessible by default.

## Design Tokens & Theme
- All colors, gradients, spacing, and radii are defined in `src/styles/theme.css`.
- Typography and layout follow Arami Design System guidelines.

## Accessibility
- Inputs use `inputMode` and `autoComplete` where appropriate.
- All interactive elements are keyboard accessible and have proper labels.

## Polish & QA
- End-of-session celebration animation for delight.
- Visual and interaction match to Arami Design System.

---
For more details, see `specs/prd.md` and `specs/project_plan.md`.
