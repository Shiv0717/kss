import React from "react";
import { Heart, Code2, Mail, Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Mail className="w-4 h-4" />,
      href: "mailto:contact@kss.com",
      label: "Email"
    },
    {
      icon: <Github className="w-4 h-4" />,
      href: "https://github.com/kss-team",
      label: "GitHub"
    },
    {
      icon: <Twitter className="w-4 h-4" />,
      href: "https://twitter.com/kss-team",
      label: "Twitter"
    },
    {
      icon: <Linkedin className="w-4 h-4" />,
      href: "https://linkedin.com/company/kss-team",
      label: "LinkedIn"
    }
  ];

  return (
    <footer className="w-full bg-gradient-to-r from-gray-900 to-gray-800 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-6">
          {/* Brand Section */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Code2 className="w-6 h-6 text-orange-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">
                KSS
              </span>
            </div>
            <span className="text-gray-400">•</span>
            <span className="text-gray-300 text-sm">
              Building digital excellence
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-orange-400 hover:bg-gray-700 rounded-lg transition-all duration-300 group"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-gray-400">
            <span>&copy; {currentYear} KSS Team. All rights reserved.</span>
          </div>

          {/* Developed by */}
          <div className="flex items-center gap-2 text-gray-400">
            <span>Crafted with</span>
            <Heart className="w-4 h-4 text-red-400 fill-current animate-pulse" />
            <span>by</span>
            <span className="text-orange-400 font-medium hover:text-orange-300 transition-colors cursor-pointer">
              KSS Team
            </span>
          </div>

          {/* Additional Links */}
          <div className="flex items-center gap-4 text-gray-400">
            <a href="/privacy" className="hover:text-orange-400 transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="/terms" className="hover:text-orange-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;