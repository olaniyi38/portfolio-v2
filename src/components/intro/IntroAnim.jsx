import gsap from 'gsap'
import { useEffect } from 'react'
import './intro.css'
import {motion} from 'framer-motion'

const IntroAnim = () => {

    useEffect(()=>{
    //   const tl = gsap.timeline()
    //   tl.to('.bg-black',{
    //     delay:1,
    //     duration:1,
    //     yPercent:-100
    //   }).to('.bg-white',{
    //     duration:1,
    //     yPercent:-100
    //   },'-=.7')
    },[])

  return (
    <div>
       <motion.div initial={{opacity:1,}} animate={{opacity:0}}
       transition={{duration:1}} 
        className='bg-black' >

       </motion.div>
       <motion.div initial={{opacity:1,}} animate={{opacity:0}}
       transition={{duration:1,delay:1}}       
       className='bg-white' >

       </motion.div>
    </div>
  )
}

export default IntroAnim