import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import NotesReducer from "../reducers/NotesReducer";
import CallbackMiddleware from "./CallbackMiddleware";

const reducer = combineReducers({nr: NotesReducer});

export default createStore(reducer, composeWithDevTools(applyMiddleware(CallbackMiddleware, thunk)));