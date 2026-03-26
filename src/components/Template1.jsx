import React from 'react';

export default function Template1({ resumeData }) {
  const { name, email, phone, linkedin, portfolio, summary, skills, experience, education, projects, certifications, customSections, profileImage, themeColor } = resumeData;
  const skillsList = skills ? skills.split(',').map(s => s.trim()).filter(Boolean) : [];
  const safeColor = themeColor || '#0f172a';

  return (
    <div className="p-12 font-serif bg-white text-gray-900 w-full min-h-full">
      <div className="border-b-2 pb-5 mb-6 text-center flex flex-col items-center" style={{ borderColor: safeColor }}>
        {profileImage && <img src={profileImage} alt="Profile" className="w-24 h-24 rounded-full object-cover border-2 shadow-sm mb-3" style={{ borderColor: safeColor }} />}
        <h1 className="text-4xl font-bold tracking-wide uppercase break-words mb-4 leading-tight" style={{ color: safeColor }}>
          {name || 'John Doe'}
        </h1>
        <div className="flex flex-wrap justify-center text-sm font-medium text-gray-600">
          {email && <span className="break-all mx-3 my-1">{email}</span>}
          {phone && <span className="whitespace-nowrap mx-3 my-1">{phone}</span>}
          {linkedin && <a href={linkedin} target="_blank" rel="noreferrer" className="break-all hover:underline text-blue-600 mx-3 my-1">LinkedIn</a>}
          {portfolio && <a href={portfolio} target="_blank" rel="noreferrer" className="break-all hover:underline text-blue-600 mx-3 my-1">Portfolio</a>}
        </div>
      </div>
      
      {summary && (
        <div className="mb-6">
          <p className="text-sm leading-relaxed text-left">{summary}</p>
        </div>
      )}

      {experience?.length > 0 && experience.some(e => e.title) && (
        <div className="mb-6">
          <h2 className="text-lg font-bold uppercase tracking-widest border-b pb-2 mb-4" style={{ borderColor: safeColor, color: safeColor }}>
            Professional Experience
          </h2>
          {experience.map((exp) => exp.title && (
            <div key={exp.id} className="mb-6">
              <div className="flex flex-wrap justify-between items-baseline gap-x-4 mb-1">
                <h3 className="font-bold text-base text-gray-900 break-words flex-1 min-w-[200px]">{exp.title}</h3>
                <span className="text-xs font-semibold text-gray-700 whitespace-nowrap">{exp.duration}</span>
              </div>
              <div className="italic text-sm text-gray-700 font-medium mb-2 break-words">{exp.company}</div>
              <p className="text-sm leading-relaxed text-left">{exp.description}</p>
            </div>
          ))}
        </div>
      )}

      {education?.length > 0 && education.some(e => e.degree) && (
        <div className="mb-6">
          <h2 className="text-lg font-bold uppercase tracking-widest border-b pb-2 mb-4" style={{ borderColor: safeColor, color: safeColor }}>
            Education
          </h2>
          {education.map((edu) => edu.degree && (
            <div key={edu.id} className="flex flex-wrap justify-between items-baseline gap-x-4 mb-3">
              <div className="break-words flex-1 min-w-[200px]">
                <span className="font-bold text-base text-gray-900 mr-2">{edu.degree}</span>
                <span className="text-sm text-gray-700 italic">| {edu.college}</span>
              </div>
              <span className="text-sm font-bold text-gray-800 whitespace-nowrap">{edu.year}</span>
            </div>
          ))}
        </div>
      )}

      {projects?.length > 0 && projects.some(p => p.title) && (
        <div className="mb-6">
          <h2 className="text-lg font-bold uppercase tracking-widest border-b pb-2 mb-4" style={{ borderColor: safeColor, color: safeColor }}>
            Projects
          </h2>
          {projects.map((proj) => proj.title && (
            <div key={proj.id} className="mb-5">
              <div className="font-bold text-base text-gray-900 mb-1 break-words">
                {proj.title} 
                {proj.link && <span className="text-sm font-normal italic ml-2 break-all" style={{ color: safeColor }}>({proj.link})</span>}
              </div>
              <p className="text-sm leading-relaxed text-left">{proj.description}</p>
            </div>
          ))}
        </div>
      )}

      {certifications?.length > 0 && certifications.some(c => c.name) && (
        <div className="mb-6">
          <h2 className="text-lg font-bold uppercase tracking-widest border-b pb-2 mb-4" style={{ borderColor: safeColor, color: safeColor }}>
            Certifications
          </h2>
          {certifications.map((cert) => cert.name && (
            <div key={cert.id} className="flex flex-wrap justify-between items-baseline gap-x-4 mb-3">
              <div className="break-words flex-1 min-w-[200px]"><span className="font-bold text-base text-gray-900 mr-2">{cert.name}</span><span className="text-sm text-gray-700 italic">| {cert.issuer}</span></div>
              <span className="text-sm font-bold text-gray-800 whitespace-nowrap">{cert.date}</span>
            </div>
          ))}
        </div>
      )}

      {skillsList.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold uppercase tracking-widest border-b pb-2 mb-4" style={{ borderColor: safeColor, color: safeColor }}>
            Core Competencies
          </h2>
          <p className="text-sm leading-relaxed font-medium text-gray-800">
            {skillsList.join('  •  ')}
          </p>
        </div>
      )}

      {customSections?.length > 0 && customSections.map((section) => (
        <div key={section.id} className="mb-6">
          <h2 className="text-lg font-bold uppercase tracking-widest border-b pb-2 mb-4" style={{ borderColor: safeColor, color: safeColor }}>
            {section.title}
          </h2>
          {section.items.map((item) => (
            <div key={item.id} className="mb-4">
              <div className="flex flex-wrap justify-between items-baseline gap-x-4 mb-1">
                <h3 className="font-bold text-base text-gray-900 break-words flex-1 min-w-[200px]">{item.title}</h3>
                <span className="text-xs font-semibold text-gray-700 whitespace-nowrap">{item.date}</span>
              </div>
              {item.subtitle && <div className="italic text-sm text-gray-700 font-medium mb-1 break-words">{item.subtitle}</div>}
              <p className="text-sm leading-relaxed text-left">{item.description}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}