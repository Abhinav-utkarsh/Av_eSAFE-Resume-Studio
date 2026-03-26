import React from 'react';

export default function Template9({ resumeData }) {
  const { name, email, phone, linkedin, portfolio, summary, skills, experience, education, projects, certifications, customSections, profileImage, themeColor } = resumeData;
  const skillsList = skills ? skills.split(',').map(s => s.trim()).filter(Boolean) : [];
  const safeColor = themeColor || '#14b8a6'; // Teal Modern

  return (
    <div className="p-10 font-sans bg-gray-50 text-gray-800 w-full min-h-full border-t-[16px]" style={{ borderColor: safeColor }}>
      <div className="mb-8 border-b-2 pb-6 flex items-center gap-8" style={{ borderColor: `${safeColor}30` }}>
        {profileImage && <img src={profileImage} alt="Profile" className="w-28 h-28 rounded-2xl object-cover shadow-lg border-4 border-white shrink-0" />}
        <div>
          <h1 className="text-5xl font-black text-gray-900 tracking-tighter mb-5 break-words leading-tight">{name || 'John Doe'}</h1>
          <div className="flex flex-wrap text-sm font-bold tracking-wide text-white">
            {email && <span className="px-4 py-1.5 shadow-sm break-all rounded mr-3 mb-3" style={{ backgroundColor: safeColor }}>{email}</span>}
            {phone && <span className="px-4 py-1.5 shadow-sm whitespace-nowrap rounded mr-3 mb-3" style={{ backgroundColor: safeColor }}>{phone}</span>}
            {linkedin && <a href={linkedin} target="_blank" rel="noreferrer" className="px-4 py-1.5 shadow-sm break-all rounded hover:opacity-90 transition-opacity mr-3 mb-3" style={{ backgroundColor: safeColor }}>LinkedIn</a>}
            {portfolio && <a href={portfolio} target="_blank" rel="noreferrer" className="px-4 py-1.5 shadow-sm break-all rounded hover:opacity-90 transition-opacity mr-3 mb-3" style={{ backgroundColor: safeColor }}>Portfolio</a>}
          </div>
        </div>
      </div>

      {summary && (
        <div className="mb-8 bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
          <p className="text-sm font-medium text-gray-600 leading-relaxed border-l-4 pl-4" style={{ borderColor: safeColor }}>{summary}</p>
        </div>
      )}

      {experience?.length > 0 && experience.some(e => e.title) && (
        <div className="mb-8">
          <h2 className="text-xl font-black uppercase mb-5 text-gray-900 flex items-center gap-3">
            <span className="w-5 h-5 flex items-center justify-center rounded-sm shadow-sm" style={{ backgroundColor: safeColor }}></span> Professional Background
          </h2>
          <div className="grid grid-cols-1 gap-5 pl-2">
            {experience.map((exp) => exp.title && (
              <div key={exp.id} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm relative overflow-hidden transition-all hover:shadow-md">
                <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: safeColor }}></div>
                <div className="flex flex-wrap gap-4 justify-between items-start mb-2">
                  <h3 className="font-extrabold text-lg text-gray-900 break-words flex-1 min-w-[200px]">{exp.title}</h3>
                  <span className="font-bold text-xs bg-gray-50 border px-3 py-1.5 rounded-md shadow-sm whitespace-nowrap" style={{ borderColor: `${safeColor}30`, color: safeColor }}>{exp.duration}</span>
                </div>
                <p className="text-sm font-bold text-gray-500 mb-3 break-words">{exp.company}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {projects?.length > 0 && projects.some(p => p.title) && (
        <div className="mb-8">
          <h2 className="text-xl font-black uppercase mb-5 text-gray-900 flex items-center gap-3">
            <span className="w-5 h-5 flex items-center justify-center rounded-sm shadow-sm" style={{ backgroundColor: safeColor }}></span> Projects Spotlight
          </h2>
          <div className="grid grid-cols-1 gap-5 pl-2">
            {projects.map((proj) => proj.title && (
              <div key={proj.id} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm relative overflow-hidden transition-all hover:shadow-md">
                <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: safeColor }}></div>
                <div className="flex flex-wrap gap-4 justify-between items-start mb-3">
                  <h3 className="font-extrabold text-lg text-gray-900 break-words flex-1 min-w-[200px]">{proj.title} {proj.link && <span className="text-xs font-bold text-blue-500 ml-2 inline-block break-all bg-blue-50 px-2 py-0.5 rounded">({proj.link})</span>}</h3>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{proj.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {education?.length > 0 && education.some(e => e.degree) && (
        <div className="mb-8">
          <h2 className="text-xl font-black uppercase mb-5 text-gray-900 flex items-center gap-3">
            <span className="w-5 h-5 flex items-center justify-center rounded-sm border-2 border-white shadow-sm ring-2" style={{ backgroundColor: safeColor, ringColor: safeColor }}></span> Education Profile
          </h2>
          <div className="grid grid-cols-2 gap-5 pl-2">
            {education.map((edu) => edu.degree && (
              <div key={edu.id} className="flex flex-col p-5 rounded-xl bg-white border border-gray-100 shadow-sm transition-all hover:shadow-md">
                <h3 className="font-extrabold text-base text-gray-900 break-words">{edu.degree}</h3>
                <p className="text-gray-600 font-medium text-sm my-2 break-words">{edu.college}</p>
                <span className="font-bold text-xs mt-auto inline-block bg-gray-50 px-3 py-1 rounded-md self-start whitespace-nowrap" style={{ color: safeColor }}>{edu.year}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {certifications?.length > 0 && certifications.some(c => c.name) && (
        <div className="mb-8">
          <h2 className="text-xl font-black uppercase mb-5 text-gray-900 flex items-center gap-3">
            <span className="w-5 h-5 flex items-center justify-center rounded-sm border-2 border-white shadow-sm ring-2" style={{ backgroundColor: safeColor, ringColor: safeColor }}></span> Certifications
          </h2>
          <div className="grid grid-cols-2 gap-5 pl-2">
            {certifications.map((cert) => cert.name && (
              <div key={cert.id} className="flex flex-col p-5 rounded-xl bg-white border border-gray-100 shadow-sm transition-all hover:shadow-md">
                <h3 className="font-extrabold text-base text-gray-900 break-words">{cert.name}</h3>
                <p className="text-gray-600 font-medium text-sm my-2 break-words">{cert.issuer}</p>
                <span className="font-bold text-xs mt-auto inline-block bg-gray-50 px-3 py-1 rounded-md self-start whitespace-nowrap" style={{ color: safeColor }}>{cert.date}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {skillsList.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-black uppercase mb-5 text-gray-900 flex items-center gap-3">
            <span className="w-5 h-5 flex items-center justify-center rounded-full shadow-sm" style={{ backgroundColor: safeColor }}></span> Key Abilities
          </h2>
          <div className="flex flex-wrap gap-3 pl-2">
            {skillsList.map((skill, idx) => (
              <span key={idx} className="px-4 py-2 bg-white border-2 rounded-full text-sm font-bold shadow-sm transition-transform hover:scale-105 break-words" style={{ borderColor: `${safeColor}40`, color: safeColor }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {customSections?.length > 0 && customSections.map((section) => (
        <div key={section.id} className="mb-8">
          <h2 className="text-xl font-black uppercase mb-5 text-gray-900 flex items-center gap-3">
            <span className="w-5 h-5 flex items-center justify-center rounded-sm shadow-sm" style={{ backgroundColor: safeColor }}></span> {section.title}
          </h2>
          <div className="grid grid-cols-1 gap-5 pl-2">
            {section.items.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm relative overflow-hidden transition-all hover:shadow-md">
                <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: safeColor }}></div>
                <div className="flex flex-wrap gap-4 justify-between items-start mb-2">
                  <h3 className="font-extrabold text-lg text-gray-900 break-words flex-1 min-w-[200px]">{item.title}</h3>
                  <span className="font-bold text-xs bg-gray-50 border px-3 py-1.5 rounded-md shadow-sm whitespace-nowrap" style={{ borderColor: `${safeColor}30`, color: safeColor }}>{item.date}</span>
                </div>
                <p className="text-sm font-bold text-gray-500 mb-2 break-words">{item.subtitle}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}