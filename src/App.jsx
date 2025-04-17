import React from 'react'

const App = () => {
  return (
    <>
      <div className='relative z-10 h-10 bg-slate-500'>
        Hello
      </div>
      <div className='absolute left-bg z-0 -rotate-45 bg-slate-200'></div>
      <div className='absolute right-bg z-0 rotate-45 bg-slate-200'></div>
      <div className='absolute z-10 flex ml-64 mt-32 h-96'>
        <div>
          <div className='text-4xl'>Zilola</div>
          <div className='text-4xl'>[Surname]</div>
          <div className='text-2xl mt-1'>React.js Developer</div>
          <div className='w-96 mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat eos tempora debitis inventore voluptas maxime, dolore iste quam nam. Nisi eius labore, dolore fugiat hic impedit id optio suscipit asperiores.</div>
        </div>
        <div className='h-[90%] w-64 bg-slate-500 ml-32 mt-9 p-6'>
          <div className='text-3xl mt-3'>Contacts</div>
          <div className='mt-3'>
            <div>placeholder@gmail.com</div>
            <div>linkedin.com/in/</div>
            <div>github.com</div>
          </div>
          <div className='mt-28 py-3 bg-slate-800 rounded-2xl'>
            <p className='text-slate-300 text-center'>Download Resume</p>
          </div>
        </div>
      </div>
      <div className='absolute z-10 inset-x-0 bottom-3'>
        <p className='text-center'>Skills and Projects</p>
        <img src='/icons/down-arrow.svg' className='h-10 m-auto'></img>
      </div>
    </>
  )
}

export default App