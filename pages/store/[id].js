import Product from "../../components/product";
import Layout from "../../components/layout";
import { getItemData, getPathsFromIds } from "../../lib/utils";


export default function ProductPage({productInfo}){
    return(
        <Layout>
            <Product
                item = {productInfo}
                showAs='Page'
            
            
            />
        </Layout>
    )
}

export async function getStaticPaths(){
    const paths = await getPathsFromIds();

    return {
        paths: paths,
        fallback: false,/*manda a la 404 si la pag no existe*/
    };
}

export async function getStaticProps({params}){
    const id = params.id;
    const product = await getItemData(id);

    return {
        props: {
            productInfo: product,
        }
    }
}