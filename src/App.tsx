import React, {useState} from 'react';
import './App.css';
import {PATH, RoutesList} from "./RoutesList";
import {HashRouter, NavLink} from "react-router-dom";

function App() {

    return (
        <div className="App">
            <HashRouter>
                <div>
                    <NavLink to={PATH.counter1} className={({isActive})=> isActive ? 'linksActive' : 'links'}> First Counter </NavLink>
                    <NavLink to={PATH.counter2} className={({isActive})=> isActive ? 'linksActive' : 'links'}> Second Counter </NavLink>
                </div>
                <RoutesList/>
            </HashRouter>
        </div>
    );
}

export default App;
