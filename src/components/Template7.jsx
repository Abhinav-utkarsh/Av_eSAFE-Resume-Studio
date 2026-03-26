import React from 'react';

export default function Template7({ resumeData }) {
  const { name, email, phone, linkedin, portfolio, summary, skills, experience, education, projects, certifications, customSections, profileImage, themeColor } = resumeData;
  const skillsList = skills ? skills.split(',').map(s => s.trim()).filter(Boolean) : [];
  const safeColor = themeColor || '#8b5cf6'; // Violet gradient default

  return (
    <div className="font-sans bg-white text-gray-800 w-full min-h-full flex flex-col">
      {/* Top Gradient Header */}
      <div className="px-12 py-10 text-white flex flex-col items-center justify-center text-center shadow-md relative" style={{ background: `linear-gradient(135deg, ${safeColor}, #111827)` }}>
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay print:hidden"></div>
        {profileImage && <img src={profileImage} alt="Profile" className="w-32 h-32 rounded-full object-cover border-4 border-white/30 shadow-2xl relative z-10 mb-6 shrink-0" />}
        <h1 className="text-5xl font-black uppercase tracking-tight break-words relative z-10 mb-5 leading-tight">{name || 'John Doe'}</h1>
        <div className="flex flex-wrap justify-center text-sm font-bold tracking-widest uppercase relative z-10">
          {email && <span className="break-all px-4 py-1.5 bg-white/10 print:bg-white/20 rounded backdrop-blur-sm print:backdrop-blur-none border border-white/20 print:border-white/50 mx-2 my-1">{email}</span>}
          {phone && <span className="whitespace-nowrap px-4 py-1.5 bg-white/10 print:bg-white/20 rounded backdrop-blur-sm print:backdrop-blur-none border border-white/20 print:border-white/50 mx-2 my-1">{phone}</span>}
          {linkedin && <a href={linkedin} target="_blank" rel="noreferrer" className="break-all hover:bg-white/20 px-4 py-1.5 bg-white/10 print:bg-white/20 rounded backdrop-blur-sm print:backdrop-blur-none border border-white/20 print:border-white/50 mx-2 my-1 transition-colors">LinkedIn</a>}
          {portfolio && <a href={portfolio} target="_blank" rel="noreferrer" className="break-all hover:bg-white/20 px-4 py-1.5 bg-white/10 print:bg-white/20 rounded backdrop-blur-sm print:backdrop-blur-none border border-white/20 print:border-white/50 mx-2 my-1 transition-colors">Portfolio</a>}
        </div>
        
        {summary && (
          <p className="text-sm text-left w-full font-medium leading-relaxed mt-6 max-w-3xl relative z-10 text-gray-200 print:text-white print:font-semibold">{summary}</p>
        )}
      </div>

      <div className="p-12 space-y-10">
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2 space-y-10 pr-6 border-r border-gray-200">
            {experience?.length > 0 && experience.some(e => e.title) && (
              <div>
                <h2 className="text-xl font-black uppercase mb-5 text-gray-900 flex items-center gap-2">
                  <span className="w-4 h-4 rounded-sm" style={{ backgroundColor: safeColor }}></span>
                  Experience
                </h2>
                <div className="space-y-6">
                  {experience.map((exp) => exp.title && (
                    <div key={exp.id}>
                      <h3 className="font-extrabold text-gray-900 text-lg break-words">{exp.title}</h3>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wide my-1 break-words">{exp.company} <span className="font-normal mx-2">|</span> <span className="whitespace-nowrap" style={{ color: safeColor }}>{exp.duration}</span></p>
                      <p className="text-sm text-gray-700 leading-relaxed mt-2">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {projects?.length > 0 && projects.some(p => p.title) && (
              <div>
                <h2 className="text-xl font-black uppercase mb-5 text-gray-900 flex items-center gap-2">
                  <span className="w-4 h-4 rounded-sm" style={{ backgroundColor: safeColor }}></span>
                  Projects
                </h2>
                <div className="space-y-6">
                  {projects.map((proj) => proj.title && (
                    <div key={proj.id}>
                      <h3 className="font-extrabold text-gray-900 text-lg mb-1 break-words">{proj.title} {proj.link && <span className="text-xs font-bold ml-2 break-all inline-block" style={{ color: safeColor }}>({proj.link})</span>}</h3>
                      <p className="text-sm text-gray-700 leading-relaxed">{proj.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {customSections?.length > 0 && customSections.map((section) => (
              <div key={section.id}>
                <h2 className="text-xl font-black uppercase mb-5 text-gray-900 flex items-center gap-2">
                  <span className="w-4 h-4 rounded-sm" style={{ backgroundColor: safeColor }}></span>
                  {section.title}
                </h2>
                <div className="space-y-6">
                  {section.items.map((item) => (
                    <div key={item.id}>
                      <h3 className="font-extrabold text-gray-900 text-lg break-words">{item.title}</h3>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wide my-1 break-words">{item.subtitle} <span className="font-normal mx-2">|</span> <span className="whitespace-nowrap" style={{ color: safeColor }}>{item.date}</span></p>
                      <p className="text-sm text-gray-700 leading-relaxed mt-2">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="col-span-1 space-y-10 pl-2">
            {skillsList.length > 0 && (
              <div>
                <h2 className="text-lg font-black uppercase mb-4 text-gray-900">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {skillsList.map((skill, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-800 px-3 py-1.5 rounded-md text-xs font-bold">{skill}</span>
                  ))}
                </div>
              </div>
            )}

            {education?.length > 0 && education.some(e => e.degree) && (
              <div>
                <h2 className="text-lg font-black uppercase mb-4 text-gray-900">Education</h2>
                <div className="space-y-4">
                  {education.map((edu) => edu.degree && (
                    <div key={edu.id}>
                      <p className="font-bold text-sm text-gray-900 leading-tight break-words">{edu.degree}</p>
                      <p className="text-xs text-gray-600 mt-1 break-words">{edu.college}</p>
                      <p className="text-xs font-bold mt-1 whitespace-nowrap" style={{ color: safeColor }}>{edu.year}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {certifications?.length > 0 && certifications.some(c => c.name) && (
              <div>
                <h2 className="text-lg font-black uppercase mb-4 text-gray-900">Certifications</h2>
                <div className="space-y-4">
                  {certifications.map((cert) => cert.name && (
                    <div key={cert.id}>
                      <p className="font-bold text-sm text-gray-900 leading-tight break-words">{cert.name}</p>
                      <p className="text-xs text-gray-600 mt-1 break-words">{cert.issuer}</p>
                      <p className="text-xs font-bold mt-1 whitespace-nowrap" style={{ color: safeColor }}>{cert.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}