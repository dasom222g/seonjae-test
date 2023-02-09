import React, { FC } from 'react'
import { style } from '../data/style'
import { MBTIAnswerType } from '../lib/type'

interface AnswerProps {
  data: MBTIAnswerType
}

const Answer: FC<AnswerProps> = ({ data }) => {
  const { answerList } = data
  return (
    <div>
      {answerList.map((answer) => (
        <div key={answer.code} className={style.roundInterval}>
          <button type="button" className={`${style.roundBox} rounded-xl`}>
            {answer.text}
          </button>
        </div>
      ))}
    </div>
  )
}

export default Answer
