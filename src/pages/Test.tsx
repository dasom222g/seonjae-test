import React, { FC } from 'react'
import Progress from '../components/Progress'
import Question from '../components/Question'
import SelectAnswer from '../components/SelectAnswer'

const Test: FC = () => {
  return (
    <section className="h-full py-12 flex flex-col justify-between">
      <Progress total={12} currentStep={12} />
      <Question />
      <SelectAnswer />
    </section>
  )
}

export default Test
