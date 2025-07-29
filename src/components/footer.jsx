import React from 'react'
import { Github, Linkedin, Twitter, Mail, MapPin, Phone , Instagram} from 'lucide-react'

const Footer = ( ) => {
  return (
    <footer id="con" className={`bg-stone-900 text-white py-12 mt-30 px-6 border-t border-gray-700`}>
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              {/* <img src="hey.png" alt="TechSuperNova Logo" className="h-10 w-10" /> */}
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                TechSuperNova
              </h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
             This site is managed by the TechSupernova core team, a student-led club under NIELIT Ajmer. It is not a registered company, and NIELIT Ajmer is not fully responsible for the content posted here. Content is community-contributed for learning and sharing. If you find anything inappropriate or unlawful, please report it to our Email for prompt action.
            </p>
            <div className="flex space-x-4">
               
              <a href="https://www.linkedin.com/company/techsupernova" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/techsupernova_nielitajm" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="mailto:techsupernova.nielitajm@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">Home</a></li>
              <li><a href="#abt" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">About Us</a></li>
              <li><a href="/gallery" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">Gallery</a></li>
              <li><a href="#con" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">Contact</a></li>
              <li><a href="/clubs" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">Clubs Connect</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Room no.5,Student Activity zone,Ground Floor,Academic Block- A,NIELIT Ajmer,Kota road,Ajmer,Rajasthan(305408)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+91 8741066047</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">techsupernova.nielitajm@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 TechSuperNova. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Privacy Policy</a>
              <a href="/tos" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Terms of Service</a>
              <a href="/cookie" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer