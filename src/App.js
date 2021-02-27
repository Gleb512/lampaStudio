import './App.css';
import store from "./redax/store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import Content from "./components/content";
import HeaderContainer from "./components/header/headerComponent";



function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <div className="App">
                    <HeaderContainer />
                    <div className="container">
                        <Content />
                    </div>
                </div>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
