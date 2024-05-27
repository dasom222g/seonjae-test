import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { appleButtonList } from '../lib/utils'
import { useSetRecoilState } from 'recoil'
import { mbtiValueState } from '../state/dataState'
import ReactGA from 'react-ga4';

const Home: FC = () => {
  // logic
  const navigate = useNavigate()

  const setMbtiValue = useSetRecoilState(mbtiValueState)

  const handleStart = (): void => {
    setMbtiValue([])
    navigate('/test')
  }

  const handleTrackingYoutube = (): void => {
    console.log('🚀 ~ handleTrackingYoutube ~ handleTrackingYoutube:', handleTrackingYoutube)
    ReactGA.event({
      category: 'Button',
      action: 'Click',
      label: 'Visit YouTube Channel'
    });
  };

  // view

  return (
    <section className='pt-10 pb-8'>
      {/* START: 로고 텍스트 */}
      <div className="text-center relative">
        <i className="absolute -left-1 -top-4 bg-[url('../public/images/icon/main-icon-wave.png')] w-[71px] h-[29px]" /> {/* icon */}
        <img src="./images/sn-logo.svg" alt="선재 업고 튀어 텍스트 로고" />
        <span className="flex justify-center items-end font-cafe24surround text-3xl font-bold p-1 text-stroke-1 text-stroke-black text-white">
          <span className='block text-5xl text-mbti-pink transform rotate-12 origin-right'>궁</span>합 <span className='block text-5xl text-mbti-light-pink transform -rotate-12 origin-left'>테</span><span className='block transform -rotate-3 origin-bottom-left'>스트</span>
        </span>
      </div>
      {/* END: 로고 텍스트 */}
      {/* START: 선재 메인 이미지 */}
      <div className="py-8 px-5">
        <div className='flex justify-e`nd items-center gap-1 pb-1'>
          <img src="./images/icon/main-icon-youtube.svg" alt="youtube-icon" className='w-8' />
          <a href="https://www.youtube.com/@chutzrit" className='font-cafe24surround mbti-red text-mbti-red underline' onClick={handleTrackingYoutube}>By. 후츠릿</a>
        </div>
        <div className='relative z-10'>
          {/* START: icon */}
          <i className="absolute -left-10 -top-14 bg-[url('../public/images/icon/main-icon-heart.png')] w-[93px] h-[97px] -z-10" />
          <i className="absolute -right-9 -top-3 bg-[url('../public/images/icon/main-icon-day.svg')] w-[72px] h-[47px] bg-contain bg-no-repeat" />
          <i className="absolute right-5 -bottom-3 bg-[url('../public/images/icon/main-icon-heart-small.png')] w-[29px] h-[28px] z-20" />
          {/* END: icon */}
          {/* top */}
          <div className='flex bg-mbti-purple border-2 border-black px-4 py-3 gap-3'>
            {appleButtonList.map((button, index) => <span key={index} className={`block text-no w-5 h-5 ${button.color} ${button.borderSize === 1 ? 'border' : `border-${button.borderSize}`} border-black rounded-full`}>버튼 이미지</span>)}
          </div>
          {/* 이미지 */}
          <div className='w-full relative bg-mbti-deep-yellow overflow-hidden border-2 border-black border-t-0' style={{ paddingBottom: 'calc(100% - 32px)' }}>
            <img src="./images/hero.jpeg" className='absolute w-full transform scale-110 -mt-2' alt="'선재 업고 튀어' / tvN 제공" />
          </div>
        </div>
      </div>
      {/* END: 선재 메인 이미지 */}
      {/* START: 시작 버튼 */}
      <button
        type="button"
        className="block relative my-0 mx-auto text-center w-40 bg-mbti-blue p-3 rounded-4xl text-lg text-white font-cafe24surround"
        onClick={handleStart}
      >
        시작하기
        <i className="block absolute bg-[url('../public/images/icon/main-icon-cursor.png')] w-9 h-9 bg-cover right-0 -bottom-2" />
      </button>
    </section >
  )
}

export default Home
