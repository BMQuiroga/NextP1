import { useAppContext } from "./stateWrapper"
import Product from "./product"
import style from '../styles/shoppingcart.module.css'

export default function ShoppingCart(){

    function getTotal(){
        return cart.items.reduce((acc,item) => acc + item.qty * item.price, 0);
    }

    const cart = useAppContext();
    return(
        <div className={style.shoppingCart} style={{display: cart.isOpen ? 'block' : 'none'}}>

            {cart.items.length == 0 ? (<div className={style.empty}>Cart is empty</div>) : (
            <>
                <h3>Your Items:</h3>
                    <div>
                        {cart.items.map(item => <Product key={item.id} item={item} showAs='ListItem' qty={item.qty}/>)}
                    </div>
                    <div className={style.total}>
                        <h3 >Total: ${getTotal()}</h3>
                    </div>
            </>
            )}
        </div>
    )
}