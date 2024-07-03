import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Signup from './components/SignUp/Signup'
import About from './pages/about/About'
import BuildResume from './pages/form/BuildResume'

import TemplatesPage from './pages/templates/TemplatesPage'
import Navbar from './components/navbar/Navbar'
import { useState } from 'react'



function App() {

  const [show, setShow] = useState(false);
  const [login, setLogin] = useState(false)

  const whetherLogin = () => {
    setLogin(!login);
  }

  const toggleLogin = () => {
    setShow(!show);
  }

  return (
    <BrowserRouter>
    <Navbar loginClick={toggleLogin} whetherLogin={whetherLogin} />
    {show && <Signup loginClose={toggleLogin} loginOrNot={login} signUp={whetherLogin} />}
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='signup' element = {<Signup/>}/>
        <Route path='about' element = {<About/>}/>

        <Route path='build' element = {<BuildResume/>}/>
        <Route path='templates' element = {<TemplatesPage/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
