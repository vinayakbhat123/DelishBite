import React from 'react';
const Contact = () => {
    return (
        <div className="contact p-8 max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen flex items-center justify-center" >
            <div className="text-center bg-white rounded-2xl shadow-2xl p-12 transform hover:scale-105 transition-all duration-300">
                <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">Contact Us</h1>
                <p className="text-gray-600 text-lg">We'd love to hear from you!</p>
            </div>
        </div>
       
    )
}
export default Contact;