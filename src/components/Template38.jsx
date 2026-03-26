import React from 'react';

export default function Template38({ resumeData }) {
  const { name, email, phone, linkedin, portfolio, summary, skills, experience, education, projects } = resumeData;
  const skillsList = skills ? skills.split(',').map(s => s.trim()).filter(Boolean) : [];

  return (
    <div className="p-12 font-sans bg-white text-black w-full min-h-full">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight mb-2">{name || 'John Doe'}</h1>
        <p className="text-sm font-medium text-gray-600">
          {[email, phone].filter(Boolean).join(' · ')}
          {linkedin && <a href={linkedin} target="_blank" rel="noreferrer" className="break-all hover:underline text-blue-600 mx-3 my-1">LinkedIn</a>}
          {portfolio && <a href={portfolio} target="_blank" rel="noreferrer" className="break-all hover:underline text-blue-600 mx-3 my-1">Portfolio</a>}
        </p>
      </div>

      {/* Summary */}
      {summary && (
        <div className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-widest text-center mb-3 border-y py-1 border-gray-300">Summary</h2>
          <p className="text-sm text-center max-w-3xl mx-auto leading-relaxed">{summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience?.length > 0 && experience.some(e => e.title) && (
        <div className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-widest text-center mb-4 border-y py-1 border-gray-300">Experience</h2>
          {experience.map((exp) => exp.title && (
            <div key={exp.id} className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-base">{exp.title}</h3>
                <p className="text-xs font-bold text-gray-500">{exp.duration}</p>
              </div>
              <p className="text-sm font-semibold text-gray-700">{exp.company}</p>
              <p className="text-sm mt-1">{exp.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education?.length > 0 && education.some(e => e.degree) && (
        <div className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-widest text-center mb-4 border-y py-1 border-gray-300">Education</h2>
          {education.map((edu) => edu.degree && (
            <div key={edu.id} className="flex justify-between items-baseline mb-1">
              <p><span className="font-bold text-base">{edu.degree}</span>, {edu.college}</p>
              <p className="text-sm font-bold">{edu.year}</p>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skillsList.length > 0 && (
        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-center mb-3 border-y py-1 border-gray-300">Skills</h2>
          <p className="text-sm text-center">{skillsList.join(', ')}</p>
        </div>
      )}
    </div>
  );
}