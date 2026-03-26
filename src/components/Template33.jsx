import React from 'react';

export default function Template33({ resumeData }) {
  const { name, email, phone, linkedin, portfolio, summary, skills, experience, education } = resumeData;
  const skillsList = skills ? skills.split(',').map(s => s.trim()).filter(Boolean) : [];

  return (
    <div className="p-12 font-serif bg-white text-gray-900 w-full min-h-full">
      {/* Header */}
      <div className="flex flex-col items-center border-b-[3px] border-gray-900 pb-6 mb-6 text-center">
        <h1 className="text-4xl font-bold uppercase tracking-wide mb-3">{name || 'John Doe'}</h1>
        <div className="text-sm font-medium">
          {[email, phone].filter(Boolean).join('   |   ')}
          {linkedin && <a href={linkedin} target="_blank" rel="noreferrer" className="break-all hover:underline text-blue-600 mx-3 my-1">LinkedIn</a>}
          {portfolio && <a href={portfolio} target="_blank" rel="noreferrer" className="break-all hover:underline text-blue-600 mx-3 my-1">Portfolio</a>}
        </div>
      </div>

      {/* Summary */}
      {summary && (
        <div className="mb-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Executive Summary</h2>
          <p className="text-sm leading-relaxed">{summary}</p>
        </div>
      )}

      {/* Skills First (Executive Style) */}
      {skillsList.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Core Competencies</h2>
          <p className="text-sm leading-relaxed font-bold">{skillsList.join('  •  ')}</p>
        </div>
      )}

      {/* Experience */}
      {experience?.length > 0 && experience.some(e => e.title) && (
        <div className="mb-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4 border-b border-gray-200 pb-2">Professional Experience</h2>
          {experience.map((exp) => exp.title && (
            <div key={exp.id} className="mb-6">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-base">{exp.title}</h3>
                <span className="text-sm font-bold">{exp.duration}</span>
              </div>
              <div className="text-sm italic mb-2">{exp.company}</div>
              <p className="text-sm leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education?.length > 0 && education.some(e => e.degree) && (
        <div className="mb-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4 border-b border-gray-200 pb-2">Education</h2>
          {education.map((edu) => edu.degree && (
            <div key={edu.id} className="flex justify-between items-baseline mb-2 text-sm">
              <div><span className="font-bold">{edu.degree}</span>, {edu.college}</div>
              <span className="font-bold">{edu.year}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}