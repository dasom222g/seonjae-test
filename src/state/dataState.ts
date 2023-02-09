import { atom } from 'recoil'
import { MBTIResultType, QuestionStepType } from '../lib/type'
import { initialQuestionStep } from './initialState'

export const questionStepState = atom<QuestionStepType>({
  key: 'questionStepState',
  default: initialQuestionStep,
})

export const mbtiResultState = atom<MBTIResultType[]>({
  key: 'mbtiResultState',
  default:[]
})
