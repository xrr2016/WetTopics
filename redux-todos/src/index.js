import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import todoApp from './redux/reducer'

const store = createStore(
  todoApp,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)