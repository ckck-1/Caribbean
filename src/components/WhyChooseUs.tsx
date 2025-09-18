import React, { useEffect, useRef } from 'react';
import { Award, Users, Target, Globe, CheckCircle, Star, Shield, Zap } from 'lucide-react';

const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    const animatedElements = sectionRef.current?.querySelectorAll('.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right');
    animatedElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <Award className="w-10 h-10" />,
      title: "Comprehensive Care",
      description: "End-to-end solutions covering every aspect of your business needs, from strategy to execution.",
      bgGradient: "from-[#0B3C5D] to-[#1a5f8a]",
      delay: "0s"
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Expert Legal & Accounting Team",
      description: "Highly trained professionals with deep expertise in Caribbean business regulations and practices.",
      bgGradient: "from-[#00A8C6] to-[#0dd4f0]",
      delay: "0.1s"
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: "Customized Solutions",
      description: "Tailored strategies designed specifically for your industry, size, and unique business challenges.",
      bgGradient: "from-[#FF6B35] to-[#ff8f66]",
      delay: "0.2s"
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Local & International Experience",
      description: "Deep Caribbean market knowledge combined with global business expertise and best practices.",
      bgGradient: "from-purple-500 to-purple-700",
      delay: "0.3s"
    }
  ];

  const stats = [
    { number: "15+", label: "Years of Excellence", icon: <Star className="w-6 h-6" /> },
    { number: "98%", label: "Client Retention", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "200+", label: "Projects Completed", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Zap className="w-6 h-6" /> }
  ];

  return (
    <section id="why-choose-us" ref={sectionRef} className="py-20 bg-gradient-to-b from-[#0B3C5D] to-[#1a5f8a] text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg)' }}
        ></div>
        <div className="absolute top-40 right-10 w-40 h-40 bg-[#00A8C6]/10 rounded-full float-animation"></div>
        <div className="absolute bottom-40 left-10 w-32 h-32 bg-[#FF6B35]/10 rounded-full float-animation-delayed"></div>
        <div className="absolute top-20 left-1/4 w-16 h-16 bg-white/5 rounded-lg rotate-45 float-animation-delayed-2"></div>
        
        {/* 3D Background Models */}
        <div className="absolute top-32 right-1/3 floating-element opacity-20">
          <div className="hexagon-3d"></div>
        </div>
        <div className="absolute bottom-1/3 left-1/4 floating-element-delayed opacity-15">
          <div className="pyramid-3d">
            <div className="pyramid-base"></div>
            <div className="pyramid-face front"></div>
            <div className="pyramid-face back"></div>
            <div className="pyramid-face left"></div>
            <div className="pyramid-face right"></div>
          </div>
        </div>
        <div className="absolute top-2/3 right-20 floating-element-delayed-2 opacity-25">
          <div className="wave-3d"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 font-['Montserrat'] animate-on-scroll">
            Why Choose <span className="bg-gradient-to-r from-[#00A8C6] to-[#FF6B35] bg-clip-text text-transparent">Caribbean Ventures</span>?
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-['Lato'] animate-on-scroll">
            Experience the difference that dedicated expertise and personalized service can make for your business success.
          </p>
          <div className="mt-8 w-24 h-1 bg-gradient-to-r from-[#00A8C6] to-[#FF6B35] mx-auto rounded-full animate-on-scroll"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 hover-lift animate-on-scroll card-3d"
              style={{ animationDelay: feature.delay }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.bgGradient} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300 icon-3d`}>
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-4 font-['Montserrat'] group-hover:text-[#00A8C6] transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-white/80 leading-relaxed font-['Lato'] group-hover:text-white transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 animate-on-scroll">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 font-['Montserrat']">
              Our Track Record Speaks
            </h3>
            <p className="text-white/80 text-lg font-['Lato']">
              Numbers that demonstrate our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#00A8C6] to-[#FF6B35] rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2 font-['Montserrat'] bg-gradient-to-r from-[#00A8C6] to-[#FF6B35] bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-white/80 font-['Lato']">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20 text-center animate-on-scroll">
          <blockquote className="text-2xl md:text-3xl font-light italic text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed font-['Lato']">
            "Caribbean Ventures transformed our business operations completely. Their expertise in Caribbean markets and personalized approach made all the difference."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-[#00A8C6] to-[#FF6B35] rounded-full flex items-center justify-center">
              <span className="text-white font-bold font-['Montserrat']">M</span>
            </div>
            <div className="text-left">
              <div className="text-white font-semibold font-['Montserrat']">Maria Rodriguez</div>
              <div className="text-white/60 text-sm font-['Lato']">CEO, Tropical Innovations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;