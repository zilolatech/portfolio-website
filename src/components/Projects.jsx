import React from 'react'

export const Projects = () => {
  return (
    <div className='absolute z-20 ml-32 mt-16 h-[85%] w-[36%] bg-primary'>
            <img src='/icons/full-screen.svg' className='opacity-10 hover:h-8 hover:m-2 hover:opacity-40 float-right h-6 m-3'></img>
            <p className='text-3xl m-6'>Projects</p>
            <div className='flex ml-6 pt-3'>
              <img src='./images/typing-speed-test.png' className='h-40 w-44 object-cover rounded-2xl'></img>
              <div className='ml-5 mt-2'>
                <p className='text-xl'>Typing Speed Test</p>
                <p className='mt-1'>info</p>
              </div>
            </div>
            <div className='flex ml-6 my-8'>
              <img src='./images/e-shop.png' className='h-40 w-44 object-cover rounded-2xl'></img>
              <div className='ml-5 mt-2'>
                <p className='text-xl'>E-Shop</p>
                <p className='mt-1'>info</p>
              </div>
            </div>
            <div className='flex ml-6'>
              <img src='./images/snake-game.jpg' className='h-40 w-44 object-cover rounded-2xl'></img>
              <div className='ml-5 mt-2'>
                <p className='text-xl'>Snake Game</p>
                <p className='mt-1'>info</p>
              </div>
            </div>
          </div>
  )
}
