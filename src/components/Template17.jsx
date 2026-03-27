import React from 'react';

export default function Template17({ resumeData }) {
  const { name, email, phone, linkedin, portfolio, summary, skills, experience, education, projects, certifications, customSections, profileImage, themeColor } = resumeData;
  const skillsList = skills ? skills.split(',').map(s => s.trim()).filter(Boolean) : [];
  const safeColor = themeColor || '#16a34a'; // Green

  return (
    <div className="p-12 font-mono bg-slate-900 text-gray-300 w-full min-h-full leading-relaxed">
      <div className="border-b-2 border-slate-700 pb-6 mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">{'>'} {name || 'John_Doe'}</h1>
          <div className="flex flex-wrap gap-4 text-sm" style={{ color: safeColor }}>
            {email && <span>{email}</span>}
            {phone && <span>{phone}</span>}
            {linkedin && <a href={linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>}
            {portfolio && <a href={portfolio} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Portfolio</a>}
          </div>
        </div>
        {profileImage && <img src={profileImage} alt="Profile" className="w-20 h-20 rounded border-2 border-slate-700 grayscale" />}
      </div>

      {summary && (
        <div className="mb-8">
          <h2 className="text-lg font-bold text-white mb-2"># ABOUT_ME</h2>
          <p className="text-sm">{summary}</p>
        </div>
      )}

      {skillsList.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-bold text-white mb-2"># SKILLS</h2>
          <p className="text-sm" style={{ color: safeColor }}>[{skillsList.join(', ')}]</p>
        </div>
      )}

      {experience?.length > 0 && experience.some(e => e.title) && (
        <div className="mb-8">
          <h2 className="text-lg font-bold text-white mb-4"># EXPERIENCE</h2>
          <div className="space-y-6 border-l-2 border-slate-700 pl-4">
            {experience.map((exp) => exp.title && (
              <div key={exp.id}>
                <div className="flex flex-wrap justify-between items-baseline mb-1">
                  <h3 className="font-bold text-white text-base">{exp.title} <span className="font-normal text-slate-500">@ {exp.company}</span></h3>
                  <span className="text-sm">{exp.duration}</span>
                </div>
                <p className="text-sm mt-2">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {education?.length > 0 && education.some(e => e.degree) && (
        <div className="mb-8">
          <h2 className="text-lg font-bold text-white mb-4"># EDUCATION</h2>
          <div className="space-y-4 border-l-2 border-slate-700 pl-4">
            {education.map((edu) => edu.degree && (
              <div key={edu.id}>
                <div className="flex flex-wrap justify-between items-baseline mb-1">
                  <h3 className="font-bold text-white text-base">{edu.degree}</h3>
                  <span className="text-sm">{edu.year}</span>
                </div>
                <p className="text-sm mt-1">{edu.college}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {projects?.length > 0 && projects.some(p => p.title) && (
        <div className="mb-8">
          <h2 className="text-lg font-bold text-white mb-4"># PROJECTS</h2>
          <div className="space-y-6 border-l-2 border-slate-700 pl-4">
            {projects.map((proj) => proj.title && (
              <div key={proj.id}>
                <h3 className="font-bold text-white text-base">{proj.title} {proj.link && <span className="font-normal text-sm" style={{color: safeColor}}>({proj.link})</span>}</h3>
                <p className="text-sm mt-2">{proj.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {certifications?.length > 0 && certifications.some(c => c.name) && (
        <div className="mb-8">
          <h2 className="text-lg font-bold text-white mb-4"># CERTIFICATIONS</h2>
          <div className="space-y-4 border-l-2 border-slate-700 pl-4">
            {certifications.map((cert) => cert.name && (
              <div key={cert.id}>
                <div className="flex flex-wrap justify-between items-baseline mb-1">
                  <h3 className="font-bold text-white text-base">{cert.name}</h3>
                  <span className="text-sm">{cert.date}</span>
                </div>
                <p className="text-sm mt-1">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {customSections?.length > 0 && customSections.map((section) => (
        <div key={section.id} className="mb-8">
          <h2 className="text-lg font-bold text-white mb-4"># {section.title.toUpperCase()}</h2>
          <div className="space-y-4 border-l-2 border-slate-700 pl-4">
            {section.items.map((item) => <div key={item.id} className="text-sm"><span className="text-white font-bold">{item.title}</span> {item.subtitle && `// ${item.subtitle}`} <span className="block mt-1">{item.description}</span></div>)}
          </div>
        </div>
      ))}
    </div>
  );
}