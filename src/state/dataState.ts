import { atom } from 'recoil'
import { QuestionStepType } from '../lib/type'
import { initialQuestionStep } from './initialState'
export const questionStepState = atom<QuestionStepType>({
  key: 'questionStepState',
  default: initialQuestionStep,
})
