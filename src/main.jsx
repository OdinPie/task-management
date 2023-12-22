import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes'
import AuthProvider from './Provider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>  /// strict mode clashes with dnd
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  // </React.StrictMode>,
)
