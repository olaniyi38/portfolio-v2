import { ReactComponent as Logo1 } from '../../assets/svgs/logo-0.svg'
import { ReactComponent as Logo2 } from '../../assets/svgs/logo-1.svg'
import { ReactComponent as Logo3 } from '../../assets/svgs/logo-2.svg'
import { ReactComponent as Logo4 } from '../../assets/svgs/logo-3.svg'
import { ReactComponent as Logo5 } from '../../assets/svgs/logo-4.svg'
import { ReactComponent as Logo6 } from '../../assets/svgs/logo-5.svg'
import { classnames } from './brands.classnames'



const Brands = () => {
  return (
    <>
        <section className={classnames.section.self}>
            <h1 className={classnames.section.h1}>SOME OF OUR TRUSTED CLIENTS</h1>
            <div className={classnames.section.div}>
                <Logo1 />
                <Logo2 />
                <Logo3 />
                <Logo4 />
                <Logo5 />
                <Logo6 />
            </div>
        </section>
    </>
  )
}

export default Brands