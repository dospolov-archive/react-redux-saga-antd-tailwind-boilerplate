import { createBrowserHistory } from 'history'
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'
import createRootReducer from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const history = createBrowserHistory()

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware()
  return {
    ...createStore(
      createRootReducer(history),
      composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
    ),
    runSaga: sagaMiddleware.run
  }
}
