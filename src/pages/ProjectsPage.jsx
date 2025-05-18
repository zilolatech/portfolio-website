import React from 'react'

const ProjectsPage = ({isDarkMode}) => {
  return (
    <>
      <div className='text-text bg-background1 h-[100vh]'>
        <div className='ml-10 pt-5 text-3xl z-10'>Projects</div>
        <div className='flex mt-10 justify-center z-10'>
          <div className='z-10 mt-10 h-[60vh] w-[25%] mx-10 hover:h-[70vh] hover:w-[30%] hover:mt-4 hover:mx-1 bg-primary'>
            <img src='./images/typing-speed-test.png' className='w-[80%] m-5 rounded-xl'></img>
            <div className='inline-block float-right text-2xl -rotate-90 mr-[-80px]'>Typing Speed Test</div>
            <div className='ml-5 w-[70%]'>
              <p>Developed an interactive typing speed test, featuring real-time accuracy, characters-per-minute (CPM) and words-per-minute (WPM) calculations.</p>
              <p>github link</p>
            </div>
          </div>
          <div className='z-10 mt-10 h-[60vh] w-[25%] mx-10 hover:h-[70vh] hover:w-[30%] hover:mt-4 hover:mx-1 bg-primary'>
            <img src='./images/e-shop.png' className='w-[80%] m-5 rounded-xl'></img>
            <div className='inline-block float-right text-2xl -rotate-90 mr-[-66px]'>E-Shop Website</div>
            <div className='ml-5 w-[70%]'>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, vitae error! Asperiores mollitia tenetur dignissimos molestias adipisci sed saepe magni corporis, in, optio velit doloribus inventore eligendi quisquam accusantium libero.</p>
              <p>github link</p>
            </div>
          </div>
          <div className='z-10 mt-10 h-[60vh] w-[25%] mx-10 hover:h-[70vh] hover:w-[30%] hover:mt-4 hover:mx-1 bg-primary'>
            <img src='./images/snake-game.jpg' className='w-[80%] m-5 rounded-xl'></img>
            <div className='inline-block float-right text-2xl -rotate-90 mr-[-170px]'>Snake Game with Color Elements</div>
            <div className='ml-5 w-[70%]'>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem debitis est nemo facere consequuntur, deserunt veritatis voluptate accusamus omnis molestias natus nihil nam, corporis dolore sint voluptas quam aspernatur odio.</p>
              <p>github link</p>
            </div>
          </div>
        </div>
        <div className={`fixed right-bg2 z-0 -rotate-45 ${!isDarkMode ? 'bg-background2' : 'hidden'}`} style={{top: '500px', right: '-700px'}}></div>
      </div>
    </>
  )
}

export default ProjectsPage