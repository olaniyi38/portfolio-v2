import {motion} from 'framer-motion'

const TransitionAnim = () => {

  return (
    <>
       <motion.div exit={{height:'100vh'}} className='absolute z-[1000] inset-0 w-full bg-black origin-bottom '
       transition={{duration:1,ease:[0.83, 0, 0.17, 1]}}
       initial={{height:'100vh'}} animate={{height:'0vh'}}>

       </motion.div>
    </>
  )
}

export default TransitionAnim

