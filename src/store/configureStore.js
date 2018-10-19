import {createStore, applyMiddleware, compose} from 'redux'
import reducers from '../reducers'
import {createLogger} from 'redux-logger'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middleware = [createLogger({collapsed: true})]

const store = createStore(reducers, composeEnhancers(
    applyMiddleware(...middleware)
))

export default store