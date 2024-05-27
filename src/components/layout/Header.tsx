import React, { FC } from 'react'
import { Link } from 'react-router-dom'

const Header: FC = () => {
  return (
    <header className='bg-mbti-deep-purple -mx-4 mb-0 absolute z-50 w-full max-h-12.5'>
      <h1 className='text-white text-lg font-cafe24surround'>
        <Link to="/" className="inline-block  px-4 py-3">
          <span className='text-mbti-mint'>선재랑 </span>궁합테스트
        </Link>
      </h1>
      <h2 className='text-no'>&quot;선재 업고 튀어&quot; 변우석과 MBTI 궁합 분석</h2>
    </header>
  )
}

export default Header
