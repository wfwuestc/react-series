import React from 'react'; // 为什么要 import React
// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }
//


function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export {Welcome}