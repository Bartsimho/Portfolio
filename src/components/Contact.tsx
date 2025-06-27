import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Get In Touch</h2>
          <div className='max-w-lg mx-auto'>
            <h3 className="text-2xl font-semibold mb-6 text-center">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-center">
                <Mail className="mr-4 text-blue-600" />
                <span>ryan.shaw.2702@gmail.com</span>
              </div>
              <div className="flex items-center justify-center">
                <MapPin className="mr-4 text-blue-600" />
                <span>Chesterfield, UK</span>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}