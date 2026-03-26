import React from 'react';

export default function Template4({ resumeData }) {
  const { name, email, phone, linkedin, portfolio, summary, skills, experience, education, projects, certifications, themeColor } = resumeData;
  const skillsList = skills ? skills.split(',').map(s => s.trim()).filter(Boolean) : [];
  const safeColor = themeColor || '#0f172a'; // Tight ATS Layout

  return (
    <div className="p-10 font-sans bg-white text-gray-900 w-full min-h-full leading-tight text-sm">
      {/* Dense Header */}
      <div className="text-center mb-4 border-b-2 pb-4" style={{ borderColor: safeColor }}>
        <h1 className="text-3xl font-black uppercase mb-3 break-words leading-tight">{name || 'John Doe'}</h1>
        <div className="flex flex-wrap justify-center text-sm font-bold" style={{ color: safeColor }}>
          {email && <span className="break-all mx-3 my-1">{email}</span>}
          {phone && <span className="whitespace-nowrap mx-3 my-1">{phone}</span>}
          {linkedin && <a href={linkedin} target="_blank" rel="noreferrer" className="break-all hover:underline mx-3 my-1">LinkedIn</a>}
          {portfolio && <a href={portfolio} target="_blank" rel="noreferrer" className="break-all hover:underline mx-3 my-1">Portfolio</a>}
        </div>
      </div>

      {summary && (
        <div className="mb-4">
          <p className="text-[13px] text-gray-700 leading-relaxed">{summary}</p>
        </div>
      )}

      <div className="space-y-4">
        {skillsList.length > 0 && (
          <div className="mb-3">
            <h2 className="text-[15px] font-black uppercase mb-1 border-b border-gray-300 pb-0.5" style={{ color: safeColor }}>Technical Skills</h2>
            <p className="text-[13px] font-medium text-gray-800 break-words leading-relaxed">{skillsList.join(' | ')}</p>
          </div>
        )}

        {experience?.length > 0 && experience.some(e => e.title) && (
          <div className="mb-3">
            <h2 className="text-[15px] font-black uppercase mb-2 border-b border-gray-300 pb-0.5" style={{ color: safeColor }}>Experience</h2>
            <div className="space-y-3">
              {experience.map((exp) => exp.title && (
                <div key={exp.id}>
                  <div className="flex flex-wrap justify-between items-baseline mb-0.5">
                    <h3 className="font-bold text-[14px] text-gray-900 break-words">{exp.title}</h3>
                    <span className="text-[12px] font-bold whitespace-nowrap">{exp.duration}</span>
                  </div>
                  <div className="text-[13px] italic font-semibold text-gray-700 mb-1 break-words">{exp.company}</div>
                  <p className="text-[13px] text-gray-700 pl-4 list-disc" style={{ display: 'list-item' }}>{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {projects?.length > 0 && projects.some(p => p.title) && (
          <div className="mb-3">
            <h2 className="text-[15px] font-black uppercase mb-2 border-b border-gray-300 pb-0.5" style={{ color: safeColor }}>Projects</h2>
            <div className="space-y-2">
              {projects.map((proj) => proj.title && (
                <div key={proj.id}>
                  <div className="flex flex-wrap justify-between items-baseline mb-0.5">
                    <h3 className="font-bold text-[14px] text-gray-900 break-words">{proj.title} {proj.link && <span className="font-normal italic text-[12px] ml-2 break-all" style={{color: safeColor}}>({proj.link})</span>}</h3>
                  </div>
                  <p className="text-[13px] text-gray-700 pl-4 list-disc" style={{ display: 'list-item' }}>{proj.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {education?.length > 0 && education.some(e => e.degree) && (
          <div className="mb-3">
            <h2 className="text-[15px] font-black uppercase mb-1 border-b border-gray-300 pb-0.5" style={{ color: safeColor }}>Education</h2>
            {education.map((edu) => edu.degree && (
              <div key={edu.id} className="flex flex-wrap justify-between items-baseline mb-1">
                <div className="break-words flex-1 font-bold text-[13px]">{edu.degree} <span className="font-normal italic text-gray-600">| {edu.college}</span></div>
                <div className="text-[12px] font-bold whitespace-nowrap">{edu.year}</div>
              </div>
            ))}
          </div>
        )}

        {certifications?.length > 0 && certifications.some(c => c.name) && (
          <div className="mb-3">
            <h2 className="text-[15px] font-black uppercase mb-1 border-b border-gray-300 pb-0.5" style={{ color: safeColor }}>Certifications</h2>
            {certifications.map((cert) => cert.name && (
              <div key={cert.id} className="flex flex-wrap justify-between items-baseline mb-1">
                <div className="break-words flex-1 font-bold text-[13px]">{cert.name} <span className="font-normal italic text-gray-600">| {cert.issuer}</span></div>
                <div className="text-[12px] font-bold whitespace-nowrap">{cert.date}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}