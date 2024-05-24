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
    questionText: '사랑하는 사람에게 하고 싶은 말은?',
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
    questionText: '중요한 약속이 있는 날, 갑작스럽게 선재가 집으로 초대한다면?',
  },
  {
    id: 6,
    code: 6,
    nextCode: 7,
    questionType: 'NS',
    questionTypeCode: 2,
    firstType: 'S',
    lastType: 'N',
    questionText: '톱스타와 데이트 중, 사람들이 몰려들어 사진을 찍기 시작한다면?',
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
    questionText: '과거에서 만난 선재가 당신에게 호감을 보인다면?',
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
        text: '선재가 날 초대해 주다니..오로지 선재에게만 집중하고 싶어',
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
        text: '네가 내 별이다. 너라는 존재 자체가 나에게 큰 의미야',
      },
      {
        code: 1,
        type: 'I',
        text: '우리 서로에게 좋은 영향을 주는 관계가 되자',
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
        text: '그 전에 현재의 문제를 해결하는 게 먼저야',
      },
      {
        code: 1,
        type: 'N',
        text: '과거로 돌아가면 미래를 바꿀 수 있을지도 몰라!',
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
        text: '너 구하고 죽는 거면 난 괜찮아. 상관없어',
      },
      {
        code: 1,
        type: 'T',
        text: '사랑은 중요하지만, 목숨 거는 건 오바야',
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
        text: '선약이 있으니 어쩔 수 없지',
      },
      {
        code: 1,
        type: 'P',
        text: '무조건 가야지~ 무슨 생각을 해',
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
        text: '사람들 시선이 너무 부담스러워ㅠㅠ',
      },
      {
        code: 1,
        type: 'N',
        text: '이런 상황도 우리 사랑의 한 페이지가 될 거야',
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
        text: '사랑하는 사람을 위해서라면 기꺼이 내 모든 것을 줄 수 있어',
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
        text: '지금의 중요한 물건이나 사진들을 넣고 이순간을 기록하고 싶어',
      },
      {
        code: 1,
        type: 'N',
        text: '미래에 대한 편지나 꿈을 담은 메모를 넣고 싶어',
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
        text: '믿을 수 없어... 너무 슬프고 충격적이야',
      },
      {
        code: 1,
        type: 'T',
        text: '선재의 죽음 뒤에는 분명 숨겨진 이유가 있을 거야',
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
        text: '선재야!널 좋아해. 이제 내 맘 다 말할래💕',
      },
      {
        code: 1,
        type: 'I',
        text: '선재가 내 마음을 알아주지 않을까?',
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
        text: '과거로 가기 전에 뭘 해야 할지 리스트를 만들자',
      },
      {
        code: 1,
        type: 'P',
        text: '계획은 과거에서 그때그때 세우고 일단 출발하자!',
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
        text: '고백하기 전에 우리의 관계를 더 확실히 하고 싶어',
      },
      {
        code: 1,
        type: 'P',
        text: '너무 설레자낭~💗 이미 사랑에 빠져버림',
      },
    ],
  },
];

export const mbtiResultList: ResultType[] = [
  {
    id: 1,
    type: 'ENFP',
    score: 100,
    text: '선재와 당신은 완벽한 케미를 자랑하는 천생연분! 두 사람의 만남은 운명 그 자체예요. 선재의 로맨틱한 감성과 당신의 발랄함은 환상의 조합이에요. 어디를 가든 주목받는 베스트 커플이 될 거예요. 두 분이 함께라면 세상은 항상 아름답고 행복으로 가득 차 있을 거예요.',
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
    text: '선재의 깊은 감성과 당신의 배려심은 완벽한 하모니를 이루어요. 서로의 마음을 읽는 능력이 탁월해 말 없이도 통하는 사이! 선재는 당신에게 가장 로맨틱한 고백을 할 거예요. 당신의 지지와 사랑으로 선재는 더욱 빛나는 스타가 될 수 있을 거예요.',
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
    text: '선재와 당신은 예민한 감수성을 공유해요. 서로의 내면을 꿰뚫어 보는 능력이 있어 깊은 공감대를 형성할 수 있어요. 두 사람만의 아늑한 세계에서 예술과 사랑을 나누는 시간은 최고의 힐링 타임이 될 거예요. 당신은 선재에게 끝없는 영감의 뮤즈가 되어줄 거예요.',
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
    text: '두 사람 모두 깊이 있는 사람이에요. 오래 알고 지내온 것 같은 친밀감이 느껴질 거예요. 서로의 은밀한 고민도 나눌 수 있는 특별한 사이가 될 수 있어요. 선재의 매력에 빠져 시간 가는 줄 모를 거예요. 당신과 함께라면 선재도 내면의 힘을 얻을 수 있을 거예요.',
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
    text: '선재의 창의력과 당신의 지성은 서로에게 큰 매력으로 다가올 거예요. 함께 깊이 있는 대화를 나누는 시간은 너무나 특별할 거예요. 가끔은 서로의 다른 점으로 인해 충돌할 수 있지만, 그 속에서 성장할 수 있어요. 선재의 열정과 당신의 지혜로운 조언이 환상의 조합을 이뤄낼 거예요.',
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
    text: '당신의 카리스마와 선재의 매력이 시너지 효과를 발휘할 거예요. 두 사람의 열정이 합쳐지면 어떤 목표라도 이룰 수 있을 거예요. 가끔은 주도권 다툼이 생길 수 있지만, 서로를 존중한다면 최고의 파트너가 될 수 있어요. 당신의 든든한 리더십으로 선재는 더 큰 꿈을 향해 나아갈 수 있을 거예요.',
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
    text: '선재와 당신은 예술적 감성을 공유해요. 서로의 내면 깊숙한 곳까지 공감할 수 있는 동반자가 될 거예요. 조용한 시간을 함께 보내며 영감을 주고받을 수 있어요. 때로는 감정 표현의 차이로 어려움을 겪을 수 있지만, 사랑으로 그 간극을 메울 수 있을 거예요. 선재의 음악과 당신의 사랑이 아름다운 하모니를 만들 거예요.',
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
    text: '선재와 당신은 에너지 넘치는 둘! 함께 있으면 하루종일 즐거운 일만 가득할 거예요. 두 사람의 창의력은 어마어마한 시너지 효과를 낼 거예요. 가끔은 서로의 즉흥적인 면이 부딪힐 수 있지만, 금세 화해할 수 있을 거예요. 당신의 유쾌함이 선재의 긍정 에너지를 UP 시켜줄 거예요!',
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
    text: '선재의 감성과 당신의 이성이 만나면 환상의 조화를 이룰 수 있어요. 당신의 안정적인 면모가 선재에게 든든한 버팀목이 되어줄 거예요. 반대로 선재의 예술적 감각이 당신에게 신선한 영감을 줄 수 있어요. 서로의 부족한 부분을 채워주는 아름다운 사이가 될 수 있어요. 차분하지만 깊은 사랑을 나눌 수 있을 거예요.',
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
    text: '선재의 자유로운 영혼과 당신의 현실적인 면모가 만나면 재미있는 조합이 탄생할 거예요. 서로에게서 배울 점이 많아 함께 성장할 수 있는 기회! 가끔은 가치관의 차이로 부딪힐 수 있지만, 사랑으로 그 간극을 메울 수 있어요. 선재의 열정에 당신의 안정감이 더해지면 어떤 어려움도 헤쳐 나갈 수 있을 거예요.',
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
    text: '선재의 강렬한 매력과 당신의 온화함이 만나면 균형 잡힌 아름다운 사랑이 탄생할 거예요. 당신의 세심한 배려가 선재의 마음을 녹일 수 있어요. 또한 선재의 창의력이 당신에게 신선한 자극을 줄 수 있어요. 서로에 대한 깊은 신뢰를 바탕으로, 평생 함께할 수 있는 진한 사랑을 키워나갈 수 있을 거예요.',
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
    text: '선재의 특별함과 당신의 배려심이 만나면 아름다운 로맨스가 시작될 거예요. 당신의 사교력으로 선재의 인맥도 넓어질 수 있어요. 사소한 부분에서 의견 차이가 생길 수 있지만, 사랑으로 극복할 수 있을 거예요. 당신의 든든한 지지가 선재에게 큰 힘이 될 거예요. 함께 로맨틱한 추억을 많이 쌓을 수 있을 거예요.',
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
    text: '선재의 감성과 당신의 이성이 만나면 독특한 조합이 탄생할 거예요. 서로의 다른 면모에 끌리는 이유! 하지만 가치관의 차이로 종종 충돌할 수 있어요. 그래도 사랑으로 그 간극을 좁혀 갈 수 있어요. 선재의 예술적 영감에 당신의 논리적 조언을 더하면, 두 사람 모두 성장할 수 있을 거예요.',
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
    text: '선재의 매력과 당신의 열정이 만나면 불꽃 튀는 케미스트리의 향연! 둘 다 즉흥적이고 자유분방해서 누구보다 짜릿한 연애를 할 수 있어요. 가끔 부딪히는 일이 생겨도 금방 화해할 수 있는 둘! 사소한 것에 얽매이지 않고 매 순간을 즐기며 사랑을 쌓아가는 두 사람이 될 거예요.',
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
    text: '선재의 감성과 당신의 이성, 참 매력적인 조합! 서로 깊이 있는 대화를 나누다 보면, 금세 끈끈한 유대감이 생길 거예요. 다른 가치관으로 충돌할 때도 있겠지만, 사랑과 이해로 차이를 좁힐 수 있어요. 선재의 순수함과 당신의 지적 매력이 어우러져 멋진 케미를 만들어 낼 거예요.',
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
    text: '선재의 창의력과 당신의 재치가 만나면 정말 재미있는 일이 가득할 거예요! 둘 다 새로운 것을 사랑하고, 도전을 즐기는 타입이라 지루할 틈이 없어요. 가끔 독특한 아이디어로 부딪히기도 하겠지만, 금세 서로의 매력에 빠져들 거예요. 둘이 함께라면 어디서나 주목받는 잉꼬부부가 될 수 있어요!',
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
