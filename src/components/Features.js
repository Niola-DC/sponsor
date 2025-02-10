import React from 'react';
import '../styles/FeaturesSty.css';
import first from '../assets/gradcap.png';
import second from '../assets/library.png';
import third from '../assets/location.png';

function Features() {
  return (
    <section className="features">
      <div className='feature-text'>
        <h2>Anything education, think <span>Payskul</span></h2>
        <p>We don't only offer educational loans, we offer services to study and build a great future.</p>
      </div>
      <div className="feature-items">
        <div className="feature-box">
          <img src={first} alt='Flexible Loans' />
          <h3>Flexible Loans</h3>
          <p>We provide flexible and transparent education loans to help you achieve your goals without financial worry.</p>
        </div>
        <div className="feature-box">
          <img src={second} alt='Get Books' />
          <h3>Get Books</h3>
          <p>Get your favorite books now and pay later with ease! Access loans and manage payments seamlessly.</p>
        </div>
        <div className="feature-box">
          <img src={third} alt='Find Schools' />
          <h3>Find Schools</h3>
          <p>Empowering education made easy! Find the perfect school for yourself or your child and secure hassle-free loans.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;

function fetchData1(){

}
function fetchData2(){
  
}


// Use Promises to handle async tasks
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Data loaded'), 1000);
});

// Use async/await to avoid callback hell
const getData = async () => {
  const data = await fetchData;
  console.log(data);
};

// Promise.all handles multiple async operations efficiently
const [data1, data2] = await Promise.all([fetchData1, fetchData2()]);
