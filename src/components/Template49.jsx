import React from 'react';

export default function Template49({ resumeData }) {
  const { name, email, phone, linkedin, portfolio, summary, skills, experience, education, themeColor } = resumeData;
  const skillsList = skills ? skills.split(',').map(s => s.trim()).filter(Boolean) : [];
  const safeColor = themeColor || '#6366f1'; // Indigo

  return (
    <div className="p-12 font-sans bg-white w-full min-h-full">
      <div className="bg-gray-100 rounded-3xl p-8 mb-8 text-center border-t-8 shadow-sm" style={{ borderColor: safeColor }}>
        <h1 className="text-4xl font-black text-gray-900 mb-3">{name || 'John Doe'}</h1>
        <div className="flex flex-wrap justify-center gap-4 text-sm font-bold text-gray-600">
          {email && <span className="break-all mx-3 my-1">{email}</span>}
          {phone && <span className="whitespace-nowrap mx-3 my-1">{phone}</span>}
          {linkedin && <a href={linkedin} target="_blank" rel="noreferrer" className="break-all hover:underline text-blue-600 mx-3 my-1">LinkedIn</a>}
          {portfolio && <a href={portfolio} target="_blank" rel="noreferrer" className="break-all hover:underline text-blue-600 mx-3 my-1">Portfolio</a>}
        </div>
      </div>

      {summary && <p className="text-sm leading-relaxed text-gray-700 text-center max-w-3xl mx-auto mb-8 font-medium">{summary}</p>}

      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2 space-y-8">
          {experience?.length > 0 && experience.some(e => e.title) && (
            <div>
              <h2 className="text-xl font-black uppercase mb-6 flex items-center gap-2 text-gray-900"><span className="w-2 h-6 rounded" style={{ backgroundColor: safeColor }}></span> Experience</h2>
              <div className="space-y-6">
                {experience.map((exp) => exp.title && (
                  <div key={exp.id} className="p-5 border border-gray-100 rounded-2xl shadow-sm">
                    <h3 className="font-bold text-lg text-gray-900">{exp.title}</h3>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest my-2">{exp.company} • {exp.duration}</p>
                    <p className="text-sm text-gray-700 leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="col-span-1 space-y-8">
          {skillsList.length > 0 && <div><h2 className="text-xl font-black uppercase mb-6 flex items-center gap-2 text-gray-900"><span className="w-2 h-6 rounded" style={{ backgroundColor: safeColor }}></span> Skills</h2>
          <div className="flex flex-wrap gap-2">{skillsList.map((s, i) => <span key={i} className="px-3 py-1 bg-gray-50 border border-gray-200 text-gray-700 rounded-full text-xs font-bold">{s}</span>)}</div></div>}
          
          {education?.length > 0 && education.some(e => e.title) && (
            <div><h2 className="text-xl font-black uppercase mb-6 flex items-center gap-2 text-gray-900"><span className="w-2 h-6 rounded" style={{ backgroundColor: safeColor }}></span> Education</h2>
            {education.map((edu) => edu.degree && (
              <div key={edu.id} className="mb-4"><h3 className="font-bold text-sm text-gray-900">{edu.degree}</h3><p className="text-xs text-gray-600 mt-1">{edu.college}</p><p className="text-xs font-bold mt-1" style={{ color: safeColor }}>{edu.year}</p></div>
            ))}</div>
          )}
        </div>
      </div>
    </div>
  );
}