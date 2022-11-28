/* eslint-disable react/no-array-index-key */
import { memo } from 'react'
import WhiteBox from './WhiteBox'

interface ActiveBoxesProps {
  count: number
}

function ActiveBoxes({ count }: ActiveBoxesProps) {
  if (count > 20) {
    return (
      <>
        {new Array(20).fill(0).map((_, index) => (
          <WhiteBox key={index} />
        ))}
        {new Array(count - 20).fill(0).map((_, index) => (
          <WhiteBox key={20 + index} red />
        ))}
      </>
    )
  }

  return (
    <>
      {new Array(count).fill(0).map((_, index) => (
        <WhiteBox key={index} />
      ))}
    </>
  )
}

export default memo(ActiveBoxes)
