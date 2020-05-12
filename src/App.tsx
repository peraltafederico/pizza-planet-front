import React, { FC } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { OrderPage } from './containers/OrderPage'
import { theme } from './theme'
import GlobalStyles from './globalStyles'

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path="/order">
            <OrderPage />
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
    </ThemeProvider>
  )
}

export default App
