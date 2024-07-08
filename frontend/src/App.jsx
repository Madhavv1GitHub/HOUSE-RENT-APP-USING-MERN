import React from 'react'
import Home from './modules/common/Home'
import Login from './modules/common/Login'
import {BroswerRouter,Routes,Route} from 'react-router-dom'

function App() {


  return (
    <>
      <BroswerRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BroswerRouter>
    </>
  )
}

export default App
