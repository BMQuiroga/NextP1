import Link from "next/link"
import style from '../styles/Menu.module.css'

export default function Menu(){
    return(
        <nav className={style.Menu}>
            <div>
                <Link href='/' className={style.link}> HOME </Link>
                <Link href='/store' className={style.link}> STORE </Link>
                <Link href='/faq' className={style.link}> FAQ </Link>
               
            </div>

            <div>
                <a href='#'> Carrito (0) </a>
            </div>
        </nav>
    )
}