/* eslint-disable react/destructuring-assignment */
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import lock from '@/../public/assets/icons/lock.png'
import { AnimationVariant, TaskSectionAnimation } from '@/constants/animations'
import MobileTaskCard, { type TaskCardProps } from './MobileTaskCard'

export default function TaskCard(props: TaskCardProps) {
  const [clicked, setClicked] = useState(false)

  const onToggle = () => setClicked((state) => !state)
  return (
    <AnimatePresence mode="wait">
      {clicked ? (
        <MobileTaskCard
          exit={AnimationVariant.ZoomOut}
          initial={false}
          onClick={onToggle}
          {...props}
        />
      ) : (
        <motion.article
          className="h-[360px] w-[300px] rounded-card bg-gradient-to-r from-p3 to-p1 p-0.5 uppercase"
          exit={AnimationVariant.Rotate}
          initial={AnimationVariant.Initial}
          key={props.href}
          onClick={onToggle}
          whileHover={AnimationVariant.Float}
          whileInView={AnimationVariant.Slide}
          {...props}
        >
          <motion.div
            className="section h-full cursor-pointer justify-center rounded-card bg-card-background text-n1"
            variants={TaskSectionAnimation.cardItem}
          >
            <h3 className="mb-2 font-en text-en-h3">{props.footer}</h3>

            <Image alt="lock icon" src={lock} />
          </motion.div>
        </motion.article>
      )}
    </AnimatePresence>
  )
}
