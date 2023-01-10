import Link from "next/link"
import style from '../styles/Menu.module.css'
import { useAppContext } from "./stateWrapper"

export default function Menu(){
    const cart = useAppContext();
    function handleOpenCart(){
        cart.handleCart();
    }
    return(
        <nav className={style.Menu}>
            <div>
                <Link href='/' className={style.link}> HOME </Link>
                <Link href='/store' className={style.link}> STORE </Link>
                <Link href='/faq' className={style.link}> FAQ </Link>
               
            </div>

            <div>
                <a href='#' className={style.link} onClick={handleOpenCart}> Carrito ({cart.getNumberOfItems()}) </a>
            </div>
        </nav>
    )
}