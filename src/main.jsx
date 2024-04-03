import React from 'react'
import ReactDOM from 'react-dom/client'
import CardApp from './CardApp.jsx'
import TodoApp from './TodoApp.jsx'
import ColorPickerApp from './ColorPicker.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>,
)
