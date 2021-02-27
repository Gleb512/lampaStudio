import React from 'react';
import {connect} from "react-redux";
import Product from "./product";
import {addToCardThunk} from "../../../redax/product-reducer";

class Products extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    Products List
                </h1>
                <div className="tree-columns">
                    {
                        this.props.products.map(p=><Product addToCardThunk={this.props.addToCardThunk}
                                                            key={p._id} product={p} />)
                    }
                </div>

            </div>
        );
    }
}


let mapStateToProps = (state) =>{
    return{
        products: state.products.products,
    }
}
const ProductsContainer = connect(mapStateToProps, {addToCardThunk})(Products);
export default ProductsContainer;