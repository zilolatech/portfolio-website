import React from 'react'
import { Projects } from './Projects'

const SkillsAndProjects = ( {isDarkMode, backgroundPosition} ) => {
  

  return (
    <>
    <div className='h-screen bg-background1 text-text' id='skillsAndProjects'>
        <div>
          <Projects />
          <div className='absolute z-20 mt-16 ml-[50%]'>
            <div className='text-3xl mt-32 ml-28'>Technical Skills</div>
            <div className='flex mt-10 ml-28'>
              <div>
                <p className='my-1 flex'><img src='/icons/javascript.svg' width='20px' className='mr-2'></img>JavaScript</p>
                <p className='my-2 flex'><img src='/icons/html5.svg' width='20px' className='mr-2'></img>HTML</p>
                <p className='my-2 flex'><img src='/icons/css.svg' width='20px' className='mr-2'></img>CSS</p>
                <p className='my-2 flex'><img src='/icons/react-js.svg' width='20px' className='mr-2'></img>React.js</p>
              </div>
              <div className='ml-16'>
                <p className='my-1 flex'><img src='/icons/python.svg' width='20px' className='mr-2'></img>Python</p>
                <p className='my-2 flex'><img src='/icons/node-js.svg' width='20px' className='mr-2'></img>Node.js</p>
                <p className='my-2 flex'><img src='/icons/next-js.svg' width='20px' className='mr-2 z-10'></img><div className='bg-white ml-[-28px] w-5 h-4 mt-1 z-0 rounded-xl mr-2'></div>Next.js</p>
                <p className='my-2 flex'><img src='/icons/tailwind-css.svg' width='20px' className='mr-2'></img>Tailwind CSS</p>
              </div>
            </div>
            <div className='text-3xl mt-28 ml-28'>Languages</div>
            <div className='ml-28 mt-8'>English C1 (IELTS Academic)</div>
          </div>
        </div>
        <div className={`absolute right-bg2 z-10 -rotate-45 ${!isDarkMode ? 'bg-background2' : 'hidden'}`} style={{transition: 'all 0.3s ease', marginTop: backgroundPosition}}></div>
        
      </div>
      </>
  )
}

export default SkillsAndProjects