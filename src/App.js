import React from "react";
import './App.css';
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";
import Profile from "./Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Massenges from "./Messanges/Massenges";
import Settings from "./Settings/Settings";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className={'App'}>
                <Header/>
                <NavBar state={props.state.navName}/>
                <div className={'Countent'}>
                    {/*<Profile state={props.state.posts}/>*/}
                    <Route path={'/profile'} render={ () => <Profile state={props.state.profilePosts} profileFunction={props.profileFunction} />}/>
                    <Route path={'/messages'} render={ () => <Massenges state={props.state.messages} messagesFunction={props.messagesFunction} />}/>
                    <Route path={'/settings'} render={ () => <Settings state={props.state.settings} functionSettings={props.functionSettings} />}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
