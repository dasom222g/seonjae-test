import React, { FC } from 'react'
import { Link } from 'react-router-dom'

const Home: FC = () => {
  return (
    <section>
      <div className="text-center">
        <span className="text-sm p-2">갓생 지수 테스트</span>
        <p className="text-3xl font-bold p-2">나의 갓생 유형은?</p>
      </div>
      <div className="py-8">
        <img src="./images/god2.png" alt="홈화면 이미지" />
      </div>
      <Link
        to="/test"
        type="button"
        className="block text-center w-full bg-mbti-deep-blue p-4 rounded-3xl text-sm text-white font-bold">
        갓생 유형 START
      </Link>
    </section>
  )
}

export default Home
