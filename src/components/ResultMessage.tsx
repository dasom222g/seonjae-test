import React, { FC } from 'react'
import { ResultType } from '../lib/type'

interface ResultMessageProps {
  data: ResultType
}

const ResultMessage: FC<ResultMessageProps> = ({ data }) => {
  return (
    <div>
      <span>나의 갓생 스타일은?</span>
      <ul>
        {data.messageList.map((message) => (
          <li key={message.id}>{message.text}</li>
        ))}
      </ul>
    </div>
  )
}

export default ResultMessage
