import React, { FC } from 'react'
import { style } from '../data/style'
import { ButtonType, ResultButtonType } from '../lib/type'

interface ButtonProps {
  data: ResultButtonType
  handleClick: (type: ButtonType, data: ResultButtonType) => void
}
const Button: FC<ButtonProps> = ({ data, handleClick }) => {
  const buttonClick = (): void => {
    handleClick(data.type, data)
  }
  return (
    <div className={style.roundInterval}>
      <button
        type="button"
        className={`${style.roundBox} text-white bg-mbti-deep-purple`}
        onClick={buttonClick}>
        {data.text}
      </button>
    </div>
  )
}

export default Button
