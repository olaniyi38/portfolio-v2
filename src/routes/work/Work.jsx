import { AnimatePresence,motion } from 'framer-motion'
import Project from '../../components/project/Project'
import { PROJECTS } from '../../projects'
import './work.styles.scss'

 

const Work = () => {
  return (
     <motion.div 
     initial={{ x:100, opacity:0 }}
     animate={{ x:0, opacity:1 }}
     key={'projects'}
     className="px-8 pt-4"
     >
     <h1 className=' pt-6 font-semibold border-b-2 border-[#f2f2f2]'>Featured Projects</h1>
       <div className="projects ">
           {
            PROJECTS.map((project)=>{
              const { title, githubLink, siteLink, techs } = project
              return <Project title={title} githubLink={githubLink} siteLink={siteLink} techs={techs} /> 

            })
           }
       </div>
     </motion.div>
  )
}

export default Work