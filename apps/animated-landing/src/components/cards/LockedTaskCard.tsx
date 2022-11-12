import { motion } from 'framer-motion'
import { DivProps } from 'react-html-props'
import Image from 'next/image'
import {
  FADE_IN_ROTATE_VARIANTS,
  AnimationVariant,
  ROTATE_ITEM_VARIANTS,
} from '@/constants/animations'
import lock from '@/../public/assets/icons/lock.png'

interface LockedCardProps extends DivProps {
  title: string
}

export default function LockedCard({ title, onClick }: LockedCardProps) {
  return (
    <motion.div
      onClick={onClick}
      className="from-p3 to-p1 rounded-card h-[360px] w-[300px] bg-gradient-to-r p-0.5 uppercase"
      variants={FADE_IN_ROTATE_VARIANTS}
      exit={AnimationVariant.Rotate}
      custom={2}
    >
      <motion.div
        className="bg-card-background section text-n1 rounded-card h-full justify-center"
        variants={ROTATE_ITEM_VARIANTS}
      >
        <h3 className="font-en text-en-h3 mb-2">{title}</h3>

        <Image src={lock} alt="lock icon" />
      </motion.div>
    </motion.div>
  )
}
