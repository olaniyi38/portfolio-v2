import {motion} from 'framer-motion'

const TransitionAnim = () => {

  return (
    <>
       <motion.div exit={{height:'100vh'}} className='absolute z-[100] inset-0 w-full bg-black origin-bottom '
       transition={{duration:1}}
       initial={{height:'100vh'}} animate={{height:'0vh'}}>

       </motion.div>
    </>
  )
}

export default TransitionAnim