import React from 'react' // 为什么要 import React
class Welcome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      test:1
    }

    console.log('初始化完毕了')

  }
  componentWillMount() {
    this.setState({
      date: new Date(), // 更新 date
      test: 'componentWillMount'
    })
    console.log('要进行载入了')
  }
  render() {
    console.log('嗯，这里是 render')
    return (
        <div>
          <h1>Hello, {this.props.name}</h1>
          <h2>{this.state.date.toString()}</h2>
          <p>{this.state.test}</p>
        </div>
    )
  }
  componentDidMount(){
    this.setState({
      date: new Date(), // 更新 date
      test: 'componentDidMount'
    })
    console.log('已经挂载到页面里了')
  }
  componentWillReceiveProps(){
    this.setState({
      date: new Date(), // 更新 date
      test: 'componentWillReceiveProps'
    })
  }

  componentWillUpdate(){
    // this.setState({
    //   date: new Date(), // 更新 date
    //   test: 'componentWillUpdate'
    // })
  }
  componentDidUpdate(){
    // this.setState({
    //   date: new Date(), // 更新 date
    //   test: 'componentDidUpdate'
    // })
  }
  componentWillUnmount(){
    console.log('要死了')
  }
}


//
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

export {Welcome}