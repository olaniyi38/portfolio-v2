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
       <div className="projects grid lg:grid-cols-2 gap-8 lg:gap-y-16 gap-y-8 py-8">
           {
            PROJECTS.map((projectData,index)=>{
             
              return <Project key={index} projectData={projectData} /> 

            })
           }
       </div>
     </motion.div>
     </>
  )
}

export default Work