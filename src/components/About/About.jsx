import React from 'react';
import './About.css';
import image1 from '../../assets//Ellipse 22.png'

function About() {
  return (
    <section className='about'>
    <div className='container'>
        <div className='about-content'>
            <div className='about-left'>
                <img src={image1} alt='image'/>
            </div>
            <div className='about-right'>
                <h2 className='about-title'>
                About <span>CREB & WAFFLE</span>
                </h2>
                <p className='about-desc'>
                Download our app from google play or app store and you don’t have to be worry about your food anymore. 
                Download our app from google play or app store and you don’t have to be worry about your food anymore. 
                </p>
                <p className='about-desc'>
                Download our app from google play or app store and you don’t have to be worry about your food anymore.
                </p>
            </div>
            
        </div>
    </div>
      
    </section>
  )
}

export default About
