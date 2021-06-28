import React, {useContext} from 'react'
import dataProductos from "../../datosProductos.json"
import { useParams } from "react-router-dom"



 function CartContext() {
    const arrProducts = dataProductos;

   
  

    const { itemId } = useParams()
    const datosItem = arrProducts.find(elemento => elemento.id == itemId)

    const selectedProducts = {};
                     
   

    function saveProduct(obj, quant) { 
        selectedProducts.item = obj;
        selectedProducts.quantity = quant;
     }

     //saveProduct(datosItem ,cantidad)
       // console.log(selectedProducts);


    return (
        <div>
            
        </div>
    )
}

export default CartContext








//