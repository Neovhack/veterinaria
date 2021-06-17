import React, { useEffect, useState } from 'react';
import CardList from "./CardList"

function ItemListContainer(prop) {
    const productos = [{
        id: 1,
        name: "Pedigree Adult",
        price: 700,
        pictureURL: "data:image/jpeg;base64,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"
    }, {
        id: 2,
        name: "Dog Chow Adult",
        price: 800,
        pictureURL: "https://ardiaprod.vteximg.com.br/arquivos/ids/184630-500-500/Alimento-para-Perros-Dog-Chow-MedianosGrandes-3-Kg-_1.jpg?v=637427547244730000"
    }, {
        id: 3,
        name: "Royal Canin Indoor",
        price: 1200,
        pictureURL: "https://puppis.vteximg.com.br/arquivos/ids/172576-600-600/156182-1.jpg?v=637350102395730000"
    }]
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
            <CardList data= {data}/>   
                          
        </div>
        </>
    )
}

export default ItemListContainer;