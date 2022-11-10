/* eslint-disable jsx-a11y/heading-has-content */
import { FC, SVGProps } from 'react'
import { AProps, DivProps, HeadingProps, PProps, SpanProps } from 'react-html-props'

export const motion = (component: FC) => component

// eslint-disable-next-line jsx-a11y/anchor-has-content
motion.a = (props: AProps) => <a {...props} />
motion.span = (props: SpanProps) => <span {...props} />
motion.h2 = (props: HeadingProps) => <h2 {...props} />
motion.p = (props: PProps) => <p {...props} />

motion.div = (props: DivProps) => <div {...props} />
motion.article = (props: DivProps) => <article {...props} />
motion.aside = (props: DivProps) => <aside {...props} />
motion.section = (props: DivProps) => <section {...props} />

motion.svg = (props: SVGProps<SVGSVGElement>) => <svg {...props} />
motion.circle = (props: SVGProps<SVGCircleElement>) => <circle {...props} />
