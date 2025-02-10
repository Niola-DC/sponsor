import React from 'react';
import '../styles/PrioritySty.css';
import loan from '../assets/wallet.png';
import rate from '../assets/rate.png';
import process from '../assets/process.png';
import hidden from '../assets/hidden.png';

function Priority() {
  return (
    <section className="priority">
      <div className='priority-heading'>
        <h2>Your education is our<span> priority</span> </h2>
        <p>At PaySkul we are in the business of empowering your education and your future, here are reasons why you should choose us</p>
      </div>
      <div className="priority-items">
        <div className='priority-feature'>
          <img src={loan}/>
          <h6>Flexible repayment plans</h6>
        </div>
        <div className='priority-feature'>
          <img src={rate}/>
          <h6>Low interest rate</h6>
        </div>
        <div className='priority-feature'>
          <img src={process}/>
          <h6>Easy Application Process</h6>
        </div>
        <div className='priority-feature'>
          <img src={hidden}/>
          <h6>No hidden charges</h6>
        </div>
      </div>
    </section>
  );
}

export default Priority;