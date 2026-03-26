import React from 'react';

export default function Template34({ resumeData }) {
  const { name, email, phone, linkedin, portfolio, summary, skills, experience, education, projects } = resumeData;
  const skillsList = skills ? skills.split(',').map(s => s.trim()).filter(Boolean) : [];

  return (
    <div className="p-12 font-sans bg-white text-gray-900 w-full min-h-full">
      {/* Header */}
      <div className="flex justify-between items-end border-b-2 border-black pb-4 mb-6">
        <h1 className="text-4xl font-bold uppercase tracking-tight">{name || 'John Doe'}</h1>
        <div className="text-right text-sm">
          {email && <span className="break-all mx-3 my-1">{email}</span>}
          {phone && <span className="whitespace-nowrap mx-3 my-1">{phone}</span>}
          {linkedin && <a href={linkedin} target="_blank" rel="noreferrer" className="break-all hover:underline text-blue-600 mx-3 my-1">LinkedIn</a>}
          {portfolio && <a href={portfolio} target="_blank" rel="noreferrer" className="break-all hover:underline text-blue-600 mx-3 my-1">Portfolio</a>}
        </div>
      </div>

      {/* Summary */}
      {summary && (
        <div className="mb-6">
          <p className="text-sm leading-relaxed">{summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience?.length > 0 && experience.some(e => e.title) && (
        <div className="mb-6">
          <h2 className="text-lg font-bold uppercase mb-3 bg-gray-100 py-1 px-2 rounded-sm">Experience</h2>
          {experience.map((exp) => exp.title && (
            <div key={exp.id} className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-base">{exp.company}</h3>
                <span className="text-sm font-semibold">{exp.duration}</span>
              </div>
              <div className="text-sm font-medium italic text-gray-700 mb-2">{exp.title}</div>
              <p className="text-sm leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education?.length > 0 && education.some(e => e.degree) && (
        <div className="mb-6">
          <h2 className="text-lg font-bold uppercase mb-3 bg-gray-100 py-1 px-2 rounded-sm">Education</h2>
          {education.map((edu) => edu.degree && (
            <div key={edu.id} className="mb-2 flex justify-between">
              <div className="text-sm"><span className="font-bold">{edu.college}</span> — {edu.degree}</div>
              <div className="text-sm font-semibold">{edu.year}</div>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skillsList.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold uppercase mb-3 bg-gray-100 py-1 px-2 rounded-sm">Skills</h2>
          <p className="text-sm leading-relaxed">{skillsList.join(', ')}</p>
        </div>
      )}
    </div>
  );
}