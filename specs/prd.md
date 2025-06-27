# Product Requirements Document (PRD)

## Project: Onboarding Experience Refactor for Arami Design System (Mobile-First, Voice-First)

### Overview
Refactor the onboarding experience to fully align with the Arami Design System and voice-first UX. The onboarding flow must be visually delightful, mobile-first, and accessible, with voice-only navigation for core steps.

### Goals
- Achieve full visual and interaction alignment with the Arami Design System (gradient background, card container, indigo glow, rounded corners, gradient headings, Arami progress dots, etc.).
- Optimize all onboarding steps for iPhone/mobile use (touch, spacing, font, responsiveness).
- Modularize onboarding into clear, animated, card-based steps.
- Enhance accessibility and feedback (motion, error states, voice/animation cues).
- Build a reusable component library (Button, Input, Card, Badge, Progress, VoiceWaveform, Avatar).
- Make 'Emotional Discovery', 'Ritual Design', and 'Voice Selection' steps voice-only (no buttons, only listening state). Only Welcome and Complete steps have manual buttons.

### Functional Requirements
1. **Visual Design**
   - Use Arami color palette, gradients, and typography.
   - Card-based layout with rounded corners, indigo glow, and mobile padding.
   - Animated transitions between steps.
   - Progress dots styled per Arami tokens.
2. **Onboarding Flow**
   - Welcome: Name, language, gender selection (manual button to start).
   - Emotional Discovery: Voice-driven, animated listening state (no buttons).
   - Ritual Design: Voice-driven, animated listening state (no buttons).
   - Voice Selection: Voice-driven, animated listening state (no buttons).
   - Complete: Summary, celebration animation (manual button to continue).
3. **Component Library**
   - Button (primary, secondary, ghost; animated)
   - Input (animated placeholder, error/success)
   - Card (rounded, shadow)
   - Badge/Chip (gradient, rounded)
   - Progress Indicator (dots/bar)
   - VoiceWaveform (animated)
   - Avatar (animated pulse/glow)
4. **Accessibility & Mobile**
   - Touch targets ≥44x44px
   - High contrast, readable fonts
   - Responsive layout, min 16px padding
   - ARIA labels and focus states
5. **Motion & Feedback**
   - Button scale on tap/hover
   - Card fade/slide transitions
   - Listening: animated waveform/mic
   - End: confetti/glow burst

### Non-Functional Requirements
- Code modularity and reusability
- Performance on mobile devices
- Easy to extend for future onboarding steps

### Success Criteria
- Visual match to Arami Design System
- Smooth, delightful onboarding on iPhone
- All steps accessible and touch-friendly
- Only Welcome and Complete steps have manual buttons; all others are voice-only
- Reusable component library established 