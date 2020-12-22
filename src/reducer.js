import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import common from '@/reducers/common'

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    common
  })

export default createRootReducer
