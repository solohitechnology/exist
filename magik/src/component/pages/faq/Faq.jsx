import React, { useState } from 'react';
import './faq.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Faq = () => {
  const faqsData = [
    {
      question: 'Where are you located?',
      answer: '-we are available nationwide with offices in Abuja, lagos and Ile Ife.',
    },
    {
      question: 'how can I purchase your service?',
      answer: '-On our website, social media pages or give us a call ',
    },
    {
      question: 'What’s the difference between a drop off/surprise and surprise with saxophone? ',
      answer: '-Drop off is a simple handover. It’s quiet, no music, no pictures or videos. -surprise is planned, our team handles the delivery, we present the items directly to the celebrant, we take pictures, make videos,  play music, use some props like the confetti popper. It is exciting and entertaining. -A surprise with saxophone has all features of a surprise and music is played with a saxophone or trumpet. ',
    },

  ];

  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleQuestionClick = (question) => {
    setSelectedQuestion(question === selectedQuestion ? null : question);
  };

  return (
    <div className="faq-container">
      <h1 className='faqH1' >Frequently Asked Questions</h1>
      <ul className='faqUL'>
        {faqsData.map((faq, index) => (
          <li
            key={index}
            className={`custom-faq-item ${selectedQuestion === faq.question ? 'active' : ''}`}
            onClick={() => handleQuestionClick(faq.question)}
          >
            <strong>
              {faq.question}{' '}
              {selectedQuestion === faq.question ? <FaChevronUp /> : <FaChevronDown />}
            </strong>
            {selectedQuestion === faq.question && <p className='answer'>{faq.answer}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faq;
