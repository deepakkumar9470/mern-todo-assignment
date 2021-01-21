import {GET_TODO,ADD_TODO,DELETE_TODO,UPDATE_TODO,TODO_LOADING} from '../actions/types'


const initialstate = {
    todos : [],
    loading : false
}

  function reducer (state = initialstate, action){
    switch (action.type) {
        case GET_TODO:
            return {
                ...state, 
                todos : action.payload,
                loading : false
            }
        case DELETE_TODO:
            return {
                ...state, 
                todos : state.todos.filter(todo => todo._id !== action.payload),
            }
        case ADD_TODO:
            return {
                    ...state,
                    todos : [action.payload, ...state.todos]
                }
        case UPDATE_TODO:
            return {
                    ...state,
                    todos : [action.payload, ...state.todos]
                }
        case UPDATE_TODO:
                    
             return {...state, 
                      todos:action.payload.todo._id, 
                      todos :action.payload.todo.todo
                    }

        case TODO_LOADING:
                return {
                        ...state, 
                        loading :true
                    }
        default:
            return state
    }
}
export default reducer