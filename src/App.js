import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import MessangesContainer from "./components/Messanges/MessangesContainer";
import SettingsContainer from "./components/Settings/SettingsContainer";
import MusicContainer from "./components/Music/MusicContainer";




const App = () => {
    return (
        <BrowserRouter>
            <div className={'App'}>
                <Header/>
                <NavBar/>
                <div className={'Countent'}>
                    <Route path={'/profile'} render={ () => <Profile />}/>
                    <Route path={'/messages'} render={ () => <MessangesContainer/>}/>
                    <Route path={'/music'} render={() => <MusicContainer/>}/>
                    <Route path={'/settings'} render={ () => <SettingsContainer/>}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
