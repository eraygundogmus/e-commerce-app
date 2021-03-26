import React, { useContext } from 'react'
import StorefrontIcon from '@material-ui/icons/Storefront';
import { myContext } from "./context"
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';



function Basket() {
    const basket = useContext(myContext).bask
    const setBasket = useContext(myContext).setBask


    const deleteItem = index => {
        const filter = basket.filter((item, itemIndex) => index !== itemIndex)
        return setBasket([...filter])
      };


    return (
        <div className="basket">
            <div className="basket_header">
                <div className="icon">
                    <StorefrontIcon className="icon" fontSize="large"/> 
                </div>
                    <h4>Shopping Cart</h4>
                {basket.length == 0 ? 
                <div><p> Your cart is empty</p> </div> : 
                basket.map((cart, index) => 
                (<div className="basket_item">
                    <img className="basket_item_img" src={cart.img}
                    alt=""/> 
                    <p className="basket_item_name">{cart.name}</p>
                    <h3>{cart.size}, {cart.price}</h3>
                    <IconButton  onClick={e => deleteItem(index)} color="primary" aria-label="delete" >
                        <DeleteIcon/>
                    </IconButton>
                </div>)
                )}
                 <div className="payment">
                     {basket.length > 0 ? 
                     (
                     <div>
                        <div className="payment_amount">Total amount: $
                        {basket.reduce((current,next) => {
                            let currentNum = parseInt(next.price.replace(/^\D+/g, ''), 10);
                            return current + currentNum
                        }, 0)}
                        </div>
                         <Button  variant="contained" color="primary">
                        Payment
                        </Button>
                     </div>
                     ) : (
                     <Button  variant="contained" disabled>
                     Payment
                     </Button>
                     )}

                </div>
            </div>
        </div>
    )
}

export default Basket
