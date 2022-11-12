import Image, { StaticImageData } from 'next/image'

import { motion } from 'framer-motion'
import blockStudio from '@/../public/assets/company/block-studio.png'
import kdanMobile from '@/../public/assets/company/kdan-mobile.png'
import titanSoft from '@/../public/assets/company/titan-soft.png'

import YellowStarIcon from '../icons/YellowStarIcon'
import { AnimationVariant, SponsorSectionAnimation } from '@/constants/animations'
import { MotionExternalLink } from '../ExternalLink'

type Company = {
  name: string
  logo: StaticImageData
  href: string
}

const COMPANIES: Company[] = [
  {
    name: '板塊設計',
    logo: blockStudio,
    href: 'https://blockstudio.tw/',
  },
  {
    name: '凱鈿行動科技',
    logo: kdanMobile,
    href: 'https://www.kdanmobile.com/',
  },
  {
    name: '新加坡商 泰坦科技',
    logo: titanSoft,
    href: 'https://titansoft.com',
  },
]

export default function SponsorSection() {
  return (
    <motion.section
      initial={AnimationVariant.Initial}
      whileInView={AnimationVariant.Activate}
      className="section bg-n3 snap-start gap-6 pt-20 pb-10"
    >
      <div className="relative mb-4 px-6">
        <YellowStarIcon
          variants={SponsorSectionAnimation.icon}
          className="absolute top-2 -right-1 h-auto w-8 md:-right-3"
        />
        <h2 className="py-5 text-center">
          <span className="font-en text-en-h3 block uppercase">Sponsors</span>
          <span className="text-ch-h4 block font-bold">鑽石級贊助商</span>
        </h2>
        <YellowStarIcon
          variants={SponsorSectionAnimation.icon}
          className="absolute bottom-8 -left-3 md:-left-8"
          custom={1}
        />
      </div>
      <motion.div
        variants={SponsorSectionAnimation.container}
        className="section mb-5 gap-6 md:flex-row md:gap-14"
      >
        {COMPANIES.map((company) => (
          <MotionExternalLink
            key={company.href}
            href={company.href}
            className="bg-n1 rounded-card hover:bg-decoration focus:bg-decoration p-1.5 transition-all"
            variants={SponsorSectionAnimation.card}
            whileHover={AnimationVariant.Float}
          >
            <Image
              alt={company.name}
              src={company.logo}
              className="bg-n1 overflow-hidden rounded-[28px] p-1.5"
              placeholder="blur"
            />
          </MotionExternalLink>
        ))}
      </motion.div>
    </motion.section>
  )
}
