import { createStore } from 'redux'
import todoApp from './reducer'
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilterd } from './actions'

let store = createStore(
  todoApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
) 
