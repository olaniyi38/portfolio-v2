import { motion } from 'framer-motion'
import './home.styles.scss'


const Home = () => {
  return (
    <>
      <div className='home'>
        <div>
          <motion.p initial={{ opacity:0, x:-20 }} animate={{opacity:1, x:0}} className="mb-4 font-medium"> Hey there! I'm...</motion.p>
          <motion.h1 initial={{ opacity:0, x:-20 }} animate={{opacity:1, x:0}}className='text-8xl  font-black mb-4 max-w-[50rem]'>Bamidele-Alao Sodiq</motion.h1>
          <motion.p initial={{ opacity:0, y:-20 }} animate={{opacity:1, y:0}} className='text-4xl'>I build things for the web.</motion.p>
        </div>
        <aside>
          <motion.p initial={{ opacity:0, y:20 }} animate={{opacity:1, y:0}} className='text-xl max-w-[30rem] rounded-sm mt-4 ml-auto px-4  text-[#f2f2f2]'>
            I am a Frontend focused Web Engineer with a focus on developing clean, accessible and intuitive applications either for
            web or mobile, and I have an eye for design with a user-driven approach to development. 
          </motion.p>
        </aside>

      </div>
    </>
  )
}

export default Home