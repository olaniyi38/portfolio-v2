import image2 from '../../assets/images/Image 2.png'
import image3 from '../../assets/images/Image 3.png'
import { classnames } from './collections.classnames'

const Collections = () => {
  return (
    <>
        <section className={classnames.section.self}>
            <div className={classnames.section.div.self}>
                <div className={classnames.section.div.div_1.self}>
                    <h1 className={classnames.section.div.div_1.h1}>Residential Furniture</h1>
                    <p className={classnames.section.div.div_1.p}>Browse Collection</p>
                </div>
                <div className={classnames.section.div.div_2}>
                <img src={image2} alt="" />
                </div>
            </div>
            <div className= {classnames.section.div.self}>
                <div className={classnames.section.div.div_1.self}>
                    <h1 className={classnames.section.div.div_1.h1}>Hospitality Furniture</h1>
                    <p className={classnames.section.div.div_1.p}>Browse Collection</p>
                </div>
               <div className={classnames.section.div.div_2}>
               <img src={image3} alt="" />
               </div>
            </div>

        </section>
    </>
  )
}

export default Collections