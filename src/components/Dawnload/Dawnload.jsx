import React from 'react';
import './Dawnload.css';
import image1 from '../../assets/Mask group.png'

function Dawnload() {
  return (
    <section className='download'>
    <div className='container'>
        <div className='download-container'>
        <div className='download-content'>
            <div className='download-left'>
                <h1 className='download-title'>
                    Why stay <span>hungry</span>

                     <br/> when <br/>
                    you can order <span>Now!</span>
                </h1>
                <p>Download the bella onoje’s <br/>food app now on</p>
            </div>
            <div className='download-right'>
                <img src={image1} alt='image'/>
            </div>
        </div>
        </div>
    </div>
      
    </section>
  )
}

export default Dawnload
