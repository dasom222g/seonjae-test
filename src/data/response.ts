import { MBTIAnswerType, MBTIQuestionType, ResultButtonType, ResultType } from '../lib/type'

export const mbtiQuestion: MBTIQuestionType[] = [
  {
    id: 1,
    code: 1,
    nextCode: 2,
    questionType: 'EI',
    questionTypeCode: 1,
    firstType: 'E',
    lastType: 'I',
    questionText: '일할때 나의 능률은?',
  },
  {
    id: 2,
    code: 2,
    nextCode: 3,
    questionType: 'TF',
    questionTypeCode: 3,
    firstType: 'T',
    lastType: 'F',
    questionText: '성공한 후 친구들에게 듣고싶은 말은?',
  },
  {
    id: 3,
    code: 3,
    nextCode: 4,
    questionType: 'PJ',
    questionTypeCode: 4,
    firstType: 'P',
    lastType: 'J',
    questionText: '나는 사람들에게',
  },
  {
    id: 4,
    code: 4,
    nextCode: 5,
    questionType: 'NS',
    questionTypeCode: 2,
    firstType: 'N',
    lastType: 'S',
    questionText: '한번도 해보지않은 일을 요청 받는다면?',
  },
  {
    id: 5,
    code: 5,
    nextCode: 6,
    questionType: 'EI',
    questionTypeCode: 1,
    firstType: 'E',
    lastType: 'I',
    questionText: '생각도 못한 휴가를 받으면',
  },
  {
    id: 6,
    code: 6,
    nextCode: 7,
    questionType: 'TF',
    questionTypeCode: 3,
    firstType: 'T',
    lastType: 'F',
    questionText: '지금 당신에게 필요한 말은?',
  },
  {
    id: 7,
    code: 7,
    nextCode: 8,
    questionType: 'PJ',
    questionTypeCode: 4,
    firstType: 'P',
    lastType: 'J',
    questionText: '나만의 모닝루틴이',
  },
  {
    id: 8,
    code: 8,
    nextCode: 9,
    questionType: 'NS',
    questionTypeCode: 2,
    firstType: 'N',
    lastType: 'S',
    questionText: '내 플레이리스트는',
  },
  {
    id: 9,
    code: 9,
    nextCode: 10,
    questionType: 'TF',
    questionTypeCode: 3,
    firstType: 'T',
    lastType: 'F',
    questionText: '마음이 힘든 날',
  },
  {
    id: 10,
    code: 10,
    nextCode: 11,
    questionType: 'PJ',
    questionTypeCode: 4,
    firstType: 'P',
    lastType: 'J',
    questionText: '시험기간에 나는',
  },
  {
    id: 11,
    code: 11,
    nextCode: 12,
    questionType: 'NS',
    questionTypeCode: 2,
    firstType: 'N',
    lastType: 'S',
    questionText: '새로나온 넷플릭스를 보면',
  },
  {
    id: 12,
    code: 12,
    nextCode: 0,
    questionType: 'EI',
    questionTypeCode: 1,
    firstType: 'E',
    lastType: 'I',
    questionText: '배우고 싶은 취미가 생기면',
  },
]

export const mbtiAnswer: MBTIAnswerType[] = [
  {
    id: 1,
    questionCode: 1,
    questionNextCode: 2,
    questionType: 'EI',
    answerList: [
      {
        code: 0,
        type: 'E',
        text: '신속 정확하게!',
      },
      {
        code: 1,
        type: 'I',
        text: '충분한 여유를 가지고~',
      },
    ],
  },
  {
    id: 2,
    questionCode: 2,
    questionNextCode: 3,
    questionType: 'TF',
    answerList: [
      {
        code: 0,
        type: 'F',
        text: '그렇게 열심히 하더니 결국 해냈구나ㅠㅠ 고생했어!',
      },
      {
        code: 1,
        type: 'T',
        text: '별로 열심히 안한것 같은데 너 재능 있나봐!',
      },
    ],
  },
  {
    id: 3,
    questionCode: 3,
    questionNextCode: 4,
    questionType: 'PJ',
    answerList: [
      {
        code: 0,
        type: 'J',
        text: '열심히 산다는 얘기를 들어봤다',
      },
      {
        code: 1,
        type: 'P',
        text: '갓생? 그게뭐야~~',
      },
    ],
  },
  {
    id: 4,
    questionCode: 4,
    questionNextCode: 5,
    questionType: 'NS',
    answerList: [
      {
        code: 0,
        type: 'N',
        text: '오히려 좋아',
      },
      {
        code: 1,
        type: 'S',
        text: '불가능한걸 왜시키는거야?',
      },
    ],
  },
  {
    id: 5,
    questionCode: 5,
    questionNextCode: 6,
    questionType: 'EI',
    answerList: [
      {
        code: 0,
        type: 'I',
        text: '오예~ 바로 넷플릭스 고고',
      },
      {
        code: 1,
        type: 'E',
        text: '여행각 재던 숙소 예약갈기기',
      },
    ],
  },
  {
    id: 6,
    questionCode: 6,
    questionNextCode: 7,
    questionType: 'TF',
    answerList: [
      {
        code: 0,
        type: 'T',
        text: '니 문제가 뭐라고 생각해?',
      },
      {
        code: 1,
        type: 'F',
        text: '너 충분히 잘하고 있어!',
      },
    ],
  },
  {
    id: 7,
    questionCode: 7,
    questionNextCode: 8,
    questionType: 'PJ',
    answerList: [
      {
        code: 0,
        type: 'J',
        text: '있다',
      },
      {
        code: 1,
        type: 'P',
        text: '없다',
      },
    ],
  },
  {
    id: 8,
    questionCode: 8,
    questionNextCode: 9,
    questionType: 'NS',
    answerList: [
      {
        code: 0,
        type: 'N',
        text: '가사가 중요',
      },
      {
        code: 1,
        type: 'S',
        text: '멜로디가 중요',
      },
    ],
  },
  {
    id: 9,
    questionCode: 9,
    questionNextCode: 10,
    questionType: 'TF',
    answerList: [
      {
        code: 0,
        type: 'T',
        text: '뭐 때문에 힘든거지? 분석하고 해결하기',
      },
      {
        code: 1,
        type: 'F',
        text: '슬픈노래 틀어 놓고 맘껏울기',
      },
    ],
  },
  {
    id: 10,
    questionCode: 10,
    questionNextCode: 11,
    questionType: 'PJ',
    answerList: [
      {
        code: 0,
        type: 'P',
        text: '무조건 벼락치기',
      },
      {
        code: 1,
        type: 'J',
        text: '오늘은 32p까지 하면 되겠다',
      },
    ],
  },
  {
    id: 11,
    questionCode: 11,
    questionNextCode: 12,
    questionType: 'NS',
    answerList: [
      {
        code: 0,
        type: 'S',
        text: '오~ 꿀잼인데',
      },
      {
        code: 1,
        type: 'N',
        text: '문제가 심각하네. 어떻게 해결할수 있을까?',
      },
    ],
  },
  {
    id: 12,
    questionCode: 12,
    questionNextCode: 0,
    questionType: 'EI',
    answerList: [
      {
        code: 0,
        type: 'I',
        text: '클래스101 물색',
      },
      {
        code: 1,
        type: 'E',
        text: '동호회 물색',
      },
    ],
  },
]

export const mbtiResultList: ResultType[] = [
  {
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
  },
  {
    id: 2,
    type: 'ENTP',
    imageSrc: './images/result-ENTP.jpeg',
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
  },
  {
    id: 3,
    type: 'ENFJ',
    imageSrc: './images/result-ENFJ.jpeg',
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
  },
  {
    id: 4,
    type: 'ENFP',
    imageSrc: './images/result-ENFP.jpeg',
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
  },
  {
    id: 5,
    type: 'ESTJ',
    imageSrc: './images/result-ESTJ.jpeg',
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
  },
  {
    id: 6,
    type: 'ESTP',
    imageSrc: './images/result-ESTP.jpeg',
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
  },
  {
    id: 7,
    type: 'ESFJ',
    imageSrc: './images/result-ESFJ.jpeg',
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
  },
  {
    id: 8,
    type: 'ESFP',
    imageSrc: './images/result-ESFP.jpeg',
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
  },
  {
    id: 9,
    type: 'INTJ',
    imageSrc: './images/result-INTJ.jpeg',
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
  },
  {
    id: 10,
    type: 'INTP',
    imageSrc: './images/result-INTP.jpeg',
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
  },
  {
    id: 11,
    type: 'INFJ',
    imageSrc: './images/result-INFJ.jpeg',
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
  },
  {
    id: 12,
    type: 'INFP',
    imageSrc: './images/result-INFP.jpeg',
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
  },
  {
    id: 13,
    type: 'ISTJ',
    imageSrc: './images/result-ISTJ.jpeg',
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
  },
  {
    id: 14,
    type: 'ISTP',
    imageSrc: './images/result-ISTP.jpeg',
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
  },
  {
    id: 15,
    type: 'ISFJ',
    imageSrc: './images/result-ISFJ.jpeg',
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
  },
  {
    id: 16,
    type: 'ISFP',
    imageSrc: './images/result-ISFP.jpeg',
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
  },
]

export const resultButtonList:ResultButtonType[] = [
  {
    id: 1,
    type: 'link',
    link: '/',
    text: '다시 테스트하러 가기'
  },
  {
    id: 2,
    type: 'function',
    text: '테스트 공유하기'
  },
]