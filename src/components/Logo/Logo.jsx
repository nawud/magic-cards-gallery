import React from 'react'
import logo from "../../assets/images/logo.png"
import Header from '../Header/Header'
import './Logo.css'
function Logo() {
  return (
    <div className='container-header'>
      <img src={logo} alt="" />
    <Header/>
    </div>
  )
}

export default Logo
