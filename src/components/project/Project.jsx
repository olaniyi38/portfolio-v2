import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

import Button from "../button/Button"


const Project = ({ title, githubLink = '', siteLink = '', techs }) => {

    const [ isActive, setIsActive ] = useState(false)

    const toggleActive = () => setIsActive(!isActive)

  return (
    <>
        <div onClick={ ()=> toggleActive() } className="project cursor-pointer">
            <div className="border-b-2 border-lightGray pt-5 lg:pt-10 pb-3 lg:pb-8 pr-4 relative">
                <h1 className="text-xl hover:text-darkGray sm:text-4xl xl:text-6xl font-bold uppercase">
                    { title }
                </h1>
                
                <AnimatePresence>
                   {
                    isActive &&
                    <motion.div layout key={title} initial={{opacity:0, }} animate={{opacity:1,}} exit={{opacity:0,}}
                        className="pt-4 lg:pt-6 flex flex-wrap justify-between items-center overflow-hidden">
                        <div className="text-center lg:pt-4 ">
                            <Button initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-20}}>
                                <a href={siteLink} target='blank' className="px-4 py-1 text-sm lg:text-lg">Live Site</a>
                            </Button>
                            <Button initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-20}}>
                                <a href={githubLink} target='blank' className="px-4 py-1 text-sm lg:text-lg">Github</a>
                            </Button>
                        </div>
                        <motion.div initial={{opacity:0}} animate={{opacity:1}}
                            className="lg:pt-4 lg:pr-8 mt-2 lg:mt-0  flex flex-wrap gap-2 lg:gap-4 text-xs md:text-md lg:text-lg capitalize">
                            {
                            techs.map((tech)=>{
                            return <span className="font-semibold">|{tech}|</span>
                            })
                            }
                        </motion.div>
                    </motion.div>
                   }
                </AnimatePresence>

             
            </div>
        </div>
    </>
  )
}

export default Project