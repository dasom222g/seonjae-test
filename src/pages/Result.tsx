import React, { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import ResultMessage from '../components/ResultMessage'
import { mbtiResultList, resultButtonList } from '../data/response'
import { ButtonType, ResultButtonType } from '../lib/type'
import { useRecoilState, useRecoilValue } from 'recoil'
import { mbtiValueState, resultState } from '../state/dataState'
import { initialResult } from '../state/initialState'

const Result: FC = () => {
  const navigate = useNavigate()

  const mbtiValue = useRecoilValue(mbtiValueState)
  const [result, setResult] = useRecoilState(resultState)

  const handleClick = (type: ButtonType, data: ResultButtonType): void => {
    // console.log('click', type)
    type === 'link' && data.link && navigate(data.link)
  }

  useEffect(() => {
    console.log('mbtiValue', mbtiValue)
    const sortedValue = [...mbtiValue].sort((a, b) => a.questionTypeCode - b.questionTypeCode)
    const resultValue = sortedValue
      .map((value) => {
        const itemValue = value.resultValue[value.firstType] || ''
        const resultType =
          typeof itemValue === 'number' && itemValue > 1 ? value.firstType : value.lastType
        return resultType
      })
      .join('')

    setResult(mbtiResultList.find((result) => result.type === resultValue) || initialResult)
  }, [mbtiValue, setResult])

  useEffect(() => {
    console.log('result', result)
  }, [result])

  return (
    <section className="py-4">
      <div className="py-4">
        <div className="border-2 border-black rounded-md overflow-hidden bg-yellow-100 py-4">
          <span className="block text-center text-4xl py-6 -mt-4 font-middleschool_student">
            나의 갓생 유형은
          </span>
          <div className="px-4">
            <img src={result.imageSrc} className="rounded-lg" alt="결과 이미지" />
          </div>
        </div>
      </div>
      <div className="py-4">
        <ResultMessage data={result} />
      </div>
      <div className="py-4">
        {resultButtonList.map((resultButton) => (
          <Button key={resultButton.id} data={resultButton} handleClick={handleClick} />
        ))}
      </div>
    </section>
  )
}

export default Result
