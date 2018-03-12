import React from 'react'
import { render } from 'react-dom'

import './styles/style.scss'

const App = () => (
  <div className="application">
    <p>Hello from Sass</p>
  </div>
)

render(
  <App />,
  document.getElementById('app')
)