import React, { useEffect, useState } from 'react'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const selecredTheme = localStorage.getItem('theme')
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initialTheme = selecredTheme ? selecredTheme == 'dark' : systemDark

    setIsDarkMode(initialTheme)
    document.documentElement.className = initialTheme ? 'dark' : 'light'
  }, [])

  const changeTheme = () => {
    const newTheme = !isDarkMode
    setIsDarkMode(newTheme)
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')
    document.documentElement.className = newTheme ? 'dark' : 'light'
  }

  return (
    <>
      <div className='h-screen text-text bg-background1 relative z-40'>
        <div className='relative z-10 h-10 bg-primary'>
          Hello
          <div className='inline-block float-right mt-2'>
            <div className='inline px-3'>Projects</div>
            <div className='inline px-3 py-1 bg-accent text-slate-200 rounded-2xl'>
              <button className='text-sm' onClick={changeTheme}>Switch Theme</button>
            </div>
          </div>
        </div>
        <div className='absolute left-bg z-0 -rotate-45 bg-background2'></div>
        <div className='absolute right-bg z-0 rotate-45 bg-background2'></div>
        <div className='absolute z-10 flex ml-64 mt-32 h-96'>
          <div>
            <div className='text-4xl'>Zilola</div>
            <div className='text-4xl'>[Surname]</div>
            <div className='text-2xl mt-1'>React.js Developer</div>
            <div className='w-96 mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat eos tempora debitis inventore voluptas maxime, dolore iste quam nam. Nisi eius labore, dolore fugiat hic impedit id optio suscipit asperiores.</div>
          </div>
          <div className='h-[90%] w-64 bg-primary ml-32 mt-9 p-6'>
            <div className='text-3xl mt-3'>Contacts</div>
            <div className='mt-3'>
              <div>placeholder@gmail.com</div>
              <div>linkedin.com/in/</div>
              <div>github.com</div>
            </div>
            <div className='mt-28 py-3 bg-accent rounded-2xl'>
              <p className='text-slate-200 text-center'>Download Resume</p>
            </div>
          </div>
        </div>
        <div className='absolute z-10 inset-x-0 bottom-3'>
          <p className='text-center'>Skills and Projects</p>
          <img src='/icons/down-arrow.svg' className='h-10 m-auto'></img>
        </div>
      </div>
      <div className='h-screen'>
        <div>
          <div className='absolute z-10 ml-32 mt-16 h-[85%] w-[36%] bg-primary'>
          <p className='text-3xl m-6'>Projects</p>
        </div>
        <div className='absolute z-10 mt-16 ml-[50%]'>
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
        <div className='absolute right-bg2 z-0 -rotate-45 bg-background2'></div>
      </div>
    </>
  )
}

export default App