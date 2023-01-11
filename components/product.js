import Link from "next/link"
import Image from "next/image"
import style from '../styles/product.module.css'
import { convertToPath } from "../lib/utils"
import AddToCart from './addtocart'
import { useAppContext } from './stateWrapper'


export default function Product({item, showAs, qty}){

    const cart = useAppContext();
    function handleClick(){
        cart.removeItemFromCart(item);
    }

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
                        <AddToCart item = {item}></AddToCart>
                    </div>
                </div>
            </div>
            )

    }
    if(showAs == 'ListItem'){
        return (
            <div className={style.list}>
                <div>
                    <Image src={item.image} 
                        alt={item.description} 
                        width={200} 
                        height={200}
                    />
                </div>
                <div>
                    <div className={style.bigdiv}>
                        <div className={style.title}>{item.title}</div>
                        <div /*className={style.button}*/><button className={style.button} onClick={handleClick}>X</button></div>
                        
                        
                    </div>
                    
                    <div>${item.price} each</div>
                    {qty==0 ? '' :  <div>{qty} units</div>}
                    {qty==0 ? '' :  <div>Subtotal: ${qty * item.price}</div>}
                   
                    
                </div>




            </div>
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
                <AddToCart item = {item}></AddToCart>
            </div>

        </div>
    )
}