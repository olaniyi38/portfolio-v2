import {motion} from 'framer-motion'

const getPositions = (e) =>{
    const x = e.clientX
    const y = e.clientY
    

    setTimeout(()=>{
        const elem = document.querySelector('.cursor') 
        elem.style.top = y + 'px'
        elem.style.left = x + 'px'
    },0)
}

document.addEventListener('mousemove',getPositions)


const CustomCursor = () => {
  
  return (
    <>
       <motion.div className='cursor w-4 h-4 z-[1000] rounded-full bg-white absolute'>

       </motion.div>
    </>
  )
}

export default CustomCursor