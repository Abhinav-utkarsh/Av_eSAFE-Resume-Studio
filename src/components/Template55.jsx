import React from 'react';

export default function Template55({ resumeData }) {
  const { name, email, phone, linkedin, portfolio, summary, skills, experience, education, themeColor } = resumeData;
  const skillsList = skills ? skills.split(',').map(s => s.trim()).filter(Boolean) : [];
  const safeColor = themeColor || '#000000';

  return (
    <div className="p-12 font-serif bg-[#f4f4f0] text-gray-900 w-full min-h-full">
      <div className="flex items-end justify-between border-b-2 pb-6 mb-8" style={{ borderColor: safeColor }}>
        <h1 className="text-6xl font-normal tracking-tight leading-none w-2/3" style={{ color: safeColor }}>{name || 'John Doe'}</h1>
        <div className="text-xs font-sans font-bold uppercase tracking-widest text-right w-1/3 space-y-1">
          {email && <div>{email}</div>}
          {phone && <div>{phone}</div>}
          {linkedin && <div><a href={linkedin} target="_blank" rel="noreferrer" className="underline hover:text-gray-600 transition-colors">LinkedIn</a></div>}
          {portfolio && <div><a href={portfolio} target="_blank" rel="noreferrer" className="underline hover:text-gray-600 transition-colors">Portfolio</a></div>}
        </div>
      </div>

      {summary && <p className="text-lg leading-relaxed font-normal italic mb-10 max-w-3xl">{summary}</p>}

      <div className="grid grid-cols-3 gap-12">
        <div className="col-span-1 space-y-10">
          {skillsList.length > 0 && <div><h2 className="text-xs font-sans font-bold uppercase tracking-widest mb-4">Core Skills</h2><div className="flex flex-col gap-2 font-sans text-sm font-semibold">{skillsList.map((s, i) => <span key={i} className="border-b border-gray-300 pb-1">{s}</span>)}</div></div>}
          {education?.length > 0 && education.some(e => e.title) && (
            <div><h2 className="text-xs font-sans font-bold uppercase tracking-widest mb-4">Education</h2>
            {education.map((edu) => edu.degree && (
              <div key={edu.id} className="mb-4"><h3 className="font-bold text-base">{edu.degree}</h3><p className="text-sm mt-1">{edu.college}</p><p className="font-sans text-xs font-bold mt-2">{edu.year}</p></div>
            ))}</div>
          )}
        </div>
        <div className="col-span-2 space-y-10">
          {experience?.length > 0 && experience.some(e => e.title) && (
            <div>
              <h2 className="text-xs font-sans font-bold uppercase tracking-widest mb-6 border-b border-gray-900 pb-2 inline-block">Experience</h2>
              <div className="space-y-8">
                {experience.map((exp) => exp.title && (
                  <div key={exp.id}>
                    <h3 className="font-bold text-2xl mb-1">{exp.title}</h3><div className="font-sans text-xs font-bold uppercase tracking-widest mb-3 text-gray-500">{exp.company} — {exp.duration}</div><p className="text-sm leading-relaxed">{exp.description}</p>
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