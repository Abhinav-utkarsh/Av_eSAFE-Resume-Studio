import React from 'react';

export default function Template46({ resumeData }) {
  const { name, email, phone, linkedin, portfolio, summary, skills, experience, education, themeColor } = resumeData;
  const skillsList = skills ? skills.split(',').map(s => s.trim()).filter(Boolean) : [];
  const safeColor = themeColor || '#0284c7';

  return (
    <div className="p-10 font-sans bg-gray-50 text-gray-900 w-full min-h-full">
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-6">
        <h1 className="text-4xl font-black tracking-tight mb-2 text-gray-900">{name || 'John Doe'}</h1>
        <div className="flex flex-col text-sm font-semibold text-gray-500 gap-1">
          {email && <span className="break-all mx-3 my-1">{email}</span>}
          {phone && <span className="whitespace-nowrap mx-3 my-1">{phone}</span>}
          {linkedin && <a href={linkedin} target="_blank" rel="noreferrer" className="break-all hover:underline text-blue-600 mx-3 my-1">LinkedIn</a>}
          {portfolio && <a href={portfolio} target="_blank" rel="noreferrer" className="break-all hover:underline text-blue-600 mx-3 my-1">Portfolio</a>}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          {summary && <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"><p className="text-sm leading-relaxed text-gray-700">{summary}</p></div>}
          {experience?.length > 0 && experience.some(e => e.title) && (
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-lg font-black uppercase mb-4" style={{ color: safeColor }}>Experience</h2>
              <div className="space-y-6">
                {experience.map((exp) => exp.title && (
                  <div key={exp.id}>
                    <h3 className="font-bold text-base text-gray-900">{exp.title}</h3>
                    <div className="text-xs font-bold text-white px-2 py-1 inline-block rounded my-2" style={{ backgroundColor: safeColor }}>{exp.company} | {exp.duration}</div>
                    <p className="text-sm text-gray-700 leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="col-span-1 space-y-6">
          {skillsList.length > 0 && (
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-lg font-black uppercase mb-4" style={{ color: safeColor }}>Skills</h2>
              <div className="flex flex-col gap-2">{skillsList.map((skill, i) => <span key={i} className="text-xs font-bold bg-gray-100 px-3 py-1.5 rounded">{skill}</span>)}</div>
            </div>
          )}
          {education?.length > 0 && education.some(e => e.degree) && (
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-lg font-black uppercase mb-4" style={{ color: safeColor }}>Education</h2>
              {education.map((edu) => edu.degree && (
                <div key={edu.id} className="mb-3"><h3 className="font-bold text-sm">{edu.degree}</h3><p className="text-xs text-gray-500 my-1">{edu.college}</p><span className="text-xs font-bold text-gray-900">{edu.year}</span></div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}