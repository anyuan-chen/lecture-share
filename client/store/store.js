import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { authenticationReducer } from "../reducers/reducer";

const rootReducer = combineReducers({
  authStatus: authenticationReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
