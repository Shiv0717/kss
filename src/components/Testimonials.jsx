"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, Award, Heart, ThumbsUp, Zap } from "lucide-react";
import Marquee from "react-fast-marquee";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      position: "Marketing Director, TechFlow",
      content: "Working with this team transformed our digital presence. Our organic traffic increased by 300% in just 3 months!",
      rating: 5,
      avatar: "/images/avatar1.jpg",
      icon: Zap,
      color: "from-orange-400 to-amber-400",
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      position: "CEO, InnovateLabs",
      content: "Exceptional service and outstanding results. They delivered beyond our expectations and became true partners in our growth.",
      rating: 5,
      avatar: "/images/avatar2.jpg",
      icon: Award,
      color: "from-amber-500 to-orange-500",
    },
    {
      id: 3,
      name: "Emily Thompson",
      position: "Product Manager, CloudScale",
      content: "The attention to detail and creative solutions provided were remarkable. Our user engagement skyrocketed after their intervention.",
      rating: 5,
      avatar: "/images/avatar3.jpg",
      icon: Heart,
      color: "from-orange-500 to-red-400",
    },
    {
      id: 4,
      name: "James Wilson",
      position: "CTO, DataDrive",
      content: "Professional, innovative, and results-driven. They helped us build a scalable infrastructure that supports millions of users.",
      rating: 5,
      avatar: "/images/avatar4.jpg",
      icon: ThumbsUp,
      color: "from-amber-400 to-yellow-500",
    },
    {
      id: 5,
      name: "Lisa Zhang",
      position: "Founder, StartupGrid",
      content: "Outstanding strategic thinking and execution. They understood our vision and delivered a solution that exceeded all metrics.",
      rating: 5,
      avatar: "/images/avatar5.jpg",
      icon: Star,
      color: "from-yellow-500 to-amber-400",
    },
    {
      id: 6,
      name: "David Kim",
      position: "Operations Director, EnterprisePlus",
      content: "Reliable, efficient, and incredibly talented. Their work has had a significant impact on our bottom line and customer satisfaction.",
      rating: 5,
      avatar: "/images/avatar6.jpg",
      icon: Quote,
      color: "from-orange-300 to-amber-300",
    },
  ];

  const featuredTestimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      content: "300% traffic growth in 3 months! Exceptional results.",
      company: "TechFlow"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      content: "Delivered beyond expectations. True growth partners.",
      company: "InnovateLabs"
    },
    {
      id: 3,
      name: "Emily Thompson",
      content: "User engagement skyrocketed. Remarkable solutions.",
      company: "CloudScale"
    },
    {
      id: 4,
      name: "James Wilson",
      content: "Scalable infrastructure for millions. Professional team.",
      company: "DataDrive"
    },
    {
      id: 5,
      name: "Lisa Zhang",
      content: "Exceeded all metrics. Outstanding execution.",
      company: "StartupGrid"
    },
    {
      id: 6,
      name: "David Kim",
      content: "Significant impact on bottom line. Incredibly talented.",
      company: "EnterprisePlus"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-50 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-50 rounded-full blur-3xl"></div>
      
      {/* Floating Orange Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-6 h-6 bg-orange-200 rounded-full"></div>
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-8 h-8 bg-amber-200 rounded-full"></div>
      </div>
      <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: '4s' }}>
        <div className="w-4 h-4 bg-orange-300 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className=" mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest mb-6 border border-orange-200"
          >
            <Star className="w-4 h-4 fill-orange-500 text-orange-500" />
            Client Testimonials
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-anton text-5xl md:text-6xl lg:text-6xl text-gray-900 uppercase leading-tight mb-6"
          >
            What Our <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent mr-2">Clients</span> 
              Say
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-600 leading-relaxed"
          >
            Don't just take our word for it. Here's what our clients have to say about their experience working with us.
          </motion.p>
        </motion.div>

        {/* Marquee Scrolling Testimonials */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-16"
        >
          
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {/* Main Card */}
              <div className="relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-orange-200 shadow-lg hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
                  className={`absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-gradient-to-r ${testimonial.color} flex items-center justify-center shadow-lg`}
                >
                  <testimonial.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Quote Icon */}
                <Quote className="w-12 h-12 text-orange-100 mb-6" />

                {/* Content */}
                <p className="text-gray-700 text-lg leading-relaxed mb-6 flex-grow">
                  "{testimonial.content}"
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.1, type: "spring" }}
                    >
                      <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.8, type: "spring" }}
                    className="w-12 h-12 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full flex items-center justify-center text-white font-bold text-lg"
                  >
                    {testimonial.name.charAt(0)}
                  </motion.div>
                  <div>
                    <h4 className="text-gray-900 font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </div>

              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${testimonial.color} rounded-2xl opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-500 -z-10`}></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
        >
          {[
            { number: "500+", label: "Happy Clients", icon: Heart },
            { number: "98%", label: "Satisfaction Rate", icon: ThumbsUp },
            { number: "4.9/5", label: "Average Rating", icon: Star },
            { number: "24/7", label: "Support Available", icon: Zap },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-orange-50 rounded-2xl border border-orange-100 hover:border-orange-200 transition-all duration-300"
            >
              <stat.icon className="w-8 h-8 text-orange-500 mx-auto mb-4" />
              <div className="font-anton text-3xl text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 shadow-lg"
          >
            Join Our Happy Clients
          </motion.button>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;