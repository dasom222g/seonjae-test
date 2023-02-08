import React, { FC } from 'react'
import { Link } from 'react-router-dom'

const Header: FC = () => {
  return (
    <Link to="/" className="block py-6 w-4/6 mx-auto">
      <h1>
        <span className="absolute text-no w-1 left-0 top-0">가보자GO</span>
        <img src="./images/logo.png" alt="로고이미지" />
      </h1>
    </Link>
  )
}

export default Header
