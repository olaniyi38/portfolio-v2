import { ReactComponent as Logo } from '../../assets/svgs/Logo.svg'
import { ReactComponent as BasketSvg } from '../../assets/svgs/basket.svg'
import { ReactComponent as PersonSvg } from '../../assets/svgs/person.svg'
import { ReactComponent as SearchSvg } from '../../assets/svgs/search.svg'
import { ReactComponent as HamburgerSvg } from '../../assets/svgs/hamburger.svg'

import { classnames } from './navbar.classnames'
import { useState } from 'react'

const LINKS = [
    'home','about us', 'products', 'faqs', 'contact us' 
]

const Navbar = () => {
    const [ isMobileNavActive, toggleMobileNavActive ] = useState(false)
  return (
    <>
        <nav className={classnames.nav.self}>
            <span  >
                <Logo className={classnames.nav.span.svg} />
            </span>
            <ul className={classnames.nav.ul}>
                {
                LINKS.map((title)=>{
                return <li>{title}</li>
                })
                }
            </ul>
            <div className={classnames.nav.div}>
                <span>
                    <SearchSvg />
                </span>
                <span>
                    <BasketSvg />
                </span>
                <span>
                    <PersonSvg />
                </span>
            </div>
            <button className={classnames.nav.button.self} onClick={()=>toggleMobileNavActive(!isMobileNavActive)}>
                <HamburgerSvg className={classnames.nav.button.svg} />
            </button>
        </nav>
        {
            isMobileNavActive &&
            <nav className="mobile-nav lg:hidden absolute w-full py-8 bg-black text-white z-[100]">
              <ul className='flex items-center justify-between capitalize mx-auto text-sm sm:text-lg sm:w-[60%]'>
              {
                LINKS.map((title)=>{
                return <li>{title}</li>
                })
                }
              </ul>
        </nav>
        }
    </>
  )
}

export default Navbar