import React, { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import ResultMessage from '../components/ResultMessage'
import { mbtiResultList, resultButtonList } from '../data/response'
import { ButtonType, ResultButtonType } from '../lib/type'
import { useRecoilState, useRecoilValue } from 'recoil'
import { mbtiValueState, resultState } from '../state/dataState'
import { initialResult } from '../state/initialState'
import Score from '../components/Score'
import LoveIndex from '../components/LoveIndex'
import ReactGA from 'react-ga4';

const Result: FC = () => {
  const navigate = useNavigate()

  const [copied, setCopied] = useState(false)

  const mbtiValue = useRecoilValue(mbtiValueState)
  // mbti, 궁합점수, 설명, loveIndex로 구성된 결과값의 객체
  const [result, setResult] = useRecoilState(resultState)

  const shareData = {
    title: '선재랑 궁합테스트',
    text: '나와 선재의 궁합점수는 몇점일까?드라마 <선재 업고 튀어>의 인기 남자주인공 류선재와 MBTI 기반 궁합테스트를 시작해보세요💕',
    url: 'https://seonjae.netlify.app',
  }

  const share = async (): Promise<void> => {
    handleTrackingShare()
    try {
      if (!navigator.share) {
        setCopied(true)
        alert('복사')
        return
      }
      await navigator.share(shareData)
    } catch (error) {
      console.error(error)
    }
  }

  const handleClick = (type: ButtonType, data: ResultButtonType): void => {
    if (type === 'link') {
      data.link && navigate(data.link)
      return
    }
    share()
  }

  const handleTrackingShare = (): void => {
    ReactGA.event({
      category: 'Button',
      action: 'Share',
      label: 'Share button click'
    });
  };

  useEffect(() => {
    // EI, NS, TF, PJ 순으로 정렬
    const sortedValue = [...mbtiValue].sort((a, b) => a.questionTypeCode - b.questionTypeCode)
    const resultValue = sortedValue
      .map((value) => {
        // 첫번째 코드에 담간 값
        const itemValue = value.resultValue[value.firstType] || '' // 0, 1, ..
        // 순회하면서 E or I, N or S, T or F, P or J 리텀
        const resultType =
          typeof itemValue === 'number' && itemValue > 1 ? value.firstType : value.lastType
        return resultType
      })
      .join('') // ENTJ

    setResult(mbtiResultList.find((result) => result.type === resultValue) || initialResult)
  }, [mbtiValue, setResult])

  // useEffect(() => {
  //   console.log('result', result)
  // }, [result])

  return (
    <section className="pt-10 pb-8">
      {/* START: 로고 텍스트 */}
      <div className="text-center relative">
        <i className="absolute -left-1 -top-4 bg-[url('../public/images/icon/main-icon-wave.png')] w-[71px] h-[29px]" />{' '}
        {/* icon */}
        <div className="relative pt-8">
          <span className="flex justify-center items-end font-cafe24surround text-4xl font-bold p-1 text-stroke-1 text-stroke-black text-white relative z-10">
            <span className="block text-6xl text-mbti-deep-yellow transform -rotate-12 origin-right">
              궁
            </span>
            합{' '}
            <span className="block text-6xl text-mbti-light-pink transform rotate-12 origin-left -ml-1">
              결
            </span>
            <span className="block transform -rotate-12 origin-bottom-right">과</span>
          </span>
          {/* START: icon */}
          <i className="absolute inset-0 bg-[url('../public/images/icon/result-icon-heart.svg')] bg-no-repeat bg-hand-heart bg-center -top-6 left-1" />
          <svg viewBox="0 0 500 500" className="transform -rotate-12 absolute -top-2 right-0">
            <path
              id="curve"
              d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
              className="fill-none"
            />
            <text width="500" className="text-2xl font-cafe24surround">
              <textPath xlinkHref="#curve" textAnchor="end" startOffset="100%">
                선재와 나의
              </textPath>
            </text>
          </svg>
          {/* END: icon */}
        </div>
      </div>
      {/* END: 로고 텍스트 */}
      <div className="py-4">
        <Score score={result.score} />
      </div>
      <div className="py-4">
        <LoveIndex list={result.loveIndexList} />
      </div>
      <div className="py-4">
        <ResultMessage data={result} />
      </div>
      <div className='py-4'>
        {resultButtonList.map((resultButton) => (
          <Button key={resultButton.id} data={resultButton} handleClick={handleClick} />
        ))}
        {copied && <span style={{ color: 'green' }}>URL이 복사되었습니다!</span>}
      </div>
    </section>
  )
}

export default Result
