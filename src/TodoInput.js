import React, {Component} from 'react'

export default class TodoInput extends Component {
  render() {
    return <input type="text" defaultValue={this.props.content}
    onKeyPress={this.submit.bind(this)} onChange={this.changeTitle.bind(this)}/>
  }
  submit(e) {
    if(e.key === 'Enter'){
      console.log('按回车了')
      this.props.onSubmit(e)
    }
  }

  changeTitle(e) {
    this.props.onChange(e)
  }
}