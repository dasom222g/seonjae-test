import React, { FC } from 'react'
import { MBTIAnswerType } from '../lib/type'

interface AnswerProps {
  data: MBTIAnswerType
}

const Answer: FC<AnswerProps> = ({ data }) => {
  return (
    <div>
      <div className="py-2">
        <button type="button" className="block text-center w-full bg-white p-4 rounded-2xl">
          열심히 산다는 얘기를 들어봤다
        </button>
      </div>
      <div className="py-2">
        <button type="button" className="block text-center w-full bg-white p-4 rounded-2xl">
          갓생? 그게뭐야~~
        </button>
      </div>
    </div>
  )
}

export default Answer
