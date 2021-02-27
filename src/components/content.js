import React from 'react'
import {Route, Switch} from "react-router-dom";
import ProductsContainer from "./pages/products/productsContainer";
import CartContainer from "./pages/cart/cartContainer";





let Content = () => {
    return (
        <div>
            <Switch>
                <Route path='/cart' render={() => <CartContainer />  } />
                <Route path='/' render={() => <ProductsContainer />  } />
            </Switch>
        </div>
    );
}

export default Content;