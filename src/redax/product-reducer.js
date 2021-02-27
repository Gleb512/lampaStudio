import {changeItemsQuantity, count} from "../utils/redux-helpers";

let ADDTOCART = 'ADDTOCART'
let QUANTITY = 'QUANTITY'
let NEWORDER = 'NEWORDER'

let initialState = {
    products: [
        {
            _id: "57e7c35d5b04a172f66f5e5a",
            name: "Товар номер 1",
            description: "Описание товара номер один. Несколько предложений о товаре номер 1",
            price: 991,
            picture: "http://placehold.it/150x150",
        },
        {
            _id: "57e7c35d3ed054bbdde87b66",
            name: "Товар номер 2",
            description: "Описание товара номер два. Несколько предложений о товаре номер 2",
            price: 2234,
            picture: "http://placehold.it/150x150"
        },
        {
            _id: "57e7c35da0c55508aec1deac",
            name: "Товар номер 3",
            description: "Описание товара номер три. Несколько предложений о товаре номер 3",
            price: 3834,
            picture: "http://placehold.it/150x150"
        },
        {
            _id: "57e7c35d402867568f81b68b",
            name: "Товар номер 4",
            description: "Описание товара номер четыре. Несколько предложений о товаре номер 4",
            price: 1419,
            picture: "http://placehold.it/150x150"
        },
        {
            _id: "57e7c35d6e3ef4516d1af117",
            name: "Товар номер 5",
            description: "Описание товара номер пять. Несколько предложений о товаре номер 5",
            price: 3951,
            picture: "http://placehold.it/150x150"
        }
    ],
    cart: {
        items: [],
        total: 0
    },
    orders: []
}


const productsReducer = (state = initialState , action) => {
    switch (action.type) {
        case ADDTOCART:
            return {
                ...state,
                cart: {
                    ...state.cart,
                    items: [...state.cart.items, action.product],
                    total: count([...state.cart.items, action.product])
                },
            };
        case QUANTITY:
            return {
                ...state,
                cart: {
                    ...state.cart,
                    items: changeItemsQuantity(state.cart.items, action.id, action.val),
                    total: count(state.cart.items)
                }
            }
        case NEWORDER:
            return {
                ...state,
                orders: [
                    ...state.orders,
                    {
                        _id: Date.now(),
                        name: action.values.name,
                        surname: action.values.surname,
                        address: action.values.address,
                        phone: action.values.phone,
                        products: state.cart.items,
                        total: state.cart.total
                    }
                ],
                cart: initialState.cart,
            }
        default:
            return state;
    }
}


export const addToCart = (product) => ({type: ADDTOCART, product})
export const changeQuantity = (id, val) => ({type: QUANTITY, id, val})
export const newOrder = (values) => ({type: NEWORDER, values})


export const addToCardThunk = (id, val) =>{
    return (dispatch) => {
        if(window.store.getState().products.cart.items.find(obj => obj._id === id) === undefined){
            const product = window.store.getState().products.products.find(obj => obj._id === id);
            dispatch(addToCart(product))
        }else {
            dispatch(changeQuantity(id, val))
        }
    }
}
export const addNewOrder = (values) => {
    return (dispatch) => {
        dispatch(newOrder(values))
    }

}

export default productsReducer;
