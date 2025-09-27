import React, { useState, useEffect } from 'react';
import { 
  Star, TrendingUp, Target, Zap, ArrowRight, 
  Play, Shield, Award, Rocket, BarChart3 
} from 'lucide-react';

const HeroSection = () => {
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    { icon: <Rocket className="w-6 h-6" />, value: "150+", label: "Projects Delivered" },
    { icon: <TrendingUp className="w-6 h-6" />, value: "85%", label: "Client Retention" },
    { icon: <BarChart3 className="w-6 h-6" />, value: "10X", label: "ROI for Clients" },
    { icon: <Target className="w-6 h-6" />, value: "99%", label: "Satisfaction Rate" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-br from-gray-900 via-[#0B1629] to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#ff6b35 1px, transparent 1px),
                              linear-gradient(90deg, #ff6b35 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Floating Shapes */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-float delay-4000"></div>

       
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-20">
        <div className="text-center">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg text-orange-400 px-6 py-3 rounded-2xl border border-orange-400/20 mb-8">
            <Award className="w-4 h-4" />
            <span className="font-semibold text-sm">#1 Trusted Software Solutions Partner</span>
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
          </div>

          {/* Main Heading */}
          <h1 className="font-bold text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-6">
            <span className="block">BUILDING</span>
            <span className="block">
              <span className="bg-gradient-to-r from-purple-400 to-orange-500 bg-clip-text text-transparent">
              INNOVATIVE
              </span>
            </span>
            <span className="block text-orange-500">SOFTWARE SOLUTIONS</span>
          </h1>

          
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
          At <span className="text-orange-400 font-semibold">Krishna Software Solutions</span>, we deliver scalable, secure, and cutting-edge software that drives your business forward.
        </p>
          {/* Description */}
         

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="group relative bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
              <span className="relative z-10 flex items-center gap-3">
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button className="group flex items-center gap-3 text-gray-300 hover:text-white px-8 py-4 rounded-2xl border border-gray-600 hover:border-orange-400 transition-all duration-300">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-orange-500/10 transition-colors">
                <Play className="w-5 h-5 fill-current" />
              </div>
              Watch Success Stories
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`group relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-500 ${
                  index === currentStat 
                    ? 'border-orange-500/50 scale-105 shadow-2xl' 
                    : 'border-white/10 hover:border-orange-400/30'
                }`}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl mb-4 mx-auto group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="font-bold text-3xl text-white mb-2">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-12 opacity-80">
            <div className="flex items-center gap-2 text-gray-400">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-sm">ISO Certified</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Target className="w-5 h-5 text-blue-400" />
              <span className="text-sm">Global Clients</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <TrendingUp className="w-5 h-5 text-purple-400" />
              <span className="text-sm">Proven Growth</span>
            </div>
          </div>
        </div>
      </div>
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;