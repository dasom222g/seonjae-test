import React, { FC } from 'react'

interface ScoreProps {
  score: number
}

const Score: FC<ScoreProps> = ({ score }) => {
  // logic

  // view
  return (
    <div className='relative px-8'>
      <img src="./images/score.svg" alt="선재와 궁합 이미지 / tnv 제공" />
      <span className='absolute flex justify-center items-center inset-0 text-5xl text-mbti-light-blue font-cafe24surround mt-3'>{score}점
        <i className="absolute bloock inset-0 bg-[url('../public/images/icon/main-icon-heart-small.png')] bg-no-repeat w-[29px] h-[28px] transform scale-50 top-2/4 left-2/3" />
      </span>
    </div>
  )
}

export default Score