import React from 'react';

export default function Template35({ resumeData }) {
  const { name, email, phone, linkedin, portfolio, summary, skills, experience, education } = resumeData;
  const skillsList = skills ? skills.split(',').map(s => s.trim()).filter(Boolean) : [];

  return (
    <div className="p-12 font-serif bg-white text-black w-full min-h-full">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold uppercase mb-1">{name || 'John Doe'}</h1>
        <div className="text-sm border-b border-black pb-2 flex flex-wrap gap-x-4">
          {[email, phone].filter(Boolean).map((item, i) => (
            <span key={i}>{item}</span>
          ))}
          {linkedin && <a href={linkedin} target="_blank" rel="noreferrer" className="break-all hover:underline text-blue-600 mx-3 my-1">LinkedIn</a>}
          {portfolio && <a href={portfolio} target="_blank" rel="noreferrer" className="break-all hover:underline text-blue-600 mx-3 my-1">Portfolio</a>}
        </div>
      </div>

      {/* Summary */}
      {summary && (
        <div className="mb-6">
          <h2 className="text-base font-bold uppercase tracking-wider mb-2">Profile</h2>
          <p className="text-sm leading-relaxed">{summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience?.length > 0 && experience.some(e => e.title) && (
        <div className="mb-6">
          <h2 className="text-base font-bold uppercase tracking-wider mb-3">Work Experience</h2>
          {experience.map((exp) => exp.title && (
            <div key={exp.id} className="mb-4 pl-4 border-l-2 border-gray-300">
              <div className="font-bold text-sm">{exp.title}</div>
              <div className="text-sm flex justify-between mb-2">
                <span className="font-semibold">{exp.company}</span>
                <span>{exp.duration}</span>
              </div>
              <p className="text-sm leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education?.length > 0 && education.some(e => e.degree) && (
        <div className="mb-6">
          <h2 className="text-base font-bold uppercase tracking-wider mb-3">Education</h2>
          {education.map((edu) => edu.degree && (
            <div key={edu.id} className="mb-2 pl-4 border-l-2 border-gray-300">
              <div className="font-bold text-sm">{edu.degree}</div>
              <div className="text-sm">{edu.college} | {edu.year}</div>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skillsList.length > 0 && (
        <div className="mb-6">
          <h2 className="text-base font-bold uppercase tracking-wider mb-2">Technical Skills</h2>
          <p className="text-sm leading-relaxed">{skillsList.join(', ')}</p>
        </div>
      )}
    </div>
  );
}