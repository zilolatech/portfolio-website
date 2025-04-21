import React from 'react'

const SkillsAndProjects = () => {

  return (
    <>
    <div className='h-screen bg-background1'>
        <div>
          <div className='absolute z-20 ml-32 mt-16 h-[85%] w-[36%] bg-primary'>
          <p className='text-3xl m-6'>Projects</p>
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
        <div className='absolute right-bg2 z-10 -rotate-45 bg-background2'></div>
        
      </div>
      </>
  )
}

export default SkillsAndProjects