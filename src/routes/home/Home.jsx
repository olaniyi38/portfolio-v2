import { motion } from 'framer-motion'
import './home.styles.scss'


const Home = () => {
  return (
    <>
      <motion.div className='pad-15 overflow-hidden'>
        <div>
          <motion.p initial={{ opacity:0, x:-20 }} animate={{opacity:1, x:0}} className="mb-4 font-medium">
            Hey there! I'm...
          </motion.p>
          <motion.h1 className='font-clamp-1 font-black mb-4 max-w-[50rem] overflow-hidden'>
            <motion.p initial={{y:300}} transition={{delay:1,ease:'easeInOut',duration:.5}} animate={{y:0}}>
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
        <aside>
          <motion.p initial={{ opacity:0, y:20 }} animate={{opacity:1, y:0}}
            className='font-clamp-3 max-w-[25rem] lg:max-w-[30rem] rounded-sm mt-16 lg:mt-4 md:ml-auto pr-4 md:px-4  text-lightGray'>
            I am a Frontend focused Web Engineer with a focus on developing clean, accessible and intuitive applications
            either for
            web or mobile, and I have an eye for design with a user-driven approach to development.
          </motion.p>
        </aside>

      </motion.div>
    </>
  )
}

export default Home