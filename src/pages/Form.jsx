import React from 'react';

export default function Form() {
  return (
    <div className="p-8 max-w-xl mx-auto w-full">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Personal Details</h2>
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input 
            type="text" 
            placeholder="John Doe" 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input 
            type="email" 
            placeholder="john@example.com" 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Skills</label>
          <textarea 
            rows="5" 
            placeholder="React, Tailwind CSS, JavaScript..." 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          />
        </div>
      </form>
    </div>
  );
}