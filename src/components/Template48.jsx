import React from 'react';

export default function Template48({ resumeData }) {
  const { name, email, phone, linkedin, portfolio, summary, skills, experience, education, themeColor } = resumeData;
  const skillsList = skills ? skills.split(',').map(s => s.trim()).filter(Boolean) : [];
  const safeColor = themeColor || '#10b981'; // Emerald

  return (
    <div className="flex font-sans bg-white text-gray-900 w-full min-h-full">
      <div className="w-[35%] bg-gray-900 text-white p-10 flex flex-col gap-8">
        <h1 className="text-4xl font-black tracking-tight leading-none" style={{ color: safeColor }}>{name || 'John Doe'}</h1>
        <div className="text-xs font-bold text-gray-400 space-y-2">
          {email && <span className="break-all mx-3 my-1">{email}</span>}
          {phone && <span className="whitespace-nowrap mx-3 my-1">{phone}</span>}
          {linkedin && <a href={linkedin} target="_blank" rel="noreferrer" className="break-all hover:underline text-blue-600 mx-3 my-1">LinkedIn</a>}
          {portfolio && <a href={portfolio} target="_blank" rel="noreferrer" className="break-all hover:underline text-blue-600 mx-3 my-1">Portfolio</a>}
        </div>
        {skillsList.length > 0 && (
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Skills</h2>
            <div className="flex flex-col gap-3">{skillsList.map((s, i) => <div key={i} className="flex items-center gap-2"><div className="w-2 h-2 rounded-full" style={{ backgroundColor: safeColor }}></div><span className="text-sm font-medium">{s}</span></div>)}</div>
          </div>
        )}
      </div>
      <div className="w-[65%] p-10 space-y-8">
        {summary && <div><h2 className="text-lg font-black uppercase mb-3 text-gray-400">Profile</h2><p className="text-sm leading-relaxed font-medium">{summary}</p></div>}
        {experience?.length > 0 && experience.some(e => e.title) && (
          <div>
            <h2 className="text-lg font-black uppercase mb-4 text-gray-400">Experience</h2>
            <div className="space-y-6">
              {experience.map((exp) => exp.title && (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline mb-1"><h3 className="font-bold text-lg">{exp.title}</h3><span className="text-xs font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded">{exp.duration}</span></div>
                  <p className="text-sm font-bold mb-2" style={{ color: safeColor }}>{exp.company}</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        {education?.length > 0 && education.some(e => e.title) && (
          <div>
            <h2 className="text-lg font-black uppercase mb-4 text-gray-400">Education</h2>
            {education.map((edu) => edu.degree && (
              <div key={edu.id} className="mb-3"><h3 className="font-bold text-base">{edu.degree}</h3><p className="text-sm text-gray-600 mt-1">{edu.college} | <span className="font-bold">{edu.year}</span></p></div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}