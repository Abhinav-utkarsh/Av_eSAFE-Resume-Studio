import React from 'react';

export default function Template21({ resumeData }) {
  const { name, email, phone, linkedin, portfolio, summary, skills, experience, education, projects, certifications, customSections, profileImage, themeColor } = resumeData;
  const skillsList = skills ? skills.split(',').map(s => s.trim()).filter(Boolean) : [];
  const safeColor = themeColor || '#0ea5e9'; // Light Blue

  return (
    <div className="p-12 font-sans bg-white text-gray-900 w-full min-h-full">
      <div className="border-t-8 pt-8 mb-8" style={{ borderColor: safeColor }}>
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-5xl font-light tracking-tighter text-gray-900 mb-3">{name || 'John Doe'}</h1>
            <div className="flex gap-4 text-sm font-semibold text-gray-500">
              {email && <span>{email}</span>}
              {phone && <span>{phone}</span>}
              {linkedin && <a href={linkedin} className="text-blue-500">LinkedIn</a>}
              {portfolio && <a href={portfolio} className="text-blue-500">Portfolio</a>}
            </div>
          </div>
          {profileImage && <img src={profileImage} alt="Profile" className="w-20 h-20 rounded shadow-sm" />}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-12">
        <div className="col-span-1 space-y-8">
          {skillsList.length > 0 && (
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Skills</h2>
              <ul className="space-y-2 text-sm font-medium text-gray-800">
                {skillsList.map((skill, idx) => <li key={idx}>{skill}</li>)}
              </ul>
            </div>
          )}
          {education?.length > 0 && education.some(e => e.degree) && (
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Education</h2>
              <div className="space-y-4">
                {education.map((edu) => edu.degree && (
                  <div key={edu.id}>
                    <h3 className="font-bold text-sm text-gray-900">{edu.degree}</h3>
                    <p className="text-xs text-gray-500 mt-1">{edu.college}</p>
                    <p className="text-xs font-bold mt-1" style={{ color: safeColor }}>{edu.year}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          {certifications?.length > 0 && certifications.some(c => c.name) && (
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Certifications</h2>
              <div className="space-y-4">
                {certifications.map((cert) => cert.name && (
                  <div key={cert.id}>
                    <h3 className="font-bold text-sm text-gray-900">{cert.name}</h3>
                    <p className="text-xs text-gray-500 mt-1">{cert.issuer}</p>
                    <p className="text-xs font-bold mt-1" style={{ color: safeColor }}>{cert.date}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="col-span-3 space-y-10 border-l border-gray-100 pl-8">
          {summary && (
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Summary</h2>
              <p className="text-sm leading-relaxed text-gray-700">{summary}</p>
            </div>
          )}

          {experience?.length > 0 && experience.some(e => e.title) && (
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Experience</h2>
              <div className="space-y-8">
                {experience.map((exp) => exp.title && (
                  <div key={exp.id}>
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="font-bold text-lg text-gray-900">{exp.title}</h3>
                      <span className="text-sm font-bold" style={{ color: safeColor }}>{exp.duration}</span>
                    </div>
                    <p className="text-sm font-semibold text-gray-600 mb-3">{exp.company}</p>
                    <p className="text-sm leading-relaxed text-gray-700">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {projects?.length > 0 && projects.some(p => p.title) && (
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Projects</h2>
              <div className="space-y-8">
                {projects.map((proj) => proj.title && (
                  <div key={proj.id}>
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="font-bold text-lg text-gray-900">{proj.title} {proj.link && <span className="font-normal text-sm ml-2 text-blue-500 break-all">({proj.link})</span>}</h3>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-700">{proj.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {customSections?.length > 0 && customSections.map((section) => (
            <div key={section.id}>
              <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">{section.title}</h2>
              <div className="space-y-8">
                {section.items.map((item) => (
                  <div key={item.id}>
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="font-bold text-lg text-gray-900">{item.title}</h3>
                      <span className="text-sm font-bold" style={{ color: safeColor }}>{item.date}</span>
                    </div>
                    {item.subtitle && <p className="text-sm font-semibold text-gray-600 mb-3">{item.subtitle}</p>}
                    <p className="text-sm leading-relaxed text-gray-700">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}