import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

import Button from "../button/Button"


const Project = ({projectData}) => {
    const { title, githubLink, siteLink, techs, description } = projectData

    const [ isActive, setIsActive ] = useState(false)

    const toggleActive = () => setIsActive(!isActive)

  return (
    <>
        <div onClick={ ()=> toggleActive() } className="project cursor-pointer relative ">
        <span className='absolute left-0 top-2  capitalize'>{description}</span>
            <div className="border-b-2 border-lightGray pad-2 relative">
                    <motion.div
                        className="pt-2 lg:pt-6 flex justify-between  items-center overflow-hidden">
                        <h1 className="font-clamp-1 hover:text-darkGray font-bold uppercase">
                            { title }
                        </h1>

                        <div className="flex hidden absolute bottom-0 right-0">
                            <Button style={{marginRight:'.5rem'}} initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-20}}>
                                <a href={siteLink} target='blank' className="px-4 py-1 ">Live </a>
                            </Button>
                            <Button initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-20}}>
                                <a href={githubLink} target='blank' className="px-4 py-1 ">Github</a>
                            </Button>
                        </div>
                    </motion.div>
                     <motion.div 
                            className="font-clamp-3 pt-4 lg:pt-8 lg:pr-8 mt-2 lg:mt-0  flex flex-wrap gap-2 lg:gap-4 text-xs md:text-md  capitalize">
                            {
                            techs.map((tech)=>{
                            return <span className="font-medium">{tech}</span>
                            })
                            }
                        </motion.div>
                  
             

             
            </div>
        </div>
    </>
  )
}

export default Project