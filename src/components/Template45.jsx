import React from 'react';

export default function Template45({ resumeData }) {
  const { name, email, phone, linkedin, portfolio, summary, skills, experience, education } = resumeData;
  const skillsList = skills ? skills.split(',').map(s => s.trim()).filter(Boolean) : [];

  return (
    <div className="p-12 font-serif bg-white text-black w-full min-h-full text-sm">
      <header className="border-b-4 border-black pb-4 mb-6 text-center">
        <h1 className="text-5xl font-black uppercase tracking-tighter mb-2">{name || 'John Doe'}</h1>
        <p className="font-semibold tracking-wide text-xs">
          {email && <span className="break-all mx-3 my-1">{email}</span>}
          {phone && <span className="whitespace-nowrap mx-3 my-1">{phone}</span>}
          {linkedin && <a href={linkedin} target="_blank" rel="noreferrer" className="break-all hover:underline text-blue-600 mx-3 my-1">LinkedIn</a>}
          {portfolio && <a href={portfolio} target="_blank" rel="noreferrer" className="break-all hover:underline text-blue-600 mx-3 my-1">Portfolio</a>}
        </p>
      </header>

      {summary && <p className="mb-6 leading-relaxed font-medium text-justify">{summary}</p>}

      {experience?.length > 0 && experience.some(e => e.title) && (
        <div className="mb-6 border-b-2 border-black pb-6">
          <h2 className="font-black uppercase tracking-widest mb-4">Experience</h2>
          <div className="space-y-4">
            {experience.map((exp) => exp.title && (
              <div key={exp.id} className="grid grid-cols-4 gap-4">
                <div className="col-span-1 font-bold">{exp.duration}</div>
                <div className="col-span-3">
                  <h3 className="font-bold">{exp.title}</h3>
                  <div className="italic mb-1">{exp.company}</div>
                  <p>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {education?.length > 0 && education.some(e => e.degree) && (
        <div className="mb-6 border-b-2 border-black pb-6">
          <h2 className="font-black uppercase tracking-widest mb-4">Education</h2>
          {education.map((edu) => edu.degree && (
            <div key={edu.id} className="grid grid-cols-4 gap-4 mb-2"><div className="col-span-1 font-bold">{edu.year}</div><div className="col-span-3"><span className="font-bold">{edu.degree}</span>, {edu.college}</div></div>
          ))}
        </div>
      )}

      {skillsList.length > 0 && <div><h2 className="font-black uppercase tracking-widest mb-2">Technical Skills</h2><p>{skillsList.join(', ')}</p></div>}
    </div>
  );
}