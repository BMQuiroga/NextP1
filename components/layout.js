import Head from "next/head"
import style from '../styles/Layout.module.css'
import Menu from './menu.js'
import ShoppingCart from './shoppingcart'

export default function Layout({children, title}){
    return(
        <>
        <Head>
            <title>Git Merch {title ? `| ${title}` : ''}</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link /*rel="icon" href="/favicon.ico"*/ rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/cosmo/bootstrap.min.css" integrity="sha384-5QFXyVb+lrCzdN228VS3HmzpiE7ZVwLQtkt+0d9W43LQMzz4HBnnqvVxKg6O+04d" crossorigin="anonymous"/>
        </Head>

        <div>
            
            <Menu />

            <div className={style.container}>
                {children}
            </div>
            <ShoppingCart>
                
            </ShoppingCart>


        </div>
        </>
    )
}