import { motion } from 'framer-motion'
import { Outlet, useNavigate } from "react-router"
import { NavContainer } from './navigation.styles.jsx'
import { ReactComponent as HamburgerSvg  } from '../../assets/svgs/hamburger.svg'
import { useState } from 'react'

const LINKS = [
  'work',
  'contact',
  'about'
]


const Navigation = () => {
  const navigate = useNavigate()
   const navigateTo = (url) => navigate(url) 
   const [isMobileActive, setIsMobileActive] = useState(false)

  return (
    <>
      <NavContainer className='py-4 px-6 lg:px-16 lg:py-8'>
        <motion.h1 whileHover={{scale:1.1}} whileTap={{scale:.9}} className="text-2xl cursor-pointer" onClick={()=> navigateTo('/') }>Sodiq</motion.h1>
        <ul className='hidden  lg:flex justify-between gap-8'>
             {
              LINKS.map((title)=>{ 
              return <motion.li whileTap={{scale:.9}} className="hover:text-darkCyan text-lg capitalize" onClick={ ()=> navigateTo(`/${title}`) }>{title}</motion.li> 
            })
             }
        </ul>
        <span className="mobile-nav-toggle lg:hidden">
            <HamburgerSvg  onClick={ ()=> setIsMobileActive(!isMobileActive) } className='w-8 h-8 cursor-pointer'/>
        </span>
      </NavContainer>
        
        {/* <div className={`mobile-nav  ${isMobileActive && 'active'}`}>
           <ul className='overflow-hidden'>
           {
           LINKS.map((title)=>{ 
             return <motion.li whileTap={{scale:.9}} 
             className="hover:text-darkCyan text-lg capitalize" 
               onClick={ () =>{ setIsMobileActive(false) 
                navigateTo(`/${title}`) 
              } }>{title}</motion.li> 
           })
         }
         </ul>
        </div> */}

      <Outlet />
    </>
  )
}

export default Navigation