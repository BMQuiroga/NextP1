import Link from "next/link"
import Image from "next/image"
import style from '../styles/product.module.css'
import { convertToPath } from "../lib/utils"


export default function Product({item, showAs}){
    if(showAs == 'Page'){
        return (
            <div className={style.page}> 
                <div className={style.image}>
                    <Image src={item.image} 
                        alt={item.description} 
                        width={700} 
                        height={700}
                    />
                </div>

                <div className={style.info}>
                    <div>
                        <h2>
                            {item.title}
                        </h2>
                    </div>

                    <div className={style.price}>
                        ${item.price}
                    </div>

                    <div>
                        {item.description}
                    </div>

                    <div>
                        <button>Add to cart</button>
                    </div>
                </div>
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
                <Link href={`/store/${convertToPath(item.title)}`}>
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