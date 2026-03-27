import React from 'react';

export default function Template15({ resumeData }) {
  const { name, email, phone, linkedin, portfolio, summary, skills, experience, education, projects, certifications, customSections, themeColor } = resumeData;
  const skillsList = skills ? skills.split(',').map(s => s.trim()).filter(Boolean) : [];
  const safeColor = themeColor || '#475569'; // Slate 600

  return (
    <div className="p-10 font-sans bg-white text-gray-900 w-full min-h-full text-[13px] leading-snug">
      {/* Dense Header */}
      <div className="border-b-[2px] pb-3 mb-3" style={{ borderColor: safeColor }}>
        <h1 className="text-3xl font-bold uppercase break-words leading-tight tracking-tight mb-3" style={{ color: safeColor }}>{name || 'John Doe'}</h1>
        <div className="flex flex-wrap font-semibold text-gray-700">
          {email && <p className="break-all mr-5 mb-1">{email}</p>}
          {phone && <p className="whitespace-nowrap mr-5 mb-1">{phone}</p>}
          {linkedin && <a href={linkedin} target="_blank" rel="noreferrer" className="break-all hover:text-blue-600 mr-5 mb-1">LinkedIn</a>}
          {portfolio && <a href={portfolio} target="_blank" rel="noreferrer" className="break-all hover:text-blue-600 mr-5 mb-1">Portfolio</a>}
        </div>
      </div>

      {summary && (
        <div className="mb-4">
          <p className="text-gray-800">{summary}</p>
        </div>
      )}

      <div className="space-y-4">
        {skillsList.length > 0 && (
          <div className="mb-3">
            <h2 className="text-[14px] font-bold uppercase mb-1 border-b-[1.5px] pb-0.5 text-gray-800" style={{ borderColor: `${safeColor}50` }}>Technical Skills</h2>
            <p className="font-medium text-gray-700 break-words leading-relaxed">{skillsList.join(' | ')}</p>
          </div>
        )}

        {experience?.length > 0 && experience.some(e => e.title) && (
          <div className="mb-3">
            <h2 className="text-[14px] font-bold uppercase mb-2 border-b-[1.5px] pb-0.5 text-gray-800" style={{ borderColor: `${safeColor}50` }}>Professional Experience</h2>
            <div className="space-y-3">
              {experience.map((exp) => exp.title && (
                <div key={exp.id}>
                  <div className="flex flex-wrap justify-between items-baseline">
                    <h3 className="font-bold text-[14px] text-gray-900 break-words">{exp.title}</h3>
                    <span className="font-bold whitespace-nowrap text-gray-600">{exp.duration}</span>
                  </div>
                  <div className="italic font-semibold text-gray-700 mb-1 break-words">{exp.company}</div>
                  <p className="text-gray-700 pl-4 list-disc" style={{ display: 'list-item' }}>{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {projects?.length > 0 && projects.some(p => p.title) && (
          <div className="mb-3">
            <h2 className="text-[14px] font-bold uppercase mb-2 border-b-[1.5px] pb-0.5 text-gray-800" style={{ borderColor: `${safeColor}50` }}>Projects</h2>
            <div className="space-y-2">
              {projects.map((proj) => proj.title && (
                <div key={proj.id}>
                  <div className="flex flex-wrap justify-between items-baseline">
                    <h3 className="font-bold text-[14px] text-gray-900 break-words">{proj.title} {proj.link && <span className="font-normal italic text-[12px] ml-2 break-all text-blue-600">({proj.link})</span>}</h3>
                  </div>
                  <p className="text-gray-700 pl-4 list-disc" style={{ display: 'list-item' }}>{proj.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {education?.length > 0 && education.some(e => e.degree) && (
          <div className="mb-3">
            <h2 className="text-[14px] font-bold uppercase mb-2 border-b-[1.5px] pb-0.5 text-gray-800" style={{ borderColor: `${safeColor}50` }}>Education</h2>
            <div className="space-y-1">
              {education.map((edu) => edu.degree && (
                <div key={edu.id} className="flex flex-wrap justify-between items-baseline">
                  <div className="break-words flex-1 font-bold text-[13px]">{edu.degree}, <span className="font-normal text-gray-700">{edu.college}</span></div>
                  <div className="font-bold whitespace-nowrap text-gray-600">{edu.year}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {certifications?.length > 0 && certifications.some(c => c.name) && (
          <div className="mb-3">
            <h2 className="text-[14px] font-bold uppercase mb-2 border-b-[1.5px] pb-0.5 text-gray-800" style={{ borderColor: `${safeColor}50` }}>Certifications</h2>
            <div className="space-y-1">
              {certifications.map((cert) => cert.name && (
                <div key={cert.id} className="flex flex-wrap justify-between items-baseline">
                  <div className="break-words flex-1 font-bold text-[13px]">{cert.name}, <span className="font-normal text-gray-700">{cert.issuer}</span></div>
                  <div className="font-bold whitespace-nowrap text-gray-600">{cert.date}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {customSections?.length > 0 && customSections.map((section) => (
          <div key={section.id} className="mb-3">
            <h2 className="text-[14px] font-bold uppercase mb-2 border-b-[1.5px] pb-0.5 text-gray-800" style={{ borderColor: `${safeColor}50` }}>{section.title}</h2>
            <div className="space-y-3">
              {section.items.map((item) => (
                <div key={item.id}>
                  <div className="flex flex-wrap justify-between items-baseline">
                    <h3 className="font-bold text-[14px] text-gray-900 break-words">{item.title}</h3>
                    <span className="font-bold whitespace-nowrap text-gray-600">{item.date}</span>
                  </div>
                  {item.subtitle && <div className="italic font-semibold text-gray-700 mb-1 break-words">{item.subtitle}</div>}
                  <p className="text-gray-700 pl-4 list-disc" style={{ display: 'list-item' }}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}