import React, { FC } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { OrderPage } from './containers/OrderPage'
import { theme } from './theme'
import GlobalStyles from './globalStyles'
import { ConfirmPage } from './containers/ConfirmPage'
import { ShopCartPage } from './containers/ShopChartPage'

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
            <ConfirmPage />
          </Route>
          <Route path="/shop-cart">
            <ShopCartPage />
          </Route>
          <Redirect from="*" to="/order" />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
