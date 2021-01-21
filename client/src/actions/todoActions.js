import {GET_TODO,ADD_TODO,DELETE_TODO,UPDATE_TODO,TODO_LOADING} from './types'
import axios from 'axios';



export const setLoading = () =>{
    return {
        type : TODO_LOADING
    }
}

export const getTodo = ()  => dispatch =>{
    dispatch(setLoading)
    axios.get('/todo')
    .then(res=>
        dispatch({
            type : GET_TODO,
            payload : res.data
        }))
}


export const deleteTodo = (id) => dispatch =>{
    dispatch(setLoading)
    axios.delete(`/todo/${id}`)
    .then(res=>
        dispatch({
            type : DELETE_TODO,
            payload : id
        }))
}
export const addTodo = (tododata) => dispatch =>{
    dispatch(setLoading)
    axios.post('/todo', tododata)
    .then(res=>
        dispatch({
            type : ADD_TODO,
            payload : res.data
        }))
}
export const editTodo =(id) => dispatch =>{
    dispatch(setLoading)
    axios.patch(`/todo/${id}`)
    .then(res=>
        dispatch({
            type : UPDATE_TODO,
            payload : id
        }))
}