import React from 'react';

export default function Template40({ resumeData }) {
  const { name, email, phone, linkedin, portfolio, summary, skills, experience, education, projects } = resumeData;
  const skillsList = skills ? skills.split(',').map(s => s.trim()).filter(Boolean) : [];

  return (
    <div className="p-12 font-sans bg-white text-black w-full min-h-full text-sm">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">{name || 'John Doe'}</h1>
        <p className="text-sm text-gray-600">
          {[email, phone].filter(Boolean).join(' | ')}
          {linkedin && <a href={linkedin} target="_blank" rel="noreferrer" className="break-all hover:underline text-blue-600 mx-3 my-1">LinkedIn</a>}
          {portfolio && <a href={portfolio} target="_blank" rel="noreferrer" className="break-all hover:underline text-blue-600 mx-3 my-1">Portfolio</a>}
        </p>
      </div>

      {/* Summary */}
      {summary && (
        <div className="mb-5">
          <h2 className="text-base font-bold">Summary</h2>
          <p className="text-sm text-gray-800 mt-1">{summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience?.length > 0 && experience.some(e => e.title) && (
        <div className="mb-5">
          <h2 className="text-base font-bold">Experience</h2>
          {experience.map((exp) => exp.title && (
            <div key={exp.id} className="mt-2">
              <div className="flex justify-between">
                <p className="font-semibold">{exp.title}</p>
                <p className="text-xs text-gray-600">{exp.duration}</p>
              </div>
              <p className="text-sm text-gray-700">{exp.company}</p>
              <p className="text-sm text-gray-800 mt-1">{exp.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education?.length > 0 && education.some(e => e.degree) && (
        <div className="mb-5">
          <h2 className="text-base font-bold">Education</h2>
          {education.map((edu) => edu.degree && (
            <div key={edu.id} className="mt-2">
              <div className="flex justify-between">
                <p className="font-semibold">{edu.degree}</p>
                <p className="text-xs text-gray-600">{edu.year}</p>
              </div>
              <p className="text-sm text-gray-700">{edu.college}</p>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skillsList.length > 0 && (
        <div>
          <h2 className="text-base font-bold">Skills</h2>
          <p className="text-sm text-gray-800 mt-1">{skillsList.join(', ')}</p>
        </div>
      )}
    </div>
  );
}