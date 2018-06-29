import createSagaMiddleware from "redux-saga"
import createLogger from "redux-logger"
import { createStore, applyMiddleware, compose } from "redux"
import rootReducer from "./reducers"
import sagas from "./sagas"

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware, createLogger({
    level: "info",
    collapsed: true,
  })]
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const enhancer = applyMiddleware(...middlewares)
const composeEnhancers = reduxDevTools || compose
const initialState = {}

const store = createStore(rootReducer, {}, composeEnhancers(enhancer))
sagaMiddleware.run(sagas)

export default store