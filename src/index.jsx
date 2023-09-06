import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './home'

import '@fortawesome/fontawesome-free/css/all.css'

// first I removed because it was causing some dropdowns and accordons to malfunction.
// then, I added it again because it was making the burger in navbar not to expand
import 'bootstrap'

import 'bootstrap-icons/font/bootstrap-icons.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './stylesheets/index.scss'

if (window.location.pathname === '' || window.location.pathname === '/') {
  window.location.href = 'https://www.urseseguros.com.uy'
} else {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Home />
    </React.StrictMode>
  )
}
