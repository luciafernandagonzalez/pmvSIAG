import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AnimalAdoptionGallery from './Components/AnimalsGallery.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AnimalAdoptionGallery />
  </React.StrictMode>,
)
