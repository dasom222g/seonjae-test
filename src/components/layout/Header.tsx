import React, { FC } from 'react'
import { Link } from 'react-router-dom'

const Header: FC = () => {
  return (
    <header className='bg-mbti-deep-purple -m-4 mb-0 p-4'>
      <Link to="/" className="block">
        <h1 className='text-white'>
          <span className='text-mbti-mint'>Zero</span>ToOne
        </h1>
      </Link>
    </header>
  )
}

export default Header
