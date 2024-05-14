import React from 'react';
import { Link } from 'react-router-dom';
import './homepic.css';

const HomeImg1 = () => {

  return (
    <div className='container bb d-flex justify-content-center'>
      <div className='bb-inner text-center'>
        <h2 className="hollow-text">In Today's World <br />Self defense is crucial</h2>
        <Link to="/services"><button className='pulsee btn btn-dark mt-3'>Protect Yourself</button></Link>
      </div>
    </div>
  );
};

export default HomeImg1;
