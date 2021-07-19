import {combineReducers, createStore} from "redux";
import profileReducer from "./reducers/profilePageReducer";
import messagesReducer from "./reducers/messagesReducer";
import settingsReducer from "./reducers/settingsReducer";

const reducers = combineReducers(
    {
        profilePage: profileReducer,
        messagesPage: messagesReducer,
        settingsPage: settingsReducer,
    }
)

let store = createStore(reducers);

export default store;