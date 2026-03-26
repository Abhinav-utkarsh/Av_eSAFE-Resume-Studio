import React from 'react';

export default function Template32({ resumeData }) {
  const { name, email, phone, linkedin, portfolio, summary, skills, experience, education, projects, themeColor } = resumeData;
  const skillsList = skills ? skills.split(',').map(s => s.trim()).filter(Boolean) : [];
  const safeColor = themeColor || '#2563eb'; // Blue accent for clear hierarchy

  return (
    <div className="p-12 font-sans bg-white text-gray-900 w-full min-h-full">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-5xl font-black tracking-tight mb-2" style={{ color: safeColor }}>{name || 'John Doe'}</h1>
        <div className="text-sm font-medium text-gray-600 flex flex-wrap gap-4">
          {[email, phone].filter(Boolean).map((item, idx) => (
            <span key={idx}>{item}</span>
          ))}
          {linkedin && <a href={linkedin} target="_blank" rel="noreferrer" className="break-all hover:underline text-blue-600 mx-3 my-1">LinkedIn</a>}
          {portfolio && <a href={portfolio} target="_blank" rel="noreferrer" className="break-all hover:underline text-blue-600 mx-3 my-1">Portfolio</a>}
        </div>
      </header>

      {/* Summary */}
      {summary && (
        <section className="mb-6">
          <p className="text-sm leading-relaxed text-gray-800">{summary}</p>
        </section>
      )}

      {/* Experience */}
      {experience?.length > 0 && experience.some(e => e.title) && (
        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-widest border-b-2 pb-1 mb-4" style={{ borderColor: safeColor, color: safeColor }}>Work Experience</h2>
          {experience.map((exp) => exp.title && (
            <div key={exp.id} className="mb-5">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-base">{exp.title}</h3>
                <span className="text-sm font-semibold text-gray-600">{exp.duration}</span>
              </div>
              <div className="text-sm font-bold text-gray-700 mb-2">{exp.company}</div>
              <p className="text-sm leading-relaxed text-gray-800">{exp.description}</p>
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {education?.length > 0 && education.some(e => e.degree) && (
        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-widest border-b-2 pb-1 mb-4" style={{ borderColor: safeColor, color: safeColor }}>Education</h2>
          {education.map((edu) => edu.degree && (
            <div key={edu.id} className="mb-3">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-sm">{edu.degree}</h3>
                <span className="text-sm font-semibold text-gray-600">{edu.year}</span>
              </div>
              <div className="text-sm text-gray-700">{edu.college}</div>
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {skillsList.length > 0 && (
        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-widest border-b-2 pb-1 mb-4" style={{ borderColor: safeColor, color: safeColor }}>Technical Skills</h2>
          <p className="text-sm leading-relaxed text-gray-800">{skillsList.join(' • ')}</p>
        </section>
      )}
    </div>
  );
}