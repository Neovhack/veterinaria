import React from 'react'
import {Button} from "react-bootstrap"


function Home() {
    let counter = 0;

    function handleClickSuma () { 
        counter = counter + 1
     }
     function handleClickResta () { 
         if ( counter > 0) {
            counter = counter - 1
         }  
     }

    return (
        //Home
        <div>
            <h4>Bienvenido!</h4>
            <p><Button onClick={handleClickSuma} variant="light"> + </Button> {counter}   <Button onClick={handleClickResta} variant="light"> - </Button></p>
        </div>
    )
}

export default Home
