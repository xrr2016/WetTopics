import { connect } from 'react-redux'
import { toggleTodo } from '../store/actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch(filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed)    
  }
}

const mapStateToProps = (state) => {
  return getVisibleTodos(state.todos, state.visibilityFilter)
}

const mapDispatchToProps = (dispatch) => {
  return {
    onToodClick: (id) => {
      dispatch(toggleTodo(id))
    } 
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)