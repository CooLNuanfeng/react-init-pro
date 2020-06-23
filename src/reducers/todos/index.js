import {
  ALL_TODOS,
  UPDATE_TODO,
  DELETE_TODO,
  ADD_TODO
} from '../../actions/todos';

const initState = {
  todos: []
}

export default (state = initState, action) => {
  switch (action.type) {
      case ADD_TODO:
          return {
              ...state,
              todos: [action.todo, ...state.todos]
          }
      case UPDATE_TODO: 
          return {
              ...state,
              todos: state.todos.map(todo => {
                  if(todo.id === action.id){
                      todo.completed = !todo.completed
                  }
                  return todo
              })
          }
      case DELETE_TODO: {
          return {
              ...state,
              todos: state.todos.filter(todo => todo.id !== action.id)
          }
      }
      case ALL_TODOS:
          return {
              ...state,
              todos: [...action.todos]
          }
      default:
          return state
  }
}