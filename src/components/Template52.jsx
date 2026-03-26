import React from 'react';

export default function Template52({ resumeData }) {
  const { name, email, phone, linkedin, portfolio, summary, skills, experience, education, themeColor } = resumeData;
  const skillsList = skills ? skills.split(',').map(s => s.trim()).filter(Boolean) : [];
  const safeColor = themeColor || '#000000';

  return (
    <div className="p-12 font-sans bg-white text-gray-900 w-full min-h-full">
      <div className="mb-10 text-right">
        <h1 className="text-7xl font-black uppercase tracking-tighter mb-4" style={{ color: safeColor }}>{name || 'John Doe'}</h1>
        <div className="flex flex-col text-xs font-bold tracking-widest uppercase text-gray-500 gap-1 items-end">
          {email && <span className="break-all mx-3 my-1">{email}</span>}
          {phone && <span className="whitespace-nowrap mx-3 my-1">{phone}</span>}
          {linkedin && <a href={linkedin} target="_blank" rel="noreferrer" className="break-all hover:underline text-blue-600 mx-3 my-1">LinkedIn</a>}
          {portfolio && <a href={portfolio} target="_blank" rel="noreferrer" className="break-all hover:underline text-blue-600 mx-3 my-1">Portfolio</a>}
        </div>
      </div>

      {summary && <div className="border-l-4 pl-6 mb-10" style={{ borderColor: safeColor }}><p className="text-lg font-bold leading-relaxed">{summary}</p></div>}

      <div className="grid grid-cols-4 gap-8">
        <div className="col-span-1 space-y-10 text-right border-r-2 pr-8 border-gray-100">
          {skillsList.length > 0 && <div><h2 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-4">Skills</h2><ul className="space-y-2">{skillsList.map((s, i) => <li key={i} className="text-sm font-bold">{s}</li>)}</ul></div>}
          {education?.length > 0 && education.some(e => e.title) && (
            <div><h2 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-4">Edu</h2>
            {education.map((edu) => edu.degree && (
              <div key={edu.id} className="mb-4"><h3 className="font-bold text-sm leading-tight">{edu.degree}</h3><p className="text-xs text-gray-500 mt-1">{edu.college}</p><p className="text-xs font-bold mt-1">{edu.year}</p></div>
            ))}</div>
          )}
        </div>
        <div className="col-span-3 space-y-10">
          {experience?.length > 0 && experience.some(e => e.title) && (
            <div>
              <h2 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-6">Work Experience</h2>
              <div className="space-y-8">
                {experience.map((exp) => exp.title && (
                  <div key={exp.id}>
                    <h3 className="font-bold text-2xl">{exp.title}</h3><p className="text-sm font-bold my-2" style={{ color: safeColor }}>{exp.company} — {exp.duration}</p><p className="text-sm leading-relaxed text-gray-700 font-medium">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}