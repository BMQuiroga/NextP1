import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from '../components/layout'
import { getLatestItems } from '../services/itemService'
import stylep from '../styles/product.module.css'
import Product from '../components/product'

const inter = Inter({ subsets: ['latin'] })

export default function Home({items}) {
  return (
    <Layout title='Estas en Home'>
      <div className={styles.banner}>
        
      </div>

      <h3>Latest Products:</h3>
      <div className={stylep.items}>
        {items &&
          items.map((item) => (
            <Product key={item.id} item={item} showAs='item' />
          ))}
      </div>
    </Layout>
  )
}

export async function getStaticProps(){
  const res = await getLatestItems();
  return {
    props: {
      items: res
    }
  }
}