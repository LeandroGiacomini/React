import React from 'react'
import ReactDOM from 'react-dom/client'
import { Contador } from './Components/contador/contador'
import { App } from './Pages/App/App'
import GlobalStyle from './Styles/global'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Contador />
    <GlobalStyle />
  </React.StrictMode>
)
