/* eslint-disable react/destructuring-assignment */
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import {
  AnimationVariant,
  FADE_IN_ROTATE_VARIANTS,
  ROTATE_ITEM_VARIANTS,
} from '@/constants/animations'
import MobileTaskCard, { TaskCardProps } from './MobileTaskCard'
import lock from '@/../public/assets/icons/lock.png'

export default function TaskCard(props: TaskCardProps) {
  const [clicked, setClicked] = useState(false)

  const onToggle = () => setClicked((state) => !state)
  return (
    <AnimatePresence mode="wait">
      {clicked ? (
        <MobileTaskCard
          initial={false}
          onClick={onToggle}
          exit={AnimationVariant.ZoomOut}
          {...props}
        />
      ) : (
        <motion.div
          key={props.href}
          onClick={onToggle}
          className="from-p3 to-p1 rounded-card h-[360px] w-[300px] bg-gradient-to-r p-0.5 uppercase"
          variants={FADE_IN_ROTATE_VARIANTS}
          exit={AnimationVariant.Rotate}
          whileHover={AnimationVariant.Float}
          custom={props.custom}
        >
          <motion.div
            className="bg-card-background section text-n1 rounded-card h-full cursor-pointer justify-center"
            variants={ROTATE_ITEM_VARIANTS}
          >
            <h3 className="font-en text-en-h3 mb-2">{props.footer}</h3>

            <Image src={lock} alt="lock icon" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
