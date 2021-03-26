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
                (<div key={`123${index}`}className="basket_item">
                    <img className="basket_item_img" src={cart.img} key={`12423${cart.img}23${index}`}
                    alt=""/> 
                    <p key={`124${cart.name}${cart.price}${index}`}className="basket_item_name">{cart.name}</p>
                    <h3 key={`1244${cart.name}${cart.price}455332${index}`}>{cart.size}, {cart.price}</h3>
                    <IconButton key={`4646${cart.name}${index}`} onClick={e => deleteItem(index)} color="primary" aria-label="delete" >
                        <DeleteIcon key={`fuck${index}`}/>
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
