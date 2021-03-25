import React from 'react'
import Navbar from "./Navbar"
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <span>
                    <ShoppingBasketIcon fontSize="large"/></span>
            </div>
            <Navbar />
        </div>
    )
}

export default Header
