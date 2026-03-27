import React from 'react';

export default function Template20({ resumeData }) {
  const { name, email, phone, linkedin, portfolio, summary, skills, experience, education, projects, certifications, customSections, profileImage, themeColor } = resumeData;
  const skillsList = skills ? skills.split(',').map(s => s.trim()).filter(Boolean) : [];
  const safeColor = themeColor || '#f97316'; // Orange

  return (
    <div className="p-10 font-sans bg-slate-50 text-gray-800 w-full min-h-full">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-6 flex items-center gap-6">
        {profileImage && <img src={profileImage} alt="Profile" className="w-20 h-20 rounded-xl object-cover shadow-sm" />}
        <div>
          <h1 className="text-4xl font-black text-gray-900 mb-2">{name || 'John Doe'}</h1>
          <div className="flex flex-wrap gap-4 text-sm font-bold text-gray-500">
            {email && <span>{email}</span>}
            {phone && <span>{phone}</span>}
            {linkedin && <a href={linkedin} className="hover:text-gray-900 transition-colors">LinkedIn</a>}
            {portfolio && <a href={portfolio} className="hover:text-gray-900 transition-colors">Portfolio</a>}
          </div>
        </div>
      </div>

      {summary && (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-6 border-l-4" style={{ borderLeftColor: safeColor }}>
          <p className="text-sm font-medium leading-relaxed text-gray-700">{summary}</p>
        </div>
      )}

      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-6">
          {experience?.length > 0 && experience.some(e => e.title) && (
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-lg font-black uppercase mb-4" style={{ color: safeColor }}>Experience</h2>
              <div className="space-y-5">
                {experience.map((exp) => exp.title && (
                  <div key={exp.id}>
                    <h3 className="font-bold text-gray-900">{exp.title}</h3>
                    <div className="text-xs font-bold text-gray-500 mb-2">{exp.company} • {exp.duration}</div>
                    <p className="text-sm text-gray-700">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {projects?.length > 0 && projects.some(p => p.title) && (
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-lg font-black uppercase mb-4" style={{ color: safeColor }}>Projects</h2>
              <div className="space-y-5">
                {projects.map((proj) => proj.title && (
                  <div key={proj.id}>
                    <h3 className="font-bold text-gray-900">{proj.title}</h3>
                    {proj.link && <div className="text-xs font-bold text-blue-500 mb-2 break-all">{proj.link}</div>}
                    <p className="text-sm text-gray-700">{proj.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {customSections?.length > 0 && customSections.map((section) => (
            <div key={section.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-lg font-black uppercase mb-4" style={{ color: safeColor }}>{section.title}</h2>
              <div className="space-y-5">
                {section.items.map((item) => (
                  <div key={item.id}>
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                    <div className="text-xs font-bold text-gray-500 mb-2">{item.subtitle} {item.subtitle && item.date && '•'} {item.date}</div>
                    <p className="text-sm text-gray-700">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          {skillsList.length > 0 && (
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-lg font-black uppercase mb-4" style={{ color: safeColor }}>Skills</h2>
              <div className="flex flex-wrap gap-2">
                {skillsList.map((skill, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-slate-100 text-gray-700 rounded-lg text-xs font-bold">{skill}</span>
                ))}
              </div>
            </div>
          )}

          {education?.length > 0 && education.some(e => e.title) && (
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-lg font-black uppercase mb-4" style={{ color: safeColor }}>Education</h2>
              <div className="space-y-4">
                {education.map((edu) => edu.degree && (
                  <div key={edu.id}>
                    <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                    <div className="text-xs font-bold text-gray-500 mb-1">{edu.college}</div>
                    <div className="text-xs font-bold" style={{ color: safeColor }}>{edu.year}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {certifications?.length > 0 && certifications.some(c => c.name) && (
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-lg font-black uppercase mb-4" style={{ color: safeColor }}>Certifications</h2>
              <div className="space-y-4">
                {certifications.map((cert) => cert.name && (
                  <div key={cert.id}>
                    <h3 className="font-bold text-gray-900">{cert.name}</h3>
                    <div className="text-xs font-bold text-gray-500 mb-1">{cert.issuer}</div>
                    <div className="text-xs font-bold" style={{ color: safeColor }}>{cert.date}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}