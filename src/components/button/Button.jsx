import { motion } from 'framer-motion'

const Button = ({children,...otherProps}) => {
  return (
    <>
    <motion.button whileTap={{scale:0.9}}
      className='button group'
      { ...otherProps }>
      <span className="group-hover:-translate-y-20 ">{children}</span>
      <span className="animated group-hover:top-0 ">{children}</span>

    </motion.button>
    </>
  )
}

export default Button