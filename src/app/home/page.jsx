import React from 'react';
import Layout from '../common/Layout';
import Head from 'next/head';
import './style.scss';
import Filter from '../component/filter';
import Card from '../component/card';
import Getstarted from '../component/get-started';
import Infusehome from '../component/infusehome';
import Sellingproperties from '../component/sellingproperties';


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

    <section className='projects'>
      <div className="superior-container">
        <div className="grid-view">    
          <Getstarted />
          <Card />
          <Card />
        </div>

        <div className="grid-view tp-30">    
          
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

        <div className="grid-view tp-30">    
          
          
          <Sellingproperties />
          <Infusehome />
          <Card />
        </div>
       

      </div>
    </section>


    </Layout>
    </>
  )
}

export default HomePage