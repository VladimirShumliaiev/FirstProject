import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import MessangesContainer from "./components/Messanges/MessangesContainer";



const App = () => {
    return (
        <BrowserRouter>
            <div className={'App'}>
                <Header/>
                <NavBar/>
                <div className={'Countent'}>
                    <Route path={'/profile'} render={ () => <Profile />}/>
                    <Route path={'/messages'} render={ () => <MessangesContainer/>}/>
                    {/*<Route path={'/settings'} render={ () => <Settings/>}/>*/}
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
