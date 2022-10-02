import {Button,BUTTON_TYPES} from '../button/Button'
import image1 from '../../assets/images/Image1.png'
import {classnames} from './hero.classnames'


const Hero = () => {
  return (
    <>
      <section className={classnames.section.self}>
        <img style={{}} 
         className={classnames.section.img} 
        src={image1} alt="" />
        <h1 className={classnames.section.h1}>
          Modern Furniture For
          Modern Living Style
        </h1>
        <p className={classnames.section.p_1}>
          In unfeeling existence objection immediate repulsive
          on he in. Imprudence comparison uncommonly me
          he difficulty diminution resolution. Likewise proposal
          differed scarcely dwelling as on raillery.
        </p>
        <p className={classnames.section.p_2}>
          September few dependent extremity own continued
          and ten prevailed attending. Early to weeks we could.
          Do commanded an shameless we disposing do.
          Indulgence ten remarkably nor are impression out.
          Power is lived means oh every in we quiet.
        </p>
        <div className={classnames.section.div.self}>
          <button className={classnames.section.div.button_1}>
           Watch a video
          </button>
          <button className={classnames.section.div.button_2}>
            Request a quote
          </button>
        </div>
      </section>
    </>
  )
}

export default Hero