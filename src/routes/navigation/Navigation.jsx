import { AnimatePresence, motion } from 'framer-motion'
import { Outlet, useNavigate } from "react-router"
import { NavContainer } from './navigation.styles.jsx'
import { ReactComponent as HamburgerSvg  } from '../../assets/svgs/hamburger.svg'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import TransitionAnim from '../../components/transition-anim/TransitionAnim.jsx'

const LINKS = [
  'work',
  'contact',
  'about'
]

const mobileNavAnim = {
  hide:{
    opacity:'0%',
  
  },
  show:{
    opacity:'100%'
  }
}

const Navigation = () => {
  const navigate = useNavigate()
   const navigateTo = (url) => navigate(url) 
   const [isMobileActive, setIsMobileActive] = useState(false)

  return (
    <>
      <NavContainer className='py-4 px-6 lg:px-16 lg:py-8'>
        <motion.h1 whileHover={{scale:1.1}} whileTap={{scale:.9}} className="text-2xl cursor-pointer" onClick={()=> navigateTo('/') }>Sodiq</motion.h1>
        <ul className='hidden  sm:flex justify-between gap-8'>
             {
              LINKS.map((title)=>{ 
              return <NavLink className="hover:text-darkCyan text-lg capitalize" to={title}>{title}</NavLink> 
            })
             }
        </ul>
        <span className="mobile-nav-toggle sm:hidden">
            <HamburgerSvg  onClick={ ()=> setIsMobileActive(!isMobileActive) } className='w-8 h-8 cursor-pointer'/>
        </span>
      </NavContainer>
        
       <AnimatePresence>
        {
          isMobileActive &&
       <motion.div variants={mobileNavAnim} initial="hide" animate="show"
       exit="hide" transition={{staggerChildren:.3,delayChildren:.3}}
       className={`mobile-nav`}>
           {
           LINKS.map((title)=>{ 
             return <motion.span whileTap={{scale:.9}} variants={mobileNavAnim} 
             className="hover:text-darkCyan font-clamp-2 capitalize" 
               onClick={ () =>{ setIsMobileActive(false) 
                navigateTo(`/${title}`) 
              } }>{title}</motion.span> 
           })
         }
         
        </motion.div>}
       </AnimatePresence>

       <>
         <TransitionAnim />
         <Outlet />
       </>
 
      
    </>
  )
}

export default Navigation