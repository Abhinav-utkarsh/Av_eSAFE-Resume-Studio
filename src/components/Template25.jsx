import React from 'react';

export default function Template25({ resumeData }) {
  const { name, email, phone, linkedin, portfolio, summary, skills, experience, education, projects, certifications, customSections, profileImage, themeColor } = resumeData;
  const skillsList = skills ? skills.split(',').map(s => s.trim()).filter(Boolean) : [];
  const safeColor = themeColor || '#000000';

  return (
    <div className="p-12 font-serif bg-white text-black w-full min-h-full">
      <div className="text-center border-b-2 border-black pb-4 mb-6">
        <h1 className="text-4xl font-bold uppercase tracking-widest mb-2">{name || 'John Doe'}</h1>
        <div className="flex justify-center gap-3 text-sm font-medium">
          {email && <span>{email}</span>}
          {phone && <span>| {phone}</span>}
          {linkedin && <span>| <a href={linkedin} className="underline">LinkedIn</a></span>}
          {portfolio && <span>| <a href={portfolio} className="underline">Portfolio</a></span>}
        </div>
      </div>

      {summary && (
        <div className="mb-6">
          <p className="text-sm leading-relaxed text-justify">{summary}</p>
        </div>
      )}

      {experience?.length > 0 && experience.some(e => e.title) && (
        <div className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b border-black mb-3">Professional Experience</h2>
          <div className="space-y-4">
            {experience.map((exp) => exp.title && (
              <div key={exp.id}>
                <div className="flex justify-between items-end mb-1">
                  <h3 className="font-bold text-base">{exp.title}, <span className="font-normal italic">{exp.company}</span></h3>
                  <span className="text-sm">{exp.duration}</span>
                </div>
                <p className="text-sm leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {education?.length > 0 && education.some(e => e.degree) && (
        <div className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b border-black mb-3">Education</h2>
          <div className="space-y-3">
            {education.map((edu) => edu.degree && (
              <div key={edu.id} className="flex justify-between items-end">
                <div className="font-bold text-base">{edu.degree}, <span className="font-normal italic">{edu.college}</span></div>
                <span className="text-sm">{edu.year}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {skillsList.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b border-black mb-3">Technical Skills</h2>
          <p className="text-sm leading-relaxed">{skillsList.join(', ')}</p>
        </div>
      )}
    </div>
  );
}