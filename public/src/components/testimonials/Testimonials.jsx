import image from '../../assets/images/Mask Group.png'
import {classnames} from './testimonials.classnames'

const Testimonials = () => {
  return (
    <>
        <section className={classnames.section.self}>
            <div className={classnames.section.div_1}>
                <img src={image} alt="" />
            </div>
            <div className={classnames.section.div_2.self}>
                <h1 className={classnames.section.div_2.h1}>
                    Let’s see what our
                    customer’s say
                </h1>
                <p className={classnames.section.div_2.p}>
                    Dwelling and speedily ignorant any steepest.
                    Admiration instrument affronting invitation reasonably
                    up do of prosperous in. Shy saw declared age debating
                    ecstatic man. Call in so want pure rank am dear were.
                    Remarkably to continuing in surrounded diminution on
                </p>
            </div>
        </section>
    </>
  )
}

export default Testimonials