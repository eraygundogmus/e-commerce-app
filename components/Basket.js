import React from 'react'
import StorefrontIcon from '@material-ui/icons/Storefront';

function Basket() {
    return (
        <div className="basket">
            <div className="basket_header">
                <div className="icon">
                    <StorefrontIcon className="icon" fontSize="large"/> 
                </div>
                    <h4>Your Cart</h4>
                <div className="product-box">
                    <p>Lorem ipsum dolor sit amet
                    </p>
                    <img
                    src="https://images.asos-media.com/products/asos-design-bomber-jacket-with-ma1-pocket-in-pink/22717157-1-pink?$XL$"
                    alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Basket
