import React, { FC } from 'react'
import { ResultType } from '../lib/type'

interface ResultMessageProps {
  data: ResultType
}

const ResultMessage: FC<ResultMessageProps> = ({ data }) => {
  return (
    <div className="bg-white px-4 pb-4 rounded-md overflow-hidden border-2 border-black">
      <span className="block text-3xl font-minhye text-center py-4">나의 갓생 스타일은?</span>
      <ul className="-mb-2">
        {data.messageList.map((message) => (
          <li className="py-2 relative indent-3 text-sm" key={message.id}>
            <i className="w-1 h-1 bg-slate-700 block absolute left-0 top-4"></i>
            {message.text}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ResultMessage
