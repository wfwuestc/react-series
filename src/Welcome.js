import React from 'react' // 为什么要 import React
class Welcome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      count:1
    }


    setInterval(() => { // 搜索「JS 箭头函数 MDN」
      this.setState({
        date: new Date(), // 更新 date
      })
    },1000)


  }
  componentWillMount() {
    this.setState({count: this.state.count + 1});
    this.setState({count: this.state.count + 1});
    this.setState({count: this.state.count + 1});
    console.log('要进行载入了')
  }
  componentDidMount() {
    console.log('载入完毕了')
  }
  componentWillUpdate() {
    console.log('要更新了')
  }
  componentDidUpdate() {
    console.log('更新完毕了')
  }
  render() {
    console.log('嗯，这里是 render')
    return (
        <div>

          <h1>Hello, {this.props.name}</h1>
          <h1>Hello, {this.state.count}</h1>
          <h2>{this.state.date.toString()}</h2>
        </div>
    )
  }
}


//
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

export {Welcome}