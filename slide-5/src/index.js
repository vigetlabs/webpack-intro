import './style.css'

import { greet } from './greeting'

function render () {
  let message = document.createElement('p')

  message.innerHTML = greet("World")

  document.body.innerHTML = ''
  document.body.appendChild(message)
}

render()

if (module.hot) {
  module.hot.accept(render)
}
