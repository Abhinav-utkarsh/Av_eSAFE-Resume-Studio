import React from 'react';

export default function Template12({ resumeData }) {
  const { name, email, phone, linkedin, portfolio, summary, skills, experience, education, projects, certifications, customSections, themeColor } = resumeData;
  const skillsList = skills ? skills.split(',').map(s => s.trim()).filter(Boolean) : [];
  const safeColor = themeColor || '#000000'; // Strict classic black/white with accent

  return (
    <div className="p-12 font-serif bg-white text-gray-900 w-full min-h-full">
      <header className="text-center mb-6">
        <h1 className="text-4xl font-bold uppercase tracking-wide break-words mb-4 leading-tight" style={{ color: safeColor }}>{name || 'John Doe'}</h1>
        <div className="flex flex-wrap justify-center text-sm font-medium text-gray-700">
          {email && <span className="break-all mx-3 my-1">{email}</span>}
          {phone && <span className="whitespace-nowrap mx-3 my-1">{phone}</span>}
          {linkedin && <a href={linkedin} target="_blank" rel="noreferrer" className="break-all hover:underline text-blue-600 mx-3 my-1">LinkedIn</a>}
          {portfolio && <a href={portfolio} target="_blank" rel="noreferrer" className="break-all hover:underline text-blue-600 mx-3 my-1">Portfolio</a>}
        </div>
      </header>

      {summary && (
        <div className="mb-6">
          <p className="text-sm text-gray-800 leading-relaxed">{summary}</p>
        </div>
      )}

      <div className="space-y-6">
        {experience?.length > 0 && experience.some(e => e.title) && (
          <section>
            <h2 className="text-base font-bold uppercase tracking-widest border-b-[1px] border-black pb-1 mb-4 text-center" style={{ color: safeColor }}>Professional Experience</h2>
            <div className="space-y-4">
              {experience.map((exp) => exp.title && (
                <div key={exp.id}>
                  <div className="flex flex-wrap justify-between items-baseline mb-1">
                    <h3 className="font-bold text-base text-gray-900 break-words">{exp.title} <span className="font-normal italic text-gray-700 ml-1">at {exp.company}</span></h3>
                    <span className="text-sm font-semibold text-gray-800 whitespace-nowrap">{exp.duration}</span>
                  </div>
                  <p className="text-sm text-gray-800 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {projects?.length > 0 && projects.some(p => p.title) && (
          <section>
            <h2 className="text-base font-bold uppercase tracking-widest border-b-[1px] border-black pb-1 mb-4 text-center" style={{ color: safeColor }}>Projects</h2>
            <div className="space-y-4">
              {projects.map((proj) => proj.title && (
                <div key={proj.id}>
                  <div className="flex flex-wrap justify-between items-baseline mb-1">
                    <h3 className="font-bold text-base text-gray-900 break-words">{proj.title} {proj.link && <span className="font-normal italic text-sm ml-2 break-all text-gray-600">({proj.link})</span>}</h3>
                  </div>
                  <p className="text-sm text-gray-800 leading-relaxed">{proj.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {education?.length > 0 && education.some(e => e.degree) && (
          <section>
            <h2 className="text-base font-bold uppercase tracking-widest border-b-[1px] border-black pb-1 mb-4 text-center" style={{ color: safeColor }}>Education</h2>
            <div className="space-y-3">
              {education.map((edu) => edu.degree && (
                <div key={edu.id} className="flex flex-wrap justify-between items-baseline">
                  <div className="font-bold text-base text-gray-900 break-words">{edu.degree}, <span className="font-normal italic text-gray-700">{edu.college}</span></div>
                  <span className="text-sm font-semibold text-gray-800 whitespace-nowrap">{edu.year}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {certifications?.length > 0 && certifications.some(c => c.name) && (
          <section>
            <h2 className="text-base font-bold uppercase tracking-widest border-b-[1px] border-black pb-1 mb-4 text-center" style={{ color: safeColor }}>Certifications</h2>
            <div className="space-y-3">
              {certifications.map((cert) => cert.name && (
                <div key={cert.id} className="flex flex-wrap justify-between items-baseline">
                  <div className="font-bold text-base text-gray-900 break-words">{cert.name}, <span className="font-normal italic text-gray-700">{cert.issuer}</span></div>
                  <span className="text-sm font-semibold text-gray-800 whitespace-nowrap">{cert.date}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {skillsList.length > 0 && (
          <p className="text-sm text-gray-800 text-center leading-relaxed break-words pt-4"><strong className="uppercase tracking-widest text-xs">Skills:</strong> {skillsList.join(' • ')}</p>
        )}

        {customSections?.length > 0 && customSections.map((section) => (
          <section key={section.id}>
            <h2 className="text-base font-bold uppercase tracking-widest border-b-[1px] border-black pb-1 mb-4 text-center" style={{ color: safeColor }}>{section.title}</h2>
            <div className="space-y-4">
              {section.items.map((item) => (
                <div key={item.id}>
                  <div className="flex flex-wrap justify-between items-baseline mb-1">
                    <h3 className="font-bold text-base text-gray-900 break-words">{item.title} {item.subtitle && <span className="font-normal italic text-gray-700 ml-1">({item.subtitle})</span>}</h3>
                    <span className="text-sm font-semibold text-gray-800 whitespace-nowrap">{item.date}</span>
                  </div>
                  <p className="text-sm text-gray-800 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}