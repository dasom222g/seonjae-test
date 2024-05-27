import React, { FC } from 'react'
import { Link } from 'react-router-dom'

const Header: FC = () => {
  return (
    <header className='bg-mbti-deep-purple -mx-4 mb-0 absolute z-50 w-full max-h-12.5'>
      <h3 className='text-white text-lg font-cafe24surround'>
        <Link to="/" className="inline-block  px-4 py-3">
          <span className='text-mbti-mint'>선재랑 </span>궁합테스트
        </Link>
      </h3>
    </header>
  )
}

export default Header
