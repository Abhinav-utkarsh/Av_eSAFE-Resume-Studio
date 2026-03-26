import React from 'react';

export default function Preview() {
  return (
    <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-10 min-h-[800px]">
      <div className="border-b-2 border-gray-800 pb-6 mb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">John Doe</h1>
        <p className="text-lg text-gray-600">john@example.com</p>
      </div>
      
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-300 pb-2 mb-4">
          Skills
        </h2>
        <ul className="list-disc list-inside text-gray-700 px-4 space-y-1">
          <li>React</li>
          <li>Tailwind CSS</li>
          <li>JavaScript</li>
        </ul>
      </div>
    </div>
  );
}