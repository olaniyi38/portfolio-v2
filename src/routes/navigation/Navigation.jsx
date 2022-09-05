import { motion } from 'framer-motion'
import { Outlet, useNavigate } from "react-router"
import { NavContainer } from './navigation.styles.jsx'

const LINKS = [
  'work',
  'contact',
  'about'
]


const Navigation = () => {

  const navigate = useNavigate()
   const navigateTo = (url) => navigate(url) 

  return (
    <>
      <NavContainer>
        <motion.h1 whileHover={{scale:1.1}} whileTap={{scale:.9}} className="title cursor-pointer" onClick={()=> navigateTo('/') }>Sodiq</motion.h1>
        <ul>
             {
              LINKS.map((title)=>{ 
              return <motion.li whileTap={{scale:.9}} className="hover:text-[#f2f2f2] capitalize" onClick={ ()=> navigateTo(`/${title}`) }>{title}</motion.li> 
            })
             }
        </ul>
      </NavContainer>

      <Outlet />
    </>
  )
}

export default Navigation