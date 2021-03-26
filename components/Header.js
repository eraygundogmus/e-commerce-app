import React from 'react'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Link from 'next/link'


function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <Link href="/"><span>
                    <ShoppingBasketIcon fontSize="large"/></span>
                </Link>
            </div>

        </div>
    )
}

export default Header
