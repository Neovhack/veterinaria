
import React, { createContext } from 'react';
import CardList from "./CardList"
import { UseData } from "../../Provider/DataContext"
export const dataContext = createContext();


function ItemListContainer() {
    //Promesa para traer datos de apis
    const { data } = UseData();

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