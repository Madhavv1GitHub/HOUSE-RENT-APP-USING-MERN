import React from 'react'
import Home from './modules/common/Home'
import Login from './modules/common/Login'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './components/Header'
import Register from './modules/common/Register'
import AllProperties from './modules/user/Renter/AllProperties'
import AddProperty from './modules/user/Owner/AddProperty'
import AllPropertiesCards from './modules/user/Renter/AllPropertiesCards'
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
          <Route path='*' element={<div>404 Page Not Found</div>}/>
          <Route path='/details' element={<AllPropertiesCards/>}/>
          <Route path='/owner' element={<AddProperty/>}/>
          <Route path='/prp' element={<AllProperties/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
