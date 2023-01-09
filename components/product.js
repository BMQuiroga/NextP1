import Link from "next/link"
import Image from "next/image"
import style from '../styles/product.module.css'


export default function Product({item, showAs}){
    if(showAs == 'Page'){
        return (
            <div>
                <Image
                    src = {item.image}
                    height={500}
                    width={500}
                    alt={item.title}
                />
                <a className={style.hola}>BUENAS {item.description} </a>
            </div>
            )

    }
    if(showAs == 'ListItem'){
        return (
            <div>Carrito</div>
        )
    }
    
    return(
        <div className={style.item}>
            <div>
                <Link href={`/store/${item.id}`}>
                        <Image src={item.image} 
                        alt={item.description} 
                        width={300} 
                        height={300}
                        />
                </Link>



            </div>

            <div>
                <h3>
                    <Link href={`/store/url-a-mi-comp`}>
                            {item.title}
                    </Link>
                </h3>
            </div>


            <div>
                ${item.price}
            </div>

            <div>
                <button>Add to cart</button>
            </div>

        </div>
    )
}