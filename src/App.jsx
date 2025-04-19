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
      <div className='h-screen text-text bg-background1'>
        <div className='relative z-10 h-10 bg-primary'>
          Hello
          <div className=''>
            <button onClick={changeTheme}>Switch Theme</button>
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
    </>
  )
}

export default App