import {createStore, combineReducers} from "redux";
import todo from "./modules/Todo"

const rootReducer = combineReducers({todo});

const store = createStore(rootReducer);

export default store;