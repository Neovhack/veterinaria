import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from '../pages/Home'
import Products from '../pages/Products'
import NavBar from "../components/NavBar/NavBar"
import ProductsDetail from '../components/ItemlistContainer/ProductsDetail'
import CartContext from "../components/ItemlistContainer/CartContext"

export default function AppRouter() {
    return (
        //Rutas a las diferentes paginas
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Products" component={Products} />
                <Route path="/Products/ProductsDetail/:itemId" component={ProductsDetail} />
                <Route path="/Products/CartContext/:itemId" component={CartContext}/>
            </Switch>
        </Router>
    )
}
