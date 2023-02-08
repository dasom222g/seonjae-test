import React, { FC } from 'react'
import { MBTIQuestionType } from '../lib/type'

interface QuestionProps {
  data: MBTIQuestionType
}

const Question: FC<QuestionProps> = ({ data }) => {
  const { code, questionText } = data
  return (
    <div className="text-center">
      <h3 className="text-4xl font-bold">Qusetion {code}</h3>
      <span className="block pt-12 text-lg">{questionText}</span>
    </div>
  )
}

export default Question
