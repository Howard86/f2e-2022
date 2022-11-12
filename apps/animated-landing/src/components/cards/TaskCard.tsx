/* eslint-disable react/destructuring-assignment */
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { AnimationVariant, TaskSectionAnimation } from '@/constants/animations'
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
          exit={AnimationVariant.Rotate}
          initial={AnimationVariant.Initial}
          whileInView={AnimationVariant.Slide}
          whileHover={AnimationVariant.Float}
          {...props}
        >
          <motion.div
            className="section bg-card-background text-n1 rounded-card h-full cursor-pointer justify-center"
            variants={TaskSectionAnimation.cardItem}
          >
            <h3 className="font-en text-en-h3 mb-2">{props.footer}</h3>

            <Image src={lock} alt="lock icon" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
