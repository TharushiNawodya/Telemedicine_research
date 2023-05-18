import React from 'react'
import './Process.css'
import mobitel from '../images/mobi.jpeg'
import dialog from '../images/dia.jpeg'
import nawaloka from '../images/nawa.jpeg'
import durdance from '../images/durda.jpeg'
export default function Process() {
  return (
    <div className='pr1'>
        <div className='pr2'>
        <h1>Are you secure in Telemedicine platform?</h1>
        <p className='p1'>In recent years, telemedicine systems have grown in popularity, especially during the COVID-19 pandemic.
           Through these platforms, patients can consult with medical professionals without physically visiting a 
           clinic or hospital. Although telemedicine has many advantages, the security of patient data is a significant issue.
           Telemedicine platforms are becoming more popular in Sri Lanka as a way to expand access to healthcare and cut expenses.
           However, maintaining the security of patient information is not without its difficulties. Uncertainty over data 
           protection can result from the fact that the legal and regulatory framework for telemedicine is still in development.
           The requirement for secure technology infrastructure presents another difficulty. Platforms for telemedicine must 
           be protected with strong encryption and other security measures.
        </p>
        </div>
        <div className='pr3'>
        <h2>What we have done?</h2>

        <div className='pr4'>
            <h4>
                Step 1
            </h4>
            <div className='pr5'>
              <p>
                Development of reliable interview Questions
              </p>  
            </div>   
        </div>

        <div className='pr6'>
            <h4>
                Step 2
            </h4>
            <div className='pr7'>
              <p>
                Collect data from telemedicine users
              </p>  
            </div>   
        </div>

        <div className='pr8'>
            <h4>
                <div className='he'>
                Step 3
                </div>
            </h4>
            <div className='pr9'>
              <p>
                Analyze data using appropriate software
              </p>  
            </div>   
        </div>

        </div>
        <div className='exam1'>
        <div className='add1'>
        <img src={mobitel} alt='' className="ad1"/>
        </div>
        <div className='add2'>
        <img src={dialog} alt='' className="ad2"/>
        </div>
        <div className='add3'>
        <img src={nawaloka} alt='' className="ad3"/>
        </div>
        <div className='add4'>
            <img src={durdance} alt='' className="ad4"/>
            </div>
        </div>

        <div className='exam2'>
            
            
        </div>

      
    </div>
  )
}
