import React, {useContext} from 'react'
import {Switch, Route} from 'react-router-dom'
import IndexPage from './indexpage/IndexPage'
import Shop from './products/Products'
import Products from './products/Products'
import DetailProduct from './detailProduct/DetailProduct'
import AboutUs from './aboutus/AboutUs'
import ContactUs from './contactus/ContactUs'
import Login from './auth/Login'
import Register from './auth/Register'
import Cart from './cart/Cart'
import NotFound from './utils/not_found/NotFound'
import Categories from './categories/Categories'
import CreateProduct from './createProduct/CreateProduct'

import {GlobalState} from '../../GlobalState'


function Pages() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin


    return (
        <Switch>
            <Route path="/" exact component={IndexPage} />
            <Route path="/shop" exact component={Shop} />
            <Route path="/products" exact component={Products} />
            <Route path="/detail/:id" exact component={DetailProduct} />

            <Route path="/aboutus" exact component={AboutUs} />
            <Route path="/contactus" exact component={ContactUs} />

            <Route path="/login" exact component={isLogged ? NotFound : Login} />
            <Route path="/register" exact component={isLogged ? NotFound : Register} />

            <Route path="/category" exact component={isAdmin ? Categories : NotFound} />
            <Route path="/create_product" exact component={isAdmin ? CreateProduct : NotFound} />
            <Route path="/edit_product/:id" exact component={isAdmin ? CreateProduct : NotFound} />

            <Route path="/cart" exact component={Cart} />


            <Route path="*" exact component={NotFound} />
        </Switch>
    )
}

export default Pages
