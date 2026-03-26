import React from 'react';

export default function Template43({ resumeData }) {
  const { name, email, phone, linkedin, portfolio, summary, skills, experience, education } = resumeData;
  const skillsList = skills ? skills.split(',').map(s => s.trim()).filter(Boolean) : [];

  return (
    <div className="p-12 font-serif bg-white text-gray-800 w-full min-h-full">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{name || 'John Doe'}</h1>
        <div className="text-sm font-medium text-gray-600 flex flex-wrap gap-x-4">
          {email && <span className="break-all mx-3 my-1">{email}</span>}
          {phone && <span className="whitespace-nowrap mx-3 my-1">{phone}</span>}
          {linkedin && <a href={linkedin} target="_blank" rel="noreferrer" className="break-all hover:underline text-blue-600 mx-3 my-1">LinkedIn</a>}
          {portfolio && <a href={portfolio} target="_blank" rel="noreferrer" className="break-all hover:underline text-blue-600 mx-3 my-1">Portfolio</a>}
        </div>
      </div>

      {summary && <div className="mb-6 p-4 bg-gray-50 rounded"><p className="text-sm leading-relaxed">{summary}</p></div>}

      {experience?.length > 0 && experience.some(e => e.title) && (
        <div className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-widest bg-gray-200 text-gray-800 px-3 py-1 mb-4 rounded-sm">Experience</h2>
          {experience.map((exp) => exp.title && (
            <div key={exp.id} className="mb-5 px-3">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-base text-gray-900">{exp.title}</h3>
                <span className="text-sm font-bold text-gray-600">{exp.duration}</span>
              </div>
              <p className="text-sm italic text-gray-700 mb-2">{exp.company}</p>
              <p className="text-sm leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      )}

      {education?.length > 0 && education.some(e => e.degree) && (
        <div className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-widest bg-gray-200 text-gray-800 px-3 py-1 mb-4 rounded-sm">Education</h2>
          {education.map((edu) => edu.degree && (
            <div key={edu.id} className="mb-2 px-3 flex justify-between">
              <div className="text-sm"><span className="font-bold">{edu.degree}</span>, {edu.college}</div>
              <span className="text-sm font-bold">{edu.year}</span>
            </div>
          ))}
        </div>
      )}

      {skillsList.length > 0 && <div><h2 className="text-sm font-bold uppercase tracking-widest bg-gray-200 text-gray-800 px-3 py-1 mb-3 rounded-sm">Skills</h2><p className="text-sm px-3">{skillsList.join(', ')}</p></div>}
    </div>
  );
}