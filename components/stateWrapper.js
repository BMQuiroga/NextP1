import { createContext, useState, useContext } from "react"

const AppContext = createContext({
    isOpen: true,
    items: [],
    openCart: () => {},
    addItemToCart: (item) => {},
    getNumberOfItems: () => {},
    closeCart: () => {},
    handleCart: () => {},

});

export default function StateWrapper({children}){
    const [isOpen, setIsOpen] = useState(false);
    const [items, setItems] = useState([]);

    function handleOpenCart(){
        setIsOpen(true);
    }

    function handleCloseCart(){
        setIsOpen(false);
    }

    function handleCart(){
        setIsOpen(!isOpen);
    }

    function handleAddItemToCart(item){
        const temp = [...items];
        const found = temp.find(prod => prod.id == item.id)
        if (found){
            found.qty++;
        }else{
            item.qty = 1;
            temp.push(item)
        }
        setItems([...temp])
    }

    function handleNumberOfItems(){
        const total = items.reduce((acc,item) => acc + item.qty, 0);
        return total
    }

    return (
        <AppContext.Provider
            value={{
                isOpen,
                items,
                openCart: handleOpenCart,
                closeCart: handleCloseCart,
                addItemToCart: handleAddItemToCart,
                getNumberOfItems: handleNumberOfItems,
                handleCart: handleCart,
          }}
        >
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext(){
    return useContext(AppContext);
}