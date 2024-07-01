import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Signup from './components/Signup'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='signup' element = {<Signup/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
