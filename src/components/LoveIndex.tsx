import React, { FC } from 'react'

const LoveIndex: FC = () => {
  return (
    <div className='px-4'>
      <ul>
        <li className='flex gap-3 py-3 first:pt-0 last:pb-0'>
          <span className='text-sm min-w-fit'>애정표현력</span>
          <div className='w-full h-4 bg-mbti-light-pink rounded-xl relative'>
            <span className='block h-full bg-mbti-pink transition-all' style={{ width: '53%' }}></span>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default LoveIndex