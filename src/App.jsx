import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Signup from './components/SignUp/Signup'
import About from './pages/about/About'
import BuildResume from './pages/form/BuildResume'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='signup' element = {<Signup/>}/>
        <Route path='about' element = {<About/>}/>
        <Route path='build' element = {<BuildResume/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
