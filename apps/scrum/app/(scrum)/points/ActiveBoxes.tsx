import { memo } from 'react'
import WhiteBox from './WhiteBox'

interface ActiveBoxesProps {
  count: number
}

function ActiveBoxes({ count }: ActiveBoxesProps) {
  if (count > 20) {
    return (
      <>
        {Array.from({ length: 20 }, (_, box) => box).map((box) => (
          <WhiteBox key={box} />
        ))}
        {Array.from({ length: count - 20 }, (_, box) => box + 20).map((box) => (
          <WhiteBox key={box} red />
        ))}
      </>
    )
  }

  return (
    <>
      {Array.from({ length: count }, (_, box) => box).map((box) => (
        <WhiteBox key={box} />
      ))}
    </>
  )
}

export default memo(ActiveBoxes)
