import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  ExternalLink,
  Code,
  Sparkles,
  Home,
  Briefcase,
  User,
  FileText,
  ArrowRight,
  Star,
  Zap,
  Shield,
  Globe,
  Smartphone,
  Cloud,
  Database,
  Cpu,
  Palette,
} from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const location = useLocation();

  const services = [
    {
      category: "Development",
      icon: <Code size={20} className="text-blue-600" />,
      items: [
        {
          name: "Web Development",
          desc: "Modern responsive websites",
          path: "/services/web-dev",
        },
        {
          name: "Mobile Apps",
          desc: "iOS & Android applications",
          path: "/services/mobile",
        },
        {
          name: "E-Commerce",
          desc: "Online store solutions",
          path: "/services/ecommerce",
        },
        {
          name: "API Development",
          desc: "REST & GraphQL APIs",
          path: "/services/api",
        },
      ],
    },
    {
      category: "Design",
      icon: <Palette size={20} className="text-purple-600" />,
      items: [
        {
          name: "UI/UX Design",
          desc: "User-centered design",
          path: "/services/design",
        },
        {
          name: "Branding",
          desc: "Complete brand identity",
          path: "/services/branding",
        },
        {
          name: "Prototyping",
          desc: "Interactive prototypes",
          path: "/services/prototyping",
        },
      ],
    },
    {
      category: "Technologies",
      icon: <Cpu size={20} className="text-green-600" />,
      items: [
        {
          name: "React & Next.js",
          desc: "Modern frontend stack",
          path: "/tech/react",
        },
        { name: "Node.js", desc: "Backend solutions", path: "/tech/node" },
        {
          name: "Cloud Services",
          desc: "AWS, Azure, GCP",
          path: "/tech/cloud",
        },
        {
          name: "AI/ML Integration",
          desc: "Smart solutions",
          path: "/tech/ai",
        },
      ],
    },
  ];

  const navItems = [
    {
      path: "/",
      label: "Home",
      icon: <Home size={18} />,
      type: "link",
    },
    {
      path: "/services",
      label: "Services",
      icon: <Briefcase size={18} />,
      type: "mega",
      megaContent: services,
    },
    {
      path: "/works",
      label: "Our Work",
      icon: <Sparkles size={18} />,
      type: "link",
    },
    {
      path: "/about",
      label: "About",
      icon: <User size={18} />,
      type: "link",
    },
    {
      path: "/blog",
      label: "Blog",
      icon: <FileText size={18} />,
      type: "link",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveMegaMenu(null);
  }, [location]);

  const navbarVariants = {
    initial: { y: -100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <>
      <motion.header
        variants={navbarVariants}
        initial="initial"
        animate="animate"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-2xl  border-b border-gray-100"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center space-x-3 group cursor-pointer"
            >
              <motion.div
                className="relative"
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">K</span>
                </div>
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl blur opacity-30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>

              <div className="flex flex-col">
                <span className=" text-sm md:text-2xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Krishna Software Solution
                </span>
                <span className="text-xs font-medium text-gray-500 tracking-wider">
                  Digital Excellence
                </span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center space-x-1"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {navItems.map((item, index) => (
                <div key={item.path} className="relative">
                  {item.type === "mega" ? (
                    <div
                      onMouseEnter={() => setActiveMegaMenu(item.path)}
                      onMouseLeave={() => setActiveMegaMenu(null)}
                      className="relative"
                    >
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                          location.pathname.startsWith(item.path)
                            ? "text-orange-600 bg-orange-50 "
                            : "text-gray-700 hover:text-orange-600"
                        }`}
                      >
                        {item.icon}
                        <span>{item.label}</span>
                        <motion.div
                          animate={{
                            rotate: activeMegaMenu === item.path ? 180 : 0,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown size={16} />
                        </motion.div>
                      </motion.button>

                      {/* Mega Menu */}
                      <AnimatePresence>
                        {activeMegaMenu === item.path && (
                          <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.95 }}
                            className="absolute top-full left-1/2 mt-2 w-[90vw] max-w-[900px] -translate-x-1/2 bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-gray-100 overflow-hidden z-50"
                          >
                            <div className="p-8">
                              <div className="grid grid-cols-3 gap-8">
                                {item.megaContent.map(
                                  (category, categoryIndex) => (
                                    <motion.div
                                      key={category.category}
                                      initial={{ opacity: 0, x: -20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{
                                        delay: categoryIndex * 0.1,
                                      }}
                                      className="space-y-4"
                                    >
                                      <div className="flex items-center space-x-3 mb-4">
                                        {category.icon}
                                        <h3 className="font-bold text-gray-900 text-lg">
                                          {category.category}
                                        </h3>
                                      </div>
                                      <div className="space-y-3">
                                        {category.items.map((service) => (
                                          <motion.div
                                            key={service.name}
                                            whileHover={{ x: 5 }}
                                            className="group"
                                          >
                                            <Link
                                              to={service.path}
                                              className="block p-3 rounded-xl hover:bg-orange-50 transition-all duration-300"
                                            >
                                              <div className="font-semibold text-gray-800 group-hover:text-orange-600">
                                                {service.name}
                                              </div>
                                              <div className="text-sm text-gray-600 mt-1">
                                                {service.desc}
                                              </div>
                                            </Link>
                                          </motion.div>
                                        ))}
                                      </div>
                                    </motion.div>
                                  )
                                )}
                              </div>

                              {/* Mega Menu Footer */}
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="mt-8 pt-6 border-t border-gray-100"
                              >
                                <div className="flex items-center justify-between">
                                  <div>
                                    <h4 className="font-bold text-gray-900">
                                      Need a custom solution?
                                    </h4>
                                    <p className="text-gray-600 text-sm">
                                      Let's discuss your unique requirements
                                    </p>
                                  </div>
                                  <motion.div whileHover={{ scale: 1.05 }}>
                                    <Link
                                      to="/contact"
                                      className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                                    >
                                      <span>Get Quote</span>
                                      <ArrowRight size={16} />
                                    </Link>
                                  </motion.div>
                                </div>
                              </motion.div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                        location.pathname === item.path
                          ? "text-orange-600 bg-orange-50 shadow-sm"
                          : "text-gray-700 hover:text-orange-600"
                      }`}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="lg:hidden p-3 rounded-xl bg-white/80 backdrop-blur-lg shadow-lg border border-gray-200 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                  >
                    <X size={20} className="text-gray-700" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -180, opacity: 0 }}
                  >
                    <Menu size={20} className="text-gray-700" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-lg z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-white/95 backdrop-blur-2xl shadow-2xl border-l border-gray-200 z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center">
                      <span className="text-white font-bold text-lg">K</span>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">  Krishna Software Solution</div>
                      <div className="text-xs text-gray-500">
                        Digital Excellence
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-100"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Navigation Items */}
                <div className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item.type === "mega" ? (
                        <div className="rounded-xl bg-gray-50/50">
                          <button
                            onClick={() =>
                              setActiveMegaMenu(
                                activeMegaMenu === item.path ? null : item.path
                              )
                            }
                            className="flex items-center justify-between w-full p-4 text-gray-700 font-semibold rounded-xl hover:bg-orange-50 transition-all duration-300"
                          >
                            <div className="flex items-center space-x-3">
                              {item.icon}
                              <span>{item.label}</span>
                            </div>
                            <motion.div
                              animate={{
                                rotate: activeMegaMenu === item.path ? 180 : 0,
                              }}
                            >
                              <ChevronDown size={16} />
                            </motion.div>
                          </button>

                          <AnimatePresence>
                            {activeMegaMenu === item.path && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden pl-4"
                              >
                                <div className="pb-4 space-y-2">
                                  {item.megaContent.map((category) => (
                                    <div
                                      key={category.category}
                                      className="space-y-2"
                                    >
                                      <div className="flex items-center space-x-2 pt-3">
                                        {category.icon}
                                        <span className="font-semibold text-gray-700 text-sm">
                                          {category.category}
                                        </span>
                                      </div>
                                      {category.items.map((service) => (
                                        <Link
                                          key={service.name}
                                          to={service.path}
                                          className="block p-3 text-gray-600 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-all duration-300"
                                          onClick={() =>
                                            setIsMobileMenuOpen(false)
                                          }
                                        >
                                          {service.name}
                                        </Link>
                                      ))}
                                    </div>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          to={item.path}
                          className="flex items-center space-x-3 p-4 text-gray-700 font-semibold rounded-xl hover:bg-orange-50 hover:text-orange-600 transition-all duration-300"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.icon}
                          <span>{item.label}</span>
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8 pt-6 border-t border-gray-200"
                >
                  <Link
                    to="/contact"
                    className="flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Phone size={18} />
                    <span>Start Your Project</span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer */}
      <div className="h-20"></div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      `}</style>
    </>
  );
};

export default Navbar;
