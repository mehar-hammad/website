import React from 'react'
import { Home, Profile, Signin, Signup } from './Pages'
import { Navbar,Wrapper} from './Components'
import{BrowserRouter, Routes, Route} from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path ='/' element={<Home/>}/>
      <Route path ='/signin' element={<Signin/>}/>
      <Route path ='/signup' element={<Signup/>}/>
      <Route path ='/profile' element={<Profile/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App