import React from 'react'
import './Results.css'
import re1 from '../images/ir1.png'

export default function Results() {
  return (
    <div className='res1'>
      <h2>Results of Our Research</h2>
      <p className='resp'>Based on our analysis of 100 responses received from a questionnaire distributed 
        to approximately 1000 individuals, we utilized the Likert scale method to gain 
        valuable insights into patients' perspectives. By focusing on the mode of the 
        received answers, we were able to draw several noteworthy conclusions. These 
        findings provide a clear understanding of the patients' collective opinions and 
        attitudes, enabling us to make informed decisions and recommendations based on their feedback.

</p>
<img src={re1} alt='' className="ir1"/>
    </div>
  )
}
