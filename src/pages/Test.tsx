import React, { FC, useEffect } from 'react'
import Progress from '../components/Progress'
import Question from '../components/Question'
import Answer from '../components/Answer'
import { mbtiAnswer, mbtiQuestion } from '../data/response'
import { questionStepState } from '../state/dataState'
import { useRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom'
import { initialQuestionStep } from '../state/initialState'

const Test: FC = () => {
  const navigate = useNavigate()
  const [questionStep, setQuestionStep] = useRecoilState(questionStepState)

  const { total, current } = questionStep
  const currentQuestion =
    mbtiQuestion.find((question) => question.code === current) || mbtiQuestion[0]
  const currentAnswer =
    mbtiAnswer.find((answer) => answer.questionCode === current) || mbtiAnswer[0]

  const handleNextQuestion = (currentStep: number): void => {
    if (total > currentStep) {
      total > currentStep && setQuestionStep((prev) => ({ ...prev, current: prev.current + 1 }))
      return
    }
    navigate('/result')
  }

  useEffect(() => {
    setQuestionStep(initialQuestionStep)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className="h-full py-12 flex flex-col justify-between">
      <Progress totalStep={total} currentStep={current} />
      <Question data={currentQuestion} />
      <Answer data={currentAnswer} handleNextQuestion={handleNextQuestion} />
    </section>
  )
}

export default Test
