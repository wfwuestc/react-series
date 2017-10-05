import _ from 'lodash';
import $ from 'jquery'
var log = console.log.bind(console)
function component() {
  var element = $('<div></div>')
  element.html(_.join(['Hello', 'webpack'], ' '))
  log(element)
  return element.get(0);
}

document.body.appendChild(component());