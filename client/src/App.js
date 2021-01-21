import React, { Component } from 'react'
import './App.css';
import Todo from './components/Todo'
import store from './store'
import {Provider} from 'react-redux'
 class App extends Component {
  render() {
    return (
       <Provider store ={store}>
        <h2>MERN TODO App </h2>
           <Todo/>
        </Provider>
    );
  }
}
export default App;