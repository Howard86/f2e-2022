import clsx from 'clsx'
import { forwardRef } from 'react'
import { DivPropsWithoutRef } from 'react-html-props'

interface SprintFlowCardProps extends DivPropsWithoutRef {
  header: string
  subheader: string
}

const SprintFlowCard = forwardRef<HTMLDivElement, SprintFlowCardProps>(
  ({ header, subheader, className, ...props }, ref) => (
    <div
      ref={ref}
      className={clsx(
        'text-neutral-black-dark mb-8 whitespace-nowrap rounded-xl px-6 py-3 text-center shadow-xl 2xl:px-9',
        className
      )}
      {...props}
    >
      <p className="text-h3">{header}</p>
      <p className="font-bold">{subheader}</p>
    </div>
  )
)

export default SprintFlowCard
