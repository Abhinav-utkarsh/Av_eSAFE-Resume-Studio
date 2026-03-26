import React from 'react';

export default function Template11({ resumeData }) {
  const { name, email, phone, linkedin, portfolio, summary, skills, experience, education, projects, certifications, themeColor } = resumeData;
  const skillsList = skills ? skills.split(',').map(s => s.trim()).filter(Boolean) : [];
  const safeColor = themeColor || '#334155'; // Slate 700

  return (
    <div className="p-12 font-sans bg-white text-gray-900 w-full min-h-full leading-relaxed">
      <header className="mb-8">
        <h1 className="text-5xl font-black tracking-tight break-words uppercase mb-4 leading-tight" style={{ color: safeColor }}>{name || 'John Doe'}</h1>
        <div className="flex flex-wrap text-base font-bold text-gray-500 tracking-wide">
          {email && <span className="break-all mr-5 mb-2">{email}</span>}
          {phone && <span className="whitespace-nowrap mr-5 mb-2">{phone}</span>}
          {linkedin && <a href={linkedin} target="_blank" rel="noreferrer" className="break-all hover:text-gray-900 transition-colors mr-5 mb-2">LinkedIn</a>}
          {portfolio && <a href={portfolio} target="_blank" rel="noreferrer" className="break-all hover:text-gray-900 transition-colors mr-5 mb-2">Portfolio</a>}
        </div>
        
        {summary && (
          <p className="mt-5 text-sm leading-relaxed text-gray-700 border-l-4 pl-4 py-1 bg-gray-50 border-gray-200 shadow-sm" style={{ borderLeftColor: safeColor }}>
            {summary}
          </p>
        )}
      </header>

      <div className="space-y-8">
        {experience?.length > 0 && experience.some(e => e.title) && (
          <section>
            <h2 className="text-lg font-bold uppercase tracking-widest border-b-2 pb-2 mb-4" style={{ borderColor: `${safeColor}30`, color: safeColor }}>Experience</h2>
            <div className="space-y-6">
              {experience.map((exp) => exp.title && (
                <div key={exp.id}>
                  <div className="flex flex-wrap justify-between items-baseline gap-2 mb-1">
                    <h3 className="font-extrabold text-base text-gray-900 break-words">{exp.title}</h3>
                    <span className="text-xs font-bold text-gray-500 whitespace-nowrap bg-gray-100 px-2 py-0.5 rounded">{exp.duration}</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-700 mb-2 break-words">{exp.company}</p>
                  <p className="text-sm text-gray-700">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {projects?.length > 0 && projects.some(p => p.title) && (
          <section>
            <h2 className="text-lg font-bold uppercase tracking-widest border-b-2 pb-2 mb-4" style={{ borderColor: `${safeColor}30`, color: safeColor }}>Projects</h2>
            <div className="space-y-5">
              {projects.map((proj) => proj.title && (
                <div key={proj.id}>
                  <div className="flex flex-wrap justify-between items-baseline gap-2 mb-1">
                    <h3 className="font-extrabold text-base text-gray-900 break-words">{proj.title} {proj.link && <span className="font-normal text-xs ml-2 break-all text-blue-600">({proj.link})</span>}</h3>
                  </div>
                  <p className="text-sm text-gray-700">{proj.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {education?.length > 0 && education.some(e => e.degree) && (
          <section>
            <h2 className="text-lg font-bold uppercase tracking-widest border-b-2 pb-2 mb-4" style={{ borderColor: `${safeColor}30`, color: safeColor }}>Education</h2>
            <div className="space-y-4">
              {education.map((edu) => edu.degree && (
                <div key={edu.id} className="flex flex-wrap justify-between items-baseline gap-2">
                  <div className="break-words flex-1"><span className="font-extrabold text-base text-gray-900">{edu.degree}</span><span className="text-sm text-gray-600 ml-2">| {edu.college}</span></div>
                  <span className="text-sm font-bold text-gray-500 whitespace-nowrap">{edu.year}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {certifications?.length > 0 && certifications.some(c => c.name) && (
          <section>
            <h2 className="text-lg font-bold uppercase tracking-widest border-b-2 pb-2 mb-4" style={{ borderColor: `${safeColor}30`, color: safeColor }}>Certifications</h2>
            <div className="space-y-4">
              {certifications.map((cert) => cert.name && (
                <div key={cert.id} className="flex flex-wrap justify-between items-baseline gap-2">
                  <div className="break-words flex-1"><span className="font-extrabold text-base text-gray-900">{cert.name}</span><span className="text-sm text-gray-600 ml-2">| {cert.issuer}</span></div>
                  <span className="text-sm font-bold text-gray-500 whitespace-nowrap">{cert.date}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {skillsList.length > 0 && (
          <section>
            <h2 className="text-lg font-bold uppercase tracking-widest border-b-2 pb-2 mb-4" style={{ borderColor: `${safeColor}30`, color: safeColor }}>Skills</h2>
            <p className="text-sm font-medium text-gray-800 break-words leading-loose">{skillsList.join('   /   ')}</p>
          </section>
        )}
      </div>
    </div>
  );
}