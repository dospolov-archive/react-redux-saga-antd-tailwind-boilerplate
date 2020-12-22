import produce from 'immer'

const defaultState = {
  appName: 'react-redux-saga-antd-tailwind-boilerplate',
  loading: false
}

const common = produce((draft, action) => {
  switch (action.type) {
    case 'store/loading/toggle': {
      draft.loading = action.loading
      break
    }
  }
}, defaultState)

export default common
