import './style.css'

import { greet } from './greeting'

let message = document.createElement('p')

message.innerHTML = greet("World")

document.body.appendChild(message)
