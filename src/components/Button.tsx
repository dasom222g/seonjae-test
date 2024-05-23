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
        className={`flex gap-2 justify-center items-center text-${data.id === 1 ? 'mbti-blue' : 'white'} bg-${data.id === 1 ? 'white' : 'mbti-blue'} font-cafe24surround rounded-4xl border-[6px] border-mbti-blue py-1 w-3/4 mx-auto`}
        onClick={buttonClick}>
        {data.text}
        <data.icon size={32} />
      </button>
    </div>
  )
}

export default Button
