import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Signup from './components/SignUp/Signup'
import About from './pages/about/About'
// import BuildResume from './pages/form/BuildResume'
import Form from './components/buildResume/Form'
import TemplatesPage from './pages/templates/TemplatesPage'
import Navbar from './components/navbar/Navbar'
import { useState } from 'react'
import SignUpCopy from './components/SignUp/SignUpCopy'
import CheckScore from './components/checkscore/Checkscore'
import Loading from './components/loadingscreen/Loading'
import { SparklesPreview } from './components/SignUp/SparklesPreview'
import Footer from './components/Footer'
import Result from './result/Result'


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
    {/* {show && <SignUpCopy/>} */}
    {/* <SignUpCopy/> */}
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='signup' element = {<Signup/>}/>
        <Route path='about' element = {<About/>}/>
        {/* <Route path='build' element = {<BuildResume/>}/> */}
        <Route path='build' element = {<Form/>}/>
        <Route path='templates' element = {<TemplatesPage/>}/>
        <Route path='check' element = {<CheckScore/>}/>
        <Route path='result' element = {<Result/>}/>

      </Routes>
      {/* <Loading/> */}

      {/* <SparklesPreview/> */}
      <Footer />



    </BrowserRouter>
  )
}

export default App

