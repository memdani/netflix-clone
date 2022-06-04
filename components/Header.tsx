import { MenuIcon } from '@heroicons/react/outline'
import { SearchIcon,BellIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth'

function Header () {

  const {logout} = useAuth()

    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
        }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
        window.removeEventListener('scroll', handleScroll)
    }
    }, [])

    const [isClicked, setIsClicked] = useState(true);

    useEffect(() => {
      const tog = () => {
        if (isClicked === false){
          setIsClicked(true)
        } else {
          setIsClicked(false)
        }
      }
      // window.addEventListener('click', tog)
      document?.getElementById("hamburger")?.addEventListener('click', tog)
    
    }, )

    
    
    

    
  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
        <div className="flex items-center space-x-2 md:space-x-10">
            <img src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain" />
          
          <ul className="hidden space-x-4 md:flex">
            <li className="headerLink">Home</li>
            <li className="headerLink">TV Shows</li>
            <li className="headerLink">Movies</li>
            <li className="headerLink">New & Popular</li>
            <li className="headerLink">My List</li>
          </ul>
          
        </div>

        <div className='absolute top-5 left-40 cursor-pointer md:hidden  '>
          <MenuIcon className= 'w-7 h-7 button' id='hamburger'/>
          <div className={`${isClicked && 'hidden'} rounded-[20px] overflow-hidden` } id='menu'>
          <ul className="space-y-2 backdrop-blur-lg px-5 py-8">
            <li className="headerLink">Home</li>
            <li className="headerLink">TV Shows</li>
            <li className="headerLink">Movies</li>
            <li className="headerLink">New & Popular</li>
            <li className="headerLink">My List</li>
          </ul>
          </div>
          
        </div>

        <div className='flex items-center space-x-4 text-sm font-light'>
        <SearchIcon className="hidden h-6 v-6 sm:inline "/>
        <p className='hidden lg:inline'>Kids</p>
        <BellIcon className="h-6 v-6"/>
        {/* <Link href='/account'> */}
        <img
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
            onClick={logout}
          />
        {/* </Link> */}
        </div>
    </header>
  )
}

export default Header

