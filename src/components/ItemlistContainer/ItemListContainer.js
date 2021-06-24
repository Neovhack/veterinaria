import React, { useEffect, useState, createContext } from 'react';
import CardList from "./CardList"
export const dataContext = createContext();


function ItemListContainer(prop) {
    //Array simulando datos json
    const productos = [{
        id: 1,
        name: "Pedigree Adult",
        price: 700,
        pictureURL: "https://www.mitiendademascotas.com/web/elbolson/wp-content/uploads/sites/13/2017/10/Pedigree-carne-pc.jpg"
    }]
    //Promesa para traer datos de apis
    const [data, setData] = useState(null);
    useEffect(() => {
        function getItems() {
            let promise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    const error = false;
                    if (!error) {
                        resolve(productos)
                    } else {
                        reject(error)
                    }
                }, 2000)
            })
            promise.then((resultado) => { setData(resultado) })
        }
        getItems();
    }, [])


    return (
        <>
            <div>
                <h4 className="textCenter"> {prop.saludo} </h4>
                <dataContext.Provider value={data}>
                 <CardList/>
                </dataContext.Provider>
            </div>
        </>
    )
}

export default ItemListContainer;