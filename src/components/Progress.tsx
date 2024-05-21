import React, { FC } from 'react'

interface ProgressInterface {
  totalStep: number
  currentStep: number
}

const Progress: FC<ProgressInterface> = ({ totalStep, currentStep }) => {
  const width = ((currentStep / totalStep) * 100)
  const statusCoordinate = {
    width: `calc(${width}% + 5px)`,
  }

  const iconCoordinate = {
    left: `${width}%`,
  }
  return (
    <div className="w-full h-6 bg-white border-2 rounded-xl border-mbti-gray relative">
      <div
        className="absolute w-11 top-1/2 transition-all transform -translate-x-1/2 -translate-y-1/2"
        style={iconCoordinate}>
        <img src="./images/progress.png" className="block w-full h-auto" alt="status 이미지" />
      </div>
      <div className="w-full h-full rounded-xl overflow-hidden">
        <span className="block h-full bg-mbti-pink transition-all" style={statusCoordinate}></span>{' '}
        {/* status */}
      </div>
    </div>
  )
}

export default Progress
