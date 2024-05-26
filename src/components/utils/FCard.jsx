import React from 'react'

const FCard = ({title , points}) => {
  return (
    <>
        <div className='bg-red-700 border border-red-700 flex flex-col pl-11 pr-11 pt-4 pb-4 gap-6 text-white w-[200px] h-[200px] justify-center items-center hover:opacity-75 duration-300 ease-in-out hover:cursor-pointer'>
            <div className='text-lg font-bold text-center'>{title}</div>
            <div className='flex gap-1 flex-col  justify-center items-center'>
                <span className='text-5xl font-medium'>{points}</span>
                <span className='text-lg font-bold'>Points</span>
            </div>
        </div>
    </>
  )
}

export default FCard