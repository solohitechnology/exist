import React, { useState } from 'react';
import './faq.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const Faq = () => {
  const faqsData = [

    {
      question: 'Can I customize the surprise packages?',
      answer: '-Yes, we offer customization options for our surprise packages. Contact us to discuss your specific requirements and preferences.',
    },
    {
      question: 'What types of events do you cater to?',
      answer: '-We specialize in a wide range of events, including birthdays, weddings, anniversaries, proposals, and more. Contact us to discuss your specific event needs.',
    },
    {
      question: 'Are there any additional fees for delivery?',
      answer: '-Delivery fees may apply based on your location. Please check our website or contact us for more information on delivery charges.',
    },
    {
      question: 'What safety measures do you have in place during surprise deliveries?',
      answer: '-We prioritize the safety of our customers and team members. Our surprise deliveries are conducted with strict adherence to safety guidelines, and we take necessary precautions to ensure a secure and enjoyable experience.',
    },
    {
      question: 'Do you offer refunds or exchanges?',
      answer: '-Our refund and exchange policies are outlined on our website. Please review the terms and conditions or contact our customer support for more details.',
    },
    {
      question: 'How far in advance should I book your services?',
      answer: '-To ensure availability, we recommend booking our services well in advance, especially for peak seasons and popular dates. Contact us to check our current schedule.',
    },
    {
      question: 'Can I add a personal message to the surprise?',
      answer: "-Certainly! We encourage personalization. You can include a special message during the ordering process, and we'll ensure it's included in the surprise package.",
    },
    {
      question: 'Are your services suitable for corporate events?',
      answer: '-Yes, we offer services for corporate events, product launches, and team celebrations. Contact us to discuss how we can make your corporate event memorable.',
    },
    {
      question: 'Do you provide gift wrapping for items?',
      answer: '-Yes, all our surprise packages come beautifully gift-wrapped. You can also request additional customization for the wrapping to suit the occasion.',
    },
    {
      question: 'Do you offer discounts for bulk orders or recurring subscriptions?',
      answer: '-We provide special discounts for bulk orders and recurring subscriptions. Contact our sales team to discuss your specific requirements and to explore available discounts.',
    },
  ];


  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleQuestionClick = (question) => {
    setSelectedQuestion(question === selectedQuestion ? null : question);
  };

  return (
    <>
{/* 
      <Helmet>
        <title>Magikworld01 FAQs - Your Questions Answered</title>
      </Helmet> */}

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

    </>
  );
};

export default Faq;
