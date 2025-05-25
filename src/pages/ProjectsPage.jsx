import React from 'react'

const ProjectsPage = ({isDarkMode}) => {
  return (
    <>
      <div className='text-text bg-background1 md:h-[100vh] pb-10 md:pb-0'>
        <div className='md:ml-10 ml-5 md:pt-5 pt-3 text-3xl z-10'>Projects</div>
        <div className='md:flex mt-10 justify-center z-10'>
          <div className='rounded-md md:rounded-none z-20 mt-10 h-[60vh] md:w-[25%] mx-10 hover:h-[70vh] hover:w-[30%] hover:mt-4 hover:mx-1 bg-primary'>
            <img src='./images/typing-speed-test.png' className='w-[80%] md:m-5 m-3 pt-2 md:pt-0 rounded-md md:rounded-xl'></img>
            <div className='inline-block float-right text-2xl -rotate-90 mr-[-80px] opacity-50'>Typing Speed Test</div>
            <div className='ml-7 w-[70%]'>
              <p className='font-medium text-xl'>Key Features</p>
              <ul className='text-sm mt-2'>
                <li>- real-time accuracy</li>
                <li>- characters-per-minute (CPM) calculations</li>
                <li>- words-per-minute (WPM) calculations</li>
              </ul>
              <p className='mt-4'>React.js, Tailwind.CSS, JavaScript</p>
              <p className='md:absolute bottom-52 mt-10 font-medium flex'>GitHub: <a href='https://github.com/zilolatech/typing-speed-test' target='_blank' className='font-thin ml-2'>typing-speed-test</a></p>
            </div>
          </div>
          <div className='rounded-md md:rounded-none z-10 mt-10 h-[60vh] md:w-[25%] mx-10 hover:h-[70vh] hover:w-[30%] hover:mt-4 hover:mx-1 bg-primary'>
            <img src='./images/e-shop.png' className='w-[80%] md:m-5 m-3 pt-2 md:pt-0 rounded-md md:rounded-xl'></img>
            <div className='inline-block float-right text-2xl -rotate-90 mr-[-66px] opacity-50'>E-Shop Website</div>
            <div className='ml-5 w-[85%]'>
              <p className='font-medium text-xl'>Key Features</p>
              <ul className='mt-2'>
                <li>- product filtering</li>
                <li>- search functionality</li>
                <li>- a shopping cart</li>
                <li>- mobile friendly</li>
              </ul>
              <p className='mt-4'>React.js, Tailwind.CSS, JavaScript, Resposive Design</p>
              <p className='md:absolute bottom-52 mt-10 font-medium flex'>GitHub: <a href='https://github.com/zilolatech/eshop-tailwind' target='_blank' className='font-thin ml-2'>eShop</a></p>
            </div>
          </div>
          <div className='rounded-md md:rounded-none z-10 mt-10 md:h-[60vh] h-[70vh] md:w-[25%] mx-10 hover:h-[70vh] hover:w-[30%] hover:mt-4 hover:mx-1 bg-primary'>
            <img src='./images/snake-game.jpg' className='w-[80%] md:m-5 m-3 pt-2 md:pt-0 rounded-md md:rounded-xl'></img>
            <div className='inline-block float-right text-2xl -rotate-90 mr-[-50px] opacity-50'>Snake Game</div>
            <div className='ml-5 w-[80%]'>
              <p className='font-medium text-xl'>Key Features</p>
              <ul className='mt-2'>
                <li>- dynamic color-changing elements</li>
                <li>- smooth gameplay mechanics</li>
                <li>- responsive controls</li>
                <li>- touch support (mobile friendly)</li>
              </ul>
              <p className='mt-4'>React.js, Tailwind.CSS, JavaScript</p>
              <p className='md:absolute bottom-52 mt-10 font-medium flex'>GitHub: <a href='https://github.com/zilolatech/snakegame' target='_blank' className='font-thin ml-2'>Snake Game</a></p>
            </div>
          </div>
        </div>
        <div className={`hidden md:inline fixed right-bg2 z-0 -rotate-45 ${!isDarkMode ? 'bg-background2' : 'md:hidden'}`} style={{top: '500px', right: '-700px'}}></div>
      </div>
    </>
  )
}

export default ProjectsPage