import {combineReducers, createStore} from "redux";
import profileReducer from "./reducers/profilePageReducer";
import messagesReducer from "./reducers/messagesReducer";
import settingsReducer from "./reducers/settingsReducer";
import musicReducer from "./reducers/musicPageReducer";

const reducers = combineReducers(
    {
        profilePage: profileReducer,
        messagesPage: messagesReducer,
        settingsPage: settingsReducer,
        musicPage: musicReducer,
    }
)

let store = createStore(reducers);

export default store;