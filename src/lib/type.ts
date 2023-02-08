interface AnswerType {
  code: number
  type: CategoryType
  text: string
}

const indicators = {
  ei: 'EI',
  ns: 'NS',
  ft: 'TF',
  jp: 'PJ',
} as const

const categorys = {
  e: 'E',
  i: 'I',
  n: 'N',
  s: 'S',
  t: 'T',
  f: 'F',
  p: 'P',
  j: 'J',
} as const

export type IndicatorType = typeof indicators[keyof typeof indicators] // 'EI' | 'NS' | 'TF' | 'PJ'

export type CategoryType = typeof categorys[keyof typeof categorys] // 'E' | 'I' | 'N' | 'S' ...

export interface MBTIAnswerType {
  id: number
  questionCode: number
  questionNextCode: number
  questionType: IndicatorType
  answerList: AnswerType[]
}

export interface MBTIQuestionType {
  id: number
  code: number
  nextCode: number
  questionType: IndicatorType
  questionCode: number
  firstType: CategoryType
  lastType: CategoryType
  questionText: string
}