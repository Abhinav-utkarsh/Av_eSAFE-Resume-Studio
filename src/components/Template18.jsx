import React from 'react';

export default function Template18({ resumeData }) {
  const { name, email, phone, linkedin, portfolio, summary, skills, experience, education, projects, certifications, customSections, profileImage, themeColor } = resumeData;
  const skillsList = skills ? skills.split(',').map(s => s.trim()).filter(Boolean) : [];
  const safeColor = themeColor || '#0f172a';

  return (
    <div className="p-12 font-serif bg-[#fafafa] text-gray-800 w-full min-h-full">
      <div className="text-center mb-10 flex flex-col items-center">
        {profileImage && <img src={profileImage} alt="Profile" className="w-24 h-24 rounded-full object-cover mb-4 shadow-md" />}
        <h1 className="text-4xl font-normal tracking-[0.2em] uppercase text-gray-900 mb-3">{name || 'John Doe'}</h1>
        <div className="flex flex-wrap justify-center gap-4 text-xs tracking-widest uppercase font-bold text-gray-500">
          {email && <span>{email}</span>}
          {phone && <span>{phone}</span>}
          {linkedin && <a href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
          {portfolio && <a href={portfolio} target="_blank" rel="noreferrer">Portfolio</a>}
        </div>
      </div>

      {summary && (
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <p className="text-sm leading-relaxed italic text-gray-600">{summary}</p>
        </div>
      )}

      <div className="space-y-10">
        {experience?.length > 0 && experience.some(e => e.title) && (
          <div>
            <h2 className="text-center text-lg font-bold tracking-widest uppercase mb-6" style={{ color: safeColor }}>Experience</h2>
            <div className="space-y-6 text-center max-w-3xl mx-auto">
              {experience.map((exp) => exp.title && (
                <div key={exp.id}>
                  <h3 className="font-bold text-gray-900 text-base">{exp.title}</h3>
                  <div className="text-sm font-semibold uppercase tracking-wider my-1 text-gray-500">{exp.company} | {exp.duration}</div>
                  <p className="text-sm leading-relaxed text-gray-700 mt-2">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {projects?.length > 0 && projects.some(p => p.title) && (
          <div>
            <h2 className="text-center text-lg font-bold tracking-widest uppercase mb-6" style={{ color: safeColor }}>Projects</h2>
            <div className="space-y-6 text-center max-w-3xl mx-auto">
              {projects.map((proj) => proj.title && (
                <div key={proj.id}>
                  <h3 className="font-bold text-gray-900 text-base">{proj.title} {proj.link && <span className="text-sm font-normal text-blue-500 block mt-1">({proj.link})</span>}</h3>
                  <p className="text-sm leading-relaxed text-gray-700 mt-2">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {education?.length > 0 && education.some(e => e.degree) && (
          <div>
            <h2 className="text-center text-lg font-bold tracking-widest uppercase mb-6" style={{ color: safeColor }}>Education</h2>
            <div className="space-y-4 text-center">
              {education.map((edu) => edu.degree && (
                <div key={edu.id}>
                  <h3 className="font-bold text-gray-900 text-base">{edu.degree}</h3>
                  <p className="text-sm text-gray-600">{edu.college} | <span className="font-bold">{edu.year}</span></p>
                </div>
              ))}
            </div>
          </div>
        )}

        {skillsList.length > 0 && (
          <div className="text-center max-w-2xl mx-auto border-t pt-8" style={{ borderColor: `${safeColor}20` }}>
            <p className="text-sm leading-loose tracking-widest uppercase font-medium">{skillsList.join(' • ')}</p>
          </div>
        )}
      </div>
    </div>
  );
}