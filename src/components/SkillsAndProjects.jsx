import React from 'react'
import { Projects } from './Projects'

const SkillsAndProjects = ( {isDarkMode, backgroundPosition} ) => {
  

  return (
    <>
    <div className='pt-1 md:pt-0 h-screen bg-background1 text-text' id='skillsAndProjects'>
        <div>
          <Projects />
          <div className='md:absolute z-20 mt-16 md:ml-[50%]'>
            <div className='text-3xl md:mt-32 ml-7 md:ml-28'>Technical Skills</div>
            <div className={`flex mt-6 pl-7 md:ml-28 ${isDarkMode && 'bg-background1'}`}>
              <div>
                <div className='my-1 flex'><img src='/icons/javascript.svg' width='20px' className='mr-2'></img>JavaScript</div>
                <div className='my-2 flex'><img src='/icons/html5.svg' width='20px' className='mr-2'></img>HTML</div>
                <div className='my-2 flex'><img src='/icons/css.svg' width='20px' className='mr-2'></img>CSS</div>
                <div className='my-2 flex'><img src='/icons/react-js.svg' width='20px' className='mr-2'></img>React.js</div>
              </div>
              <div className='ml-16'>
                <div className='my-1 flex'><img src='/icons/divython.svg' width='20px' className='mr-2'></img>Python</div>
                <div className='my-2 flex'><img src='/icons/node-js.svg' width='20px' className='mr-2'></img>Node.js</div>
                <div className='my-2 flex'><img src='/icons/next-js.svg' width='20px' className='mr-2 z-10'></img><div className='bg-white ml-[-28px] w-5 h-4 mt-1 z-0 rounded-xl mr-2'></div>Next.js</div>
                <div className='my-2 flex'><img src='/icons/tailwind-css.svg' width='20px' className='mr-2'></img>Tailwind CSS</div>
              </div>
            </div>
            <div className={`${isDarkMode && 'bg-background1'}`}>
              <div className='text-3xl pt-14 ml-7 md:ml-28'>Certifications</div>
              <div className='ml-7 md:ml-28 mt-6'><a href='#' target='_blank'>Responsive Web Design, freeCodeCamp, 2024</a></div>
              <div className='ml-7 md:ml-28 mt-2'><a href='#' target='_blank'>JavaScript Algorithms and Data Structure, freeCodeCamp, 2024</a></div>
              <div className='text-3xl mt-16 ml-7 md:ml-28'>Languages</div>
              <div className='ml-7 md:ml-28 mt-6 pb-10 md:pb-0'>English C1 (IELTS Academic), Russian, Uzbek</div>
            </div>
          </div>
        </div>
        <div className={`md:inline hidden absolute right-bg2 z-10 -rotate-45 ml-[-150px] ${!isDarkMode ? 'bg-background2' : 'md:hidden'}`} style={{transition: 'all 0.3s ease', marginTop: backgroundPosition}}></div>
        
      </div>
      </>
  )
}

export default SkillsAndProjects