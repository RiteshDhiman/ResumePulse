import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Signup from '../../components/Signup'

const Home = () => {

  const [show, setShow] = useState(false);
  const [login, setLogin] = useState(false)

  const whetherLogin = () => {
    setLogin(!login);
  }

  const toggleLogin = () => {
    setShow(!show);
  }

  return (
    <div>
      <Navbar loginClick = {toggleLogin} whetherLogin = {whetherLogin}/>
      {show && <Signup loginClose = {toggleLogin} loginOrNot = {login} signUp = {whetherLogin}/>}
    </div>
  )
}

export default Home
