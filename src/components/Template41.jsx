import React from 'react';

export default function Template41({ resumeData }) {
  const { name, email, phone, linkedin, portfolio, summary, skills, experience, education } = resumeData;
  const skillsList = skills ? skills.split(',').map(s => s.trim()).filter(Boolean) : [];

  return (
    <div className="p-12 font-serif bg-white text-gray-900 w-full min-h-full">
      <header className="text-center mb-8 border-y-2 border-gray-900 py-6">
        <h1 className="text-4xl font-bold uppercase tracking-widest mb-3">{name || 'John Doe'}</h1>
        <div className="text-sm font-medium flex flex-wrap justify-center gap-4 text-gray-700">
          {email && <span>{email}</span>}
          {phone && <span>| {phone}</span>}
          {linkedin && <a href={linkedin} target="_blank" rel="noreferrer" className="break-all hover:underline text-blue-600 mx-3 my-1">LinkedIn</a>}
          {portfolio && <a href={portfolio} target="_blank" rel="noreferrer" className="break-all hover:underline text-blue-600 mx-3 my-1">Portfolio</a>}
        </div>
      </header>

      {summary && (
        <div className="mb-6 border-b border-gray-200 pb-6">
          <p className="text-sm leading-relaxed text-justify">{summary}</p>
        </div>
      )}

      {experience?.length > 0 && experience.some(e => e.title) && (
        <div className="mb-6">
          <h2 className="text-lg font-bold uppercase tracking-widest text-center mb-4 bg-gray-100 py-1">Professional Experience</h2>
          <div className="space-y-5">
            {experience.map((exp) => exp.title && (
              <div key={exp.id}>
                <div className="flex justify-between font-bold text-base border-b border-gray-200 mb-1">
                  <span>{exp.title}</span><span>{exp.duration}</span>
                </div>
                <div className="italic text-sm text-gray-700 mb-2">{exp.company}</div>
                <p className="text-sm leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {education?.length > 0 && education.some(e => e.degree) && (
        <div className="mb-6">
          <h2 className="text-lg font-bold uppercase tracking-widest text-center mb-4 bg-gray-100 py-1">Education</h2>
          {education.map((edu) => edu.degree && (
            <div key={edu.id} className="flex justify-between items-baseline mb-2">
              <div className="text-sm"><span className="font-bold">{edu.degree}</span>, {edu.college}</div>
              <span className="text-sm font-bold">{edu.year}</span>
            </div>
          ))}
        </div>
      )}

      {skillsList.length > 0 && (
        <div className="text-center pt-4 border-t border-gray-200"><p className="text-sm leading-loose uppercase tracking-widest">{skillsList.join(' • ')}</p></div>
      )}
    </div>
  );
}