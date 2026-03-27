import React from 'react';

export default function Template16({ resumeData }) {
  const { name, email, phone, linkedin, portfolio, summary, skills, experience, education, projects, certifications, customSections, profileImage, themeColor } = resumeData;
  const skillsList = skills ? skills.split(',').map(s => s.trim()).filter(Boolean) : [];
  const safeColor = themeColor || '#e11d48'; // Rose

  return (
    <div className="p-12 font-sans bg-white text-gray-900 w-full min-h-full">
      <div className="flex items-center gap-6 mb-8 border-b-4 pb-6" style={{ borderColor: safeColor }}>
        {profileImage && <img src={profileImage} alt="Profile" className="w-24 h-24 rounded-full object-cover border-4 shadow-sm" style={{ borderColor: safeColor }} />}
        <div>
          <h1 className="text-5xl font-black uppercase tracking-tight text-gray-900 mb-2">{name || 'John Doe'}</h1>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm font-bold text-gray-600">
            {email && <span>{email}</span>}
            {phone && <span>{phone}</span>}
            {linkedin && <a href={linkedin} target="_blank" rel="noreferrer" className="hover:underline text-blue-600">LinkedIn</a>}
            {portfolio && <a href={portfolio} target="_blank" rel="noreferrer" className="hover:underline text-blue-600">Portfolio</a>}
          </div>
        </div>
      </div>

      {summary && <p className="text-sm leading-relaxed mb-8">{summary}</p>}

      <div className="flex flex-col gap-8">
        {experience?.length > 0 && experience.some(e => e.title) && (
          <div className="relative border-l-2 pl-6 ml-3" style={{ borderColor: `${safeColor}50` }}>
            <h2 className="text-2xl font-black uppercase tracking-widest mb-6 bg-white absolute -top-4 -left-3 px-2 text-gray-900">Experience</h2>
            <div className="mt-8 space-y-6">
              {experience.map((exp) => exp.title && (
                <div key={exp.id} className="relative">
                  <div className="absolute w-3 h-3 rounded-full -left-[31px] top-1.5" style={{ backgroundColor: safeColor }}></div>
                  <div className="flex flex-wrap justify-between items-baseline mb-1">
                    <h3 className="font-bold text-lg text-gray-900">{exp.title}</h3>
                    <span className="text-sm font-bold whitespace-nowrap" style={{ color: safeColor }}>{exp.duration}</span>
                  </div>
                  <div className="text-sm font-semibold text-gray-600 mb-2">{exp.company}</div>
                  <p className="text-sm leading-relaxed text-gray-700">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {projects?.length > 0 && projects.some(p => p.title) && (
          <div className="relative border-l-2 pl-6 ml-3" style={{ borderColor: `${safeColor}50` }}>
            <h2 className="text-2xl font-black uppercase tracking-widest mb-6 bg-white absolute -top-4 -left-3 px-2 text-gray-900">Projects</h2>
            <div className="mt-8 space-y-6">
              {projects.map((proj) => proj.title && (
                <div key={proj.id} className="relative">
                  <div className="absolute w-3 h-3 rounded-full -left-[31px] top-1.5" style={{ backgroundColor: safeColor }}></div>
                  <div className="flex flex-wrap justify-between items-baseline mb-1">
                    <h3 className="font-bold text-lg text-gray-900">{proj.title} {proj.link && <span className="font-normal text-sm ml-2 break-all text-blue-600">({proj.link})</span>}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-700">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 gap-8">
          {education?.length > 0 && education.some(e => e.degree) && (
            <div className="relative border-l-2 pl-6 ml-3" style={{ borderColor: `${safeColor}50` }}>
              <h2 className="text-xl font-black uppercase tracking-widest mb-4 bg-white absolute -top-3 -left-3 px-2 text-gray-900">Education</h2>
              <div className="mt-6 space-y-4">
                {education.map((edu) => edu.degree && (
                  <div key={edu.id} className="relative">
                    <div className="absolute w-3 h-3 rounded-full -left-[31px] top-1.5" style={{ backgroundColor: safeColor }}></div>
                    <h3 className="font-bold text-base text-gray-900">{edu.degree}</h3>
                    <div className="text-sm text-gray-600">{edu.college}</div>
                    <div className="text-xs font-bold mt-1" style={{ color: safeColor }}>{edu.year}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {certifications?.length > 0 && certifications.some(c => c.name) && (
            <div className="relative border-l-2 pl-6 ml-3" style={{ borderColor: `${safeColor}50` }}>
              <h2 className="text-xl font-black uppercase tracking-widest mb-4 bg-white absolute -top-3 -left-3 px-2 text-gray-900">Certificates</h2>
              <div className="mt-6 space-y-4">
                {certifications.map((cert) => cert.name && (
                  <div key={cert.id} className="relative">
                    <div className="absolute w-3 h-3 rounded-full -left-[31px] top-1.5" style={{ backgroundColor: safeColor }}></div>
                    <h3 className="font-bold text-base text-gray-900">{cert.name}</h3>
                    <div className="text-sm text-gray-600">{cert.issuer}</div>
                    <div className="text-xs font-bold mt-1" style={{ color: safeColor }}>{cert.date}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {skillsList.length > 0 && (
          <div className="relative border-l-2 pl-6 ml-3" style={{ borderColor: `${safeColor}50` }}>
            <h2 className="text-xl font-black uppercase tracking-widest mb-4 bg-white absolute -top-3 -left-3 px-2 text-gray-900">Skills</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {skillsList.map((skill, idx) => (
                <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-bold rounded shadow-sm">{skill}</span>
              ))}
            </div>
          </div>
        )}

        {customSections?.length > 0 && customSections.map((section) => (
          <div key={section.id} className="relative border-l-2 pl-6 ml-3" style={{ borderColor: `${safeColor}50` }}>
            <h2 className="text-2xl font-black uppercase tracking-widest mb-6 bg-white absolute -top-4 -left-3 px-2 text-gray-900">{section.title}</h2>
            <div className="mt-8 space-y-6">
              {section.items.map((item) => (
                <div key={item.id} className="relative">
                  <div className="absolute w-3 h-3 rounded-full -left-[31px] top-1.5" style={{ backgroundColor: safeColor }}></div>
                  <div className="flex flex-wrap justify-between items-baseline mb-1">
                    <h3 className="font-bold text-lg text-gray-900">{item.title}</h3>
                    <span className="text-sm font-bold whitespace-nowrap" style={{ color: safeColor }}>{item.date}</span>
                  </div>
                  {item.subtitle && <div className="text-sm font-semibold text-gray-600 mb-2">{item.subtitle}</div>}
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