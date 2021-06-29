import React, { createContext, useContext, useState } from 'react'

const CartCreateContext = createContext();

export function UseCart() {
    return useContext(CartCreateContext);
}

export function CartContext({ children }) {
    const [cart, setCart] = useState([]);
    //agregar al carrito o agregar cantidad en caso de repetido
    function addToCart(obj) {

        const selectedProduct = {
            "id" : obj.id,
            "name" : obj.name,
            "price" : obj.price,
            "pictureURL" : obj.pictureURL,
            "quantity" : 1
        }
    
         let repetidos =  cart.find(element => element.id == obj.id);
         (typeof repetidos == "object") ? repetidos.quantity = repetidos.quantity + 1 : setCart([...cart, selectedProduct])
    }
    //Eliminar del carrito
    function removeItem (obj) {
       let index = cart.indexOf(cart.find(element => element.id == obj.id)) ;
       cart.splice(index, 1);
    }

    return (
        <CartCreateContext.Provider value={{ cart, addToCart, removeItem }}>
            {children}
        </CartCreateContext.Provider>
    )
}


export default CartContext




{/*


const { itemId } = useParams()
const datosItem = arrProducts.find(elemento => elemento.id == itemId)

const selectedProducts = {};
                 
function saveProduct(obj, quant) { 
        selectedProducts.item = obj;
        selectedProducts.quantity = quant;
    }

    //saveProduct(datosItem ,cantidad)
    // console.log(selectedProducts);
*/}