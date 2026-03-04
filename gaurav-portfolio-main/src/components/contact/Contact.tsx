'use client';

import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion as m } from 'framer-motion';

const Contact = () => {
    return (
        <m.section 
            className="py-20 px-4 min-h-screen justify-center items-center align-center flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            id='contact'
        >
            <div className="max-w-6xl mx-auto w-full">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                    Get In Touch
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                        <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Contact Info</h3>
                        
                        <div className="space-y-6">
                            <div className="flex items-start group">
                                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <FaPhone className="text-blue-600 dark:text-blue-400 text-xl" />
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">Phone</h4>
                                    <p className="text-gray-600 dark:text-gray-400">+91 6202413622</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start group">
                                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <FaEnvelope className="text-blue-600 dark:text-blue-400 text-xl" />
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">Email</h4>
                                    <p className="text-gray-600 dark:text-gray-400 break-all">gaurav22@iiserb.ac.in</p>
                                    <p className="text-gray-600 dark:text-gray-400 break-all">gauravkumar62024@gmail.com</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start group">
                                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <FaMapMarkerAlt className="text-blue-600 dark:text-blue-400 text-xl" />
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">Address</h4>
                                    <p className="text-gray-600 dark:text-gray-400">HOSTEL 1</p>
                                    <p className="text-gray-600 dark:text-gray-400">IISER BHOPAL</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4 mt-8">
                            <a 
                                href="https://github.com/yourusername" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center justify-center bg-gray-800 dark:bg-gray-700 text-white px-4 py-3 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                <FaGithub className="mr-2 text-xl" /> GitHub
                            </a>
                            <a 
                                href="https://linkedin.com/in/yourusername" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center justify-center bg-blue-600 dark:bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                <FaLinkedin className="mr-2 text-xl" /> LinkedIn
                            </a>
                        </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                        <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Send me a message</h3>
                        <form className="space-y-5">
                            <div>
                                <input 
                                    type="text" 
                                    placeholder="Your Name" 
                                    required 
                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all"
                                />
                            </div>
                            <div>
                                <input 
                                    type="email" 
                                    placeholder="Your Email" 
                                    required 
                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all"
                                />
                            </div>
                            <div>
                                <input 
                                    type="text" 
                                    placeholder="Subject" 
                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all"
                                />
                            </div>
                            <div>
                                <textarea 
                                    placeholder="Your Message" 
                                    rows={5} 
                                    required
                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all resize-none"
                                ></textarea>
                            </div>
                            <m.button 
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
                            >
                                Send Message
                            </m.button>
                        </form>
                    </div>
                </div>
            </div>
        </m.section>
    );
};

export default Contact;