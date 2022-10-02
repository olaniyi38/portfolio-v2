import product1 from '../../assets/images/Product Image 01.jpg'
import { ReactComponent as BasketSvg } from '../../assets/svgs/basket.svg'
import { classnames } from './productCard.classnames'

const ProductCard = () => {
  return (
    <>
      <div className={classnames.div.self}>
        <div className={classnames.div.div_1.self}>
          <button className={classnames.div.div_1.button}>
            <span>Add to cart</span>
            <BasketSvg />
          </button>
        </div>
        <div>
          <h1 className={classnames.div.div_2.h1}>Ramen stool</h1>
          <div className={classnames.div.div_2.div.self}>
            <span>$65.00</span>
            <span className={classnames.div.div_2.div.span_2}>$95.00</span>
          </div>
        </div>
        <div className={classnames.div.div_3.self}>
        <img className={classnames.div.div_3.img} src={product1} alt="" />
        </div>
      </div>
    </>
  )
}

export default ProductCard