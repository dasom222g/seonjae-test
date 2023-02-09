import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import ResultMessage from '../components/ResultMessage'
import { mbtiResult, resultButtonList } from '../data/response'
import { ButtonType, ResultButtonType } from '../lib/type'

const Result: FC = () => {
  const navigate = useNavigate()

  const resultMbti = 'entj'

  const handleClick = (type: ButtonType, data: ResultButtonType): void => {
    // console.log('click', type)
    type === 'link' && data.link && navigate(data.link)
  }
  return (
    <section className="py-4">
      <div className="py-4">
        <div className="border-2 border-black rounded-md overflow-hidden bg-yellow-100 py-4">
          <span className="block text-center text-lg py-6 -mt-4">나의 갓생 유형은</span>
          <div className="px-4">
            <img
              src={`./images/result_${resultMbti}.jpeg`}
              className="rounded-lg"
              alt="결과 이미지"
            />
          </div>
        </div>
      </div>
      <div className="py-4">
        <ResultMessage data={mbtiResult[0]} />
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
