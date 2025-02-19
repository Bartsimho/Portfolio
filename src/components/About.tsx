import React from 'react';
import { Code, Palette, Globe } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
              <Code className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p className="text-gray-600">Utilising React, Typescript and Tailwind to create responsive Websites</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-emerald-100 rounded-full flex items-center justify-center">
              <Globe className="text-emerald-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Data Analysis</h3>
            <p className="text-gray-600">Leveraging Machine Learning to Classify and perform Regression Analysis to gain key insights</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
              <Palette className="text-purple-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
            <p className="text-gray-600">Creating intuitive and engaging user experiences through thoughtful design.</p>
          </div>
        </div>
      </div>
    </section>
  );
}