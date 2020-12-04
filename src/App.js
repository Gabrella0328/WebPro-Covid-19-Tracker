import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import App from "./global/App.js";
import App from "./indonesia/App.js";
import App from "./provinsi/App.js";

const Home = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path = "/global">
                    <App />
                </Route>
                <Route path = "indonesia">
                    <App />
                </Route>
                <Route path = "provinsi">
                    <App />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Home;