import image from '../../assets/images/Product Image 03.png'
import BottomNav from '../bottom-nav/BottomNav'
import { classnames } from './footer.classnames'

const Footer = () => {
  return (
    <>
        <footer className={classnames.footer.self}>
            <span className={classnames.footer.span}>Mistrium interior</span>
            <h1 className={classnames.footer.h1}>
                Signup to receive updates
                about new products
            </h1>
            <div className={classnames.footer.div.self}>
                <input placeholder='lorem ipsum,,,' className={classnames.footer.div.input} type="text"  />
                <button className={classnames.footer.div.button}>Get Started</button>
            </div>
            <img className={classnames.footer.img} 
            src={image} alt="" />
            <BottomNav />
        </footer>
    </>
  )
}

export default Footer