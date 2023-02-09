import { atom } from 'recoil'
import { MBTIValueType, QuestionStepType, ResultType } from '../lib/type'
import { initialQuestionStep, initialResult } from './initialState'

export const questionStepState = atom<QuestionStepType>({
  key: 'questionStepState',
  default: initialQuestionStep,
})

export const mbtiValueState = atom<MBTIValueType[]>({
  key: 'mbtiValueState',
  default:[]
})

export const resultState = atom<ResultType>({
  key: 'reultState',
  default: initialResult
})