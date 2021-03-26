import React from 'react'
import StorefrontIcon from '@material-ui/icons/Storefront';
import { Card } from '@material-ui/core';

function Basket(props) {
    return (
        <div className="basket">
            <div className="basket_header">
                <div className="icon">
                    <StorefrontIcon className="icon" fontSize="large"/> 
                </div>
                    <h4>Your Cart</h4>
                {props.basket.length == 0 ? 
                <div><p> Your cart is empty</p> </div> : 
                props.basket.map((cart) => 
                (<div>
                    <p>{cart.name}</p>
                    <img src={cart.img}
                    alt=""/>
                </div>)
                )}
            </div>
        </div>
    )
}

export default Basket
