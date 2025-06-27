# Project Plan: Onboarding Refactor (Arami Design System, Mobile-First)

## Phase 0: Preparation
- [x] Review current onboarding code and design system specs
- [x] Set up `specs/memory.md` for task tracking
- [x] Create `styles/theme.css` for tokens and base styles

## Phase 1: Core Foundations
- [x] Implement global theme/tokens in `theme.css`
- [x] Set up base typography, spacing, and background
- [x] Create Button component (variants, animation)
- [x] Create Input component (animated placeholder, error/success)
- [x] Create Card component (rounded, shadow)
- [x] Create Badge/Chip component (gradient, rounded)
- [x] Create ProgressDots/Bar component
- [x] Create VoiceWaveform animation component
- [x] Create Avatar animation component

## Phase 2: Onboarding Flow Refactor
- [x] Split onboarding steps into separate components (Welcome, Emotional Discovery, Ritual Design, Voice Selection, Complete)
- [x] Refactor `OnboardingPage.tsx` to use new components and manage step transitions
- [x] Add animated transitions between steps (fade/slide)
- [x] Add progress indicator at the top
- [x] Integrate voice/mic/animation feedback in relevant steps

## Phase 3: Mobile Optimization & Accessibility (80/20 Pareto)
- [x] Ensure all buttons and inputs meet minimum touch target size
- [x] Add `inputMode` and `autoComplete` to text inputs
- [x] Add `aria-label` or ensure proper label association for selects
- [x] Ensure semantic HTML for all interactive elements
- [ ] (Deprioritized) Advanced ARIA, exhaustive device testing, edge-case accessibility

## Phase 4: Polish & QA
- [ ] Add end-of-session celebration (confetti/glow burst)
- [ ] Review for visual/interaction match to Arami Design System
- [ ] Code review and refactor for modularity/reusability
- [ ] Final QA and bug fixes

## Phase 5: Documentation & Handover
- [ ] Document component usage and design tokens
- [ ] Update README and onboarding flow documentation
- [ ] Handover to product/design for review 