import React from 'react';

export default function Template8({ resumeData }) {
  const { name, email, phone, linkedin, portfolio, summary, skills, experience, education, projects, certifications, themeColor } = resumeData;
  const skillsList = skills ? skills.split(',').map(s => s.trim()).filter(Boolean) : [];
  const safeColor = themeColor || '#e2e8f0'; // Light slate for dark mode accents

  return (
    <div className="p-12 font-sans bg-gray-900 text-gray-300 w-full min-h-full">
      <div className="text-left mb-10 pb-6 border-b border-gray-700">
        <h1 className="text-5xl font-black uppercase tracking-tight text-white mb-5 break-words leading-tight">{name || 'John Doe'}</h1>
        <div className="flex flex-wrap text-sm font-bold uppercase tracking-widest" style={{ color: safeColor }}>
          {email && <span className="break-all mr-5 mb-2">{email}</span>}
          {phone && <span className="whitespace-nowrap mr-5 mb-2">{phone}</span>}
          {linkedin && <a href={linkedin} target="_blank" rel="noreferrer" className="break-all hover:underline mr-5 mb-2">LinkedIn</a>}
          {portfolio && <a href={portfolio} target="_blank" rel="noreferrer" className="break-all hover:underline mr-5 mb-2">Portfolio</a>}
        </div>
        
        {summary && <p className="text-sm text-gray-400 mt-6 leading-relaxed max-w-3xl">{summary}</p>}
      </div>

      {experience?.length > 0 && experience.some(e => e.title) && (
        <div className="mb-10">
          <h2 className="text-lg font-bold uppercase tracking-widest border-l-4 pl-3 mb-6" style={{ borderColor: safeColor, color: 'white' }}>Experience</h2>
          <div className="space-y-6">
            {experience.map((exp) => exp.title && (
              <div key={exp.id} className="bg-gray-800/50 p-5 rounded border border-gray-700/50">
                <div className="flex flex-wrap justify-between items-baseline mb-2 gap-2">
                  <h3 className="font-bold text-white text-lg break-words flex-1 min-w-[200px]">{exp.title}</h3>
                  <p className="text-xs font-bold tracking-widest uppercase whitespace-nowrap" style={{ color: safeColor }}>{exp.duration}</p>
                </div>
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3 break-words">{exp.company}</p>
                <p className="text-sm text-gray-400 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {projects?.length > 0 && projects.some(p => p.title) && (
        <div className="mb-10">
          <h2 className="text-lg font-bold uppercase tracking-widest border-l-4 pl-3 mb-6" style={{ borderColor: safeColor, color: 'white' }}>Projects</h2>
          <div className="space-y-6">
            {projects.map((proj) => proj.title && (
              <div key={proj.id} className="bg-gray-800/50 p-5 rounded border border-gray-700/50">
                <h3 className="font-bold text-white text-lg mb-2 break-words">{proj.title} {proj.link && <span className="text-xs font-normal ml-2 break-all" style={{ color: safeColor }}>({proj.link})</span>}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{proj.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-8">
        {education?.length > 0 && education.some(e => e.degree) && (
          <div>
            <h2 className="text-lg font-bold uppercase tracking-widest border-l-4 pl-3 mb-6" style={{ borderColor: safeColor, color: 'white' }}>Education</h2>
            <div className="space-y-4">
              {education.map((edu) => edu.degree && (
                <div key={edu.id} className="bg-gray-800/50 p-4 rounded border border-gray-700/50">
                  <h3 className="font-bold text-white text-base break-words">{edu.degree}</h3>
                  <p className="text-sm text-gray-400 mt-1 break-words">{edu.college}</p>
                  <p className="text-xs font-bold mt-2 whitespace-nowrap" style={{ color: safeColor }}>{edu.year}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {certifications?.length > 0 && certifications.some(c => c.name) && (
          <div>
            <h2 className="text-lg font-bold uppercase tracking-widest border-l-4 pl-3 mb-6" style={{ borderColor: safeColor, color: 'white' }}>Certifications</h2>
            <div className="space-y-4">
              {certifications.map((cert) => cert.name && (
                <div key={cert.id} className="bg-gray-800/50 p-4 rounded border border-gray-700/50">
                  <h3 className="font-bold text-white text-base break-words">{cert.name}</h3>
                  <p className="text-sm text-gray-400 mt-1 break-words">{cert.issuer}</p>
                  <p className="text-xs font-bold mt-2 whitespace-nowrap" style={{ color: safeColor }}>{cert.date}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {skillsList.length > 0 && (
          <div className="col-span-full mt-4">
            <h2 className="text-lg font-bold uppercase tracking-widest border-l-4 pl-3 mb-6" style={{ borderColor: safeColor, color: 'white' }}>Skills</h2>
            <div className="flex flex-wrap gap-3">
              {skillsList.map((skill, idx) => (
                <span key={idx} className="px-3 py-1.5 border border-gray-700 bg-gray-800 rounded text-xs text-gray-300 font-bold break-words">{skill}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}