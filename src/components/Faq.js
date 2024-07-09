import React, { useState } from 'react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'How does Earthier work?',
      answer:
        'Earthier is an online organic marketplace that connects buyers with sellers of organic products. Through Earthier, sellers can list their organic goods, and buyers can easily browse and purchase a wide range of organic items, fostering a sustainable and accessible marketplace for eco-conscious consumers.',
    },
    {
      question: 'Is Earthier payment system secure?',
      answer: ' Yes, Earthiers payment system is secure. They use industry-standard encryption and security protocols to ensure that all transactions and sensitive information are protected.'

    },
    {
      question: 'Can I track my order?',
      answer: 'Yes, Earthier typically provides order tracking services to allow customers to track their orders from the time of purchase until delivery.',
    },
    {
      question: 'Are there any hidden fees with deliveries?',
      answer: 'Earthier strives to be transparent with its pricing, including delivery fees. Typically, they will clearly outline any delivery fees or charges during the checkout process before you confirm your order.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-green-600 text-center font-semibold">FAQ'S</h2>
      <h1 className="text-3xl text-center font-bold mt-2">Got questions?</h1>
      <p className="text-center mt-2 mb-8">Get the answers to your questions about Earthier.</p>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b-2 border-gray-200 pb-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handleToggle(index)}
            >
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <span className="text-xl">{activeIndex === index ? '▴' : '▾'}</span>
            </div>
            {activeIndex === index && <p className="mt-2">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;