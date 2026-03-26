import React from 'react';

export default function Template54({ resumeData }) {
  const { name, email, phone, linkedin, portfolio, summary, skills, experience, education, themeColor } = resumeData;
  const skillsList = skills ? skills.split(',').map(s => s.trim()).filter(Boolean) : [];
  const safeColor = themeColor || '#06b6d4'; // Cyan

  return (
    <div className="p-12 font-sans bg-gray-950 text-gray-300 w-full min-h-full">
      <div className="border-b border-gray-800 pb-8 mb-8 text-center">
        <h1 className="text-5xl font-black uppercase tracking-widest mb-4" style={{ color: safeColor, textShadow: `0 0 10px ${safeColor}50` }}>{name || 'John Doe'}</h1>
        <div className="flex flex-wrap justify-center gap-6 text-sm font-mono text-gray-400">
          {email && <span className="break-all mx-3 my-1">{email}</span>}
          {phone && <span className="whitespace-nowrap mx-3 my-1">{phone}</span>}
          {linkedin && <a href={linkedin} target="_blank" rel="noreferrer" className="break-all hover:underline text-blue-600 mx-3 my-1">LinkedIn</a>}
          {portfolio && <a href={portfolio} target="_blank" rel="noreferrer" className="break-all hover:underline text-blue-600 mx-3 my-1">Portfolio</a>}
        </div>
      </div>

      {summary && <div className="mb-10"><p className="text-sm leading-relaxed text-center max-w-3xl mx-auto border-l-2 border-r-2 px-6" style={{ borderColor: safeColor }}>{summary}</p></div>}

      <div className="space-y-10">
        {experience?.length > 0 && experience.some(e => e.title) && (
          <div>
            <h2 className="text-sm font-mono uppercase tracking-widest mb-6" style={{ color: safeColor }}>{'>'} Experience</h2>
            <div className="space-y-6">
              {experience.map((exp) => exp.title && (
                <div key={exp.id} className="bg-gray-900/50 p-6 rounded border border-gray-800 hover:border-cyan-900 transition-colors">
                  <div className="flex justify-between items-start mb-2"><h3 className="font-bold text-lg text-white">{exp.title}</h3><span className="font-mono text-xs px-2 py-1 bg-gray-900 rounded">{exp.duration}</span></div>
                  <p className="text-sm font-bold mb-3" style={{ color: safeColor }}>{exp.company}</p>
                  <p className="text-sm leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 gap-8">
          {education?.length > 0 && education.some(e => e.title) && (
            <div><h2 className="text-sm font-mono uppercase tracking-widest mb-6" style={{ color: safeColor }}>{'>'} Education</h2>
            {education.map((edu) => edu.degree && (
              <div key={edu.id} className="mb-4"><h3 className="font-bold text-white text-base">{edu.degree}</h3><p className="text-sm text-gray-400 mt-1">{edu.college}</p><p className="font-mono text-xs mt-2 text-gray-500">{edu.year}</p></div>
            ))}</div>
          )}
          {skillsList.length > 0 && <div><h2 className="text-sm font-mono uppercase tracking-widest mb-6" style={{ color: safeColor }}>{'>'} Skills</h2>
          <div className="flex flex-wrap gap-2">{skillsList.map((s, i) => <span key={i} className="px-3 py-1 bg-gray-900 text-gray-300 font-mono text-xs rounded border border-gray-800">{s}</span>)}</div></div>}
        </div>
      </div>
    </div>
  );
}