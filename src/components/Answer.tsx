import React, { FC } from 'react'
import { MBTIAnswerType } from '../lib/type'

interface AnswerProps {
  data: MBTIAnswerType
}

const Answer: FC<AnswerProps> = ({ data }) => {
  const { answerList } = data
  return (
    <div>
      {answerList.map((answer) => (
        <div key={answer.code} className="py-2">
          <button type="button" className="block text-center w-full bg-white p-4 rounded-2xl">
            {answer.text}
          </button>
        </div>
      ))}
    </div>
  )
}

export default Answer
