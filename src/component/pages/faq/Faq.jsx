import React, { useState } from 'react';
import './faq.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Faq = () => {
  const faqsData = [
    {
      question: 'What is your return policy?',
      answer: 'Our return policy allows you to return items within 30 days of purchase for a full refund.',
    },
    {
      question: 'How do I reset my password?',
      answer: 'To reset your password, click on the "Forgot Password" link on the login page and follow the instructions.',
    },
    {
      question: 'Can I cancel my subscription?',
      answer: 'Yes, you can cancel your subscription at any time by going to your account settings and selecting "Cancel Subscription."',
    },
    {
      question: 'How do I access my course materials?',
      answer: 'Once you have enrolled in a course, you can access your course materials by logging in to your account and navigating to "My Courses."',
    },
    {
      question: 'Are the courses self-paced or scheduled?',
      answer: 'Our courses are self-paced, allowing you to study at your own convenience. However, some courses may have scheduled live sessions or assignments with deadlines.',
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
