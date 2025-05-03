import React, { useEffect, useRef, useState } from 'react'
import SkillsAndProjects from './components/SkillsAndProjects'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [opacity, setOpacity] = useState(1)
  const [backgroundPosition, setBackgroundPosition] = useState('-50px')
  const scrollLocked = useRef(false)
  const scrollLimit = 820

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

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop
      if (scrollLocked.current && scrollY > scrollLimit) {
        window.scrollTo(0, scrollLimit)
        return
      }
      const newOpacity = Math.max(0, 1 - scrollY/200)
      setOpacity(newOpacity)
      const scrollProgress = Math.min(1, scrollY/800)
      const newBackgroundPosition = `${-50 - (scrollProgress*150)}px`
      setBackgroundPosition(newBackgroundPosition)

      if (scrollY >= scrollLimit && !scrollLocked.current) {
        scrollLocked.current = true
      } else if (scrollY < scrollLimit && scrollLocked.current) {
        scrollLocked.current = false
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div className='h-screen text-text bg-background1 relative z-20'>
        <div className={`relative z-10 h-10 bg-${!isDarkMode ? 'primary' : 'background2'}`}>
          <div className='inline-block float-right mt-2'>
            <div className='inline px-3'>Projects</div>
            <div className='inline px-3 py-1 bg-accent text-slate-200 rounded-2xl'>
              <button className='text-sm' onClick={changeTheme}>Switch Theme</button>
            </div>
          </div>
        </div>
        <div className={`absolute left-bg z-0 -rotate-45 ${!isDarkMode ? 'bg-background2' : 'hidden'}`}></div>
        <div className={`absolute right-bg z-0 rotate-45 ${!isDarkMode ? 'bg-background2' : 'hidden'}`}></div>
        <div className='absolute z-10 flex ml-64 mt-32 h-96'>
          <div>
            <div className='text-7xl'>Zilola</div>
            <div className='w-96 mt-7 text-lg'>React.js Developer with strong foundation in JavaScript, HTML, CSS, and modern web development frameworks, as well as experienced in building responsive and user-friendly applictions.</div>
          </div>
          <div className='h-[94%] w-72 bg-primary ml-32 mt-9 p-6'>
            <div className='text-3xl mt-3'>Contacts</div>
            <div className='mt-3'>
              <div className='my-1'>zilolatech@gmail.com</div>
              <div className='my-1'>linkedin.com/in/zilolatech/</div>
              <div className='my-1'>github.com/zilolatech</div>
            </div>
            <div className='mt-[52%] py-3 bg-accent rounded-2xl'>
              <p className='text-slate-200 text-center'>Download Resume</p>
            </div>
          </div>
        </div>
        <div className='fixed z-10 inset-x-0 bottom-3' style={{transition: 'opacity 0.3s ease', opacity: opacity, pointerEvents: opacity === 0 ? 'none' : 'auto'}}>
          <p className='text-center'>Skills and Projects</p>
          <img src={`/icons/${!isDarkMode ? 'down-arrow.svg' : 'down-arrow2.svg'}`} className='h-10 m-auto'></img>
        </div>
      </div>
      <SkillsAndProjects isDarkMode={isDarkMode} backgroundPosition={backgroundPosition} />
    </>
  )
}

export default App