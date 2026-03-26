import React from 'react';

export default function Template42({ resumeData }) {
  const { name, email, phone, linkedin, portfolio, summary, skills, experience, education, themeColor } = resumeData;
  const skillsList = skills ? skills.split(',').map(s => s.trim()).filter(Boolean) : [];
  const safeColor = themeColor || '#1e3a8a';

  return (
    <div className="p-12 font-sans bg-white text-gray-900 w-full min-h-full">
      <div className="flex justify-between items-start border-b-4 pb-6 mb-8" style={{ borderColor: safeColor }}>
        <h1 className="text-5xl font-black uppercase tracking-tight w-1/2" style={{ color: safeColor }}>{name || 'John Doe'}</h1>
        <div className="w-1/2 text-right text-sm font-medium space-y-1">
          {email && <span className="break-all mx-3 my-1">{email}</span>}
          {phone && <span className="whitespace-nowrap mx-3 my-1">{phone}</span>}
          {linkedin && <a href={linkedin} target="_blank" rel="noreferrer" className="break-all hover:underline text-blue-600 mx-3 my-1">LinkedIn</a>}
          {portfolio && <a href={portfolio} target="_blank" rel="noreferrer" className="break-all hover:underline text-blue-600 mx-3 my-1">Portfolio</a>}
        </div>
      </div>

      {summary && <p className="text-sm leading-relaxed mb-8 font-medium text-gray-700">{summary}</p>}

      {experience?.length > 0 && experience.some(e => e.title) && (
        <div className="mb-8">
          <h2 className="text-xl font-bold uppercase tracking-widest mb-4" style={{ color: safeColor }}>Experience</h2>
          <div className="space-y-6">
            {experience.map((exp) => exp.title && (
              <div key={exp.id} className="flex gap-6">
                <div className="w-1/4 text-sm font-bold text-gray-500 uppercase">{exp.duration}</div>
                <div className="w-3/4">
                  <h3 className="font-bold text-lg text-gray-900">{exp.title}</h3>
                  <p className="text-sm font-bold text-gray-700 mb-2">{exp.company}</p>
                  <p className="text-sm leading-relaxed text-gray-700">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex gap-6">
        <div className="w-1/4 text-sm font-bold uppercase tracking-widest" style={{ color: safeColor }}>Education</div>
        <div className="w-3/4 space-y-3">
          {education?.map((edu) => edu.degree && (
            <div key={edu.id} className="text-sm"><span className="font-bold">{edu.degree}</span> | {edu.college} | <span className="font-semibold">{edu.year}</span></div>
          ))}
        </div>
      </div>
      
      {skillsList.length > 0 && <div className="mt-8 border-t-2 pt-4 border-gray-100"><p className="text-sm font-semibold text-gray-600">{skillsList.join('  //  ')}</p></div>}
    </div>
  );
}