import React from 'react'
import dayjs from 'dayjs'
import ReactDOM from 'react-dom'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Provider } from 'react-redux'
import App from './App'
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './configureStore'
import rootSaga from './sagas/root'

dayjs.extend(relativeTime)

const store = configureStore()
store.runSaga(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
