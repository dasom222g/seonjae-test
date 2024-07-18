import React, { FC, useEffect } from 'react'
import Progress from '../components/Progress'
import Question from '../components/Question'
import Answer from '../components/Answer'
import { mbtiAnswer, mbtiQuestion } from '../data/response'
import { mbtiValueState, questionStepState } from '../state/dataState'
import { useRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom'
import { initialQuestionStep } from '../state/initialState'
import { AnswerType, CategoryType, MBTIValueType } from '../lib/type'

const Test: FC = () => {
  const navigate = useNavigate()
  const [questionStep, setQuestionStep] = useRecoilState(questionStepState)
  const [mbtiValue, setMbtiValue] = useRecoilState(mbtiValueState)

  const { total, current } = questionStep
  const currentQuestion =
    mbtiQuestion.find((question) => question.code === current) || mbtiQuestion[0]
  const currentAnswer =
    mbtiAnswer.find((answer) => answer.questionCode === current) || mbtiAnswer[0]

  const { questionTypeCode, firstType, lastType, questionType } = currentQuestion

  const initialMBTIValue = (type: CategoryType): MBTIValueType => {
    return {
      questionTypeCode,
      firstType,
      lastType,
      questionType,
      resultValue: {
        [firstType]: firstType === type ? 1 : 0,
      },
    }
  }
  const handleAnswerSelect = (currentStep: number, selectItem: AnswerType): void => {
    handleNextQuestion(currentStep)

    const existItem = mbtiValue.find((value) => value.questionTypeCode === questionTypeCode)
    if (existItem) {
      // 4가지 타입 중 이미 만들어져 있는 경우
      const sameType = Object.keys(existItem.resultValue).find((key) => key === selectItem.type)
      const ItemValue = existItem.resultValue[firstType]
      const resultData = mbtiValue.map((value) => {
        if (value.questionType === existItem.questionType && sameType) {
          return {
            ...value,
            resultValue: {
              [sameType]: (ItemValue as number) + 1,
            },
          }
        }
        return value
      })

      setMbtiValue(resultData)
      return
    }

    // 4가지 타입중 안만들어져 있는 경우
    setMbtiValue((prev) => [...prev, initialMBTIValue(selectItem.type)])
  }

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
      <Answer data={currentAnswer} handleSelect={handleAnswerSelect} />
    </section>
  )
}

export default Test
