import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App'
import '../src/index.css'
import AppRoutes from './routes'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <AppRoutes/>
  </StrictMode>
)
