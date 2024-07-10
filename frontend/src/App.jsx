import React from 'react'
import Home from './modules/common/Home'
import Login from './modules/common/Login'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './components/Header'
import Register from './modules/common/Register'
import AllProperties from './modules/user/Renter/AllProperties'
import AddProperty from './modules/user/Owner/AddProperty'
function App() {

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/prp' element={<AllProperties/>}/>
          <Route path='/owner' element={<AddProperty/>}/>
          
        </Routes>
      </Router>
    </>
  )
}

export default App
