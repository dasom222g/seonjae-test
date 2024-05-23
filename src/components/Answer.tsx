import React, { FC } from 'react'
import { style } from '../data/style'
import { AnswerType, MBTIAnswerType } from '../lib/type'

interface AnswerProps {
  data: MBTIAnswerType
  handleSelect: (currentStep: number, selectItem: AnswerType) => void
}

const Answer: FC<AnswerProps> = ({ data, handleSelect }) => {
  const { answerList, questionCode } = data

  const handleClick = (selectItem: AnswerType): void => {
    handleSelect(questionCode, selectItem)
  }
  return (
    <div>
      {answerList.map((answer) => (
        <div key={answer.code} className={style.roundInterval}>
          <button
            type="button"
            className={`${style.roundBox} rounded-xl bg-white border-2 border-black`}
            onClick={() => handleClick(answer)}>
            {answer.text}
          </button>
        </div>
      ))}
    </div>
  )
}

export default Answer
