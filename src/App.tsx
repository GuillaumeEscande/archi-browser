import React from 'react'
import { render } from 'react-dom'
import { GlobalStyle } from './styles/GlobalStyle'

import Header from './components/Header'
import Navigator from './components/Navigator'
import Diagram from './components/Diagram'

const mainElement = document.createElement('div')
mainElement.setAttribute('id', 'root')
document.body.appendChild(mainElement)

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Navigator />
      <Diagram />
    </>
  )
}

render(<App />, mainElement)
