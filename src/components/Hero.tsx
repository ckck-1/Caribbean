import React, { useEffect, useRef } from 'react';
import { ArrowRight, TrendingUp, Globe, Shield } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPercent = clientX / innerWidth;
      const yPercent = clientY / innerHeight;
      
      const shapes = heroRef.current.querySelectorAll('.parallax-shape');
      shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.5;
        const x = (xPercent - 0.5) * speed * 50;
        const y = (yPercent - 0.5) * speed * 50;
        (shape as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-bg"></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0B3C5D]/20"></div>

      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg)'
        }}
      ></div>

      {/* Floating 3D Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* 3D Cube */}
        <div className="parallax-shape absolute top-20 left-20 floating-element">
          <div className="cube-3d">
            <div className="cube-face front"></div>
            <div className="cube-face back"></div>
            <div className="cube-face right"></div>
            <div className="cube-face left"></div>
            <div className="cube-face top"></div>
            <div className="cube-face bottom"></div>
          </div>
        </div>
        
        {/* 3D Pyramid */}
        <div className="parallax-shape absolute top-40 right-32 floating-element-delayed">
          <div className="pyramid-3d">
            <div className="pyramid-base"></div>
            <div className="pyramid-face front"></div>
            <div className="pyramid-face back"></div>
            <div className="pyramid-face left"></div>
            <div className="pyramid-face right"></div>
          </div>
        </div>
        
        {/* 3D Sphere */}
        <div className="parallax-shape absolute bottom-40 left-16 floating-element-delayed-2">
          <div className="sphere-3d"></div>
        </div>
        
        {/* 3D Diamond */}
        <div className="parallax-shape absolute top-60 right-20 floating-element">
          <div className="diamond-3d">
            <div className="diamond-top"></div>
            <div className="diamond-bottom"></div>
          </div>
        </div>
        
        {/* 3D Hexagon */}
        <div className="parallax-shape absolute bottom-60 right-40 floating-element-delayed">
          <div className="hexagon-3d"></div>
        </div>
        
        {/* 3D Wave */}
        <div className="parallax-shape absolute top-1/3 left-1/4 floating-element-delayed-2">
          <div className="wave-3d"></div>
        </div>
        
        {/* 3D Icons */}
        <div className="parallax-shape absolute top-32 right-1/4 text-white/20 floating-element icon-3d">
          <TrendingUp size={48} />
        </div>
        <div className="parallax-shape absolute bottom-32 left-1/4 text-white/15 floating-element-delayed icon-3d">
          <Globe size={40} />
        </div>
        <div className="parallax-shape absolute top-1/2 left-16 text-white/20 floating-element-delayed-2 icon-3d">
          <Shield size={36} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 font-['Montserrat'] fade-in-up">
            Boost Your Business Growth with{' '}
            <span className="bg-gradient-to-r from-[#00A8C6] to-[#FF6B35] bg-clip-text text-transparent">
              Caribbean Ventures
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-['Lato'] fade-in-up" style={{animationDelay: '0.2s'}}>
            Strategic, financial, and administrative solutions designed for your success in the heart of the Caribbean.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in-up" style={{animationDelay: '0.4s'}}>
            <button 
              onClick={scrollToServices}
              className="group bg-white text-[#0B3C5D] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center gap-3 hover-lift font-['Lato']"
            >
              Get Started
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
            </button>
            
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-white border-2 border-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[#0B3C5D] transition-all duration-300 font-['Lato']"
            >
              Contact Us
            </button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 fade-in-up" style={{animationDelay: '0.6s'}}>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2 font-['Montserrat']">15+</div>
              <div className="text-white/80 font-['Lato']">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2 font-['Montserrat']">200+</div>
              <div className="text-white/80 font-['Lato']">Successful Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2 font-['Montserrat']">100%</div>
              <div className="text-white/80 font-['Lato']">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;