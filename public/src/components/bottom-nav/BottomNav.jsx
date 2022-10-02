import { ReactComponent as Logo } from "../../assets/svgs/Logo.svg"
import { classnames } from "./bottomNav.classnames"

const LINKS = [
    'home','about us', 'products', 'faqs', 'contact us' 
]

const BottomNav = () => {
  return (
    <>
        <nav className={classnames.nav.self}>
            <span>
                <Logo />
            </span>
            <ul className={classnames.nav.ul}>
                {
                LINKS.map((title)=>{
                return <li>{title}</li>
                })
                }
            </ul>
        </nav>
    </>
  )
}

export default BottomNav