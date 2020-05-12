import React, { FC } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

const App: FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/order">
          <div>order</div>
        </Route>
        <Route path="/confirm">
          <div>confirm</div>
        </Route>
        <Route path="/cart">
          <div>cart</div>
        </Route>
        <Redirect from="*" to="/order" />
      </Switch>
    </Router>
  )
}

export default App
