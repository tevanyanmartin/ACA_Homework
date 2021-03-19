import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/reducer'
import App from './App'
import { CookiesProvider } from 'react-cookie';

const rootElement = document.getElementById('root')
ReactDOM.render(
  <CookiesProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </CookiesProvider>,
  rootElement
)