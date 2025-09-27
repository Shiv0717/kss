"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We provide web development, SEO optimization, digital marketing, cloud solutions, and AI-driven applications."
  },
  {
    question: "How can I contact your team?",
    answer:
      "You can contact us via email at contact@kss.com or fill out the contact form on our website."
  },
  {
    question: "Do you offer custom solutions?",
    answer:
      "Yes! We provide tailor-made solutions according to your business needs and requirements."
  },
  {
    question: "What is your pricing model?",
    answer:
      "Our pricing is flexible and depends on the scope and complexity of the project. Contact us for a quote."
  }
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Enhanced Header */}
        <div className=" mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg ">
            Find quick answers to common questions about our services and processes
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl  transition-all duration-300 border ${
                openIndex === index 
                  ? "border-orange-200 shadow-orange-100" 
                  : "border-gray-100"
              }`}
            >
              <button
                className="w-full flex justify-between items-center px-8 py-6 text-left group"
                onClick={() => toggleFaq(index)}
              >
                <span className={`font-semibold text-lg transition-colors ${
                  openIndex === index ? "text-orange-600" : "text-gray-800 group-hover:text-orange-500"
                }`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 ml-4 p-2 rounded-full transition-all duration-300 ${
                  openIndex === index 
                    ? "bg-orange-100 text-orange-600 rotate-180" 
                    : "bg-gray-100 text-gray-600 group-hover:bg-orange-50 group-hover:text-orange-500"
                }`}>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </button>
              
              {/* Animated content */}
              <div className={`overflow-hidden transition-all duration-500 ${
                openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}>
                <div className="px-8 pb-6">
                  <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-orange-300 rounded-full mb-4"></div>
                  <p className="text-gray-700 leading-relaxed text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Faqs;