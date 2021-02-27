import React from "react";
import CartItem from "./cartItem";
import List from '@material-ui/core/List';

import Divider from '@material-ui/core/Divider';




const Cart = (props) => {
    return (
        <List>
            {props.cart.items.map(i=><CartItem key={i._id} addToCardThunk={props.addToCardThunk} item={i} />)}
            <Divider variant="inset" component="li" />
        </List>
    )
}
export default Cart