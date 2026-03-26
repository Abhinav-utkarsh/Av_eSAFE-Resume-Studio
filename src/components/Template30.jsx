import React from 'react';

export default function Template30({ resumeData }) {
  const { name, email, phone, linkedin, portfolio, summary, skills, experience, education, projects, certifications, customSections, profileImage, themeColor } = resumeData;
  const skillsList = skills ? skills.split(',').map(s => s.trim()).filter(Boolean) : [];
  const safeColor = themeColor || '#000000'; // Strict black/white for academic

  return (
    <div className="p-12 font-serif bg-white text-gray-900 w-full min-h-full text-sm leading-snug">
      <div className="text-center border-b-[1.5px] border-black pb-3 mb-4">
        <h1 className="text-3xl font-bold uppercase tracking-wider mb-2" style={{ color: safeColor }}>{name || 'John Doe'}</h1>
        <div className="flex justify-center flex-wrap gap-x-4 gap-y-1 text-sm">
          {email && <span>{email}</span>}
          {(email && phone) && <span>|</span>}
          {phone && <span>{phone}</span>}
          {((email || phone) && linkedin) && <span>|</span>}
          {linkedin && <a href={linkedin} target="_blank" rel="noreferrer" className="underline">LinkedIn</a>}
          {((email || phone || linkedin) && portfolio) && <span>|</span>}
          {portfolio && <a href={portfolio} target="_blank" rel="noreferrer" className="underline">Portfolio</a>}
        </div>
      </div>

      {summary && (
        <div className="mb-4">
          <p className="text-justify leading-relaxed">{summary}</p>
        </div>
      )}

      {education?.length > 0 && education.some(e => e.degree) && (
        <div className="mb-4">
          <h2 className="text-base font-bold uppercase border-b border-black mb-2" style={{ color: safeColor }}>Education</h2>
          <div className="space-y-2">
            {education.map((edu) => edu.degree && (
              <div key={edu.id} className="flex justify-between items-baseline">
                <div><span className="font-bold">{edu.degree}</span>, <span className="italic">{edu.college}</span></div>
                <span className="whitespace-nowrap">{edu.year}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {experience?.length > 0 && experience.some(e => e.title) && (
        <div className="mb-4">
          <h2 className="text-base font-bold uppercase border-b border-black mb-2" style={{ color: safeColor }}>Academic & Professional Experience</h2>
          <div className="space-y-3">
            {experience.map((exp) => exp.title && (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline mb-0.5">
                  <div><span className="font-bold">{exp.title}</span>, <span className="italic">{exp.company}</span></div>
                  <span className="whitespace-nowrap">{exp.duration}</span>
                </div>
                <p className="text-justify">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {projects?.length > 0 && projects.some(p => p.title) && (
        <div className="mb-4">
          <h2 className="text-base font-bold uppercase border-b border-black mb-2" style={{ color: safeColor }}>Selected Projects & Research</h2>
          <div className="space-y-3">
            {projects.map((proj) => proj.title && (
              <div key={proj.id}>
                <div className="font-bold mb-0.5">{proj.title} {proj.link && <span className="font-normal italic ml-2">({proj.link})</span>}</div>
                <p className="text-justify">{proj.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {skillsList.length > 0 && (
        <div className="mb-4">
          <h2 className="text-base font-bold uppercase border-b border-black mb-2" style={{ color: safeColor }}>Skills & Competencies</h2>
          <p className="leading-relaxed">{skillsList.join(', ')}</p>
        </div>
      )}
    </div>
  );
}