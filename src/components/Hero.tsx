import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center [url(../img/)] from-gray-900 to-gray-800 text-white relative">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
          Ryan Shaw
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300">
          Budding Junior Developer
        </p>
        <div className="flex justify-center gap-6 mb-12">
          <a href="https://github.com/bartsimho" className="hover:text-blue-400 transition-colors">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com" className="hover:text-blue-400 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:ryan.shaw.2702@gmail.com" className="hover:text-blue-400 transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 animate-bounce">
        <ChevronDown size={32} />
      </div>
    </div>
  );
}