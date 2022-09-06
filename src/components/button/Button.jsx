import { motion } from 'framer-motion'

const Button = ({children,...otherProps}) => {
  return (
    <>
    <motion.button whileTap={{scale:0.9}}
      className='button group'
      { ...otherProps }>
      <span className="relative z-10">{children}</span>
      {/* <span className="animated group-hover:top-0 group-hover:opacity-100 z-10">{children}</span> */}

    </motion.button>
    </>
  )
}

export default Button