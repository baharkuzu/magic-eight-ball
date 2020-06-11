import {appReducer} from "./reducer";
import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

const reducers = combineReducers({
    appReducer: appReducer
});

export const store = createStore(reducers, applyMiddleware(thunk));