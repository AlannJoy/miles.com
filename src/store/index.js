import { createStore, applyMiddleware, compose } from "redux";
import reducer from "../reducers";
import ReduxThunk from "redux-thunk";
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : x => x;
const enhancer = compose(applyMiddleware(ReduxThunk), devTools);
const store = createStore(reducer, enhancer);
export default store;

// Instead of just sending "normal" action objects to the store, we will now also send so-called "thunks".
// A thunk is nothing more than a function that looks like this:
//function someThunk(dispatch, getState) {
// does something}
