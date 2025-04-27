import React from 'react'

const SkillsAndProjects = ( {isDarkMode} ) => {

  return (
    <>
    <div className='h-screen bg-background1 text-text'>
        <div className=''>
          <div className='absolute z-20 ml-32 mt-16 h-[85%] w-[36%] bg-primary'>
            <img src='/icons/full-screen.svg' className='opacity-10 hover:h-8 hover:m-2 hover:opacity-40 float-right h-6 m-3'></img>
            <p className='text-3xl m-6'>Projects</p>
            <div className='flex ml-6'>
              <div className='bg-teal-500 h-40 w-40 rounded-3xl text-center pt-14'>img placeholder</div>
              <div className='ml-5 mt-2'>
                <p className='text-xl'>Typing Speed Test</p>
                <p className='mt-1'>info</p>
              </div>
            </div>
            <div className='flex ml-6 my-10'>
              <div className='bg-teal-500 h-40 w-40 rounded-3xl text-center pt-14'>img placeholder</div>
              <div className='ml-5 mt-2'>
                <p className='text-xl'>E-Shop</p>
                <p className='mt-1'>info</p>
              </div>
            </div>
            <div className='flex ml-6'>
              <div className='bg-teal-500 h-40 w-40 rounded-3xl text-center pt-14'>img placeholder</div>
              <div className='ml-5 mt-2'>
                <p className='text-xl'>Snake Game</p>
                <p className='mt-1'>info</p>
              </div>
            </div>
          </div>
          <div className='absolute z-20 mt-16 ml-[50%]'>
            <div className='text-3xl mt-32 ml-28'>Technical Skills</div>
            <div className='flex mt-10 ml-28'>
              <div>
                <p className='my-1'>JavaScript</p>
                <p className='my-1'>HTML</p>
                <p className='my-1'>CSS</p>
                <p className='my-1'>React.js</p>
              </div>
              <div className='ml-16'>
                <p className='my-1'>Python</p>
                <p className='my-1'>Node.js</p>
                <p className='my-1'>Next.js</p>
                <p className='my-1'>Tailwind CSS</p>
              </div>
            </div>
            <div className='text-3xl mt-28 ml-28'>Languages</div>
            <div className='ml-28 mt-8'>English C1 (IELTS Academic)</div>
          </div>
        </div>
        <div className={`absolute right-bg2 z-10 -rotate-45 ${!isDarkMode ? 'bg-background2' : 'hidden'}`}></div>
        
      </div>
      </>
  )
}

export default SkillsAndProjects