import React from 'react';

export default function Template39({ resumeData }) {
  const { name, email, phone, linkedin, portfolio, summary, skills, experience, education, projects } = resumeData;
  const skillsList = skills ? skills.split(',').map(s => s.trim()).filter(Boolean) : [];

  return (
    <div className="p-10 font-mono bg-white text-black w-full min-h-full text-sm">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">{name || 'John Doe'}</h1>
        <p className="text-xs">
          {[email, phone].filter(Boolean).join(' | ')}
          {linkedin && <a href={linkedin} target="_blank" rel="noreferrer" className="break-all hover:underline text-blue-600 mx-3 my-1">LinkedIn</a>}
          {portfolio && <a href={portfolio} target="_blank" rel="noreferrer" className="break-all hover:underline text-blue-600 mx-3 my-1">Portfolio</a>}
        </p>
      </div>

      {/* Summary */}
      {summary && (
        <div className="mb-5">
          <h2 className="text-sm font-bold uppercase">Objective</h2>
          <p className="text-xs mt-1">{summary}</p>
        </div>
      )}

      <p className="text-center my-4">----------------------------------------</p>

      {/* Experience */}
      {experience?.length > 0 && experience.some(e => e.title) && (
        <div className="mb-5">
          <h2 className="text-sm font-bold uppercase mb-2">Experience</h2>
          {experience.map((exp) => exp.title && (
            <div key={exp.id} className="mb-3">
              <p className="font-bold">{exp.title}</p>
              <p className="text-xs">{exp.company} // {exp.duration}</p>
              <p className="text-xs mt-1 pl-4">- {exp.description}</p>
            </div>
          ))}
        </div>
      )}

      <p className="text-center my-4">----------------------------------------</p>

      {/* Education */}
      {education?.length > 0 && education.some(e => e.degree) && (
        <div className="mb-5">
          <h2 className="text-sm font-bold uppercase mb-2">Education</h2>
          {education.map((edu) => edu.degree && (
            <div key={edu.id} className="mb-2">
              <p className="font-bold">{edu.degree}</p>
              <p className="text-xs">{edu.college} // {edu.year}</p>
            </div>
          ))}
        </div>
      )}

      <p className="text-center my-4">----------------------------------------</p>

      {/* Skills */}
      {skillsList.length > 0 && (
        <div>
          <h2 className="text-sm font-bold uppercase mb-1">Skills</h2>
          <p className="text-xs">[ {skillsList.join(', ')} ]</p>
        </div>
      )}
    </div>
  );
}