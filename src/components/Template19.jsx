import React from 'react';

export default function Template19({ resumeData }) {
  const { name, email, phone, linkedin, portfolio, summary, skills, experience, education, projects, certifications, customSections, profileImage, themeColor } = resumeData;
  const skillsList = skills ? skills.split(',').map(s => s.trim()).filter(Boolean) : [];
  const safeColor = themeColor || '#8b5cf6';

  return (
    <div className="flex font-sans bg-white text-gray-800 w-full min-h-full">
      {/* Dark Sidebar */}
      <div className="w-[35%] bg-slate-900 text-slate-300 p-8 flex flex-col gap-8">
        <div className="flex flex-col items-center text-center border-b border-slate-700 pb-8">
          {profileImage && <img src={profileImage} alt="Profile" className="w-32 h-32 rounded-full object-cover border-4 mb-4" style={{ borderColor: safeColor }} />}
          <h1 className="text-3xl font-black uppercase text-white tracking-tight">{name || 'John Doe'}</h1>
        </div>
        
        <div>
          <h2 className="text-sm font-bold tracking-widest uppercase text-white mb-4">Contact</h2>
          <div className="flex flex-col gap-2 text-sm font-medium">
            {email && <span>{email}</span>}
            {phone && <span>{phone}</span>}
            {linkedin && <a href={linkedin} className="hover:text-white">LinkedIn</a>}
            {portfolio && <a href={portfolio} className="hover:text-white">Portfolio</a>}
          </div>
        </div>

        {skillsList.length > 0 && (
          <div>
            <h2 className="text-sm font-bold tracking-widest uppercase text-white mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skillsList.map((skill, idx) => (
                <span key={idx} className="px-3 py-1 rounded text-xs font-bold bg-slate-800 text-white border border-slate-700">{skill}</span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Light Main Content */}
      <div className="w-[65%] p-10 space-y-10">
        {summary && (
          <div>
            <h2 className="text-2xl font-black uppercase tracking-tight text-gray-900 mb-4" style={{ color: safeColor }}>Profile</h2>
            <p className="text-sm leading-relaxed font-medium text-gray-700">{summary}</p>
          </div>
        )}

        {experience?.length > 0 && experience.some(e => e.title) && (
          <div>
            <h2 className="text-2xl font-black uppercase tracking-tight text-gray-900 mb-6" style={{ color: safeColor }}>Experience</h2>
            <div className="space-y-6">
              {experience.map((exp) => exp.title && (
                <div key={exp.id}>
                  <h3 className="font-bold text-lg text-gray-900">{exp.title}</h3>
                  <div className="text-sm font-bold text-gray-500 uppercase tracking-wide my-1">{exp.company} <span className="mx-2">|</span> {exp.duration}</div>
                  <p className="text-sm text-gray-700 leading-relaxed mt-2">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {education?.length > 0 && education.some(e => e.degree) && (
          <div>
            <h2 className="text-2xl font-black uppercase tracking-tight text-gray-900 mb-6" style={{ color: safeColor }}>Education</h2>
            <div className="space-y-4">
              {education.map((edu) => edu.degree && (
                <div key={edu.id}>
                  <h3 className="font-bold text-base text-gray-900">{edu.degree}</h3>
                  <p className="text-sm text-gray-600 mt-1">{edu.college} | <span className="font-bold">{edu.year}</span></p>
                </div>
              ))}
            </div>
          </div>
        )}

        {projects?.length > 0 && projects.some(p => p.title) && (
          <div>
            <h2 className="text-2xl font-black uppercase tracking-tight text-gray-900 mb-6" style={{ color: safeColor }}>Projects</h2>
            <div className="space-y-6">
              {projects.map((proj) => proj.title && (
                <div key={proj.id}>
                  <h3 className="font-bold text-lg text-gray-900">{proj.title} {proj.link && <span className="font-normal text-sm ml-2 text-blue-500 break-all">({proj.link})</span>}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed mt-2">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {certifications?.length > 0 && certifications.some(c => c.name) && (
          <div>
            <h2 className="text-2xl font-black uppercase tracking-tight text-gray-900 mb-6" style={{ color: safeColor }}>Certifications</h2>
            <div className="space-y-4">
              {certifications.map((cert) => cert.name && (
                <div key={cert.id}>
                  <h3 className="font-bold text-base text-gray-900">{cert.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{cert.issuer} | <span className="font-bold">{cert.date}</span></p>
                </div>
              ))}
            </div>
          </div>
        )}

        {customSections?.length > 0 && customSections.map((section) => (
          <div key={section.id}>
            <h2 className="text-2xl font-black uppercase tracking-tight text-gray-900 mb-6" style={{ color: safeColor }}>{section.title}</h2>
            <div className="space-y-6">
              {section.items.map((item) => (
                <div key={item.id}>
                  <h3 className="font-bold text-lg text-gray-900">{item.title}</h3>
                  <div className="text-sm font-bold text-gray-500 uppercase tracking-wide my-1">{item.subtitle} {item.subtitle && item.date && <span className="mx-2">|</span>} {item.date}</div>
                  <p className="text-sm text-gray-700 leading-relaxed mt-2">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}