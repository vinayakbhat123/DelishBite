import React from 'react';
import {Link } from 'react-router-dom';
import { FaFacebook,FaInstagram,FaTwitter,FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="footer bg-gray-900 text-white py-10">
            <div className="footer-content max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                
                <div className="mb-6 md:mb-0">
                    <h3 className="text-2xl font-bold mb-4">Food Delivery Website</h3>
                </div>

                <div className="footer-column mb-6 md:mb-0">
                    <h3 className="text-xl font-semibold mb-2">About Us</h3>
                    <p className="text-gray-300 text-sm">We are a leading food delivery service, committed to bringing you the best meals from your favorite restaurants.</p>
                </div>

                <div className="footer-column mb-6 md:mb-0">
                    <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
                    <ul className="space-y-1 text-gray-300 text-sm">
                        <li><Link className="hover:text-white transition" to="/">Home</Link></li>
                        <li><Link className="hover:text-white transition" to="/about">About</Link></li>
                        <li><Link className="hover:text-white transition" to="/cart">Cart</Link></li>
                        <li><Link className="hover:text-white transition" to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-conlumn mb-6 md:mb-0">
                    <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
                    <p className="text-gray-300 text-sm">Email: support@DelishBite.com</p>
                    <p className="text-gray-300 text-sm">Phone: (123) 456-7890</p>
                </div>

                <div className="footer-social col-span-1 md:col-span-4 mt-6">
                    <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
                    <div className="social-icons flex gap-4 text-gray-300">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition"><FaFacebook /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition"><FaTwitter /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition"><FaInstagram /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition"><FaLinkedin /></a>
                    </div>
                </div>
            </div>

            <div className='footer-bottom mt-10 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm'>
                <p>&copy; 2025 DelisBite. All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer;