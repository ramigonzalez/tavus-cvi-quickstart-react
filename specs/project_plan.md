# Project Plan: Onboarding Refactor (Arami Design System, Mobile-First)

## Phase 0: Preparation
- [ ] Review current onboarding code and design system specs
- [ ] Set up `specs/memory.md` for task tracking
- [ ] Create `styles/theme.css` for tokens and base styles

## Phase 1: Core Foundations
- [ ] Implement global theme/tokens in `theme.css`
- [ ] Set up base typography, spacing, and background
- [ ] Create Button component (variants, animation)
- [ ] Create Input component (animated placeholder, error/success)
- [ ] Create Card component (rounded, shadow)
- [ ] Create Badge/Chip component (gradient, rounded)
- [ ] Create ProgressDots/Bar component
- [ ] Create VoiceWaveform animation component
- [ ] Create Avatar animation component

## Phase 2: Onboarding Flow Refactor
- [ ] Split onboarding steps into separate components (Welcome, Emotional Discovery, Ritual Design, Voice Selection, Complete)
- [ ] Refactor `OnboardingPage.tsx` to use new components and manage step transitions
- [ ] Add animated transitions between steps (fade/slide)
- [ ] Add progress indicator at the top
- [ ] Integrate voice/mic/animation feedback in relevant steps

## Phase 3: Mobile Optimization & Accessibility
- [ ] Test on iPhone/mobile devices (Safari, Chrome)
- [ ] Adjust spacing, font sizes, and touch targets for mobile
- [ ] Ensure all interactive elements are accessible (ARIA, focus states)
- [ ] Polish error/success states for inputs

## Phase 4: Polish & QA
- [ ] Add end-of-session celebration (confetti/glow burst)
- [ ] Review for visual/interaction match to Arami Design System
- [ ] Code review and refactor for modularity/reusability
- [ ] Final QA and bug fixes

## Phase 5: Documentation & Handover
- [ ] Document component usage and design tokens
- [ ] Update README and onboarding flow documentation
- [ ] Handover to product/design for review 