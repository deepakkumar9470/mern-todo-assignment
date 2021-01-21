import React,{Component} from 'react'
import './Todo.css'
import {addTodo,getTodo,editTodo,deleteTodo} from '../actions/todoActions'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Modal from '../components/Modal'
class Todo extends Component {
   
    componentDidMount(){
        this.props.getTodo()
    }

 render() {
        const {todos} = this.props.todo
         // Add todo here
        const addHandler = (e)=>{
            e.preventDefault()
            const todo = prompt('Enter item', '')
            const newtodo = {
                name : todo
            }
            this.props.addTodo(newtodo)
          }

          // Delete all items of list here
          const deleteAllHandler = (e) =>{
                 
            }

           // Deleting specified todo here
          const deleteHandler = (id) =>{
            this.props.deleteTodo(id)
          }
          
          // Updating todo here
          const editHandler= (id) =>{
            const todo = prompt('Enter item', '')
            const newtodo = {
                ...this.state,name : todo
            }
              this.props.editTodo(id)
          }
        return (
            
         <div className="outer-div">
            <div className="button">
               <button className="btn btn-info" onClick={addHandler}>Add Item</button>
               <button className="btn btn-info" onClick={deleteAllHandler}>Delete All</button>
             </div>
            <div className="m-5 table-div">
            <table class="table table-striped">
             <thead>
                 <tr>
                     <th scope="col">Item name</th>
                     <th scope="col">Action</th>
                 </tr>
           </thead>
              <tbody>
                 {
                     todos.map((item) =>{
                         return (
                             <tr key={item._id}>
                               <td>{item.name}</td>
                               <td><button className="btn btn-danger" onClick={()=>editHandler(item._id)}>Edit</button></td>
                               <td><button className="btn btn-danger" onClick={()=>deleteHandler(item._id)}>Delete</button></td>
                             </tr>
                         )
                     })
                 }
              </tbody>

              </table>
         </div>    

            </div>
        )
    }
}


Todo.propTypes= {
    getTodos : PropTypes.func.isRequired,
    todo : PropTypes.object.isRequired,
}

const mapStateToProps = state =>({
    todo : state.todo
})
export default connect(mapStateToProps, {addTodo, deleteTodo, editTodo,getTodo})(Todo)
