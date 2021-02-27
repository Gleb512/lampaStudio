import React from 'react';
import {connect} from "react-redux";
import Cart from "./cart";
import Checkout from "./cartCheckout";
import {addNewOrder, addToCardThunk, newOrder} from "../../../redax/product-reducer";


class CartAPI extends React.Component {
    constructor(props) {
        super(props);
    }
    submit = values => {
        this.props.addNewOrder(values)
    };

    render() {
        return (
            <div>
                <h1>Cart</h1>
                <div className='container cart-align'>
                    {this.props.cart.items.length > 0 ? <Cart addToCardThunk={this.props.addToCardThunk}
                                                              cart={this.props.cart} /> : <p>Your cart is empty</p>}
                    <Checkout onSubmit={this.submit} />
                </div>
                <h3>Total: {this.props.cart.total}</h3>
            </div>
        );
    }
}


let mapStateToProps = (state) =>{
    return{
        cart: state.products.cart,
    }
}

const CartContainer = connect(mapStateToProps, {addNewOrder, addToCardThunk})(CartAPI);
export default CartContainer;