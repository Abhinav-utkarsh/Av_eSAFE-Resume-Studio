import React from 'react';

export default function Template37({ resumeData }) {
  const { name, email, phone, linkedin, portfolio, summary, skills, experience, education, projects } = resumeData;
  const skillsList = skills ? skills.split(',').map(s => s.trim()).filter(Boolean) : [];

  return (
    <div className="p-10 font-serif bg-white text-black w-full min-h-full text-xs leading-snug">
      {/* Header */}
      <div className="text-left mb-5">
        <h1 className="text-2xl font-bold mb-1">{name || 'John Doe'}</h1>
        <p className="text-xs">
          {[email, phone].filter(Boolean).join(' | ')}
          {linkedin && <a href={linkedin} target="_blank" rel="noreferrer" className="break-all hover:underline text-blue-600 mx-3 my-1">LinkedIn</a>}
          {portfolio && <a href={portfolio} target="_blank" rel="noreferrer" className="break-all hover:underline text-blue-600 mx-3 my-1">Portfolio</a>}
        </p>
      </div>

      {/* Summary */}
      {summary && (
        <div className="mb-4">
          <h2 className="text-sm font-bold uppercase mb-1">Summary</h2>
          <p className="text-xs">{summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience?.length > 0 && experience.some(e => e.title) && (
        <div className="mb-4">
          <h2 className="text-sm font-bold uppercase mb-2">Experience</h2>
          {experience.map((exp) => exp.title && (
            <div key={exp.id} className="mb-3">
              <div className="flex justify-between">
                <p className="font-bold">{exp.title}, <span className="italic">{exp.company}</span></p>
                <p>{exp.duration}</p>
              </div>
              <ul className="list-disc pl-5 mt-1">
                <li className="text-xs">{exp.description}</li>
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education?.length > 0 && education.some(e => e.degree) && (
        <div className="mb-4">
          <h2 className="text-sm font-bold uppercase mb-2">Education</h2>
          {education.map((edu) => edu.degree && (
            <div key={edu.id} className="flex justify-between mb-1">
              <p><span className="font-bold">{edu.degree}</span>, {edu.college}</p>
              <p>{edu.year}</p>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skillsList.length > 0 && (
        <div>
          <h2 className="text-sm font-bold uppercase mb-1">Skills</h2>
          <p className="text-xs">{skillsList.join('; ')}</p>
        </div>
      )}
    </div>
  );
}