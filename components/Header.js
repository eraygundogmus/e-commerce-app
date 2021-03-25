import React from 'react'
import Navbar from "./Navbar"

function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <span>LOGO</span>
            </div>
            <Navbar />
        </div>
    )
}

export default Header
