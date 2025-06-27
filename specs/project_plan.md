# Project Plan: Onboarding Refactor (Arami Design System, Mobile-First, Voice-First)

## Phase 0: Preparation
- [x] Review current onboarding code and design system specs
- [x] Set up `specs/memory.md` for task tracking
- [x] Create/verify `styles/theme.css` for tokens and base styles

## Phase 1: Arami Visual & Structural Refactor (Complete)
- [x] Update global styles for Arami gradient background and micro-grain overlay
- [x] Refactor onboarding container to use `.card` with indigo glow, rounded corners, and padding
- [x] Update headings to use gradient text and correct font sizes
- [x] Refactor inputs to use dark backgrounds, rounded corners, and animated placeholders
- [x] Update button to use Arami gradient, rounded corners, and scale animation
- [x] Style progress dots with Arami color tokens and spacing
- [x] Apply 16/24/32px spacing throughout
- [x] Add fade-in transitions for cards/steps
- [x] All onboarding steps now visually match the Arami Design System (gradient, card, heading, spacing, fade-in, etc.)

## Phase 2: Voice-Only Step Refactor (In Progress)
- [ ] Remove Back/Next buttons from Emotional Discovery, Ritual Design, and Voice Selection steps
- [ ] Show only animated listening state (waveform, indicator) on these steps
- [ ] Ensure navigation between these steps is handled by voice/programmatically
- [ ] Only Welcome and Complete steps have manual buttons

## Phase 3: Accessibility & Mobile Polish (Complete)
- [ ] Ensure all touch targets are ≥44x44px
- [ ] Ensure all labels are associated with inputs and selects
- [ ] Add ARIA attributes where needed for screen readers
- [ ] Test on iPhone/mobile for spacing, usability, and color contrast
- [ ] Polish error/success states for inputs
- [ ] Review keyboard navigation and focus states

## Phase 4: Polish & QA (Complete)
- [ ] Add end-of-session celebration (confetti/glow burst)
- [ ] Review for visual/interaction match to Arami Design System
- [ ] Code review and refactor for modularity/reusability
- [ ] Final QA and bug fixes

## Phase 5: Documentation & Handover (In Progress)
- [ ] Document component usage and design tokens in code and/or docs
- [ ] Update README and onboarding flow documentation
- [ ] Prepare handover checklist for product/design
- [ ] Handover to product/design for review 