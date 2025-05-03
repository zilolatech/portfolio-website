import React from 'react'

export const Projects = () => {
  const typingSpeedTest = 'Developed an interactive typing speed test, featuring real-time accuracy, characters-per-minute (CPM) and words-per-minute (WPM) calculations.'
  const eshop = 'Developed a fully responsive e-commerce website using React.js and React Router for navigation. Implemented product filtering, search functionality, and a shopping cart.'
  const snakeGame = 'Build a modernized version of the classic Snake Game using React.js, incorporating dynamic color-changing elements to enhance gameplay. Utilized state management to ensure smooth gameplay mechanics and responsive controls.'

  return (
    <div className='absolute z-20 ml-32 mt-16 h-[85%] w-[36%] bg-primary'>
            <img src='/icons/full-screen.svg' className='opacity-10 hover:h-8 hover:m-2 hover:opacity-40 float-right h-6 m-3'></img>
            <p className='text-3xl m-6'>Projects</p>
            <div className='flex ml-6 pt-3'>
              <img src='./images/typing-speed-test.png' className='h-40 w-44 object-cover rounded-2xl'></img>
              <div className='mx-5 mt-2'>
                <p className='text-xl'>Typing Speed Test</p>
                <p className='mt-1 mr-1 text-sm'>{typingSpeedTest.substring(0, 95) + '...'}</p>
              </div>
            </div>
            <div className='flex ml-6 my-8'>
              <img src='./images/e-shop.png' className='h-40 w-44 object-cover rounded-2xl'></img>
              <div className='mx-5 mt-2'>
                <p className='text-xl'>E-Shop</p>
                <p className='mt-1 mr-1 text-sm'>{eshop.substring(0, 95) + '...'}</p>
              </div>
            </div>
            <div className='flex ml-6'>
              <img src='./images/snake-game.jpg' className='h-40 w-44 object-cover rounded-2xl'></img>
              <div className='mx-5 mt-2'>
                <p className='text-xl'>Snake Game</p>
                <p className='mt-1 mr-1 text-sm'>{snakeGame.substring(0, 90) + '...'}</p>
              </div>
            </div>
          </div>
  )
}
