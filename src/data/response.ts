import { MBTIAnswerType, MBTIQuestionType, ResultButtonType, ResultType } from '../lib/type'

import { IoMdRefresh, IoMdShareAlt } from 'react-icons/io'

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
    score: 85,
    text: '서로를 만나기 위해 이 땅에 태어났다 해도 결코 어색하지 않은 두 분이에요. 하나부터 열까지 찰떡 궁합을 자랑하는 두 분! 절대 거부할 수 없는 최고의 짝꿍이랍니다. 온 우주가 두 분의 미래를 응원할거예요.',
    loveIndexList: [
      {
        id: 1,
        type: 'affection',
        score: 90,
        text: '애정표현력'
      },
      {
        id: 2,
        type: 'sense',
        score: 75,
        text: '눈치력'
      },
      {
        id: 3,
        type: 'driving',
        score: 80,
        text: '썸 추진력'
      },
      {
        id: 4,
        type: 'sexy',
        score: 70,
        text: '19금력'
      }
    ]
  },
  {
    id: 2,
    type: 'ENFP',
    score: 83,
    text: '열정적이고 창의적인 두 분! 서로의 아이디어와 에너지를 끊임없이 나누며 최고의 팀워크를 자랑합니다. 항상 서로에게 긍정적인 영향을 미치는 커플이에요.',
    loveIndexList: [
      {
        id: 1,
        type: 'affection',
        score: 85,
        text: '애정표현력'
      },
      {
        id: 2,
        type: 'sense',
        score: 70,
        text: '눈치력'
      },
      {
        id: 3,
        type: 'driving',
        score: 90,
        text: '썸 추진력'
      },
      {
        id: 4,
        type: 'sexy',
        score: 75,
        text: '19금력'
      }
    ]
  },
  {
    id: 3,
    type: 'INFJ',
    score: 88,
    text: '깊은 이해와 배려를 바탕으로 한 관계. 서로의 마음을 깊이 이해하며 진정한 소울메이트가 되어 줍니다. 언제나 서로를 지지하고 응원하는 두 분이에요.',
    loveIndexList: [
      {
        id: 1,
        type: 'affection',
        score: 92,
        text: '애정표현력'
      },
      {
        id: 2,
        type: 'sense',
        score: 85,
        text: '눈치력'
      },
      {
        id: 3,
        type: 'driving',
        score: 70,
        text: '썸 추진력'
      },
      {
        id: 4,
        type: 'sexy',
        score: 65,
        text: '19금력'
      }
    ]
  },
  {
    id: 4,
    type: 'INTJ',
    score: 80,
    text: '지적이고 전략적인 두 분. 서로의 목표를 이해하고 지원하며 함께 성장해 나가는 커플이에요. 항상 논리적이고 현실적인 접근을 통해 문제를 해결해 나갑니다.',
    loveIndexList: [
      {
        id: 1,
        type: 'affection',
        score: 70,
        text: '애정표현력'
      },
      {
        id: 2,
        type: 'sense',
        score: 80,
        text: '눈치력'
      },
      {
        id: 3,
        type: 'driving',
        score: 85,
        text: '썸 추진력'
      },
      {
        id: 4,
        type: 'sexy',
        score: 75,
        text: '19금력'
      }
    ]
  },
  {
    id: 5,
    type: 'ESFJ',
    score: 90,
    text: '따뜻하고 사교적인 두 분. 서로의 감정을 잘 이해하고 항상 서로를 배려하며 지내는 커플이에요. 주변 사람들에게도 긍정적인 영향을 미치는 아름다운 관계입니다.',
    loveIndexList: [
      {
        id: 1,
        type: 'affection',
        score: 95,
        text: '애정표현력'
      },
      {
        id: 2,
        type: 'sense',
        score: 85,
        text: '눈치력'
      },
      {
        id: 3,
        type: 'driving',
        score: 80,
        text: '썸 추진력'
      },
      {
        id: 4,
        type: 'sexy',
        score: 70,
        text: '19금력'
      }
    ]
  },
  {
    id: 6,
    type: 'ESFP',
    score: 87,
    text: '활발하고 에너제틱한 두 분. 항상 새로운 모험을 함께하며 인생을 즐기는 커플이에요. 서로의 삶에 활력을 불어넣으며 언제나 즐거운 시간을 보냅니다.',
    loveIndexList: [
      {
        id: 1,
        type: 'affection',
        score: 90,
        text: '애정표현력'
      },
      {
        id: 2,
        type: 'sense',
        score: 75,
        text: '눈치력'
      },
      {
        id: 3,
        type: 'driving',
        score: 90,
        text: '썸 추진력'
      },
      {
        id: 4,
        type: 'sexy',
        score: 80,
        text: '19금력'
      }
    ]
  },
  {
    id: 7,
    type: 'ISFJ',
    score: 85,
    text: '신뢰와 안정감을 주는 두 분. 서로의 감정을 깊이 이해하며 헌신적으로 사랑하는 커플이에요. 항상 서로를 지지하며 안정적인 관계를 유지합니다.',
    loveIndexList: [
      {
        id: 1,
        type: 'affection',
        score: 85,
        text: '애정표현력'
      },
      {
        id: 2,
        type: 'sense',
        score: 90,
        text: '눈치력'
      },
      {
        id: 3,
        type: 'driving',
        score: 70,
        text: '썸 추진력'
      },
      {
        id: 4,
        type: 'sexy',
        score: 60,
        text: '19금력'
      }
    ]
  },
  {
    id: 8,
    type: 'ISFP',
    score: 82,
    text: '조용하고 예술적인 두 분. 서로의 창의성과 감성을 존중하며 함께 시간을 보내는 커플이에요. 언제나 서로의 마음을 이해하고 배려하는 관계입니다.',
    loveIndexList: [
      {
        id: 1,
        type: 'affection',
        score: 80,
        text: '애정표현력'
      },
      {
        id: 2,
        type: 'sense',
        score: 85,
        text: '눈치력'
      },
      {
        id: 3,
        type: 'driving',
        score: 75,
        text: '썸 추진력'
      },
      {
        id: 4,
        type: 'sexy',
        score: 70,
        text: '19금력'
      }
    ]
  },
  {
    id: 9,
    type: 'ENTP',
    score: 88,
    text: '지적이고 창의적인 두 분. 서로의 아이디어와 열정을 끊임없이 공유하며 항상 새로운 것을 추구하는 커플이에요. 함께할 때 더 큰 시너지를 발휘합니다.',
    loveIndexList: [
      {
        id: 1,
        type: 'affection',
        score: 85,
        text: '애정표현력'
      },
      {
        id: 2,
        type: 'sense',
        score: 80,
        text: '눈치력'
      },
      {
        id: 3,
        type: 'driving',
        score: 90,
        text: '썸 추진력'
      },
      {
        id: 4,
        type: 'sexy',
        score: 75,
        text: '19금력'
      }
    ]
  },
  {
    id: 10,
    type: 'ENFJ',
    score: 90,
    text: '사람들을 이끌고 영감을 주는 두 분. 항상 서로에게 긍정적인 영향을 미치며 주변 사람들에게도 좋은 에너지를 전파하는 커플이에요.',
    loveIndexList: [
      {
        id: 1,
        type: 'affection',
        score: 95,
        text: '애정표현력'
      },
      {
        id: 2,
        type: 'sense',
        score: 85,
        text: '눈치력'
      },
      {
        id: 3,
        type: 'driving',
        score: 80,
        text: '썸 추진력'
      },
      {
        id: 4,
        type: 'sexy',
        score: 75,
        text: '19금력'
      }
    ]
  },
  {
    id: 11,
    type: 'INTP',
    score: 78,
    text: '논리적이고 분석적인 두 분. 서로의 지적 호기심을 충족시키며 깊이 있는 대화를 나누는 커플이에요. 언제나 서로에게서 배우며 성장합니다.',
    loveIndexList: [
      {
        id: 1,
        type: 'affection',
        score: 70,
        text: '애정표현력'
      },
      {
        id: 2,
        type: 'sense',
        score: 75,
        text: '눈치력'
      },
      {
        id: 3,
        type: 'driving',
        score: 80,
        text: '썸 추진력'
      },
      {
        id: 4,
        type: 'sexy',
        score: 65,
        text: '19금력'
      }
    ]
  },
  {
    id: 12,
    type: 'INFP',
    score: 85,
    text: '이상적이고 감성적인 두 분. 서로의 꿈과 감정을 깊이 이해하며 진정한 소울메이트가 되어 줍니다. 언제나 서로를 지지하고 응원하는 커플이에요.',
    loveIndexList: [
      {
        id: 1,
        type: 'affection',
        score: 90,
        text: '애정표현력'
      },
      {
        id: 2,
        type: 'sense',
        score: 80,
        text: '눈치력'
      },
      {
        id: 3,
        type: 'driving',
        score: 85,
        text: '썸 추진력'
      },
      {
        id: 4,
        type: 'sexy',
        score: 70,
        text: '19금력'
      }
    ]
  },
  {
    id: 13,
    type: 'ESTJ',
    score: 82,
    text: '실용적이고 효율적인 두 분. 서로의 목표를 명확하게 이해하며 함께 계획을 세워 나가는 커플이에요. 언제나 논리적이고 실용적인 접근을 통해 문제를 해결합니다.',
    loveIndexList: [
      {
        id: 1,
        type: 'affection',
        score: 75,
        text: '애정표현력'
      },
      {
        id: 2,
        type: 'sense',
        score: 85,
        text: '눈치력'
      },
      {
        id: 3,
        type: 'driving',
        score: 80,
        text: '썸 추진력'
      },
      {
        id: 4,
        type: 'sexy',
        score: 70,
        text: '19금력'
      }
    ]
  },
  {
    id: 14,
    type: 'ESTP',
    score: 80,
    text: '활동적이고 모험적인 두 분. 항상 새로운 경험을 추구하며 함께 모험을 떠나는 커플이에요. 언제나 에너지가 넘치고 즐거운 시간을 보냅니다.',
    loveIndexList: [
      {
        id: 1,
        type: 'affection',
        score: 80,
        text: '애정표현력'
      },
      {
        id: 2,
        type: 'sense',
        score: 75,
        text: '눈치력'
      },
      {
        id: 3,
        type: 'driving',
        score: 85,
        text: '썸 추진력'
      },
      {
        id: 4,
        type: 'sexy',
        score: 70,
        text: '19금력'
      }
    ]
  },
  {
    id: 15,
    type: 'ISTJ',
    score: 78,
    text: '신뢰성과 책임감을 중요시하는 두 분. 서로의 안정적인 성향을 존중하며 믿음직한 관계를 유지하는 커플이에요. 항상 성실하고 책임감 있게 서로를 대합니다.',
    loveIndexList: [
      {
        id: 1,
        type: 'affection',
        score: 70,
        text: '애정표현력'
      },
      {
        id: 2,
        type: 'sense',
        score: 85,
        text: '눈치력'
      },
      {
        id: 3,
        type: 'driving',
        score: 75,
        text: '썸 추진력'
      },
      {
        id: 4,
        type: 'sexy',
        score: 65,
        text: '19금력'
      }
    ]
  },
  {
    id: 16,
    type: 'ISTP',
    score: 76,
    text: '조용하고 분석적인 두 분. 서로의 독립성을 존중하며 깊이 있는 대화를 나누는 커플이에요. 언제나 논리적으로 문제를 해결하며 함께 성장합니다.',
    loveIndexList: [
      {
        id: 1,
        type: 'affection',
        score: 75,
        text: '애정표현력'
      },
      {
        id: 2,
        type: 'sense',
        score: 80,
        text: '눈치력'
      },
      {
        id: 3,
        type: 'driving',
        score: 70,
        text: '썸 추진력'
      },
      {
        id: 4,
        type: 'sexy',
        score: 65,
        text: '19금력'
      }
    ]
  }
];


export const resultButtonList: ResultButtonType[] = [
  {
    id: 1,
    type: 'function',
    link: '/',
    text: '친구에게 공유하기',
    icon: IoMdShareAlt
  },
  {
    id: 2,
    type: 'link',
    link: '/',
    text: '궁합 다시보기',
    icon: IoMdRefresh
  },
]
