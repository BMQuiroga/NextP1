import Link from "next/link"
import style from '../styles/Menu.module.css'

export default function Menu(){
    return(
        <nav className={style.Menu}>
            <div>
                <Link href='/'> <a className={style.link}> HOME </a></Link>
                <Link href='/store'> <a className={style.link}> STORE </a></Link>
                <Link href='/faq'> <a className={style.link}> FAQ </a></Link>
               
            </div>

            <div>
                <a href='#'> Carrito (0) </a>
            </div>
        </nav>
    )
}