import React from 'react';
import './Home.css'; 
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

export default function Home() {
  const navigate = useNavigate();
  const handleButton = () => {
    navigate('/firstpage');
  };

  const handleNoAIButton=()=>{
    navigate('/firstwithoutai')
  }


  return (
    <>
    <Navbar/>
    <div
      style={{
        backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/007/934/086/original/abstract-purple-and-pink-gradient-waves-background-glowing-lines-on-purple-background-vector.jpg')",
        height: '100vh', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="container">
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <div
                style={{
                  fontSize: '11vh',
                  fontWeight: 'bolder',
                  color: 'white',
                  lineHeight: '10.5vh',
                  textAlign: 'left',
                  marginTop: '3vh',
                }}
              >
                Elevate Your Career with Us!
              </div>
              <div
                style={{
                  fontSize: '4vh',
                  fontWeight: 'bold',
                  color: 'white',
                  lineHeight: '4vh',
                  marginTop: '3vh',
                  textAlign: 'left',
                }}
              >
                Create and perfect your resume with AI-driven insights, optimizing every detail to
                ensure it stands out to recruiters and employers, increasing your chance of success.
                <div className="register">
                  <button
                    type="button"
                    onClick={handleButton}
                    className="build-button"
                  >
                    Build Your Resume with AI
                  </button>
                  <button
                    type="button"
                    onClick={handleNoAIButton}
                    className="build-button"
                  >
                    Build Your Resume
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <img
                src="https://thumbs.dreamstime.com/b/happy-friendly-multiracial-team-laughing-working-together-corporate-briefing-business-gathered-table-cheerful-diverse-office-155751228.jpg"
                alt="RESUME"
                className="responsive-img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
