import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import configureStore from "./store/createStore";
import React from 'react';
import { Provider } from 'react-redux'

const store = configureStore();

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Header />
                <body>
                    <Main />
                </body>
            </div>
        </Provider>
    );
}

export default App;
