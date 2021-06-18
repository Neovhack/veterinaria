import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from '../pages/Home'
import Products from '../pages/Products'
import NavBar from "../components/NavBar/NavBar"
import ProductsDetail from '../pages/ProductsDetail'

export default function AppRouter() {
    return (
        //Rutas a las diferentes paginas
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Products" component={Products} />
                <Route path="/Products/ProductsDetail/:itemId" component={ProductsDetail} />
            </Switch>
        </Router>
    )
}
