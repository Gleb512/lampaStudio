import React from 'react';
import {connect} from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import {NavLink} from "react-router-dom";


class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <div className='items'>
                        <NavLink to={'/products'}>Products</NavLink>
                        <NavLink to={'/cart'}>Cart</NavLink>
                    </div>

                    <Typography variant="h6">
                        CART: {this.props.cartTotal > 0 && this.props.cartTotal}
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
}


let mapStateToProps = (state) =>{
    return{
        cartTotal: state.products.cart.total,
    }
}
const HeaderContainer = connect(mapStateToProps, {})(Header);
export default HeaderContainer;