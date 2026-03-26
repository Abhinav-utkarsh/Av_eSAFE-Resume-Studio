import React from 'react';

export default function Template53({ resumeData }) {
  const { name, email, phone, linkedin, portfolio, summary, skills, experience, education, themeColor } = resumeData;
  const skillsList = skills ? skills.split(',').map(s => s.trim()).filter(Boolean) : [];
  const safeColor = themeColor || '#ef4444'; // Red

  return (
    <div className="p-12 font-sans bg-white text-black w-full min-h-full border-[16px]" style={{ borderColor: safeColor }}>
      <header className="mb-8 border-b-[8px] border-black pb-6">
        <h1 className="text-6xl font-black uppercase tracking-tighter leading-none mb-4">{name || 'John Doe'}</h1>
        <div className="flex flex-wrap gap-4 text-sm font-bold bg-black text-white p-3">
          {email && <span className="break-all mx-3 my-1">{email}</span>}
          {phone && <span className="whitespace-nowrap mx-3 my-1">{phone}</span>}
          {linkedin && <a href={linkedin} target="_blank" rel="noreferrer" className="break-all hover:underline text-blue-600 mx-3 my-1">LinkedIn</a>}
          {portfolio && <a href={portfolio} target="_blank" rel="noreferrer" className="break-all hover:underline text-blue-600 mx-3 my-1">Portfolio</a>}
        </div>
      </header>

      {summary && <div className="mb-8 p-6 bg-gray-100 border-4 border-black"><p className="text-base font-bold leading-relaxed">{summary}</p></div>}

      <div className="grid grid-cols-2 gap-8">
        {experience?.length > 0 && experience.some(e => e.title) && (
          <div>
            <h2 className="text-3xl font-black uppercase mb-6 bg-black text-white px-4 py-2 inline-block">Experience</h2>
            <div className="space-y-8">
              {experience.map((exp) => exp.title && (
                <div key={exp.id} className="border-l-8 pl-4 border-black">
                  <h3 className="font-black text-xl">{exp.title}</h3>
                  <p className="text-sm font-bold my-1" style={{ color: safeColor }}>{exp.company} // {exp.duration}</p>
                  <p className="text-sm font-medium mt-2">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="space-y-8">
          {education?.length > 0 && education.some(e => e.title) && (
            <div><h2 className="text-3xl font-black uppercase mb-6 bg-black text-white px-4 py-2 inline-block">Education</h2>
            {education.map((edu) => edu.degree && (
              <div key={edu.id} className="mb-4 border-4 border-black p-4"><h3 className="font-black text-lg">{edu.degree}</h3><p className="text-sm font-bold mt-1">{edu.college}</p><p className="text-xs font-black mt-2" style={{ color: safeColor }}>{edu.year}</p></div>
            ))}</div>
          )}
          {skillsList.length > 0 && <div><h2 className="text-3xl font-black uppercase mb-6 bg-black text-white px-4 py-2 inline-block">Skills</h2><div className="flex flex-wrap gap-2">{skillsList.map((s, i) => <span key={i} className="px-3 py-1 border-2 border-black font-black text-sm uppercase">{s}</span>)}</div></div>}
        </div>
      </div>
    </div>
  );
}