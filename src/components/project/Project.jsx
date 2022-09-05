import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

import Button from "../button/Button"


const Project = ({ title, githubLink = '', siteLink = '', techs }) => {

    const [ isActive, setIsActive ] = useState(false)

    const toggleActive = () => setIsActive(!isActive)

  return (
    <>
        <div onClick={ ()=> toggleActive() } className="project">
            <div className="border-b-2 border-[#f2f2f2] py-10 pb-8 px-4 relative">
                <h1 className="text-6xl tracking-tight font-bold uppercase">
                    { title }
                </h1>
                
                <AnimatePresence>
                   {
                    isActive &&
                    <motion.div layout key={title} initial={{opacity:0, }} animate={{opacity:1,}} exit={{opacity:0,}}
                    className="pt-6 flex justify-between overflow-hidden">
                       <div className=" pt-4">
                           <Button initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-20}}>
                               <a href={siteLink} target='blank' className="px-4 py-1">Live Site</a>
                           </Button>
                           <Button initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-20}}>
                               <a href={githubLink} target='blank' className="px-4 py-1">Github</a>
                           </Button>
                       </div>
                       <motion.div initial={{opacity:0}} animate={{opacity:1}} className="pt-4 pr-8 flex gap-4 capitalize">
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