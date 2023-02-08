import React, { FC } from 'react'
import { ButtonType } from '../lib/type'

interface ButtonProps {
  text: string
  type: ButtonType
  handleClick: (type: ButtonType) => void
}
const Button: FC<ButtonProps> = ({ text, type, handleClick }) => {
  const buttonClick = (): void => {
    handleClick(type)
  }
  return (
    <div className="py-2">
      <button
        type="button"
        className="block w-full text-white rounded-lg bg-mbti-deep-purple p-4"
        onClick={buttonClick}>
        {text}
      </button>
    </div>
  )
}

export default Button
