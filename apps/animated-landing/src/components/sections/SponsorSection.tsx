import { motion } from 'framer-motion'
import Image, { type StaticImageData } from 'next/image'
import blockStudio from '@/../public/assets/company/block-studio.png'
import kdanMobile from '@/../public/assets/company/kdan-mobile.png'
import titanSoft from '@/../public/assets/company/titan-soft.png'
import { AnimationVariant, SponsorSectionAnimation } from '@/constants/animations'
import { MotionExternalLink } from '../ExternalLink'
import YellowStarIcon from '../icons/YellowStarIcon'

type Company = {
  name: string
  logo: StaticImageData
  href: string
}

const COMPANIES: Company[] = [
  {
    href: 'https://blockstudio.tw/',
    logo: blockStudio,
    name: '板塊設計',
  },
  {
    href: 'https://www.kdanmobile.com/',
    logo: kdanMobile,
    name: '凱鈿行動科技',
  },
  {
    href: 'https://titansoft.com',
    logo: titanSoft,
    name: '新加坡商 泰坦科技',
  },
]

export default function SponsorSection() {
  return (
    <motion.section
      className="section snap-start gap-6 bg-n3 pt-20 pb-10"
      initial={AnimationVariant.Initial}
      whileInView={AnimationVariant.Activate}
    >
      <div className="relative mb-4 px-6">
        <YellowStarIcon
          className="absolute top-2 -right-1 h-auto w-8 md:-right-3"
          variants={SponsorSectionAnimation.icon}
        />
        <h2 className="py-5 text-center">
          <span className="block font-en text-en-h3 uppercase">Sponsors</span>
          <span className="block font-bold text-ch-h4">鑽石級贊助商</span>
        </h2>
        <YellowStarIcon
          className="absolute bottom-8 -left-3 md:-left-8"
          custom={1}
          variants={SponsorSectionAnimation.icon}
        />
      </div>
      <motion.div
        className="section mb-5 gap-6 md:flex-row md:gap-14"
        variants={SponsorSectionAnimation.container}
      >
        {COMPANIES.map((company) => (
          <MotionExternalLink
            className="rounded-card bg-n1 p-1.5 transition-all hover:bg-decoration focus:bg-decoration"
            href={company.href}
            key={company.href}
            variants={SponsorSectionAnimation.card}
            whileHover={AnimationVariant.Float}
          >
            <Image
              alt={company.name}
              className="overflow-hidden rounded-[28px] bg-n1 p-1.5"
              placeholder="blur"
              src={company.logo}
            />
          </MotionExternalLink>
        ))}
      </motion.div>
    </motion.section>
  )
}
