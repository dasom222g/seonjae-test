import React, { FC } from 'react'
import { Link } from 'react-router-dom'

const Header: FC = () => {
  return (
    <header className='bg-mbti-deep-purple -m-4 mb-0 px-4 py-3'>
      <Link to="/" className="block">
        <h1 className='text-white text-lg font-cafe24surround'>
          <span className='text-mbti-mint'>Zero</span>ToOne
        </h1>
      </Link>
    </header>
  )
}

export default Header
