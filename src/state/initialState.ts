import { QuestionStepType, ResultType } from '../lib/type';

export const initialQuestionStep: QuestionStepType = {
  total: 12,
  current: 1
}

export const initialResult: ResultType = {
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
};
