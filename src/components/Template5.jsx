import React from 'react';

export default function Template5({ resumeData }) {
  const { name, email, phone, linkedin, portfolio, summary, skills, experience, education, projects, certifications, themeColor } = resumeData;
  const skillsList = skills ? skills.split(',').map(s => s.trim()).filter(Boolean) : [];
  const safeColor = themeColor || '#000000'; // Light Elegant Serif

  return (
    <div className="p-12 font-serif bg-[#fdfbf7] text-gray-800 w-full min-h-full border border-[#ece8e1]">
      <div className="text-center mb-10 border-b border-[#ece8e1] pb-6">
        <h1 className="text-4xl font-normal tracking-[0.3em] uppercase mb-5 text-gray-900 break-words leading-tight">{name || 'John Doe'}</h1>
        <div className="flex flex-wrap justify-center text-xs tracking-[0.2em] uppercase font-bold" style={{ color: safeColor }}>
          {email && <span className="break-all mx-3 my-1">{email}</span>}
          {phone && <span className="whitespace-nowrap mx-3 my-1">{phone}</span>}
          {linkedin && <a href={linkedin} target="_blank" rel="noreferrer" className="break-all hover:underline mx-3 my-1">LinkedIn</a>}
          {portfolio && <a href={portfolio} target="_blank" rel="noreferrer" className="break-all hover:underline mx-3 my-1">Portfolio</a>}
        </div>
      </div>

      {summary && (
        <div className="mb-8">
          <p className="text-sm leading-relaxed italic text-gray-600">"{summary}"</p>
        </div>
      )}

      {experience?.length > 0 && experience.some(e => e.title) && (
        <div className="mb-8">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase mb-6 text-center border-y border-[#ece8e1] py-2 text-gray-900">Experience</h2>
          <div className="space-y-6">
            {experience.map((exp) => exp.title && (
              <div key={exp.id} className="grid grid-cols-4 gap-4 group">
                <div className="col-span-1 text-xs text-gray-500 font-bold text-right uppercase tracking-widest pt-1">{exp.duration}</div>
                <div className="col-span-3 border-l border-[#ece8e1] pl-5 pb-2">
                  <h3 className="font-bold text-gray-900 text-base tracking-wide break-words">{exp.title}</h3>
                  <p className="text-sm font-semibold mb-2 uppercase tracking-wider break-words" style={{ color: safeColor }}>{exp.company}</p>
                  <p className="text-sm leading-relaxed text-gray-700">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {projects?.length > 0 && projects.some(p => p.title) && (
        <div className="mb-8">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase mb-6 text-center border-y border-[#ece8e1] py-2 text-gray-900">Projects</h2>
          <div className="space-y-6">
            {projects.map((proj) => proj.title && (
              <div key={proj.id} className="grid grid-cols-4 gap-4 group">
                <div className="col-span-1 text-xs text-gray-500 font-bold text-right tracking-wider pt-1 break-words">{proj.link && <span>{proj.link}</span>}</div>
                <div className="col-span-3 border-l border-[#ece8e1] pl-5 pb-2">
                  <h3 className="font-bold text-gray-900 text-base tracking-wide break-words">{proj.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-700 mt-1">{proj.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-10">
        {education?.length > 0 && education.some(e => e.degree) && (
          <div>
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase mb-6 text-center border-y border-[#ece8e1] py-2 text-gray-900">Education</h2>
            <div className="space-y-6">
              {education.map((edu) => edu.degree && (
                <div key={edu.id} className="text-center px-2">
                  <h3 className="font-bold text-gray-900 text-base tracking-wide break-words">{edu.degree}</h3>
                  <p className="text-xs text-gray-600 mt-1 uppercase tracking-widest break-words">{edu.college}</p>
                  <p className="text-xs font-bold mt-1" style={{ color: safeColor }}>{edu.year}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {certifications?.length > 0 && certifications.some(c => c.name) && (
          <div>
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase mb-6 text-center border-y border-[#ece8e1] py-2 text-gray-900">Certifications</h2>
            <div className="space-y-6">
              {certifications.map((cert) => cert.name && (
                <div key={cert.id} className="text-center px-2">
                  <h3 className="font-bold text-gray-900 text-base tracking-wide break-words">{cert.name}</h3>
                  <p className="text-xs text-gray-600 mt-1 uppercase tracking-widest break-words">{cert.issuer}</p>
                  <p className="text-xs font-bold mt-1" style={{ color: safeColor }}>{cert.date}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {skillsList.length > 0 && (
          <div className="col-span-full">
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase mb-6 text-center border-y border-[#ece8e1] py-2 text-gray-900">Skills</h2>
            <p className="text-sm leading-loose text-gray-800 text-center uppercase tracking-widest font-medium max-w-2xl mx-auto break-words">{skillsList.join('   •   ')}</p>
          </div>
        )}
      </div>
    </div>
  );
}