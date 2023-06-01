import React from 'react'
import './Process.css'
import mobitel from '../images/mobi.jpeg'
import dialog from '../images/dia.jpeg'
import nawaloka from '../images/nawa.jpeg'
import durdance from '../images/durda.jpeg'
import { Link } from 'react-router-dom'
import Questions from './Questions'
import { Container, Row, Col, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Datasheet from './Datasheet'

export default function Process() {
  return (
    <div className='pr1'>
        <div className='pr2'>
        <div className='topic'>
        <h1>Are you secure in Telemedicine platform?</h1>
        </div>
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

        <div class="container">
    <div class="row">

      <div className='para1'>
      <div class="col-sm-6 col-md-9">
        <div class="card" className='s1'>
          <div class="card-body">
            <h5 class="card-title" className='ch1'>1 <sup>st</sup> Step</h5>
            <p class="card-text" className='st1'>Our team has developed a concise questionnaire targeting telemedicine users, focusing on
             key subtopics essential for data collection. These include privacy, storage, consent, encryption, authentication,
              access control, authorization, and secure network. By gathering insights through this questionnaire, 
              we aim to enhance our understanding of user perspectives and experiences in relation to these crucial aspects of telemedicine.</p>
              <div className='ll1'><Link to="/Questions" className='vl1'>View more</Link></div>
          </div>
        </div>
      </div>
      </div>

      <div className='para2'>
      <div class="col-sm-6 col-md-9">
        <div class="card" className='s2'>
          <div class="card-body">
            <h5 class="card-title" className='ch1'>2<sup>nd</sup> Step</h5>
            <p class="card-text" className='st1'>We are conducting a data collection study among
             telemedicine users, utilizing a questionnaire format. Participants will have the opportunity to
              provide their responses using a 5-point Likert scale. This scale allows users to indicate their 
              level of agreement or disagreement with specific statements or questions related to telemedicine.
               By utilizing this simple and effective format, we aim to gather valuable insights and feedback from users, enabling us 
            to better understand their perspectives and experiences in the context of telemedicine.</p>
            <div className='ll2'> <Link to="/Datasheet" className='vl1'>View more</Link></div>
          </div>
        </div>
      </div>
      </div>

<div className='para3'>
      <div class="col-sm-6 col-md-9">
        <div class="card" className='s1'>
          <div class="card-body">
            <h5 class="card-title" className='ch1'>3 <sup>rd</sup> Step</h5>
            <p class="card-text" className='st1'>Data from a questionnaire completed by telemedicine users,
             who have used the system at least once, was analyzed using SPSS software. 
            SPSS is a powerful tool for statistical analysis. </p>
            <div className='ll3'> <Link to="/Results" className='vl1'>View more</Link></div>
          </div>
        </div>
      </div>
      </div>

      </div>
      </div>

      


        {/* <div className='pr4'>
            <h4>
                Step 1
            </h4>
            <div className='pr5'>
              <p>
                Development of reliable interview Questions
                
              </p>  
            </div>   
        </div> */}

        {/* <div className='pr6'>
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
        </div> */}

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
 
    </div>
  )
}
