import React from 'react'
import { Link } from 'react-router-dom'

export const Projects = () => {
  const typingSpeedTest = 'Developed an interactive typing speed test, featuring real-time accuracy, characters-per-minute (CPM) and words-per-minute (WPM) calculations.'
  const eshop = 'Developed a fully responsive e-commerce website using React.js and React Router for navigation. Implemented product filtering, search functionality, and a shopping cart.'
  const snakeGame = 'Build a modernized version of the classic Snake Game using React.js, incorporating dynamic color-changing elements to enhance gameplay. Utilized state management to ensure smooth gameplay mechanics and responsive controls.'

  return (
    <div className='md:absolute pt-1 pb-8 z-20 mx-5 md:ml-32 mt-16 h-[85%] md:w-[36%] bg-primary'>
      <Link to='/projects'><img src='/icons/full-screen.svg' className='opacity-10 hover:h-8 hover:m-2 hover:opacity-40 float-right h-6 m-3'></img></Link>
      <p className='text-3xl m-3 md:m-6'>Projects</p>
      <div className='flex ml-4 md:ml-6 mt-8 md:pt-3'>
        <img src='./images/typing-speed-test.png' className='h-32 w-36 md:h-40 md:w-44 object-cover rounded-2xl'></img>
        <div className='ml-3 md:mx-5 md:mt-2'>
          <p className='md:text-xl text-lg font-normal md:font-light'>Typing Speed Test</p>
          <p className='mt-1 mr-1 text-sm'>{typingSpeedTest.substring(0, 95) + '...'}</p>
        </div>
      </div>
      <div className='flex ml-4 md:ml-6 my-12 md:my-8'>
        <img src='./images/e-shop.png' className='h-32 w-36 md:h-40 md:w-44 object-cover rounded-2xl'></img>
        <div className='mx-3 md:mx-5 md:mt-2'>
          <p className='md:text-xl text-lg font-normal md:font-light'>E-Shop</p>
          <p className='mt-1 mr-1 text-sm'>{eshop.substring(0, 95) + '...'}</p>
        </div>
      </div>
      <div className='flex ml-4 md:ml-6'>
        <img src='./images/snake-game.jpg' className='h-32 w-36 md:h-40 md:w-44 object-cover rounded-2xl'></img>
        <div className='mx-3 md:mx-5 md:mt-2'>
          <p className='md:text-xl text-lg font-normal md:font-light'>Snake Game</p>
          <p className='mt-1 mr-1 text-sm'>{snakeGame.substring(0, 90) + '...'}</p>
        </div>
      </div>
    </div>
  )
}
