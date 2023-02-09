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

const buttons = {
  1: 'link',
  2: 'function' 
} as const

export type IndicatorType = typeof indicators[keyof typeof indicators] // 'EI' | 'NS' | 'TF' | 'PJ'

export type CategoryType = typeof categorys[keyof typeof categorys] // 'E' | 'I' | 'N' | 'S' ...

export type ButtonType = typeof buttons[keyof typeof buttons] // 'link' | 'function'
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

export interface QuestionStepType {
  total: number
  current: number
}

type PartialRecord<K extends string | number, T> = { [P in K]?: T }

export interface MBTIResultType {
  qustionType: IndicatorType
  qustionCode: number
  firstType: CategoryType
  lastType: CategoryType
  resultValue: PartialRecord<CategoryType, number>
}

interface resultMessageType {
  id: number,
  text: string
}
export interface ResultType {
  id: number
  type: string //'ENTJ..'
  imageSrc: string
  messageList: resultMessageType[]
}

export interface ResultButtonType {
  id: number
  type: ButtonType,
  text: string,
  link?: string
}