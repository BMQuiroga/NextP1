import Layout from '../../components/layout'
import { getItems } from '../../services/itemService';
import Image from 'next/image';
import Product from '../../components/product';
import styleitems from '../../styles/product.module.css'


export default function Index({items}){
    return(
       <Layout>
            <h1>Store</h1>
            <div className={styleitems.items}>
                { items && items.map( item => (
                    <Product key={item.id} item={item} showAs='Def'/>

                ))}
            </div>
            

       </Layout>
    )
}

export async function getStaticProps(){
    const res = await getItems();
    return {
        props: {
            items: res,
        }
    }
}