import type { Transition, Variants } from 'framer-motion'

export const enum AnimationVariant {
  Initial = 'hidden',
  Slide = 'slide',
  Float = 'float',
  ScaleUpAndDown = 'scale-up-and-down',
  Shrink = 'shrink',
  Bounce = 'bounce',
  ScaleOrSlide = 'scale-or-slide',
}

export const ANIMATIONS = [AnimationVariant.Slide, AnimationVariant.Float]

export const SLIDE_TRANSITION: Transition = { type: 'spring', bounce: 0.4, duration: 2.8 }

export const SLIDE_UP_VARIANTS: Variants = {
  [AnimationVariant.Initial]: { opacity: 0, y: 20 },
  [AnimationVariant.Slide]: { opacity: 1, y: 0 },
  [AnimationVariant.Float]: {
    y: [0, -10],
    translateX: [-1, 1],
    transition: {
      duration: 2.4,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
}

export const DELAYED_SLIDE_UP_VARIANTS: Variants = {
  [AnimationVariant.Initial]: { opacity: 0, translateY: 20 },
  [AnimationVariant.Slide]: {
    opacity: 1,
    translateY: 0,
    transition: { ...SLIDE_TRANSITION, delay: 0.1 },
  },
}

export const SLIDE_DOWN_VARIANTS: Variants = {
  [AnimationVariant.Initial]: { opacity: 0, translateY: -10 },
  [AnimationVariant.Slide]: { opacity: 1, translateY: 0 },
  [AnimationVariant.Float]: {
    translateY: [-10, 0],
    translateX: [1, -1],
    transition: {
      delay: 0.4,
      duration: 2.4,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
}

export const SLIDE_LEFT_VARIANTS: Variants = {
  [AnimationVariant.Initial]: { translateX: 0, transition: SLIDE_TRANSITION },
  [AnimationVariant.Float]: {
    translateX: [0, -4],
    transition: {
      delay: 0.8,
      duration: 2.4,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
  [AnimationVariant.ScaleUpAndDown]: {
    translateX: 0,
    scale: [1.1, 0.9],
    transition: {
      duration: 0.8,
      type: 'spring',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
  [AnimationVariant.Shrink]: {
    scale: [0.9],
  },
}

export const MARQUEE_TRANSITION: Transition = {
  duration: 3.2,
  times: [0, 1],
  ease: 'linear',
  repeat: Infinity,
  repeatType: 'loop',
}

export const BOUNCE_CONTAINER_VARIANTS: Variants = {
  [AnimationVariant.Initial]: {},
  [AnimationVariant.Bounce]: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 1.2,
      duration: 0.64,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
}

export const BOUNCE_OUT_VARIANTS: Variants = {
  [AnimationVariant.Initial]: {},
  [AnimationVariant.Bounce]: {
    scale: [0.3, 1.1, 0.9, 1.03, 0.97, 1],
    opacity: [0, 1, 1, 1, 1, 1],
  },
}

export const SCALE_IN_TRANSITIONS: Transition = {
  duration: 1.28,
  ease: [0.43, 0.13, 0.23, 0.96],
}

export const SCALE_IN_VARIANTS: Variants = {
  [AnimationVariant.Initial]: {
    opacity: 0,
    scale: 0,
  },
  [AnimationVariant.ScaleOrSlide]: {
    opacity: 1,
    scale: 1,
    transition: SCALE_IN_TRANSITIONS,
  },
}

export const enum SlideDirection {
  Top,
  Bottom,
  Left,
  Right,
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
        return { opacity: 1, y: 0, transition: SCALE_IN_TRANSITIONS }

      case SlideDirection.Left:
      case SlideDirection.Right:
        return { opacity: 1, x: 0, transition: SCALE_IN_TRANSITIONS }

      default:
        throw new Error(`unknown position ${position}`)
    }
  },
}

export const SLIDE_HORIZONTAL_VARIANTS: Variants = {
  [AnimationVariant.Initial]: (reversed) => ({
    x: reversed ? 480 : 0,
    rotate: reversed ? 180 : 0,
  }),
  [AnimationVariant.ScaleOrSlide]: (reversed) => ({
    x: reversed ? 0 : 620,
    transition: SCALE_IN_TRANSITIONS,
    rotate: reversed ? 180 : 0,
  }),
}

export const ROTATE_VARIANTS: Variants = {
  [AnimationVariant.Initial]: (reversed) => ({
    opacity: 0,
    rotate: reversed ? 60 : -45,
  }),
  [AnimationVariant.ScaleOrSlide]: (reversed) => ({
    transition: SCALE_IN_TRANSITIONS,
    rotate: 0,
    perspective: 600,
    originX: reversed ? 0.2 : -1,
    originY: 0.24,
    opacity: 1,
  }),
}
