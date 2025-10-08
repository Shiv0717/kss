import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, ArrowRight, Calendar, Users, Code, Globe,
  Shield, Zap, Sparkles, Target, Rocket, Star,
  Award, TrendingUp, BarChart3
} from 'lucide-react';

const HeroSection = () => {
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    { icon: <Code className="w-6 h-6" />, title: "Custom Development", description: "Tailored solutions for your unique business needs" },
    { icon: <Globe className="w-6 h-6" />, title: "Global Reach", description: "Serving clients across 25+ countries worldwide" },
    { icon: <Zap className="w-6 h-6" />, title: "Fast Delivery", description: "Agile development with rapid deployment" },
    { icon: <Shield className="w-6 h-6" />, title: "Enterprise Security", description: "Military-grade security for your data" }
  ];

  const stats = [
    { number: "150+", label: "Projects Completed", icon: <Rocket className="w-4 h-4" /> },
    { number: "99%", label: "Client Satisfaction", icon: <Star className="w-4 h-4" /> },
    { number: "24/7", label: "Support Available", icon: <Shield className="w-4 h-4" /> },
    { number: "10x", label: "ROI Guarantee", icon: <TrendingUp className="w-4 h-4" /> }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-[#0B1629] to-gray-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(#ff6b35 1px, transparent 1px),
                              linear-gradient(90deg, #ff6b35 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        {/* Floating Shapes */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Additional Floating Elements */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-48 h-48 bg-purple-500/5 rounded-full blur-2xl"
          animate={{
            y: [0, -40, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        {/* Animated Lines */}
        <motion.div
          className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent"
          animate={{ x: [-1000, 1000] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        
        <motion.div
          className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"
          animate={{ x: [1000, -1000] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
        />

        {/* Animated Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-orange-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-10 lg:pt-20 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-4 py-2 rounded-full mb-8"
            >
              <Award className="w-4 h-4 text-orange-400" />
              <span className="text-orange-400 text-sm font-medium">#1 Trusted Software Solutions Partner</span>
              <motion.div
                className="w-2 h-2 bg-orange-400 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            >
              Building{' '}
              <span className="bg-gradient-to-r from-purple-400 to-orange-500 bg-clip-text text-transparent">
                Innovative
              </span>{' '}
              Software{' '}
              <span className="text-orange-500">Solutions</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              At <span className="text-orange-400 font-semibold">Krishna Software Solutions</span>, we deliver scalable, 
              secure, and cutting-edge software that drives your business forward.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(255, 107, 53, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-xl font-semibold text-lg overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </motion.button>

              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "#ff6b35"
                }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-3 text-gray-300 hover:text-white px-8 py-4 rounded-xl border border-gray-600 transition-colors"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-orange-500/10"
                >
                  <Play className="w-5 h-5 fill-current" />
                </motion.div>
                Watch Success Stories
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(255, 107, 53, 0.1)"
                  }}
                  className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="text-orange-400">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-orange-400">{stat.number}</div>
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Feature Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Feature Card */}
            <motion.div
              key={currentFeature}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="relative bg-gradient-to-br from-gray-800/50 to-purple-900/50 rounded-2xl p-8 border border-orange-500/20 backdrop-blur-lg shadow-2xl"
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-purple-500/5 rounded-2xl" />
              
              {/* Feature Icon */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="relative z-10 w-16 h-16 bg-gradient-to-br from-orange-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {features[currentFeature].icon}
                </motion.div>
              </motion.div>

              {/* Feature Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {features[currentFeature].title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {features[currentFeature].description}
                </p>
              </div>

              {/* Progress Dots */}
              <div className="relative z-10 flex gap-2 mt-6">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentFeature(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentFeature ? 'bg-orange-400' : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -right-6 w-28 h-28 bg-orange-500/10 rounded-2xl border border-orange-400/20 backdrop-blur-sm"
            />
            
            <motion.div
              animate={{ 
                y: [0, 15, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-6 -left-6 w-24 h-24 bg-purple-500/10 rounded-2xl border border-purple-400/20 backdrop-blur-sm"
            />

            {/* Animated Code Snippet */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="absolute -bottom-8 right-8 bg-gray-900/80 backdrop-blur-sm rounded-lg p-4 border border-orange-500/20 shadow-2xl"
            >
              <div className="flex gap-2 mb-3">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div className="text-sm font-mono text-gray-300">
                <div>
                  <span className="text-purple-400">function</span>{' '}
                  <span className="text-orange-400">buildFuture</span>
                  <span className="text-white">()</span>{' '}
                  <span className="text-white">{'{'}</span>
                </div>
                <div className="ml-4">
                  <span className="text-cyan-400">return</span>{' '}
                  <span className="text-yellow-400">"Success"</span>
                </div>
                <div className="text-white">{'}'}</div>
                <div className="text-orange-400 mt-2">// Krishna Software Solutions</div>
              </div>
            </motion.div>

            {/* Floating Icons */}
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 360]
              }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute top-4 right-20 w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center border border-orange-400/30"
            >
              <Zap className="w-6 h-6 text-orange-400" />
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;