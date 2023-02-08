import React, { FC } from 'react'
import Progress from '../components/Progress'
import Question from '../components/Question'
import Answer from '../components/Answer'
import { mbtiAnswer, mbtiQuestion } from '../data/response'

const Test: FC = () => {
  return (
    <section className="h-full py-12 flex flex-col justify-between">
      <Progress total={12} currentStep={3} />
      <Question data={mbtiQuestion[2]} />
      <Answer data={mbtiAnswer[2]} />
    </section>
  )
}

export default Test
