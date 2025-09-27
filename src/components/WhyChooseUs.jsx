import React, { useState, useEffect } from "react";
import { 
  Code, 
  Shield, 
  Zap, 
  Users, 
  Award, 
  GitBranch,
  Cloud,
  Database,
  CheckCircle,
  Cpu,
  Globe,
  Server,
  GitMerge,
  Terminal,
  Clock,
  BarChart3
} from "lucide-react";

const WhyChooseUs = () => {
  const [activeTab, setActiveTab] = useState('performance');
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prev => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const performanceMetrics = [
    { icon: <Zap className="w-5 h-5" />, label: "Page Load Time", value: "<1.2s", trend: "+15%", positive: true },
    { icon: <Server className="w-5 h-5" />, label: "Server Response", value: "98ms", trend: "+22%", positive: true },
    { icon: <Globe className="w-5 h-5" />, label: "Global Uptime", value: "99.97%", trend: "99.9%", positive: true },
    { icon: <Database className="w-5 h-5" />, label: "Query Speed", value: "45ms", trend: "+18%", positive: true }
  ];

  const techStack = {
    frontend: [
      { name: "React/Next.js", proficiency: 96, projects: 89 },
      { name: "Vue/Nuxt.js", proficiency: 88, projects: 45 },
      { name: "TypeScript", proficiency: 94, projects: 92 },
      { name: "Tailwind CSS", proficiency: 98, projects: 78 }
    ],
    backend: [
      { name: "Node.js", proficiency: 95, projects: 67 },
      { name: "Python/Django", proficiency: 90, projects: 54 },
      { name: "PostgreSQL", proficiency: 92, projects: 61 },
      { name: "Redis", proficiency: 88, projects: 49 }
    ]
  };

  const projectStats = [
    { phase: "Planning", completed: 156, current: 12, color: "from-blue-500 to-cyan-500" },
    { phase: "Development", completed: 142, current: 18, color: "from-green-500 to-emerald-500" },
    { phase: "Testing", completed: 138, current: 8, color: "from-purple-500 to-pink-500" },
    { phase: "Deployment", completed: 134, current: 6, color: "from-orange-500 to-amber-500" }
  ];

  const qualityMetrics = [
    { metric: "Code Coverage", value: 92, target: 90, icon: <CheckCircle className="w-4 h-4" /> },
    { metric: "Bug Free Rate", value: 98.7, target: 95, icon: <Shield className="w-4 h-4" /> },
    { metric: "Client Satisfaction", value: 99.2, target: 95, icon: <Award className="w-4 h-4" /> },
    { metric: "On-Time Delivery", value: 96.5, target: 90, icon: <Clock className="w-4 h-4" /> }
  ];

  return (
    <section className="px-6 py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#00dc82 1px, transparent 1px),
                            linear-gradient(90deg, #00dc82 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Floating Tech Elements */}
      <div className="absolute top-20 left-10 opacity-10">
        <Terminal size={100} />
      </div>
      <div className="absolute bottom-20 right-10 opacity-10">
        <Code size={100} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-3 bg-gray-800/50 backdrop-blur-lg text-green-400 px-6 py-3 rounded-2xl text-sm font-mono mb-6 border border-gray-700/50">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            SYSTEM DASHBOARD - KRISHNA SOFTWARE SOLUTIONS
          </div>
          
          <h2 className="font-anton text-5xl md:text-6xl text-white uppercase mb-4 tracking-tight">
            ENGINEERING <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">EXCELLENCE</span>
          </h2>
          
          <p className="text-gray-400 text-lg leading-relaxed font-light">
            Real-time metrics showcasing our technical prowess, development efficiency, 
            and commitment to delivering exceptional software solutions.
          </p>
        </div>

        {/* Dashboard Tabs */}
        <div className="flex gap-2 mb-8 ">
          {['performance', 'technology', 'projects', 'quality'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-xl font-mono text-sm transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                  : 'bg-gray-800/50 text-gray-400 hover:text-gray-300 hover:bg-gray-700/50'
              }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Performance Metrics Grid */}
        {activeTab === 'performance' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="group bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 hover:border-green-500/30 transition-all duration-500">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-lg bg-gray-700/50 text-green-400">
                    {metric.icon}
                  </div>
                  <span className={`text-xs font-mono px-2 py-1 rounded ${
                    metric.positive ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                  }`}>
                    {metric.trend}
                  </span>
                </div>
                <div className="text-2xl font-mono font-bold text-white mb-1">{metric.value}</div>
                <div className="text-sm text-gray-400">{metric.label}</div>
                <div className="w-full bg-gray-700/50 rounded-full h-1 mt-3">
                  <div className="h-1 rounded-full bg-gradient-to-r from-green-400 to-cyan-400 transition-all duration-1000" 
                       style={{ width: `${85 + index * 5}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Technology Stack */}
        {activeTab === 'technology' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-green-400 font-mono text-lg mb-6 flex items-center gap-3">
                <Cpu className="w-5 h-5" />
                FRONTEND TECHNOLOGIES
              </h3>
              <div className="space-y-4">
                {techStack.frontend.map((tech, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{tech.name}</span>
                      <span className="text-green-400 font-mono text-sm">{tech.proficiency}%</span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full bg-gradient-to-r from-green-400 to-cyan-400 transition-all duration-1000"
                        style={{ width: `${tech.proficiency}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-500 font-mono">Used in {tech.projects} projects</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-cyan-400 font-mono text-lg mb-6 flex items-center gap-3">
                <Server className="w-5 h-5" />
                BACKEND TECHNOLOGIES
              </h3>
              <div className="space-y-4">
                {techStack.backend.map((tech, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{tech.name}</span>
                      <span className="text-cyan-400 font-mono text-sm">{tech.proficiency}%</span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-1000"
                        style={{ width: `${tech.proficiency}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-500 font-mono">Used in {tech.projects} projects</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Project Statistics */}
        {activeTab === 'projects' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {projectStats.map((stat, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50">
                <div className="text-center">
                  <div className={`text-3xl font-mono font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.completed}
                  </div>
                  <div className="text-gray-300 font-medium mb-1">{stat.phase}</div>
                  <div className="text-green-400 text-sm font-mono">+{stat.current} active</div>
                  <div className="w-16 h-1 bg-gradient-to-r from-gray-600 to-gray-400 rounded-full mx-auto mt-3">
                    <div 
                      className="h-1 rounded-full bg-gradient-to-r from-green-400 to-cyan-400 transition-all duration-1000"
                      style={{ width: `${90 - index * 5}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Quality Metrics */}
        {activeTab === 'quality' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {qualityMetrics.map((metric, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gray-700/50 text-green-400">
                    {metric.icon}
                  </div>
                  <span className="text-gray-300 font-medium text-sm">{metric.metric}</span>
                </div>
                <div className="flex items-end gap-2 mb-2">
                  <div className="text-2xl font-mono font-bold text-white">{metric.value}%</div>
                  <div className="text-green-400 text-sm font-mono mb-1">▲ {(metric.value - metric.target).toFixed(1)}%</div>
                </div>
                <div className="text-xs text-gray-500">Target: {metric.target}%</div>
                <div className="w-full bg-gray-700/50 rounded-full h-2 mt-3">
                  <div 
                    className="h-2 rounded-full bg-gradient-to-r from-green-400 to-cyan-400 transition-all duration-1000"
                    style={{ width: `${metric.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Live Status Bar */}
        <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-4 border border-gray-700/50">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm font-mono gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400">SYSTEM: OPTIMAL</span>
              </div>
              <span className="text-gray-400">Active Projects: <span className="text-white">24</span></span>
              <span className="text-gray-400">Team Online: <span className="text-white">18/20</span></span>
            </div>
            <div className="flex items-center gap-4 text-gray-400">
              <span>Deployments Today: <span className="text-white">7</span></span>
              <span>Code Commits: <span className="text-white">142</span></span>
              <span>Uptime: <span className="text-green-400">99.97%</span></span>
            </div>
          </div>
        </div>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-3 justify-center mt-8">
          {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker', 'Kubernetes', 'PostgreSQL'].map((tech) => (
            <div key={tech} className="px-4 py-2 bg-gray-800/50 backdrop-blur-lg rounded-full border border-gray-700/50 text-gray-300 text-sm font-mono hover:border-green-500/30 transition-colors">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;