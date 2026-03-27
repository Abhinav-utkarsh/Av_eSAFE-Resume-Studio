import React from 'react';

export default function Template22({ resumeData }) {
  const { name, email, phone, linkedin, portfolio, summary, skills, experience, education, projects, certifications, customSections, profileImage, themeColor } = resumeData;
  const skillsList = skills ? skills.split(',').map(s => s.trim()).filter(Boolean) : [];
  const safeColor = themeColor || '#4f46e5'; // Indigo

  return (
    <div className="font-sans bg-white text-gray-800 w-full min-h-full border-l-[24px]" style={{ borderColor: safeColor }}>
      <div className="p-12 space-y-10">
        <div className="flex justify-between items-center border-b-2 pb-8" style={{ borderColor: `${safeColor}20` }}>
          <div>
            <h1 className="text-5xl font-black uppercase text-gray-900 mb-3 tracking-tight">{name || 'John Doe'}</h1>
            <div className="flex gap-4 text-sm font-bold text-gray-500">
              {email && <span>{email}</span>}
              {phone && <span>{phone}</span>}
              {linkedin && <a href={linkedin} className="text-blue-500">LinkedIn</a>}
              {portfolio && <a href={portfolio} className="text-blue-500">Portfolio</a>}
            </div>
          </div>
          {profileImage && <img src={profileImage} alt="Profile" className="w-24 h-24 rounded-full object-cover border-4" style={{ borderColor: safeColor }} />}
        </div>

        {summary && (
          <p className="text-lg font-medium text-gray-700 leading-relaxed">
            {summary}
          </p>
        )}

        {experience?.length > 0 && experience.some(e => e.title) && (
          <div>
            <h2 className="text-2xl font-black uppercase mb-6" style={{ color: safeColor }}>Experience</h2>
            <div className="space-y-8">
              {experience.map((exp) => exp.title && (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-bold text-xl text-gray-900">{exp.title}</h3>
                    <span className="text-sm font-bold text-gray-500 px-3 py-1 bg-gray-100 rounded-full">{exp.duration}</span>
                  </div>
                  <p className="text-base font-bold text-gray-600 mb-3">{exp.company}</p>
                  <p className="text-sm leading-relaxed text-gray-700">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {projects?.length > 0 && projects.some(p => p.title) && (
          <div>
            <h2 className="text-2xl font-black uppercase mb-6" style={{ color: safeColor }}>Projects</h2>
            <div className="space-y-8">
              {projects.map((proj) => proj.title && (
                <div key={proj.id}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-bold text-xl text-gray-900">{proj.title} {proj.link && <span className="font-normal text-sm ml-2 text-blue-500 break-all">({proj.link})</span>}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-700">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 gap-8">
          {education?.length > 0 && education.some(e => e.degree) && (
            <div>
              <h2 className="text-xl font-black uppercase mb-4" style={{ color: safeColor }}>Education</h2>
              <div className="space-y-4">
                {education.map((edu) => edu.degree && (
                  <div key={edu.id} className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                    <p className="text-sm text-gray-600 mt-1">{edu.college}</p>
                    <p className="text-xs font-bold mt-2 text-gray-500">{edu.year}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          {certifications?.length > 0 && certifications.some(c => c.name) && (
            <div>
              <h2 className="text-xl font-black uppercase mb-4" style={{ color: safeColor }}>Certifications</h2>
              <div className="space-y-4">
                {certifications.map((cert) => cert.name && (
                  <div key={cert.id} className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <h3 className="font-bold text-gray-900">{cert.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{cert.issuer}</p>
                    <p className="text-xs font-bold mt-2 text-gray-500">{cert.date}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          {skillsList.length > 0 && (
            <div>
              <h2 className="text-xl font-black uppercase mb-4" style={{ color: safeColor }}>Skills</h2>
              <p className="text-sm font-bold leading-loose text-gray-700">{skillsList.join(' • ')}</p>
            </div>
          )}
        </div>

        {customSections?.length > 0 && customSections.map((section) => (
          <div key={section.id}>
            <h2 className="text-2xl font-black uppercase mb-6" style={{ color: safeColor }}>{section.title}</h2>
            <div className="space-y-8">
              {section.items.map((item) => (
                <div key={item.id}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-bold text-xl text-gray-900">{item.title}</h3>
                    <span className="text-sm font-bold text-gray-500 px-3 py-1 bg-gray-100 rounded-full">{item.date}</span>
                  </div>
                  {item.subtitle && <p className="text-base font-bold text-gray-600 mb-3">{item.subtitle}</p>}
                  <p className="text-sm leading-relaxed text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}