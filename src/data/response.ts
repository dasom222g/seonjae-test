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
    questionText: '선재가 이클립스 공연에 당신을 초대한다면?',
  },
  {
    id: 2,
    code: 2,
    nextCode: 3,
    questionType: 'EI',
    questionTypeCode: 1,
    firstType: 'E',
    lastType: 'I',
    questionText: '사랑하는 사람에게 해주고 싶은 말은?',
  },
  {
    id: 3,
    code: 3,
    nextCode: 4,
    questionType: 'NS',
    questionTypeCode: 2,
    firstType: 'S',
    lastType: 'N',
    questionText: '임솔처럼 과거로 돌아갈 수 있다면?',
  },
  {
    id: 4,
    code: 4,
    nextCode: 5,
    questionType: 'TF',
    questionTypeCode: 3,
    firstType: 'F',
    lastType: 'T',
    questionText: '사랑하는 사람을 위해 목숨을 걸 수 있나요?',
  },
  {
    id: 5,
    code: 5,
    nextCode: 6,
    questionType: 'PJ',
    questionTypeCode: 4,
    firstType: 'J',
    lastType: 'P',
    questionText: '중요한 약속이 있는 날, 갑작스럽게 류선재가 본인 집에 초대한다면?',
  },
  {
    id: 6,
    code: 6,
    nextCode: 7,
    questionType: 'NS',
    questionTypeCode: 2,
    firstType: 'S',
    lastType: 'N',
    questionText: '톱스타와의 데이트 중, 사람들이 몰려들어 사진을 찍기 시작한다면?',
  },
  {
    id: 7,
    code: 7,
    nextCode: 8,
    questionType: 'TF',
    questionTypeCode: 3,
    firstType: 'F',
    lastType: 'T',
    questionText: '사랑하는 사람을 구하기 위해 과거로 간다면?',
  },
  {
    id: 8,
    code: 8,
    nextCode: 9,
    questionType: 'NS',
    questionTypeCode: 2,
    firstType: 'S',
    lastType: 'N',
    questionText: '선재와 함께 타임캡슐을 묻는다면, 무엇을 넣고 싶은가요?',
  },
  {
    id: 9,
    code: 9,
    nextCode: 10,
    questionType: 'TF',
    questionTypeCode: 3,
    firstType: 'F',
    lastType: 'T',
    questionText: '류선재의 갑작스러운 죽음을 접했을 때, 당신의 반응은?',
  },
  {
    id: 10,
    code: 10,
    nextCode: 11,
    questionType: 'EI',
    questionTypeCode: 1,
    firstType: 'E',
    lastType: 'I',
    questionText: '사랑하는 사람에게 먼저 고백할 수 있나요?',
  },
  {
    id: 11,
    code: 11,
    nextCode: 12,
    questionType: 'PJ',
    questionTypeCode: 4,
    firstType: 'J',
    lastType: 'P',
    questionText: '선재를 구하기 위해 과거로 떠날 수 있다면?',
  },
  {
    id: 12,
    code: 12,
    nextCode: 0,
    questionType: 'PJ',
    questionTypeCode: 4,
    firstType: 'J',
    lastType: 'P',
    questionText: '과거에서 만난 류선재가 당신에게 호감을 보인다면?',
  },
];

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
        text: '꺄아! 당연히 가서 떼창도 하고 다른 팬들이랑 같이 즐겨야지!',
      },
      {
        code: 1,
        type: 'I',
        text: '선재 오빠가 날 초대해 주다니..오로지 선재에게만 집중하고 싶어.',
      },
    ],
  },
  {
    id: 2,
    questionCode: 2,
    questionNextCode: 3,
    questionType: 'EI',
    answerList: [
      {
        code: 0,
        type: 'E',
        text: '네가 내 별이다. 너라는 존재 자체가 나에게 큰 의미야.',
      },
      {
        code: 1,
        type: 'I',
        text: '우리 서로에게 좋은 영향을 주는 관계가 되어주자.',
      },
    ],
  },
  {
    id: 3,
    questionCode: 3,
    questionNextCode: 4,
    questionType: 'NS',
    answerList: [
      {
        code: 0,
        type: 'S',
        text: '그 전에 현재의 문제를 해결하는 게 먼저야.',
      },
      {
        code: 1,
        type: 'N',
        text: '과거로 돌아가면 미래를 바꿀 수 있을지도 몰라! 시도해볼 만해!',
      },
    ],
  },
  {
    id: 4,
    questionCode: 4,
    questionNextCode: 5,
    questionType: 'TF',
    answerList: [
      {
        code: 0,
        type: 'F',
        text: '너 구하고 죽는 거면 난 괜찮아. 상관없어.',
      },
      {
        code: 1,
        type: 'T',
        text: '사랑은 중요하지만, 목숨 거는 건 오바야.',
      },
    ],
  },
  {
    id: 5,
    questionCode: 5,
    questionNextCode: 6,
    questionType: 'PJ',
    answerList: [
      {
        code: 0,
        type: 'J',
        text: '선약이 있으니 어쩔 수 없지.',
      },
      {
        code: 1,
        type: 'P',
        text: '무조건 가야지. 무슨 생각을 해.',
      },
    ],
  },
  {
    id: 6,
    questionCode: 6,
    questionNextCode: 7,
    questionType: 'NS',
    answerList: [
      {
        code: 0,
        type: 'S',
        text: '사람들 시선이 부담스럽지만, 이 사람과 함께라면 견딜 수 있어.',
      },
      {
        code: 1,
        type: 'N',
        text: '이런 상황도 우리 사랑의 한 페이지가 될 거야.',
      },
    ],
  },
  {
    id: 7,
    questionCode: 7,
    questionNextCode: 8,
    questionType: 'TF',
    answerList: [
      {
        code: 0,
        type: 'F',
        text: '사랑하는 사람을 위해서라면 기꺼이 내 모든 것을 줄 수 있어.',
      },
      {
        code: 1,
        type: 'T',
        text: '과거로 가는 것이 최선의 방법일까?',
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
        type: 'S',
        text: '지금의 중요한 물건이나 사진들을 넣고 이순간을 기록하고 싶어.',
      },
      {
        code: 1,
        type: 'N',
        text: '미래에 대한 편지나 꿈을 담은 메모를 넣고 싶어.',
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
        type: 'F',
        text: '믿을 수 없어... 너무 슬프고 충격적이야.',
      },
      {
        code: 1,
        type: 'T',
        text: '선재의 죽음 이면에는 분명 무언가 숨겨진 이유가 있을 거야.',
      },
    ],
  },
  {
    id: 10,
    questionCode: 10,
    questionNextCode: 11,
    questionType: 'EI',
    answerList: [
      {
        code: 0,
        type: 'E',
        text: '이제 도망치지 말고 그냥 나 좋아해라.',
      },
      {
        code: 1,
        type: 'I',
        text: '내 마음을 알아줬으면 해.',
      },
    ],
  },
  {
    id: 11,
    questionCode: 11,
    questionNextCode: 12,
    questionType: 'PJ',
    answerList: [
      {
        code: 0,
        type: 'J',
        text: '과거로 가기 전에 철저한 계획을 세워야 해. 뭘 해야 할지 리스트를 만들자.',
      },
      {
        code: 1,
        type: 'P',
        text: '계획은 과거에서 그때그때 세우면 돼. 일단 출발하자!',
      },
    ],
  },
  {
    id: 12,
    questionCode: 12,
    questionNextCode: 0,
    questionType: 'PJ',
    answerList: [
      {
        code: 0,
        type: 'J',
        text: '고백하기 전에 우리의 관계를 더 확실히 하고 싶어.',
      },
      {
        code: 1,
        type: 'P',
        text: '오예, 지금 이 순간을 즐겨야징.',
      },
    ],
  },
];


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

export const resultButtonList: ResultButtonType[] = [
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