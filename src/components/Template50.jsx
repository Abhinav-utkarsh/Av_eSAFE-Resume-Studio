import React from 'react';

export default function Template50({ resumeData }) {
  const { name, email, phone, linkedin, portfolio, summary, skills, experience, education, themeColor } = resumeData;
  const skillsList = skills ? skills.split(',').map(s => s.trim()).filter(Boolean) : [];
  const safeColor = themeColor || '#8b5cf6';

  return (
    <div className="p-12 font-sans bg-white text-gray-900 w-full min-h-full">
      <header className="mb-10">
        <h1 className="text-5xl font-bold tracking-tighter mb-2">{name || 'John Doe'}</h1>
        <div className="font-mono text-xs text-gray-500 flex flex-col gap-1">
          {email && <span className="break-all mx-3 my-1">{email}</span>}
          {phone && <span className="whitespace-nowrap mx-3 my-1">{phone}</span>}
          {linkedin && <a href={linkedin} target="_blank" rel="noreferrer" className="break-all hover:underline text-blue-600 mx-3 my-1">LinkedIn</a>}
          {portfolio && <a href={portfolio} target="_blank" rel="noreferrer" className="break-all hover:underline text-blue-600 mx-3 my-1">Portfolio</a>}
        </div>
      </header>

      {summary && (
        <div className="mb-8">
          <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">{'// Summary'}</h2>
          <p className="text-sm font-medium leading-relaxed">{summary}</p>
        </div>
      )}

      {experience?.length > 0 && experience.some(e => e.title) && (
        <div className="mb-8">
          <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">{'// Experience'}</h2>
          <div className="space-y-6 border-l-2 pl-4" style={{ borderColor: `${safeColor}30` }}>
            {experience.map((exp) => exp.title && (
              <div key={exp.id}>
                <h3 className="font-bold text-lg">{exp.title}</h3>
                <p className="font-mono text-xs font-bold mb-2 mt-1" style={{ color: safeColor }}>{exp.company} [{exp.duration}]</p>
                <p className="text-sm text-gray-700 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {education?.length > 0 && education.some(e => e.degree) && (
        <div className="mb-8"><h2 className="font-mono text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">{'// Education'}</h2>
        {education.map((edu) => edu.degree && (
          <div key={edu.id} className="mb-2"><span className="font-bold text-sm">{edu.degree}</span> <span className="font-mono text-xs text-gray-500">at {edu.college} ({edu.year})</span></div>
        ))}</div>
      )}
      {skillsList.length > 0 && <div><h2 className="font-mono text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">{'// Skills'}</h2><p className="font-mono text-xs font-bold bg-gray-50 p-4 rounded text-gray-800 leading-loose">{skillsList.join('   ')}</p></div>}
    </div>
  );
}