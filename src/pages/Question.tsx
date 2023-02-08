import React, { FC } from 'react'

const Question: FC = () => {
  return (
    <section className="h-full py-12 flex flex-col justify-between">
      {/* START: Progress bar */}
      <div className="w-full h-6 bg-white border-2 rounded-xl border-mbti-gray relative">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
          <img src="./images/progress.png" className="w-9" alt="status 이미지" />
        </div>
        <span></span> {/* status */}
      </div>
      {/* END: Progress bar */}
      <div className="text-center">
        <h3 className="text-4xl font-bold">Qusetion 1</h3>
        <span className="block pt-12 text-lg">나는 사람들에게</span>
      </div>
      <div>
        <div className="py-2">
          <button type="button" className="block text-center w-full bg-white p-4 rounded-2xl">
            열심히 산다는 얘기를 들어봤다
          </button>
        </div>
        <div className="py-2">
          <button type="button" className="block text-center w-full bg-white p-4 rounded-2xl">
            갓생? 그게뭐야~~
          </button>
        </div>
      </div>
    </section>
  )
}

export default Question
