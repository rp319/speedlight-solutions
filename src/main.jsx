import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Layout from './Layout.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'
import Services from './Services.jsx'
import Contact from './Contact.jsx'
// import './App.css';
import './index.css';
import DonationDetails from './components/ServicesDetails.jsx'
import ServicesDetails from './components/ServicesDetails.jsx'


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'  element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/:id" element={<ServicesDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
      </Route>

  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Layout/> */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
