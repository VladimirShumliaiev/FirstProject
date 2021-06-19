import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from "./Redux/state";
import {functionSettings,profileFunction,messagesFunction,changeMessage} from "./Redux/state";


export let rerenderIndex = () => {
    ReactDOM.render(
        <App state={state}
             functionSettings={functionSettings}
             profileFunction={profileFunction}
             changeMessage={changeMessage}
             messagesFunction={messagesFunction}/>,
        document.getElementById('root')
    );
}

rerenderIndex(state);

