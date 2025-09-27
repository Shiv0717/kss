"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCreative } from "swiper/modules";
import { ArrowUpRight, ExternalLink, Github, Play } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-creative";

const projects = [
  {
    title: "ECOMPRO SEO OPTIMIZATION",
    description: "Increased organic traffic by 300% with advanced SEO strategies and technical optimization.",
    image: "https://cdn.dribbble.com/userupload/15023900/file/original-ccf7358e67c02f6c2b8b2aae66554e49.png?resize=2048x1536&vertical=center",
    category: "SEO & Marketing",
    results: ["+300% Traffic", "95% ROI", "Top 5 Rankings"],
    tech: ["React", "Next.js", "Python"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "LUXURYLAUNCH CAMPAIGN",
    description: "Revolutionizing luxury brand marketing with AI-powered personalized campaigns and analytics.",
    image: "https://cdn.dribbble.com/userupload/16839775/file/original-8525fb86505cc39003fb206ea3b68119.png?resize=2048x1536&vertical=center",
    category: "Brand Strategy",
    results: ["+450% Engagement", "2M+ Reach", "25% Conversion"],
    tech: ["Vue.js", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "BRAND BOOST INITIATIVE",
    description: "Comprehensive digital transformation driving sustainable lead generation and business growth.",
    image: "https://cdn.dribbble.com/userupload/14620509/file/original-c54dae5db1f3d079a519efaaa70ef3bc.png?resize=2048x1536&vertical=center",
    category: "Digital Transformation",
    results: ["+200% Leads", "40% Cost Reduction", "99% Satisfaction"],
    tech: ["Angular", "Firebase", "AWS"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "SMARTTECH AI PLATFORM",
    description: "Enterprise AI solution with machine learning algorithms for predictive analytics and automation.",
    image: "https://cdn.dribbble.com/userupload/14816708/file/original-1fcb47b32338de7ddc0dca78677fe60b.png?resize=2048x1536&vertical=center",
    category: "AI & Machine Learning",
    results: ["85% Accuracy", "10x Speed", "24/7 Automation"],
    tech: ["Python", "TensorFlow", "Docker"],
    liveUrl: "#",
    githubUrl: "#"
  },
  
];

const FeaturedProjects = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Enhanced Heading with Navigation */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16">
          <div className="text-center lg:text-left mb-8 lg:mb-0">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-6">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              Featured Portfolio
            </div>
            
            <h2 className="font-anton text-5xl md:text-6xl lg:text-7xl text-gray-900 uppercase leading-tight mb-6">
              Our <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent mr-2">Digital</span> 
              Innovations
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            Explore our portfolio of cutting-edge software solutions, web applications, and mobile apps that drive efficiency, scalability, and digital transformation for businesses across industries.
            </p>
          </div>

          {/* Navigation Arrows - Moved to top right */}
          <div className="flex items-center justify-center lg:justify-end gap-4">
            <button
              ref={navigationPrevRef}
              className="w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl border border-gray-200 hover:border-orange-200 flex items-center justify-center group transition-all duration-300 hover:-translate-x-1"
            >
              <svg className="w-6 h-6 text-gray-600 group-hover:text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              ref={navigationNextRef}
              className="w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl border border-gray-200 hover:border-orange-200 flex items-center justify-center group transition-all duration-300 hover:translate-x-1"
            >
              <svg className="w-6 h-6 text-gray-600 group-hover:text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Enhanced Swiper */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay, EffectCreative]}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            effect="creative"
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -400],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            spaceBetween={30}
            slidesPerView={1}
            
            loop={true}
            className="!pb-20"
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="group w-full relative bg-white rounded-3xl transition-all duration-500 hover:-translate-y-4 overflow-hidden border border-gray-100">
                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex gap-2 mb-3">
                          {project.tech.map((tech, techIndex) => (
                            <span key={techIndex} className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full border border-white/30">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-bold rounded-full">
                        {project.category}
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                        <ExternalLink className="w-4 h-4 text-gray-900" />
                      </button>
                      <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                        <Github className="w-4 h-4 text-gray-900" />
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-anton text-xl text-gray-900 uppercase mb-3 leading-tight group-hover:text-orange-600 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Results */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.results.map((result, resultIndex) => (
                        <span key={resultIndex} className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded">
                          {result}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <button className="flex items-center gap-2 text-gray-700 hover:text-orange-600 font-medium text-sm transition-colors group/btn">
                        View Case Study
                        <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </button>
                      
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Play className="w-3 h-3" />
                        Watch Demo
                      </div>
                    </div>
                  </div>

                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination Dots - Centered below slider */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <div key={index} className="w-2 h-2 bg-gray-300 rounded-full hover:bg-orange-500 transition-colors cursor-pointer"></div>
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { number: "250+", label: "Projects Completed" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "5M+", label: "Users Reached" },
            { number: "15+", label: "Industries Served" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/50">
              <div className="font-anton text-3xl text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;