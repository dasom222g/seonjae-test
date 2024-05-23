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
    type: 'ENFP',
    score: 100,
    text: '서로를 만나기 위해 이 땅에 태어났다 해도 결코 어색하지 않은 두 분이에요. 하나부터 열까지 찰떡 궁합을 자랑하는 두 분! 절대 거부할 수 없는 최고의 짝꿍이랍니다. 온 우주가 두 분의 미래를 응원할 거예요. 함께 하는 매 순간이 영화 같을 거예요. 선재의 예술적 감성과 당신의 재기발랄함이 완벽한 조화를 이루니까요. 함께하는 매 순간이 드라마 속 명장면처럼 아름답고 감동적일 거예요.',
    loveIndexList: [
      { id: 1, type: 'affection', score: 100, text: '애정표현력' },
      { id: 2, type: 'sense', score: 95, text: '눈치력' },
      { id: 3, type: 'driving', score: 90, text: '썸 추진력' },
      { id: 4, type: 'sexy', score: 85, text: '19금력' }
    ]
  },
  {
    id: 2,
    type: 'ENFJ',
    score: 95,
    text: '두 분은 서로의 마음을 읽는 능력이 탁월합니다. 선재의 깊은 감정과 당신의 따뜻한 배려심이 완벽하게 맞아떨어져요. 함께라면 모든 어려움을 극복할 수 있을 거예요. 드라마 속에서도 항상 서로를 지켜주는 든든한 파트너가 될 거예요. 선재와 당신은 마치 운명처럼 서로를 알아보고, 함께 성장할 수 있는 멋진 관계를 만들어갈 거예요.',
    loveIndexList: [
      { id: 1, type: 'affection', score: 95, text: '애정표현력' },
      { id: 2, type: 'sense', score: 100, text: '눈치력' },
      { id: 3, type: 'driving', score: 85, text: '썸 추진력' },
      { id: 4, type: 'sexy', score: 80, text: '19금력' }
    ]
  },
  {
    id: 3,
    type: 'INFP',
    score: 90,
    text: '선재의 감성적인 면과 당신의 상상력이 만나면 환상적인 궁합을 이루게 됩니다. 둘 다 깊은 내면의 세계를 가지고 있어 서로를 완벽하게 이해할 수 있어요. 이 둘의 사랑은 마치 꿈같은 이야기처럼 아름다울 거예요. 두 사람의 감성적인 대화와 공감은 누구도 흉내 낼 수 없는 특별한 관계를 만들어 줄 거예요.',
    loveIndexList: [
      { id: 1, type: 'affection', score: 90, text: '애정표현력' },
      { id: 2, type: 'sense', score: 90, text: '눈치력' },
      { id: 3, type: 'driving', score: 75, text: '썸 추진력' },
      { id: 4, type: 'sexy', score: 70, text: '19금력' }
    ]
  },
  {
    id: 4,
    type: 'INFJ',
    score: 85,
    text: '같은 유형으로 서로를 잘 이해할 수 있습니다. 선재와 당신은 서로의 감정을 깊이 공유하며, 같은 방향을 바라볼 수 있어요. 서로의 비밀을 가장 먼저 공유하는 사이가 될 거예요. 둘 다 조용한 성향이어서 때때로 감정표현이 부족할 수도 있지만, 서로를 배려하는 마음이 깊어 아름다운 사랑을 만들어 갈 수 있습니다.',
    loveIndexList: [
      { id: 1, type: 'affection', score: 85, text: '애정표현력' },
      { id: 2, type: 'sense', score: 85, text: '눈치력' },
      { id: 3, type: 'driving', score: 65, text: '썸 추진력' },
      { id: 4, type: 'sexy', score: 65, text: '19금력' }
    ]
  },
  {
    id: 5,
    type: 'INTJ',
    score: 80,
    text: '선재의 예술적 감성과 당신의 전략적 사고가 만나면 독특한 시너지를 낼 수 있어요. 선재는 당신의 논리적 접근을 존경하고, 당신은 선재의 창의성을 존중할 거예요. 그러나 때로는 감정과 논리가 충돌할 수 있으니 조심하세요. 이런 차이점이 오히려 서로를 더 이해하고 성장하게 만드는 계기가 될 수 있습니다.',
    loveIndexList: [
      { id: 1, type: 'affection', score: 75, text: '애정표현력' },
      { id: 2, type: 'sense', score: 80, text: '눈치력' },
      { id: 3, type: 'driving', score: 60, text: '썸 추진력' },
      { id: 4, type: 'sexy', score: 65, text: '19금력' }
    ]
  },
  {
    id: 6,
    type: 'ENTJ',
    score: 75,
    text: '선재와 당신은 목표 지향적인 성향을 공유합니다. 함께라면 어떤 어려움도 헤쳐 나갈 수 있을 거예요. 선재의 예술적 비전과 당신의 리더십이 강력한 팀을 이루겠지만, 둘 다 리더가 되려는 경향이 있어 갈등이 생길 수 있어요. 서로의 장점을 최대한 발휘하여 더욱 멋진 미래를 만들어 갈 수 있습니다.',
    loveIndexList: [
      { id: 1, type: 'affection', score: 80, text: '애정표현력' },
      { id: 2, type: 'sense', score: 85, text: '눈치력' },
      { id: 3, type: 'driving', score: 75, text: '썸 추진력' },
      { id: 4, type: 'sexy', score: 70, text: '19금력' }
    ]
  },
  {
    id: 7,
    type: 'ISFP',
    score: 70,
    text: '선재의 깊은 감정과 당신의 자유로운 영혼이 만나면, 서로에게 큰 영감을 줄 수 있습니다. 예술적 감수성을 공유하며, 함께하는 시간마다 새로운 것을 배울 거예요. 하지만 둘 다 감정 표현이 서툴러 오해가 생길 수 있어요. 서로의 차이를 이해하고 존중한다면, 더욱 깊은 사랑을 나눌 수 있습니다.',
    loveIndexList: [
      { id: 1, type: 'affection', score: 70, text: '애정표현력' },
      { id: 2, type: 'sense', score: 75, text: '눈치력' },
      { id: 3, type: 'driving', score: 60, text: '썸 추진력' },
      { id: 4, type: 'sexy', score: 65, text: '19금력' }
    ]
  },
  {
    id: 8,
    type: 'ESFP',
    score: 65,
    text: '선재의 감성적인 면과 당신의 활기찬 에너지가 만났을 때, 재미있고 흥미로운 관계가 형성됩니다. 그러나 둘 다 충동적인 면이 있어 갈등이 생길 수 있습니다. 서로의 차이를 이해하고 존중한다면 행복한 시간을 보낼 수 있어요. 함께하는 순간순간이 즐거움과 웃음으로 가득할 것입니다.',
    loveIndexList: [
      { id: 1, type: 'affection', score: 85, text: '애정표현력' },
      { id: 2, type: 'sense', score: 80, text: '눈치력' },
      { id: 3, type: 'driving', score: 80, text: '썸 추진력' },
      { id: 4, type: 'sexy', score: 75, text: '19금력' }
    ]
  },
  {
    id: 9,
    type: 'ISTJ',
    score: 60,
    text: '선재의 감정적이고 창의적인 면과 당신의 실용적이고 계획적인 성향이 충돌할 수 있습니다. 그러나 서로의 차이를 이해하고 존중한다면, 오히려 서로를 보완하는 관계가 될 수 있습니다. 서로의 강점을 살려 더욱 조화로운 관계를 만들어 갈 수 있습니다.',
    loveIndexList: [
      { id: 1, type: 'affection', score: 65, text: '애정표현력' },
      { id: 2, type: 'sense', score: 70, text: '눈치력' },
      { id: 3, type: 'driving', score: 55, text: '썸 추진력' },
      { id: 4, type: 'sexy', score: 60, text: '19금력' }
    ]
  },
  {
    id: 10,
    type: 'ESTJ',
    score: 55,
    text: '선재와 당신은 매우 다른 성향을 가지고 있지만, 서로에게서 많은 것을 배울 수 있습니다. 선재는 당신의 조직력과 결단력을 존경할 것이며, 당신은 선재의 창의성과 감수성을 존경할 것입니다. 그러나 충돌이 잦을 수 있습니다. 이러한 갈등을 극복한다면 더욱 단단한 관계가 될 수 있습니다.',
    loveIndexList: [
      { id: 1, type: 'affection', score: 70, text: '애정표현력' },
      { id: 2, type: 'sense', score: 75, text: '눈치력' },
      { id: 3, type: 'driving', score: 70, text: '썸 추진력' },
      { id: 4, type: 'sexy', score: 65, text: '19금력' }
    ]
  },
  {
    id: 11,
    type: 'ISFJ',
    score: 50,
    text: '선재의 예술적 감성과 당신의 현실적이고 보수적인 성향이 충돌할 수 있습니다. 그러나 서로를 이해하고 배려한다면, 따뜻하고 안정적인 관계를 유지할 수 있습니다. 서로의 차이를 이해하고 존중한다면, 진정한 사랑을 이룰 수 있습니다.',
    loveIndexList: [
      { id: 1, type: 'affection', score: 80, text: '애정표현력' },
      { id: 2, type: 'sense', score: 90, text: '눈치력' },
      { id: 3, type: 'driving', score: 65, text: '썸 추진력' },
      { id: 4, type: 'sexy', score: 60, text: '19금력' }
    ]
  },
  {
    id: 12,
    type: 'ESFJ',
    score: 45,
    text: '선재와 당신은 서로의 차이를 인정하고 배울 수 있다면 좋은 관계를 유지할 수 있습니다. 그러나 감정적인 면에서 서로 다른 성향이 충돌할 수 있으니 조심하세요. 서로의 차이를 이해하고 존중한다면, 더욱 깊은 이해와 사랑을 나눌 수 있습니다.',
    loveIndexList: [
      { id: 1, type: 'affection', score: 90, text: '애정표현력' },
      { id: 2, type: 'sense', score: 95, text: '눈치력' },
      { id: 3, type: 'driving', score: 75, text: '썸 추진력' },
      { id: 4, type: 'sexy', score: 70, text: '19금력' }
    ]
  },
  {
    id: 13,
    type: 'ISTP',
    score: 40,
    text: '선재의 감정적이고 예술적인 면과 당신의 논리적이고 실용적인 성향이 충돌할 수 있습니다. 그러나 서로를 이해하고 배려한다면, 상호 보완적인 관계가 될 수 있습니다. 이러한 갈등을 극복하고 더 나은 관계를 만들어 갈 수 있습니다.',
    loveIndexList: [
      { id: 1, type: 'affection', score: 60, text: '애정표현력' },
      { id: 2, type: 'sense', score: 65, text: '눈치력' },
      { id: 3, type: 'driving', score: 50, text: '썸 추진력' },
      { id: 4, type: 'sexy', score: 55, text: '19금력' }
    ]
  },
  {
    id: 14,
    type: 'ESTP',
    score: 40,
    text: '선재와 당신은 매우 다른 성향을 가지고 있어 갈등이 잦을 수 있습니다. 그러나 서로를 이해하고 존중한다면, 흥미롭고 재미있는 관계를 유지할 수 있습니다. 서로의 차이를 이해하고 존중한다면, 진정한 사랑을 이룰 수 있습니다.',
    loveIndexList: [
      { id: 1, type: 'affection', score: 80, text: '애정표현력' },
      { id: 2, type: 'sense', score: 70, text: '눈치력' },
      { id: 3, type: 'driving', score: 85, text: '썸 추진력' },
      { id: 4, type: 'sexy', score: 80, text: '19금력' }
    ]
  },
  {
    id: 15,
    type: 'INTP',
    score: 40,
    text: '선재의 감정적이고 창의적인 면과 당신의 논리적이고 분석적인 성향이 충돌할 수 있습니다. 그러나 서로의 차이를 이해하고 존중한다면, 서로를 보완하는 관계가 될 수 있습니다. 서로의 차이를 이해하고 존중한다면, 진정한 사랑을 이룰 수 있습니다.',
    loveIndexList: [
      { id: 1, type: 'affection', score: 70, text: '애정표현력' },
      { id: 2, type: 'sense', score: 75, text: '눈치력' },
      { id: 3, type: 'driving', score: 55, text: '썸 추진력' },
      { id: 4, type: 'sexy', score: 60, text: '19금력' }
    ]
  },
  {
    id: 16,
    type: 'ENTP',
    score: 40,
    text: '선재와 당신은 매우 다른 성향을 가지고 있어 갈등이 잦을 수 있습니다. 그러나 서로를 이해하고 존중한다면, 흥미롭고 도전적인 관계를 유지할 수 있습니다. 서로의 차이를 이해하고 존중한다면, 진정한 사랑을 이룰 수 있습니다.',
    loveIndexList: [
      { id: 1, type: 'affection', score: 85, text: '애정표현력' },
      { id: 2, type: 'sense', score: 80, text: '눈치력' },
      { id: 3, type: 'driving', score: 90, text: '썸 추진력' },
      { id: 4, type: 'sexy', score: 75, text: '19금력' }
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
