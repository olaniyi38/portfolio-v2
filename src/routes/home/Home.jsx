import { motion } from 'framer-motion'
import Button from '../../components/button/Button'
import './home.styles.scss'


const Home = () => {
  return (
    <>
      <motion.div className='pad-15  sm:mt-0 overflow-hidden'>
        <div>
          <motion.p initial={{ opacity:0, }} animate={{opacity:1,}}  transition={{delay:1,ease:'easeInOut',duration:.5}} className="mb-4 font-medium">
            Hey there! I'm...
          </motion.p>
          <motion.h1 className='font-clamp-1 font-black mb-4 max-w-[50rem] overflow-hidden'>
            <motion.p initial={{y:300}} transition={{delay:1.2,ease:'easeInOut',duration:.5}} animate={{y:0}}>
              Bamidele-Alao
            </motion.p>
            <motion.p initial={{y:300}} transition={{delay:1.5,ease:'easeInOut',duration:.5}} animate={{y:0}}>
              <p>Sodiq</p>
            </motion.p>

          </motion.h1>
          <motion.p className='font-clamp-2 overflow-hidden text-darkCyan'>
            <motion.p initial={{y:100}} transition={{delay:2,ease:'easeInOut',duration:.5}} animate={{y:0}}>
              I build things for the web.
            </motion.p>
          </motion.p>
        </div>
        <aside className='py-4'>
          <motion.p initial={{ opacity:0, y:20 }} animate={{opacity:1, y:0}} transition={{delay:2, ease:'easeInOut', duration:.5}}
            className='font-clamp-3 max-w-[25rem] lg:max-w-[30rem] mt-10 lg:mt-0 lg:mb-0 mb-4 lg:ml-auto pr-4 text-lightGray'>
            I am a Frontend focused Web Engineer with a focus on developing clean, accessible and intuitive applications
            either for
            web or mobile, and I have an eye for design with a user-driven approach to development.
          </motion.p>
            <Button>
              <a className='py-1 px-2 font-clamp-3' target={'blank'}
               href='https://docs.google.com/document/d/16ONcnKWDAZjavxJ63X4iHNRygNpniZDSTJqLZEhngDI/edit?usp=drivesdk'>My Resume</a>
            </Button>
        </aside>

      </motion.div>
    </>
  )
}

export default Home