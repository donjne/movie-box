import React from 'react'

const SomeWords = () => {
  return (
    <div className='bg-[#ffd1d1] rounded-3xl p-4 text-black border border-red-700'>
      <div className='font-semibold pt-2 text-gray-700'>
        <p>Play quizzes and earn free tickets</p>
        <p className='text-sm text-gray-500 pt-4 pb-2'>50k people are playing now</p>
      </div>
      <div className='w-32 mx-auto flex justify-center font-semibold text-red-700 bg-[#ffa0a0] rounded-full py-1'>
      <button>Start playing</button>
      </div>
    </div>
  )
}

export default SomeWords