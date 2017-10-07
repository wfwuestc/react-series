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

  changeTitle(e) {
    this.setState({
      newTodo: e.target.value,
      todoList: this.state.todoList
    })
  }

  toggle(e, todo) {
    todo.status = todo.status === 'completed' ? '' : 'completed'
    this.setState(this.state)
  }
  delete(e, todo) {
    todo.delete = true
    this.setState(this.state)
  }

  render() {

    let todos = this.state.todoList.map((item, index) => {
      return ( // 为什么这里要加个括号？这是动手题3 🐸
          <li key={index}>
            <TodoItem todo={item} onToggle={this.toggle.bind(this)}
              onDelete={this.delete.bind(this)}/>
          </li>
      )
    })
    return (
        <div className="App">
          <h1>我的待办</h1>
          <div className="inputWrapper">
            {/*注意 value= 后面不要加引号，加了你试下，会错*/}
            <TodoInput content={this.state.newTodo}
                       onSubmit={this.addTodo.bind(this)}
                       onChange={this.changeTitle.bind(this)}/>
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