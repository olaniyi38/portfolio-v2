import ProductCard from '../product-card/ProductCard'
import { ReactComponent as ArrowSvg} from '../../assets/svgs/Arrow.svg'

import './products.css'
import { classnames } from './products.classnames'

const Products = () => {
  return (
    <>
        <section>
            <header className={classnames.section.header.self}>
                <h1 className={classnames.section.header.h1}>PRODUCTS</h1>
                <div className={classnames.section.header.div}>
                    <span>Best Selling</span>
                    <span>Most Popular</span>
                </div>
                <span className={classnames.section.header.span}>
                    <span>See All</span>
                    <ArrowSvg />
                </span>
            </header>
            <div className={classnames.section.div_1}>
                <span>All</span>
                <span>Bed</span>
                <span>Sofa</span>
                <span>Chair</span>
                <span>Light</span>
            </div>

            <div className={classnames.section.div_2}>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />

            </div>
        </section>
    </>
  )
}

export default Products