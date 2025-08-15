'use client';

import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-text text-white py-12">
      <div className="container-max">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="mb-4">
              <img
                src="/assets/Logo/Logo-white and blue.svg"
                alt="Vanyshr Logo"
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Protecting your privacy by removing personal information from data brokers and helping you regain control of your digital footprint.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-brand-accent rounded-full flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-brand-accent rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-brand-accent rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 Vanyshr. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
