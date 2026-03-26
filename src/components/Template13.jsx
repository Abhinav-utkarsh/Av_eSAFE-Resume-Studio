import React from 'react';

export default function Template13({ resumeData }) {
  const { name, email, phone, linkedin, portfolio, summary, skills, experience, education, projects, certifications, themeColor } = resumeData;
  const skillsList = skills ? skills.split(',').map(s => s.trim()).filter(Boolean) : [];
  const safeColor = themeColor || '#1f2937';

  return (
    <div className="p-12 font-serif bg-white text-gray-900 w-full min-h-full leading-relaxed">
      <div className="border-b-[3px] pb-4 mb-6" style={{ borderColor: safeColor }}>
        <h1 className="text-5xl font-bold break-words mb-5 leading-tight" style={{ color: safeColor }}>{name || 'John Doe'}</h1>
        <div className="flex flex-wrap text-base font-medium text-gray-600">
          {email && <p className="break-all mr-6 mb-2">{email}</p>}
          {phone && <p className="whitespace-nowrap mr-6 mb-2">{phone}</p>}
          {linkedin && <a href={linkedin} target="_blank" rel="noreferrer" className="break-all hover:underline text-blue-600 mr-6 mb-2">LinkedIn</a>}
          {portfolio && <a href={portfolio} target="_blank" rel="noreferrer" className="break-all hover:underline text-blue-600 mr-6 mb-2">Portfolio</a>}
        </div>
      </div>

      {summary && (
        <div className="mb-8">
          <h2 className="text-sm font-bold uppercase tracking-[0.15em] mb-2 text-gray-500">Summary</h2>
          <p className="text-sm text-gray-800">{summary}</p>
        </div>
      )}

      {education?.length > 0 && education.some(e => e.degree) && (
        <div className="mb-8">
          <h2 className="text-sm font-bold uppercase tracking-[0.15em] mb-3 text-gray-500">Education</h2>
          <div className="space-y-4">
            {education.map((edu) => edu.degree && (
              <div key={edu.id} className="ml-4 border-l-2 pl-4" style={{ borderColor: `${safeColor}40` }}>
                <div className="flex flex-wrap justify-between items-baseline gap-2">
                  <h3 className="font-bold text-base text-gray-900 break-words">{edu.degree}</h3>
                  <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">{edu.year}</span>
                </div>
                <p className="text-sm text-gray-700 break-words">{edu.college}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {experience?.length > 0 && experience.some(e => e.title) && (
        <div className="mb-8">
          <h2 className="text-sm font-bold uppercase tracking-[0.15em] mb-3 text-gray-500">Professional Experience</h2>
          <div className="space-y-6">
            {experience.map((exp) => exp.title && (
              <div key={exp.id} className="ml-4 border-l-2 pl-4" style={{ borderColor: `${safeColor}40` }}>
                <div className="flex flex-wrap justify-between items-baseline gap-2">
                  <h3 className="font-bold text-base text-gray-900 break-words">{exp.title}</h3>
                  <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">{exp.duration}</span>
                </div>
                <p className="text-sm italic text-gray-600 mb-2 break-words">{exp.company}</p>
                <p className="text-sm text-gray-800">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {projects?.length > 0 && projects.some(p => p.title) && (
        <div className="mb-8">
          <h2 className="text-sm font-bold uppercase tracking-[0.15em] mb-3 text-gray-500">Research & Projects</h2>
          <div className="space-y-4">
            {projects.map((proj) => proj.title && (
              <div key={proj.id} className="ml-4 border-l-2 pl-4" style={{ borderColor: `${safeColor}40` }}>
                <h3 className="font-bold text-base text-gray-900 mb-1 break-words">{proj.title} {proj.link && <span className="font-normal italic text-sm ml-2 break-all text-blue-600">({proj.link})</span>}</h3>
                <p className="text-sm text-gray-800">{proj.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {certifications?.length > 0 && certifications.some(c => c.name) && (
        <div className="mb-8">
          <h2 className="text-sm font-bold uppercase tracking-[0.15em] mb-3 text-gray-500">Certifications</h2>
          <ul className="list-disc list-inside space-y-1 ml-4 text-sm text-gray-800">
            {certifications.map((cert) => cert.name && (
              <li key={cert.id} className="break-words"><strong>{cert.name}</strong> – {cert.issuer} <span className="text-gray-500 italic">({cert.date})</span></li>
            ))}
          </ul>
        </div>
      )}

      {skillsList.length > 0 && (
        <div className="mb-8">
          <h2 className="text-sm font-bold uppercase tracking-[0.15em] mb-3 text-gray-500">Technical Skills</h2>
          <p className="text-sm text-gray-800 ml-4 leading-relaxed break-words">{skillsList.join(' • ')}</p>
        </div>
      )}
    </div>
  );
}