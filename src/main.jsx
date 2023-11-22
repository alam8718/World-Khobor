import React from 'react'
import ReactDOM from 'react-dom/client'

import Layout from './components/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Blogs from './components/Blogs/Blogs'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'

import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='/' element={ <Home /> } />
      <Route path='/blogs' element={<Blogs /> } />
      <Route path='/about' element={<About /> } />
      <Route path='/services' element={<Services /> } />
      <Route path='/contact' element={<Contact /> } />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
