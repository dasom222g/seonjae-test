import React, { FC } from 'react'
import ResultMessage from '../components/ResultMessage'
import { mbtiResult } from '../data/response'

const Result: FC = () => {
  const resultMbti = 'entj'
  return (
    <section>
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
      <ResultMessage data={mbtiResult[0]} />
    </section>
  )
}

export default Result
