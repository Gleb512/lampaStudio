import {applyMiddleware, combineReducers, createStore} from "redux"
import thunkMiddleware from "redux-thunk";
import productsReducer from "./product-reducer";
import {reducer as formReducer} from 'redux-form';



let reducerPack = combineReducers({
    products: productsReducer,
    form: formReducer
})


const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        } else {
            return JSON.parse(serializedState);
        }
    } catch (err) {
        return undefined;
    }
}

let store = createStore(
    reducerPack,
    loadState(),
    applyMiddleware(thunkMiddleware),
);

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (err) {
    }
};


store.subscribe(() => {
    const state = store.getState();
    saveState(state);
})


window.store = store;

export default store;