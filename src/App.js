import React, {Component} from 'react'
import './App.css'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import 'normalize.css'
import './reset.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newTodo: '',
      todoList: [
      ],
    }
  }

  addTodo(e) {
    console.log('要添加代办了')
    this.state.todoList.push({
      id: idMaker(),
      title: e.target.value,
      status: null,
      deleted: false
    })
    this.setState({
      newTodo: '',
      todoList: this.state.todoList
    })

  }

  render() {

    let todos = this.state.todoList.map((item, index) => {
      return ( // 为什么这里要加个括号？这是动手题3 🐸
          <li key={index}>
            <TodoItem todo={item}/>
          </li>
      )
    })
    console.log(todos)

    return (
        <div className="App">
          <h1>我的待办</h1>
          <div className="inputWrapper">
            {/*注意 value= 后面不要加引号，加了你试下，会错*/}
            <TodoInput content={this.state.newTodo} onSubmit={this.addTodo.bind(this)}/>
          </div>
          <ol>
            {todos}
          </ol>
        </div>
    )
  }
}

export default App

let id = 0
function idMaker() {
  id += 1
  return id
}