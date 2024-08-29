import React from 'react'
import Layout from '../common/Layout'
import Head from 'next/head'
import './style.scss'
import Filter from '../component/filter'

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



    </Layout>
    </>
  )
}

export default HomePage