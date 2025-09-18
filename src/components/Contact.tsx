import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Mail, Phone, Clock, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* 3D Background Elements */}
        <div className="absolute top-20 right-20 floating-element opacity-30">
          <div className="sphere-3d"></div>
        </div>
        <div className="absolute bottom-40 left-20 floating-element-delayed opacity-25">
          <div className="diamond-3d">
            <div className="diamond-top"></div>
            <div className="diamond-bottom"></div>
          </div>
        </div>
        <div className="absolute top-1/2 right-1/4 floating-element-delayed-2 opacity-20">
          <div className="hexagon-3d"></div>
        </div>
        <div className="absolute bottom-1/4 right-1/3 floating-element opacity-15">
          <div className="wave-3d"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-[#0B3C5D] mb-6 font-['Montserrat'] animate-on-scroll">
            Let's Start Your Success Story
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-['Lato'] animate-on-scroll">
            Ready to transform your business? Get in touch with our expert team in beautiful Punta Cana.
          </p>
          <div className="mt-8 w-24 h-1 bg-gradient-to-r from-[#00A8C6] to-[#FF6B35] mx-auto rounded-full animate-on-scroll"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8 animate-on-scroll-left">
            <div className="bg-white rounded-3xl p-8 shadow-lg hover-lift card-3d">
              <h3 className="text-2xl font-bold text-[#0B3C5D] mb-8 font-['Montserrat']">
                Get In Touch
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#0B3C5D] to-[#1a5f8a] rounded-xl flex items-center justify-center flex-shrink-0 icon-3d">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#0B3C5D] mb-2 font-['Montserrat']">Location</h4>
                    <p className="text-gray-600 font-['Lato']">Bávaro, Punta Cana<br />Dominican Republic</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#00A8C6] to-[#0dd4f0] rounded-xl flex items-center justify-center flex-shrink-0 icon-3d">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#0B3C5D] mb-2 font-['Montserrat']">Email</h4>
                    <a href="mailto:contact@caribbean.ventures" className="text-[#00A8C6] hover:text-[#0B3C5D] transition-colors font-['Lato']">
                      contact@caribbean.ventures
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#FF6B35] to-[#ff8f66] rounded-xl flex items-center justify-center flex-shrink-0 icon-3d">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#0B3C5D] mb-2 font-['Montserrat']">Phone</h4>
                    <p className="text-gray-600 font-['Lato']">+1 (809) 555-0123</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl flex items-center justify-center flex-shrink-0 icon-3d">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#0B3C5D] mb-2 font-['Montserrat']">Business Hours</h4>
                    <p className="text-gray-600 font-['Lato']">Mon - Fri: 8:00 AM - 6:00 PM<br />Sat: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Preview */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover-lift card-3d">
              <div className="relative h-64 bg-gradient-to-br from-[#0B3C5D] to-[#00A8C6] rounded-2xl overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-60"
                  style={{ backgroundImage: 'url(https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg)' }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-6 animate-bounce">
                    <MapPin className="w-8 h-8 text-[#0B3C5D]" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-3">
                  <p className="text-sm font-semibold text-[#0B3C5D] font-['Montserrat']">Punta Cana, DR</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-on-scroll-right">
            <div className="bg-white rounded-3xl p-8 shadow-lg hover-lift card-3d">
              <div className="flex items-center gap-3 mb-8">
                <MessageSquare className="w-8 h-8 text-[#00A8C6] icon-3d" />
                <h3 className="text-2xl font-bold text-[#0B3C5D] font-['Montserrat']">
                  Send Us a Message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[#0B3C5D] mb-2 font-['Montserrat']">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#00A8C6] focus:outline-none transition-colors font-['Lato']"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[#0B3C5D] mb-2 font-['Montserrat']">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#00A8C6] focus:outline-none transition-colors font-['Lato']"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-[#0B3C5D] mb-2 font-['Montserrat']">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#00A8C6] focus:outline-none transition-colors font-['Lato']"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#0B3C5D] mb-2 font-['Montserrat']">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#00A8C6] focus:outline-none transition-colors font-['Lato'] resize-none"
                    placeholder="Tell us about your project and how we can help..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#00A8C6] to-[#FF6B35] text-white py-4 px-8 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3 hover-lift font-['Lato']"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </form>

              <p className="text-sm text-gray-500 mt-6 text-center font-['Lato']">
                We'll get back to you within 24 hours during business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;