import React, { createContext } from 'react';
import CardList from "./CardList"
import dataProductos from "../../datosProductos.json"
export const dataContext = createContext();


function ItemListContainer() {
    //Promesa para traer datos de apis

   const data = dataProductos

    return (
        <>
            <div>
                <dataContext.Provider value={data}>
                 <CardList/>
                </dataContext.Provider>
            </div>
        </>
    )
}

export default ItemListContainer;