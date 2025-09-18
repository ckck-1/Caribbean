import React, { useEffect, useRef } from 'react';
import { TrendingUp, FileText, DollarSign, BarChart, Users, Calculator, PieChart, Building, Target } from 'lucide-react';

const Services = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = servicesRef.current?.querySelectorAll('.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right');
    animatedElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Business Consulting",
      description: "Strategic guidance to accelerate your business growth and optimize operations.",
      features: [
        "Feasibility analysis and business plans",
        "Optimization of internal processes", 
        "Strategic decision-making",
        "Market research and financial planning"
      ],
      color: "from-[#0B3C5D] to-[#1a5f8a]",
      bgImage: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Administrative & Accounting Management",
      description: "Comprehensive administrative solutions to streamline your business operations.",
      features: [
        "Payroll and human resources management",
        "Tax and legal procedures",
        "Accounting and auditing services",
        "Electronic invoicing and supplier management"
      ],
      color: "from-[#00A8C6] to-[#0dd4f0]",
      bgImage: "https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg"
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      title: "Financial Consulting",
      description: "Expert financial strategies to maximize your profitability and growth potential.",
      features: [
        "Financial planning and budgeting",
        "Cash flow management",
        "Tax optimization",
        "Search for sources of financing"
      ],
      color: "from-[#FF6B35] to-[#ff8f66]",
      bgImage: "https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg"
    }
  ];

  return (
    <section id="services" ref={servicesRef} className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* 3D Background Elements */}
        <div className="absolute top-20 right-20 floating-element">
          <div className="cube-3d opacity-30">
            <div className="cube-face front"></div>
            <div className="cube-face back"></div>
            <div className="cube-face right"></div>
            <div className="cube-face left"></div>
            <div className="cube-face top"></div>
            <div className="cube-face bottom"></div>
          </div>
        </div>
        <div className="absolute bottom-20 left-20 floating-element-delayed">
          <div className="sphere-3d opacity-40"></div>
        </div>
        <div className="absolute top-1/2 right-1/3 floating-element-delayed-2">
          <div className="diamond-3d opacity-20">
            <div className="diamond-top"></div>
            <div className="diamond-bottom"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-[#0B3C5D] mb-6 font-['Montserrat'] animate-on-scroll">
            Our Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-['Lato'] animate-on-scroll">
            Comprehensive consulting services tailored to drive your business forward in the competitive Caribbean market.
          </p>
          <div className="mt-8 w-24 h-1 bg-gradient-to-r from-[#00A8C6] to-[#FF6B35] mx-auto rounded-full animate-on-scroll"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl shadow-lg hover-lift overflow-hidden animate-on-scroll card-3d ${
                index === 0 ? '' : index === 1 ? 'lg:mt-8' : 'lg:mt-16'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-5 group-hover:opacity-10 transition-opacity duration-500"
                style={{ backgroundImage: `url(${service.bgImage})` }}
              ></div>

              {/* Gradient Overlay */}
              <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${service.color}`}></div>

              <div className="relative p-8">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300 icon-3d`}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#0B3C5D] mb-4 font-['Montserrat'] group-hover:text-[#00A8C6] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed font-['Lato']">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mt-2 flex-shrink-0`}></div>
                      <span className="text-gray-700 font-['Lato']">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className={`mt-8 w-full bg-gradient-to-r ${service.color} text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 font-['Lato'] group-hover:scale-105`}>
                  Learn More
                </button>
              </div>

              {/* 3D Element */}
              <div className="absolute -top-4 -right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                {index === 0 && <BarChart size={80} className="text-[#0B3C5D]" />}
                {index === 1 && <Calculator size={80} className="text-[#00A8C6]" />}
                {index === 2 && <PieChart size={80} className="text-[#FF6B35]" />}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 animate-on-scroll">
          <p className="text-lg text-gray-600 mb-8 font-['Lato']">
            Ready to transform your business with expert consulting?
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-[#00A8C6] to-[#FF6B35] text-white px-12 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 hover-lift font-['Lato']"
          >
            Get Your Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;