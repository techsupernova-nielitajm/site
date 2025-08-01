import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Gallery from './components/galary.jsx'
 

createRoot(document.getElementById('root')).render(
  <StrictMode>
     
    <App/>
  </StrictMode>,
)
