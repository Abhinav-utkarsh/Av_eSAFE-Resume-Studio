import React from 'react';

export default function Template27({ resumeData }) {
  const { name, email, phone, linkedin, portfolio, summary, skills, experience, education, projects, certifications, customSections, profileImage, themeColor } = resumeData;
  const skillsList = skills ? skills.split(',').map(s => s.trim()).filter(Boolean) : [];
  const safeColor = themeColor || '#7c3aed'; // Violet

  return (
    <div className="p-12 font-sans bg-white text-gray-900 w-full min-h-full">
      <header className="mb-12 border-b pl-4 pb-8" style={{ borderColor: `${safeColor}30` }}>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-5xl font-light tracking-widest uppercase text-gray-900 mb-4">{name || 'John Doe'}</h1>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500 font-medium">
              {email && <span>{email}</span>}
              {phone && <span>{phone}</span>}
              {linkedin && <a href={linkedin} className="hover:text-gray-900 transition-colors">LinkedIn</a>}
              {portfolio && <a href={portfolio} className="hover:text-gray-900 transition-colors">Portfolio</a>}
            </div>
          </div>
          {profileImage && <img src={profileImage} alt="Profile" className="w-24 h-24 rounded-full object-cover shadow-sm" />}
        </div>
      </header>

      <div className="space-y-10">
        {summary && (
          <div className="flex gap-8">
            <h2 className="w-1/4 text-sm font-bold uppercase tracking-widest text-right" style={{ color: safeColor }}>Profile</h2>
            <p className="w-3/4 text-sm leading-relaxed text-gray-700">{summary}</p>
          </div>
        )}

        {experience?.length > 0 && experience.some(e => e.title) && (
          <div className="flex gap-8">
            <h2 className="w-1/4 text-sm font-bold uppercase tracking-widest text-right" style={{ color: safeColor }}>Experience</h2>
            <div className="w-3/4 space-y-6">
              {experience.map((exp) => exp.title && (
                <div key={exp.id}>
                  <h3 className="font-bold text-gray-900 text-base">{exp.title}</h3>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest my-1">{exp.company} | {exp.duration}</div>
                  <p className="text-sm text-gray-700 leading-relaxed mt-2">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {projects?.length > 0 && projects.some(p => p.title) && (
          <div className="flex gap-8">
            <h2 className="w-1/4 text-sm font-bold uppercase tracking-widest text-right" style={{ color: safeColor }}>Projects</h2>
            <div className="w-3/4 space-y-6">
              {projects.map((proj) => proj.title && (
                <div key={proj.id}>
                  <h3 className="font-bold text-gray-900 text-base">{proj.title} {proj.link && <span className="text-xs font-normal ml-2 text-gray-500">({proj.link})</span>}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed mt-1">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {education?.length > 0 && education.some(e => e.degree) && (
          <div className="flex gap-8">
            <h2 className="w-1/4 text-sm font-bold uppercase tracking-widest text-right" style={{ color: safeColor }}>Education</h2>
            <div className="w-3/4 space-y-4">
              {education.map((edu) => edu.degree && (
                <div key={edu.id} className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-gray-900 text-base">{edu.degree}</h3>
                    <p className="text-sm text-gray-600 mt-1">{edu.college}</p>
                  </div>
                  <span className="text-sm font-semibold text-gray-500">{edu.year}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {skillsList.length > 0 && (
          <div className="flex gap-8">
            <h2 className="w-1/4 text-sm font-bold uppercase tracking-widest text-right" style={{ color: safeColor }}>Skills</h2>
            <div className="w-3/4">
              <div className="flex flex-wrap gap-2">
                {skillsList.map((skill, idx) => (
                  <span key={idx} className="px-3 py-1 border rounded text-xs font-semibold text-gray-700" style={{ borderColor: `${safeColor}40` }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}