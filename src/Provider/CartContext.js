import React, { createContext, useContext, useState } from 'react'

const CartCreateContext = createContext();

export function UseCart() {
    return useContext(CartCreateContext);
}

export function CartContext({ children }) {
    const [cart, setCart] = useState([]);
    //agregar al carrito o agregar cantidad en caso de repetido
    function addToCart(obj,cantidad) {

        const selectedProduct = {
            "id" : obj.id,
            "name" : obj.name,
            "price" : obj.price,
            "pictureURL" : obj.pictureURL,
            "quantity" : cantidad
        }
    
         let repetidos =  cart.find(element => element.id == obj.id);
         (typeof repetidos == "object") ? repetidos.quantity = repetidos.quantity + cantidad : setCart([...cart, selectedProduct])
    }
    //Eliminar del carrito
    function removeItem (obj) {
        let removeItem = cart.filter(function (objeto){
            return objeto.id !== obj.id
        })
        setCart(removeItem);
    }

    function getTotal() {
        var total = 0;
        cart.forEach(element => {
           total= total + element.price * element.quantity
        });
        return total
    }

    return (
        <CartCreateContext.Provider value={{ cart,setCart, addToCart, removeItem, getTotal }}>
            {children}
        </CartCreateContext.Provider>
    )
}


export default CartContext

