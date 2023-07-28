import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'react-bootstrap'
import { App } from './app'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
