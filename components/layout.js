import Head from "next/head"
import style from '../styles/Layout.module.css'
import Menu from './menu.js'

export default function Layout({children, title}){
    return(
        <div>
            <Head>
                <title>Git Merch {title ? `| ${title}` : ''}</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Menu />

            <div className={style.container}>
                {children}
            </div>
            


        </div>
    )
}