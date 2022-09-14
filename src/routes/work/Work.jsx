import { motion } from 'framer-motion'
import Project from '../../components/project/Project'
import { PROJECTS } from '../../projects'
import './work.styles.scss'

 

const Work = () => {
  return (
     <>
       <motion.div 
     
     key={'projects'}
     className="pad-1"
     >
     <h1 className='text-sm pt-6 font-semibold border-b-2 border-lightGray'>Featured Projects</h1>
       <div className="projects ">
           {
            PROJECTS.map((projectData)=>{
             
              return <Project projectData={projectData} /> 

            })
           }
       </div>
     </motion.div>
     </>
  )
}

export default Work