import React from "react";
import './App.css';
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";
import Profile from "./Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Massenges from "./Messanges/Massenges";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className={'App'}>
                <Header/>
                <NavBar state={props.state.navName}/>
                <div className={'Countent'}>
                    {/*<Profile state={props.state.posts}/>*/}
                    <Route path={'/profile'} render={ () => <Profile state={props.state.posts}/>}/>
                    <Route path={'/messages'} render={ () => <Massenges />}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
