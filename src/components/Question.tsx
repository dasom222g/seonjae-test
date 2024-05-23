import React, { FC } from 'react'
import { MBTIQuestionType } from '../lib/type'

interface QuestionProps {
  data: MBTIQuestionType
}

const Question: FC<QuestionProps> = ({ data }) => {
  const { code, questionText } = data
  return (
    <div className="text-center">
      <h3 className="text-4xl font-cafe24surround">Qusetion {code}</h3>
      <span className="block pt-10 text-2xl font-cafe24surround">{questionText}</span>
    </div>
  )
}

export default Question
