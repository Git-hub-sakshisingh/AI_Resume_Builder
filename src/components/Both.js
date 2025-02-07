import React, { useState } from 'react';
import Privacy from './Privacy';
import Terms from './Terms';
import Navbar from './Navbar';
import './Login.css';

const Both = () => {
  const [activePage, setActivePage] = useState('privacy-policy');

  const handleLinkClick = (page) => {
    setActivePage(page);
  };

  return (
    <>
    <Navbar/>
    <div  style={{backgroundImage:"url('https://static.vecteezy.com/system/resources/previews/007/934/086/original/abstract-purple-and-pink-gradient-waves-background-glowing-lines-on-purple-background-vector.jpg')",
    }}>
    {/* <nav className="navbar navbar-dark bg-light"> */}
        <div className="container-fluid  mx-4" style={{fontSize:"3.5vh"}} >
          <button className="navbar-brand mx-5 my-3" onClick={() => handleLinkClick('privacy-policy')}  >Privacy Policy</button>
          <button className="navbar-brand mx-5 my-3" onClick={() => handleLinkClick('terms-of-service')}>Terms of Services</button>
        </div>
      {/* </nav> */}

      {/* Content below Navbar */}
      <div className="mt-5">
        {activePage === 'privacy-policy' && <Privacy />}
        {activePage === 'terms-of-service' && <Terms />}
      </div>
    </div>
    </>
  );
};
export default Both;