import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from '../pages/Home'
import Products from '../pages/Products'
import NavBar from "../components/NavBar/NavBar"

export default function AppRouter() {
    return (
        <Router>
            <NavBar/>
            <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/Products" component={Products}/>
            <Route path="/Products/:itemId" component={Products}></Route>
            </Switch>
        </Router>
    )
}
