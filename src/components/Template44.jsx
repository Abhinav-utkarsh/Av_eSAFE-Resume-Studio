import React from 'react';

export default function Template44({ resumeData }) {
  const { name, email, phone, linkedin, portfolio, summary, skills, experience, education, themeColor } = resumeData;
  const skillsList = skills ? skills.split(',').map(s => s.trim()).filter(Boolean) : [];
  const safeColor = themeColor || '#0f172a';

  return (
    <div className="p-12 font-sans bg-white text-gray-900 w-full min-h-full">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold uppercase tracking-[0.2em] mb-4" style={{ color: safeColor }}>{name || 'John Doe'}</h1>
        <div className="flex flex-col items-center text-xs font-semibold uppercase tracking-widest text-gray-500 gap-1">
          {email && <span className="break-all mx-3 my-1">{email}</span>}
          {phone && <span className="whitespace-nowrap mx-3 my-1">{phone}</span>}
          {linkedin && <a href={linkedin} target="_blank" rel="noreferrer" className="break-all hover:underline text-blue-600 mx-3 my-1">LinkedIn</a>}
          {portfolio && <a href={portfolio} target="_blank" rel="noreferrer" className="break-all hover:underline text-blue-600 mx-3 my-1">Portfolio</a>}
        </div>
      </div>

      <div className="w-12 h-1 mx-auto mb-8" style={{ backgroundColor: safeColor }}></div>
      {summary && <p className="text-sm text-center leading-relaxed mb-8 max-w-2xl mx-auto">{summary}</p>}

      {experience?.length > 0 && experience.some(e => e.title) && (
        <div className="mb-8">
          <h2 className="text-sm font-bold uppercase tracking-widest border-b border-gray-300 pb-2 mb-4">Experience</h2>
          <div className="space-y-6">
            {experience.map((exp) => exp.title && (
              <div key={exp.id}>
                <div className="flex justify-between text-base font-bold text-gray-900 mb-1">
                  <span>{exp.title}</span><span className="text-sm text-gray-600 font-semibold">{exp.duration}</span>
                </div>
                <div className="text-sm font-bold text-gray-500 mb-2 uppercase tracking-wider">{exp.company}</div>
                <p className="text-sm text-gray-700 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {education?.length > 0 && education.some(e => e.title) && (
        <div className="mb-8">
          <h2 className="text-sm font-bold uppercase tracking-widest border-b border-gray-300 pb-2 mb-4">Education</h2>
          {education.map((edu) => edu.degree && (
            <div key={edu.id} className="flex justify-between items-baseline mb-2">
              <span className="font-bold text-sm">{edu.degree} - <span className="font-normal">{edu.college}</span></span><span className="text-sm font-bold text-gray-600">{edu.year}</span>
            </div>
          ))}
        </div>
      )}

      {skillsList.length > 0 && <div><h2 className="text-sm font-bold uppercase tracking-widest border-b border-gray-300 pb-2 mb-4">Skills</h2><p className="text-sm text-gray-700 leading-loose">{skillsList.join('   |   ')}</p></div>}
    </div>
  );
}