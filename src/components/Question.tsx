import React, { FC } from 'react'
import { MBTIQuestionType } from '../lib/type'

interface QuestionProps {
  data: MBTIQuestionType
}

const Question: FC<QuestionProps> = ({ data }) => {
  const { code, questionText } = data
  return (
    <div className="text-center">
      <h3 className="text-5xl font-beeunhye">Qusetion {code}</h3>
      <span className="block pt-12 text-3xl font-kyobohandwriting2021sjy">{questionText}</span>
    </div>
  )
}

export default Question
