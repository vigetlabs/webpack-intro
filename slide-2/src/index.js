// Webpack understands ES6 modules. No code transformation necessary!
import { greet } from './greeting'

let message = document.createElement('p')

message.innerHTML = greet("World")

document.body.appendChild(message)
