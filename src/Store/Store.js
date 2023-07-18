import { legacy_createStore as createStore, applyMiddleware } from "redux"
import myReducer from "../Redux/Reducer/Reducer";
import reduxLogger from "redux-logger"
const myStore = createStore(myReducer, applyMiddleware(reduxLogger));

export default myStore;