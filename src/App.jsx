import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button } from 'antd'

import './App.css'

const App = ({ loading }) => {
  return (
    <>
      <Switch>
        <Route path="/">
          <h1 className="text-red-500">Hi there</h1>
          {!loading && <Button>Btn</Button>}
        </Route>
      </Switch>
    </>
  )
}

export default connect(state => ({
  loading: state.common.loading
}))(App)
