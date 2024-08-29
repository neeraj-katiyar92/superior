"use client"
import React, { useState } from 'react'
import Header from '../layout/header'
import Sider from '../layout/sider'
import Footer from '../layout/footer'

const Layout = ({children}) => {
  const [siderActive,setSiderActive] = useState(false)
  return (
    <div className='layout'>
        <header id="header"><Header siderActive={siderActive} setSiderActive={setSiderActive}/></header>
        <Sider siderActive={siderActive} setSiderActive={setSiderActive}/>
        <section className="content">{children}</section> 
        <footer id='footer'><Footer/></footer> 
    </div>
  )
}

export default Layout