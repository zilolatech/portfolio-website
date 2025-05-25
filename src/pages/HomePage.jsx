import React, { useEffect, useRef, useState } from 'react'
import SkillsAndProjects from '../components/SkillsAndProjects'
import { Link } from 'react-router-dom'

const HomePage = ({isDarkMode, setIsDarkMode}) => {
  // const [isDarkMode, setIsDarkMode] = useState(false)
  const [opacity, setOpacity] = useState(1)
  const [backgroundPosition, setBackgroundPosition] = useState('-50px')
  const scrollLocked = useRef(false)
  const scrollLimit = 820

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // useEffect(() => {
  //   const selecredTheme = localStorage.getItem('theme')
  //   const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  //   const initialTheme = selecredTheme ? selecredTheme == 'dark' : systemDark

  //   setIsDarkMode(initialTheme)
  //   document.documentElement.className = initialTheme ? 'dark' : 'light'
  // }, [])

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

          <div>
            <button className='inline-block md:hidden px-4 py-2' onClick={() => setIsMenuOpen(!isMenuOpen)}><img src={isMenuOpen ? "/icons/cancel.svg" : "/icons/menu.svg"} width="24px"/></button>
          </div>

          <div className='hidden md:inline-block float-right mt-2'>
            <Link to='/projects'><div className='inline px-3'>Projects</div></Link>
            <div className='inline px-3 py-1 bg-accent text-slate-200 rounded-2xl'>
              <button className='text-sm' onClick={changeTheme}>Switch Theme</button>
            </div>
          </div>
        </div>

        <div className={`${isMenuOpen ? '' : 'hidden'} bg-${!isDarkMode ? 'neutral-200' : 'background2'}`}>
            <ul className='md:hidden'>
              <li className='p-2'>
                <Link to='/projects'><div className='inline px-3'>Projects</div></Link>
              </li>
              <li className='p-2'>
                <div className='inline px-3 py-1 bg-accent text-slate-200 rounded-2xl'>
                  <button className='text-sm' onClick={changeTheme}>Switch Theme</button>
                </div>
              </li>
            </ul>
          </div>

        <div className={`md:inline hidden absolute left-bg z-0 -rotate-45 ${!isDarkMode ? 'bg-background2' : 'md:hidden'}`}></div>
        <div className={`md:inline hidden absolute right-bg z-0 rotate-45 ${!isDarkMode ? 'bg-background2' : 'md:hidden'}`}></div>
        <div className='md:absolute z-10 md:flex md:ml-64 md:mt-32 mx-10 h-96'>
          <div>
            <div className='md:text-7xl text-6xl mt-16 md:mt-0 ml-16 md:ml-0'>Zilola</div>
            <div className='md:w-96 mt-7 text-lg'>React.js Developer with strong foundation in JavaScript, HTML, CSS, and modern web development frameworks, as well as experienced in building responsive and user-friendly applictions.</div>
          </div>
          <div className='md:h-[94%] md:w-72 bg-primary md:ml-32 mt-12 md:mt-9 p-6'>
            <div className='text-3xl md:mt-3'>Contacts</div>
            <div className='mt-3'>
              <div className='my-1'>zilolatech@gmail.com</div>
              <div className='my-1'>linkedin.com/in/zilolatech/</div>
              <div className='my-1'>github.com/zilolatech</div>
            </div>
            <div className='mt-8 md:mt-[52%] py-3 bg-accent rounded-2xl'>
              <p className='text-slate-200 text-center'>Download Resume</p>
            </div>
          </div>
        </div>
        <div className='md:fixed z-10 inset-x-0 mt-60 md:bottom-3 arrow-animation' style={{transition: 'opacity 0.3s ease', opacity: opacity, pointerEvents: opacity === 0 ? 'none' : 'auto'}}>
          <p className='text-center'><a href='#skillsAndProjects'>Skills and Projects</a></p>
          <img src={`/icons/${!isDarkMode ? 'down-arrow.svg' : 'down-arrow2.svg'}`} className='h-10 m-auto'></img>
        </div>
      </div>
      <SkillsAndProjects isDarkMode={isDarkMode} backgroundPosition={backgroundPosition} />
    </>
  )
}

export default HomePage