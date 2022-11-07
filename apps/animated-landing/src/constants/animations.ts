import type { Transition, Variants } from 'framer-motion'

export const enum AnimationVariant {
  Initial = 'hidden',
  Slide = 'slide',
  Float = 'float',
  Scale = 'scale',
  Shrink = 'shrink',
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
  [AnimationVariant.Scale]: {
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
