import React from 'react';

export default function Template31({ resumeData }) {
  const { name, email, phone, linkedin, portfolio, summary, skills, experience, education, projects } = resumeData;
  const skillsList = skills ? skills.split(',').map(s => s.trim()).filter(Boolean) : [];

  return (
    <div className="p-12 font-serif bg-white text-black w-full min-h-full leading-normal">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold uppercase mb-2">{name || 'John Doe'}</h1>
        <p className="text-sm">
          {[email, phone].filter(Boolean).join('  |  ')}
          {linkedin && <a href={linkedin} target="_blank" rel="noreferrer" className="break-all hover:underline text-blue-600 mx-3 my-1">LinkedIn</a>}
          {portfolio && <a href={portfolio} target="_blank" rel="noreferrer" className="break-all hover:underline text-blue-600 mx-3 my-1">Portfolio</a>}
        </p>
      </div>

      {/* Summary */}
      {summary && (
        <div className="mb-6">
          <p className="text-sm">{summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience?.length > 0 && experience.some(e => e.title) && (
        <div className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b border-black mb-3">Professional Experience</h2>
          {experience.map((exp) => exp.title && (
            <div key={exp.id} className="mb-4">
              <div className="flex justify-between font-bold text-sm">
                <span>{exp.title}</span>
                <span>{exp.duration}</span>
              </div>
              <div className="text-sm font-bold italic mb-1">{exp.company}</div>
              <p className="text-sm">{exp.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education?.length > 0 && education.some(e => e.degree) && (
        <div className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b border-black mb-3">Education</h2>
          {education.map((edu) => edu.degree && (
            <div key={edu.id} className="flex justify-between text-sm mb-2">
              <span className="font-bold">{edu.degree}, {edu.college}</span>
              <span className="font-bold">{edu.year}</span>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skillsList.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b border-black mb-3">Skills</h2>
          <p className="text-sm">{skillsList.join(', ')}</p>
        </div>
      )}
    </div>
  );
}