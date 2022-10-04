import { AnimatePresence, motion } from 'framer-motion'
import { ReactComponent as LinkSvg } from '../../assets/svgs/external-link.svg'
import { ReactComponent as GithubSvg } from '../../assets/svgs/github.svg'
import { useState } from 'react'

import Button from "../button/Button"





const Project = ({projectData}) => {
    const { title, githubLink, siteLink, techs, description,imgUrl} = projectData

    const [ isActive, setIsActive ] = useState(false)
    

    const toggleActive = () => setIsActive(!isActive)

  return (
    <>
        <div onClick={ ()=> toggleActive() } className={`project group ${ isActive && 'active' } cursor-pointer relative `}>
        {/* <span className='absolute left-0 top-2  capitalize'>{description}</span>
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
                  
             

             
            </div> */}
          
            <div className='relative  overflow-hidden'>
                <motion.img initial={{scale:.8}} animate={{scale:1}} transition={{delay:.8}} src={imgUrl} alt="" />
                <motion.div
                    className='grid place-items-center text-center bg-black bg-opacity-80 text-xl p-4 transition-all duration-75 absolute inset-0 group-hover:opacity-100 opacity-0 h-full w-full'>
                    <div>
                        <motion.div
                            className="font-clamp-3 mt-4 flex flex-wrap justify-center gap-2 lg:gap-4 text-xs md:text-md  capitalize">
                            {
                            techs.map((tech)=>{
                            return <span className="font-medium text-white">|{tech}|</span>
                            })
                            }
                        </motion.div>
                    </div>
                </motion.div>
                <motion.div animate={{scaleX:0}} transition={{delay:.8,duration:1,ease:[0.83, 0, 0.17, 1]}}
                    className='absolute origin-left z-[10] bg-black inset-0 w-full h-full'></motion.div>
            </div>
            <div className='mt-2 flex justify-between items-center'>
                <div>
                    <p className='uppercase font-clamp-3'>{title}</p>
                    <p className='text-sm'>{description}</p>
                </div>
                <div className='flex gap-x-8'>
                  <a href={siteLink} target={'blank'}>  <LinkSvg className='w-6 h-6 sm:w-8 sm:h-8 stroke-white hover:stroke-darkCyan' /> </a>
                   <a href={githubLink} target={'blank'}> <GithubSvg className='w-6 h-6 sm:w-8 sm:h-8 fill-white hover:fill-darkCyan'  /> </a>
                </div>
            </div>
            </div>
    </>
  )
}

export default Project