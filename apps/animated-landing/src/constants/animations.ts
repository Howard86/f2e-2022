import type { Transition, Variants } from 'framer-motion'

export enum AnimationVariant {
  Initial = 'hidden',
  Slide = 'slide',
  Float = 'float',
  ScaleUpAndDown = 'scale-up-and-down',
  Shrink = 'shrink',
  Bounce = 'bounce',
  ScaleOrSlide = 'scale-or-slide',
  Rotate = 'rotate',
  ZoomOut = 'zoom-out',
  Activate = 'active',
}

export const ANIMATIONS = [AnimationVariant.Slide, AnimationVariant.Float]

export const SPRING_TRANSITION: Transition = { bounce: 0.4, duration: 2.8, type: 'spring' }

export const EASE_STAGER_TRANSITIONS: Transition = {
  duration: 1.28,
  ease: [0.43, 0.13, 0.23, 0.96],
  staggerChildren: 0.2,
}

export const MARQUEE_TRANSITION: Transition = {
  duration: 3.2,
  ease: 'linear',
  repeat: Number.POSITIVE_INFINITY,
  repeatType: 'loop',
  times: [0, 1],
}

export const EASE_TRANSITIONS: Transition = {
  duration: 1.28,
  ease: [0.43, 0.13, 0.23, 0.96],
}

export const SLIDE_UP_VARIANTS: Variants = {
  [AnimationVariant.Initial]: { opacity: 0, y: 20 },
  [AnimationVariant.Slide]: { opacity: 1, y: 0 },
  [AnimationVariant.Float]: {
    transition: {
      duration: 2.4,
      ease: 'easeInOut',
      repeat: Number.POSITIVE_INFINITY,
      repeatType: 'reverse',
    },
    translateX: [-1, 1],
    y: [0, -10],
  },
}

export const DELAYED_SLIDE_UP_VARIANTS: Variants = {
  [AnimationVariant.Initial]: { opacity: 0, translateY: 20 },
  [AnimationVariant.Slide]: {
    opacity: 1,
    transition: { ...SPRING_TRANSITION, delay: 0.1 },
    translateY: 0,
  },
}

export const SLIDE_DOWN_VARIANTS: Variants = {
  [AnimationVariant.Initial]: { opacity: 0, translateY: -10 },
  [AnimationVariant.Slide]: { opacity: 1, translateY: 0 },
  [AnimationVariant.Float]: {
    transition: {
      delay: 0.4,
      duration: 2.4,
      ease: 'easeInOut',
      repeat: Number.POSITIVE_INFINITY,
      repeatType: 'reverse',
    },
    translateX: [1, -1],
    translateY: [-10, 0],
  },
}

export const SLIDE_LEFT_VARIANTS: Variants = {
  [AnimationVariant.Initial]: { scale: 1, transition: SPRING_TRANSITION, translateX: 0 },
  [AnimationVariant.Float]: {
    transition: {
      delay: 0.8,
      duration: 2.4,
      ease: 'easeInOut',
      repeat: Number.POSITIVE_INFINITY,
      repeatType: 'reverse',
    },
    translateX: [0, -4],
  },
  [AnimationVariant.ScaleUpAndDown]: {
    scale: [1.1, 0.9],
    transition: {
      duration: 0.8,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: 'reverse',
      type: 'spring',
    },
    translateX: 0,
  },
  [AnimationVariant.Shrink]: {
    scale: [0.9],
  },
}

// StatementSection
export const BOUNCE_CONTAINER_VARIANTS: Variants = {
  [AnimationVariant.Initial]: {},
  [AnimationVariant.Bounce]: {
    transition: {
      delayChildren: 0.4,
      duration: 0.64,
      ease: [0.43, 0.13, 0.23, 0.96],
      staggerChildren: 1.2,
    },
  },
}

export const BOUNCE_OUT_VARIANTS: Variants = {
  [AnimationVariant.Initial]: {},
  [AnimationVariant.Bounce]: {
    opacity: [0, 1, 0.95, 1, 0.98, 1],
    scale: [0.3, 1.1, 0.9, 1.03, 0.97, 1],
    transition: {
      staggerChildren: 0.06,
    },
  },
}

// Solution Section
export const SCALE_IN_VARIANTS: Variants = {
  [AnimationVariant.Initial]: {
    opacity: 0,
    scale: 0,
  },
  [AnimationVariant.ScaleOrSlide]: {
    opacity: 1,
    scale: 1,
    transition: EASE_TRANSITIONS,
  },
}

export enum SlideDirection {
  Top = 0,
  Bottom = 1,
  Left = 2,
  Right = 3,
}

export const FADE_SLIDE_IN_VARIANTS: Variants = {
  [AnimationVariant.Initial]: (position) => {
    switch (position) {
      case SlideDirection.Top:
        return { opacity: 0, y: '140%' }

      case SlideDirection.Bottom:
        return { opacity: 0, y: '-140%' }

      case SlideDirection.Left:
        return { opacity: 0, x: '162%' }

      case SlideDirection.Right:
        return { opacity: 0, x: '-162%' }

      default:
        throw new Error(`unknown position ${position}`)
    }
  },
  [AnimationVariant.ScaleOrSlide]: (position) => {
    switch (position) {
      case SlideDirection.Top:
      case SlideDirection.Bottom:
        return { opacity: 1, transition: EASE_TRANSITIONS, y: 0 }

      case SlideDirection.Left:
      case SlideDirection.Right:
        return { opacity: 1, transition: EASE_TRANSITIONS, x: 0 }

      default:
        throw new Error(`unknown position ${position}`)
    }
  },
}

export const SLIDE_HORIZONTAL_VARIANTS: Variants = {
  [AnimationVariant.Initial]: (reversed) => ({
    rotate: reversed ? 180 : 0,
    x: reversed ? 480 : 0,
  }),
  [AnimationVariant.ScaleOrSlide]: (reversed) => ({
    rotate: reversed ? 180 : 0,
    transition: EASE_TRANSITIONS,
    x: reversed ? 0 : 620,
  }),
}

export const ROTATE_VARIANTS: Variants = {
  [AnimationVariant.Initial]: (reversed) => ({
    opacity: 0,
    rotate: reversed ? 60 : -45,
  }),
  [AnimationVariant.ScaleOrSlide]: (reversed) => ({
    opacity: 1,
    originX: reversed ? 0.2 : -1,
    originY: 0.24,
    perspective: 600,
    rotate: 0,
    transition: EASE_TRANSITIONS,
  }),
}

// TaskSection
export const FADE_IN_ROTATE_VARIANTS: Variants = {
  [AnimationVariant.Initial]: (y = 100) => ({
    opacity: 0,
    y,
  }),
  [AnimationVariant.Slide]: {
    opacity: [0.2, 1],
    transition: EASE_TRANSITIONS,
    y: 0,
  },
  [AnimationVariant.Rotate]: {
    opacity: [1, 1, 1, 0.8],
    rotateY: 540,
    transition: {
      duration: 0.64,
      type: 'tween',
    },
    x: [0, 1, 0],
    y: [0, -2, 0],
  },
  [AnimationVariant.ZoomOut]: {
    opacity: [1, 0],
    scale: [1, 0],
    transition: EASE_TRANSITIONS,
  },
  [AnimationVariant.Float]: {
    rotateX: [0, -12],
    rotateY: [0, 24],
    transition: {
      duration: 0.64,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: 'reverse',
      type: 'spring',
    },
  },
}

export const ROTATE_ITEM_VARIANTS: Variants = {
  [AnimationVariant.Rotate]: {
    opacity: [1, 0.6, 0.1, 0],
    transition: {
      ease: 'easeOut',
    },
  },
}

// SubmissionSection

export const FADE_VARIANTS: Variants = {
  [AnimationVariant.Initial]: { opacity: 0 },
  [AnimationVariant.Slide]: { opacity: 1, transition: EASE_TRANSITIONS },
}

// CompetitionSection
export const COMPETITION_VARIANTS: Variants = {
  [AnimationVariant.Initial]: { opacity: 0 },
  [AnimationVariant.Activate]: { opacity: 1, transition: EASE_TRANSITIONS },
}

export const DELAYED_FADE_VARIANTS: Variants = {
  [AnimationVariant.Initial]: { opacity: 0 },
  [AnimationVariant.Activate]: { opacity: 1, transition: { ...EASE_TRANSITIONS, delay: 1.28 } },
}

export const DELAYED_SHRINK_VARIANTS: Variants = {
  [AnimationVariant.Initial]: { maxWidth: '100%' },
  [AnimationVariant.Activate]: { maxWidth: 0, transition: { delay: 2.56, duration: 1.92 } },
}

export const RACE_CAR_FLAG_VARIANTS: Variants = {
  [AnimationVariant.Activate]: { rotate: -37, transition: { delay: 4.48 }, x: -17, y: -21 },
}

export const SLIDE_UP_VARIANTS_TWO: Variants = {
  [AnimationVariant.Initial]: { y: 40 },
  [AnimationVariant.Activate]: { transition: EASE_TRANSITIONS, y: 0 },
}

// CommonQuestionSection
export const HIDE_AND_SHOW_VARIANTS: Variants = {
  [AnimationVariant.Initial]: { opacity: 0 },
  [AnimationVariant.Activate]: {
    opacity: 1,
    transition: { duration: 0.32, staggerChildren: 0.12 },
  },
}

export const FADE_UP_VARIANTS: Variants = {
  [AnimationVariant.Initial]: { opacity: 0, y: 10 },
  [AnimationVariant.Activate]: {
    opacity: 1,
    transition: { duration: 0.64, type: 'spring' },
    y: 0,
  },
}

export const ROTATE_IN_VARIANTS: Variants = {
  [AnimationVariant.Initial]: {
    opacity: 0,
    rotate: -360,
  },
  [AnimationVariant.Activate]: {
    opacity: 1,
    rotate: 0,
    transition: { duration: 1.28, ease: 'easeOut' },
  },
  [AnimationVariant.Float]: {
    scale: [1, 1.1],
    transition: {
      duration: 0.64,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: 'reverse',
      type: 'spring',
    },
    y: [0, 4.8, -7.2],
  },
}

export const DOT_VARIANTS: Variants = {
  [AnimationVariant.Initial]: { opacity: 0 },
  [AnimationVariant.Slide]: { opacity: 1, transition: EASE_STAGER_TRANSITIONS },
}

export const SHINE_VARIANTS: Variants = {
  [AnimationVariant.Initial]: { opacity: 0 },
  [AnimationVariant.Activate]: (delay = 0) => ({
    opacity: [1, 0.8],
    scale: [1, 1.1],
    transition: {
      delay,
      duration: 0.64,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: 'reverse',
      type: 'spring',
    },
  }),
}

export const HomeSectionAnimation = {
  '4th': DELAYED_SLIDE_UP_VARIANTS,
  code: SLIDE_DOWN_VARIANTS,
  dashboard: SLIDE_UP_VARIANTS,
  f2e: SLIDE_UP_VARIANTS,
  signUp: SLIDE_LEFT_VARIANTS,
} as const

export const StatementSectionAnimation = {
  item: BOUNCE_OUT_VARIANTS,
  section: BOUNCE_CONTAINER_VARIANTS,
} as const

export const SolutionSectionAnimation = {
  banner: SLIDE_HORIZONTAL_VARIANTS,
  codeStamp: ROTATE_VARIANTS,
  description: SCALE_IN_VARIANTS,
  palm: FADE_SLIDE_IN_VARIANTS,
  starStamp: ROTATE_VARIANTS,
  title: SCALE_IN_VARIANTS,
} as const

export const TaskSectionAnimation = {
  card: FADE_IN_ROTATE_VARIANTS,
  cardItem: ROTATE_ITEM_VARIANTS,
  description: FADE_IN_ROTATE_VARIANTS,
  icon: SHINE_VARIANTS,
  iconContainer: SLIDE_DOWN_VARIANTS,
  title: SLIDE_DOWN_VARIANTS,
} as const

export const SubmissionSectionAnimation = {
  card: SLIDE_UP_VARIANTS,
  container: SLIDE_UP_VARIANTS,
  title: SLIDE_UP_VARIANTS,
} as const

export const CompetitionSectionAnimation = {
  car: DELAYED_SHRINK_VARIANTS,
  container: SLIDE_UP_VARIANTS_TWO,
  delayedTitle: DELAYED_FADE_VARIANTS,
  flag: RACE_CAR_FLAG_VARIANTS,
  section: COMPETITION_VARIANTS,
  title: SLIDE_UP_VARIANTS_TWO,
} as const

export const CommonQuestionSectionAnimation = {
  button: SLIDE_LEFT_VARIANTS,
  doc: FADE_UP_VARIANTS,
  tabPanel: HIDE_AND_SHOW_VARIANTS,
} as const

export const SponsorSectionAnimation = {
  card: ROTATE_IN_VARIANTS,
  container: HIDE_AND_SHOW_VARIANTS,
  icon: SHINE_VARIANTS,
} as const
