import React, { useState } from 'react';
import './Faq.css';
import Navbar from './Navbar';

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const FAQs = [
    {
      question: "What is the AI Resume Builder?",
      answer:
        "The AI Resume Builder helps you craft a professional resume by providing smart suggestions based on your skills, experience, and job preferences. ",
    },
    {
      question: "How do I use the AI Resume Builder?",
      answer:
        "Simply sign up, select a template, and input your professional details. The AI will guide you through each section to optimize your resume for maximum impact.",
    },
    {
      question: "Can I download my resume?",
      answer:
        "Yes, once you're done with your resume, you can download it in PDF or DOC format, or share it online with potential employers.",
    },
    {
      question: "What formats are supported for download?",
      answer:
        "We support PDF, DOCX, and TXT formats for downloading your resume. You can also export it to your LinkedIn profile.",
    },
  ];

  return (
    <div className='body'>
    <Navbar/>
    <div className="app">
        
      <div className="faq-container">
      <h1 className='my-1'>FAQs</h1>
        {FAQs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleAnswer(index)}
          >
            <div className="faq-question">
              {faq.question}
              <span className={`faq-toggle ${activeIndex === index ? 'open' : ''}`}>
                {activeIndex === index ? '➖' : '➕'}
              </span>
            </div>
            <div className={`faq-answer ${activeIndex === index ? 'open' : ''}`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Faq;
