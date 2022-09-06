import { motion } from 'framer-motion'
import './home.styles.scss'


const Home = () => {
  return (
    <>
      <div className='p-8 pt-28 lg:pt-20 pr-0'>
        <div>
          <motion.p initial={{ opacity:0, x:-20 }} animate={{opacity:1, x:0}} className="mb-4 font-medium">
            Hey there! I'm...
          </motion.p>
          <motion.h1 className='text-4xl sm:text-6xl xl:text-8xl  font-black mb-4 max-w-[50rem] overflow-hidden'>
            <motion.p initial={{y:300}} transition={{delay:1,ease:'easeInOut',duration:.5}} animate={{y:0}}>
              Bamidele-Alao
            </motion.p>
            <motion.p initial={{y:300}} transition={{delay:1.5,ease:'easeInOut',duration:.5}} animate={{y:0}}>
              <p>Sodiq</p>
            </motion.p>

          </motion.h1>
          <motion.p className='sm:text-3xl lg:text-4xl overflow-hidden text-darkCyan'>
            <motion.p initial={{y:100}} transition={{delay:2,ease:'easeInOut',duration:.5}} animate={{y:0}}>
              I build things for the web.
            </motion.p>
          </motion.p>
        </div>
        <aside>
          <motion.p initial={{ opacity:0, y:20 }} animate={{opacity:1, y:0}}
            className='lg:text-xl max-w-[25rem] lg:max-w-[30rem] rounded-sm mt-16 lg:mt-4 md:ml-auto pr-4 md:px-4  text-lightGray'>
            I am a Frontend focused Web Engineer with a focus on developing clean, accessible and intuitive applications
            either for
            web or mobile, and I have an eye for design with a user-driven approach to development.
          </motion.p>
        </aside>

      </div>
    </>
  )
}

export default Home