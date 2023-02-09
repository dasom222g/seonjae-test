import { QuestionStepType, ResultType } from '../lib/type';

export const initialQuestionStep: QuestionStepType = {
  total: 12,
  current: 1
}

export const initialResult:ResultType = {
  id: 1,
  type: 'ENTJ',
  imageSrc: './images/result-ENTJ.jpeg',
  messageList: [
    {
      id: 1,
      text: '꿈을 위해선 물불안가리고 달려는 타입'
    },
    {
      id: 2,
      text: '단 1분도 허투로 쓰고 싶지 않은 프로효율러'
    },
    {
      id: 3,
      text: '물론 본인이 느끼기에 게으름 피우는 날도 많아요. 근데 다른 사람들 눈에는? 그게 게으름으로 안 보일 뿐'
    },
  ]
}