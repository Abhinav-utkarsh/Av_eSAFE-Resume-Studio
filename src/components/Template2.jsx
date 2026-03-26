import React from 'react';

export default function Template2({ resumeData }) {
  const { name, email, phone, linkedin, portfolio, summary, skills, experience, education, projects, certifications, themeColor } = resumeData;
  const skillsList = skills ? skills.split(',').map(s => s.trim()).filter(Boolean) : [];
  const safeColor = themeColor || '#1e40af';

  return (
    <div className="font-sans bg-white text-gray-800 w-full min-h-full">
      <div className="bg-gray-50 px-10 py-10 border-b border-gray-200" style={{ borderTop: `8px solid ${safeColor}` }}>
        <div className="flex-1">
          <h1 className="text-4xl font-black tracking-tight text-gray-900 mb-4 break-words leading-tight">{name || 'John Doe'}</h1>
          <div className="flex flex-wrap text-sm font-bold tracking-wide uppercase" style={{ color: safeColor }}>
            {email && <span className="break-all mr-5 mb-2">{email}</span>}
            {phone && <span className="whitespace-nowrap mr-5 mb-2">{phone}</span>}
            {linkedin && <a href={linkedin} target="_blank" rel="noreferrer" className="break-all hover:underline mr-5 mb-2">LinkedIn</a>}
            {portfolio && <a href={portfolio} target="_blank" rel="noreferrer" className="break-all hover:underline mr-5 mb-2">Portfolio</a>}
          </div>
        </div>
      </div>

      <div className="p-10 space-y-8">
        {summary && (
          <div className="mb-2">
            <p className="text-sm text-gray-700 leading-relaxed">{summary}</p>
          </div>
        )}

        {experience?.length > 0 && experience.some(e => e.title) && (
          <div>
            <h2 className="text-xl font-extrabold mb-5 flex items-center gap-3" style={{ color: safeColor }}>
              <span className="w-6 h-1 rounded-full" style={{ backgroundColor: safeColor }}></span>
              Experience
            </h2>
            <div className="space-y-6">
              {experience.map((exp) => exp.title && (
                <div key={exp.id} className="relative pl-6 border-l-2 border-gray-200">
                  <div className="absolute w-3 h-3 rounded-full -left-[7px] top-1.5 border-2 border-white" style={{ backgroundColor: safeColor }}></div>
                  <h3 className="font-bold text-base text-gray-900 break-words">{exp.title}</h3>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 mt-0.5 break-words">
                    {exp.company} &bull; {exp.duration}
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {education?.length > 0 && education.some(e => e.degree) && (
          <div>
            <h2 className="text-xl font-extrabold mb-5 flex items-center gap-3" style={{ color: safeColor }}>
              <span className="w-6 h-1 rounded-full" style={{ backgroundColor: safeColor }}></span>
              Education
            </h2>
            <div className="space-y-6">
              {education.map((edu) => edu.degree && (
                <div key={edu.id} className="flex flex-wrap justify-between items-start gap-4 bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <div className="break-words flex-1 min-w-[200px]">
                    <h3 className="font-bold text-base text-gray-900 break-words">{edu.degree}</h3>
                    <div className="text-sm text-gray-600 mt-0.5 break-words">{edu.college}</div>
                  </div>
                  <div className="text-xs font-bold px-3 py-1 rounded bg-white border border-gray-200 shadow-sm whitespace-nowrap" style={{ color: safeColor }}>
                    {edu.year}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {projects?.length > 0 && projects.some(p => p.title) && (
          <div>
            <h2 className="text-xl font-extrabold mb-5 flex items-center gap-3" style={{ color: safeColor }}>
              <span className="w-6 h-1 rounded-full" style={{ backgroundColor: safeColor }}></span>
              Projects
            </h2>
            <div className="space-y-6">
              {projects.map((proj) => proj.title && (
                <div key={proj.id} className="relative pl-6 border-l-2 border-gray-200">
                  <div className="absolute w-3 h-3 rounded-full -left-[7px] top-1.5 border-2 border-white" style={{ backgroundColor: safeColor }}></div>
                  <h3 className="font-bold text-base text-gray-900 break-words">{proj.title} {proj.link && <span className="text-xs font-normal ml-2 break-all" style={{ color: safeColor }}>({proj.link})</span>}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed mt-1">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {certifications?.length > 0 && certifications.some(c => c.name) && (
          <div>
            <h2 className="text-xl font-extrabold mb-5 flex items-center gap-3" style={{ color: safeColor }}>
              <span className="w-6 h-1 rounded-full" style={{ backgroundColor: safeColor }}></span>
              Certifications
            </h2>
            <div className="space-y-4">
              {certifications.map((cert) => cert.name && (
                <div key={cert.id} className="flex flex-wrap justify-between items-start gap-4 bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <div className="break-words flex-1 min-w-[200px]">
                    <h3 className="font-bold text-base text-gray-900 break-words">{cert.name}</h3>
                    <div className="text-sm text-gray-600 mt-0.5 break-words">{cert.issuer}</div>
                  </div>
                  <div className="text-xs font-bold px-3 py-1 rounded bg-white border border-gray-200 shadow-sm whitespace-nowrap" style={{ color: safeColor }}>{cert.date}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {skillsList.length > 0 && (
          <div>
            <h2 className="text-xl font-extrabold mb-5 flex items-center gap-3" style={{ color: safeColor }}>
              <span className="w-6 h-1 rounded-full" style={{ backgroundColor: safeColor }}></span>
              Skills
            </h2>
            <div className="flex flex-wrap gap-3">
              {skillsList.map((skill, idx) => (
                <span 
                  key={idx} 
                  className="px-3 py-1.5 rounded-lg text-sm font-bold shadow-sm"
                  style={{ 
                    backgroundColor: `${safeColor}15`, 
                    color: safeColor,
                    border: `1px solid ${safeColor}30`
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}