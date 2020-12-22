import { createBrowserHistory } from 'history'
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'
import createRootReducer from '@/reducer'
// import { showError } from '@/sagas/apiUtils'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      features: {
        jump: false
      }
    })
  : compose

export const history = createBrowserHistory()

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware({
    // onError: e => console.info(JSON.stringify(e)) || showError(e)
  })
  return {
    ...createStore(
      createRootReducer(history),
      composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
    ),
    runSaga: sagaMiddleware.run
  }
}
