import React from 'react';

export default function Template51({ resumeData }) {
  const { name, email, phone, linkedin, portfolio, summary, skills, experience, education, themeColor } = resumeData;
  const skillsList = skills ? skills.split(',').map(s => s.trim()).filter(Boolean) : [];
  const safeColor = themeColor || '#ec4899'; // Pink

  return (
    <div className="p-10 font-sans bg-[#fdf2f8] text-gray-900 w-full min-h-full">
      <div className="bg-white rounded-[40px] p-10 shadow-xl shadow-pink-100/50 mb-8 border border-pink-50">
        <h1 className="text-6xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r" style={{ backgroundImage: `linear-gradient(to right, ${safeColor}, #8b5cf6)` }}>{name || 'John Doe'}</h1>
        <div className="flex flex-wrap gap-3 text-xs font-bold text-gray-600 uppercase tracking-widest">
          {email && <span className="break-all mx-3 my-1">{email}</span>}
          {phone && <span className="whitespace-nowrap mx-3 my-1">{phone}</span>}
          {linkedin && <a href={linkedin} target="_blank" rel="noreferrer" className="break-all hover:underline text-blue-600 mx-3 my-1">LinkedIn</a>}
          {portfolio && <a href={portfolio} target="_blank" rel="noreferrer" className="break-all hover:underline text-blue-600 mx-3 my-1">Portfolio</a>}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-8">
          {summary && <div className="bg-white rounded-[30px] p-8 shadow-sm"><h2 className="text-lg font-black uppercase mb-3" style={{ color: safeColor }}>Bio</h2><p className="text-sm font-medium leading-relaxed text-gray-700">{summary}</p></div>}
          {skillsList.length > 0 && <div className="bg-white rounded-[30px] p-8 shadow-sm"><h2 className="text-lg font-black uppercase mb-4" style={{ color: safeColor }}>Toolkit</h2><div className="flex flex-wrap gap-2">{skillsList.map((s, i) => <span key={i} className="px-3 py-1 bg-gray-50 border border-gray-100 rounded-full text-xs font-bold text-gray-600">{s}</span>)}</div></div>}
          {education?.length > 0 && education.some(e => e.title) && (
            <div className="bg-white rounded-[30px] p-8 shadow-sm"><h2 className="text-lg font-black uppercase mb-4" style={{ color: safeColor }}>Education</h2>
            {education.map((edu) => edu.degree && (
              <div key={edu.id} className="mb-3"><h3 className="font-bold text-sm">{edu.degree}</h3><p className="text-xs text-gray-500 mt-1">{edu.college}</p><p className="text-xs font-bold mt-1 text-gray-400">{edu.year}</p></div>
            ))}</div>
          )}
        </div>
        <div>
          {experience?.length > 0 && experience.some(e => e.title) && (
            <div className="bg-white rounded-[30px] p-8 shadow-sm">
              <h2 className="text-lg font-black uppercase mb-6" style={{ color: safeColor }}>Experience</h2>
              <div className="space-y-8">
                {experience.map((exp) => exp.title && (
                  <div key={exp.id} className="relative">
                    <h3 className="font-bold text-lg text-gray-900">{exp.title}</h3>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest my-2">{exp.company} / {exp.duration}</p>
                    <p className="text-sm text-gray-700 leading-relaxed font-medium">{exp.description}</p>
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