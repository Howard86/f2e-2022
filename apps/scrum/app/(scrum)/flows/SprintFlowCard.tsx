import clsx from 'clsx'
import type { DivProps } from 'react-html-props'

interface SprintFlowCardProps extends DivProps {
  header: string
  subheader: string
}

const SprintFlowCard = ({ header, subheader, className, ref, ...props }: SprintFlowCardProps) => (
  <div
    className={clsx(
      'mb-8 whitespace-nowrap rounded-xl px-6 py-3 text-center text-neutral-black-dark shadow-xl 2xl:px-9',
      className
    )}
    ref={ref}
    {...props}
  >
    <p className="text-h3">{header}</p>
    <p className="font-bold">{subheader}</p>
  </div>
)

export default SprintFlowCard
