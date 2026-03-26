import React from 'react';

export default function Template47({ resumeData }) {
  const { name, email, phone, linkedin, portfolio, summary, skills, experience, education, themeColor } = resumeData;
  const skillsList = skills ? skills.split(',').map(s => s.trim()).filter(Boolean) : [];
  const safeColor = themeColor || '#f59e0b'; // Amber

  return (
    <div className="p-12 font-sans bg-white text-gray-900 w-full min-h-full">
      <div className="border-l-8 pl-6 mb-10" style={{ borderColor: safeColor }}>
        <h1 className="text-6xl font-black tracking-tighter mb-4">{name || 'John Doe'}</h1>
        <p className="text-sm font-bold text-gray-500 max-w-md">
          {email && <span className="break-all mx-3 my-1">{email}</span>}
          {phone && <span className="whitespace-nowrap mx-3 my-1">{phone}</span>}
          {linkedin && <a href={linkedin} target="_blank" rel="noreferrer" className="break-all hover:underline text-blue-600 mx-3 my-1">LinkedIn</a>}
          {portfolio && <a href={portfolio} target="_blank" rel="noreferrer" className="break-all hover:underline text-blue-600 mx-3 my-1">Portfolio</a>}
        </p>
      </div>

      {summary && <p className="text-lg font-medium leading-relaxed mb-10 text-gray-700">{summary}</p>}

      <div className="grid grid-cols-2 gap-10">
        {experience?.length > 0 && experience.some(e => e.title) && (
          <div>
            <h2 className="text-2xl font-black mb-6" style={{ color: safeColor }}>Experience.</h2>
            <div className="space-y-8">
              {experience.map((exp) => exp.title && (
                <div key={exp.id}>
                  <h3 className="font-bold text-xl">{exp.title}</h3>
                  <p className="text-sm font-bold text-gray-400 my-1">{exp.company} / {exp.duration}</p>
                  <p className="text-sm text-gray-700 leading-relaxed mt-2">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        
        <div className="space-y-10">
          {education?.length > 0 && education.some(e => e.degree) && (
            <div>
              <h2 className="text-2xl font-black mb-6" style={{ color: safeColor }}>Education.</h2>
              {education.map((edu) => edu.degree && (
                <div key={edu.id} className="mb-4"><h3 className="font-bold text-lg">{edu.degree}</h3><p className="text-sm text-gray-500">{edu.college} | {edu.year}</p></div>
              ))}
            </div>
          )}
          {skillsList.length > 0 && <div><h2 className="text-2xl font-black mb-6" style={{ color: safeColor }}>Skills.</h2><div className="flex flex-wrap gap-2">{skillsList.map((s, i) => <span key={i} className="px-3 py-1 bg-gray-900 text-white rounded-full text-xs font-bold">{s}</span>)}</div></div>}
        </div>
      </div>
    </div>
  );
}