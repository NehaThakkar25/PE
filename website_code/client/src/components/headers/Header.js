import React, { useContext, useState } from 'react'
import { GlobalState } from '../../GlobalState'
import FullLogo from './icon/full_logo.png'
import Menu from './icon/menu.svg'
import Close from './icon/close.svg'
import Favorites from './icon/favorites.svg'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Header() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin
    const [cart] = state.userAPI.cart
    const [menu, setMenu] = useState(false)

    const logoutUser = async () => {
        await axios.get('/user/logout')

        localStorage.removeItem('firstLogin')

        window.location.href = "/";
    }

    const adminRouter = () => {
        return (
            <>
                <li><Link to="/create_product">Create Product</Link></li>
                <li><Link to="/category">Categories</Link></li>
            </>
        )
    }

    const loggedRouter = () => {
        return (
            <>
                <li><Link to="/" onClick={logoutUser}>Logout</Link></li>
            </>
        )
    }


    const styleMenu = {
        left: menu ? 0 : "-100%"
    }

    return (
        <header>
            <div className="menu" onClick={() => setMenu(!menu)}>
                <img src={Menu} alt="" width="30" />
            </div>

            <div className="logo">
                <h1>
                    <Link classname="nav-link" to="/">{isAdmin ? 'Admin' : <img src={FullLogo} alt="Logo" width="150px" />}</Link>
                </h1>
            </div>

            <ul style={styleMenu}>
                <li onClick={() => setMenu(!menu)}>
                    <i width="30" className="menu fa fa-close" />
                </li><br />
                <li><Link classname="nav-link" to="/">Home</Link></li>
                <li><Link classname="nav-link" to="/aboutus">About Us</Link></li>
                <li><Link classname="nav-link" to="/contactus">Contact US</Link></li>
                <li><Link classname="nav-link" to="/shop">{isAdmin ? 'Products' : 'Our Products'}</Link></li>

                {isAdmin && adminRouter()}

                {
                    isLogged ? loggedRouter() : <li><Link classname="nav-link" to="/login">Login / Register</Link></li>
                }

            </ul>

            {
                isAdmin ? ''
                    : <div className="favorite-icon">
                        <span>{cart.length}</span>
                        <Link to="/cart">
                            <img src={Favorites} alt="" />
                        </Link>
                    </div>
            }

        </header>
    )
}

export default Header