import React, { FC } from 'react'
import { style } from '../data/style'
import { MBTIAnswerType } from '../lib/type'

interface AnswerProps {
  data: MBTIAnswerType
  handleNextQuestion: (currentStep: number) => void
}

const Answer: FC<AnswerProps> = ({ data, handleNextQuestion }) => {
  const { answerList, questionCode } = data

  const handleClick = (): void => {
    handleNextQuestion(questionCode)
  }
  return (
    <div>
      {answerList.map((answer) => (
        <div key={answer.code} className={style.roundInterval}>
          <button type="button" className={`${style.roundBox} rounded-xl`} onClick={handleClick}>
            {answer.text}
          </button>
        </div>
      ))}
    </div>
  )
}

export default Answer
