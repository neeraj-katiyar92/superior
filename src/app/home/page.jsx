"use client"
import React, { useState } from 'react'
import Layout from '../common/Layout'
import './style.scss'
import Filter from '../component/filter'
import Form from '../api/users'

const HomePage = () => {
 
  return (
    <>
  
    <Layout>
      <section className="banner">
        <div className="banner-container">
          <h2 className='banner-title'>The Portal Behind Thriving <br />Real Estate Properties.</h2>
          <div className="filter">
            <Filter />
          </div>
        </div>        
      </section>
      <section className='hot-selling'>

      </section>
  <Form/>
 
    </Layout>
    </>
  )
}

export default HomePage