// import React from 'react'
// import { BrowserRouter as Router,Route,Routes, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import Layout from './Layout.jsx'
// import Home from './Home.jsx'
// import About from './About.jsx'
// import Services from './Services.jsx'
// import Contact from './Contact.jsx'
// // import './App.css';
// import './index.css';
// import ServicesDetails from './components/ServicesDetails.jsx'
// import AdminPanel from './AdminPanel.jsx'



// const router=createBrowserRouter(
//   createRoutesFromElements(
//  <Router>
//    <Routes>
//     <Route exact path='/'  element={<Layout/>}>
//       <Route path='' element={<Home/>} />
//       <Route path="/services" element={<Services />} />
//       <Route path="/services/:id" element={<ServicesDetails />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
        
//       </Route>

//        <Route path="/admin/*" element={<AdminPanel />} />
//        </Routes>
//        </Router> 

//   )
// )
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     {/* <Layout/> */}
//     <RouterProvider router={router}/>
//   </React.StrictMode>,
// )

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Layout from './Layout.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Services from './Services.jsx';
import Contact from './Contact.jsx';
import './index.css';
import ServicesDetails from './components/ServicesDetails.jsx';
import AdminPanel from './admin/AdminPanel.jsx';

const routes = (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/:id" element={<ServicesDetails />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
    <Route path="/admin/*" element={<AdminPanel />} />
  </Routes>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>{routes}</Router>
  </React.StrictMode>
);
