import style from '../styles/addtocart.module.css'
import { useAppContext } from './stateWrapper'
export default function AddToCart({item}){
    const cart = useAppContext();
    function handleClick(){
        cart.addItemToCart(item)
    }

    return(
        <button className={style.button} onClick={handleClick}>
            Add to cart
        </button>
    )
}