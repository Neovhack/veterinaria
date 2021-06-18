import { div } from "prelude-ls";
import React, { useEffect, useState } from "react";
//Fetch para desafio
/*
function CardListPokemon() {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=2')
            .then((res) => res.json())
            .then((res) => {setData(res.results)})
            .catch((error) => console.log(error));
    }, [])
    return (
        <div>
            {
                data !== null ?
                    data.map((data, index) =>{ return <p key={index}>{data.name}</p>}) :
                    console.log("cargando")

            }
        </div>
    )
}


export default CardListPokemon;*/