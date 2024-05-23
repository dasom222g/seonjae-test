import React, { FC } from 'react'
import { LoveIndexType } from '../lib/type'

interface LoveIndexProps {
  list: LoveIndexType[]
}

const LoveIndex: FC<LoveIndexProps> = ({ list }) => {
  return (
    <div className='px-4'>
      <ul>
        {list.map(item => <li key={item.id} className='flex gap-1 py-3 first:pt-0 last:pb-0'>
          <span className='text-base min-w-20 max-w-20'>{item.text}</span>
          <div className='w-full h-4 bg-mbti-light-pink rounded-r-xl overflow-hidden relative'>
            <span className='block h-full bg-mbti-pink transition-all' style={{ width: `${item.score}%` }}></span>
          </div>
        </li>)}

      </ul>
    </div>
  )
}

export default LoveIndex