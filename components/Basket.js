import React, { useContext } from 'react'
import StorefrontIcon from '@material-ui/icons/Storefront';
import { myContext } from "../pages/_app"


function Basket() {
    const basket = useContext(myContext)
/*     console.log(basket) */
    return (
        <div className="basket">
            <div className="basket_header">
                <div className="icon">
                    <StorefrontIcon className="icon" fontSize="large"/> 
                </div>
                    <h4>Your Cart</h4>
                {basket.length == 0 ? 
                <div><p> Your cart is empty</p> </div> : 
                basket.map((cart) => 
                (<div>
                    <p>{cart.name}</p>
{/*                     <img src={cart.img}
                    alt=""/> */}
                </div>)
                )}
            </div>
        </div>
    )
}

export default Basket
