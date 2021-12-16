import { createStore, combineReducers, applyMiddleware } from "redux";
import myReducer from "../Reducers/myReducer";
import secondReducer from "../Reducers/SecondReducer";
import logger from "redux-logger";

const combinedReducers = combineReducers({
  r1: myReducer,
  r2: secondReducer,
});

const myStore = createStore(combinedReducers, applyMiddleware(logger));

export default myStore;
