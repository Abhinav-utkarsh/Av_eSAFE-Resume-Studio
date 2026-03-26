import React from 'react';

export default function Template3({ resumeData }) {
  const { name, email, phone, linkedin, portfolio, summary, skills, experience, education, projects, certifications, customSections, profileImage, themeColor } = resumeData;
  const skillsList = skills ? skills.split(',').map(s => s.trim()).filter(Boolean) : [];
  const safeColor = themeColor || '#374151'; // Charcoal default

  return (
    <div className="font-sans bg-white text-gray-800 w-full min-h-full">
      <div className="p-12 text-white shadow-lg relative overflow-hidden flex items-center gap-8" style={{ background: `linear-gradient(135deg, ${safeColor}, #1f2937)` }}>
        {profileImage && <img src={profileImage} alt="Profile" className="w-28 h-28 rounded-full object-cover border-4 border-white/20 shadow-xl relative z-10 shrink-0" />}
        <div className="relative z-10">
          <h1 className="text-6xl font-extrabold mb-5 tracking-tight drop-shadow-lg break-words leading-tight">{name || 'John Doe'}</h1>
          <div className="flex flex-col text-base font-medium opacity-90 tracking-wide">
            {email && <p className="break-all mb-1">{email}</p>}
            {phone && <p className="whitespace-nowrap mb-1">{phone}</p>}
            {linkedin && <a href={linkedin} target="_blank" rel="noreferrer" className="break-all hover:underline mb-1">LinkedIn</a>}
            {portfolio && <a href={portfolio} target="_blank" rel="noreferrer" className="break-all hover:underline mb-1">Portfolio</a>}
          </div>
        </div>
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl print:hidden"></div>
      </div>

      <div className="p-10 flex gap-8">
        <div className="w-1/3 space-y-8 border-r border-gray-200 pr-8">
          {summary && (
            <div>
              <h2 className="text-xl font-black border-b-2 pb-2 mb-4 uppercase tracking-widest text-gray-900" style={{ borderColor: safeColor }}>Profile</h2>
              <p className="text-sm leading-relaxed text-gray-700 break-words">{summary}</p>
            </div>
          )}
          
          {skillsList.length > 0 && (
            <div>
              <h2 className="text-xl font-black border-b-2 pb-2 mb-4 uppercase tracking-widest text-gray-900" style={{ borderColor: safeColor }}>Expertise</h2>
              <ul className="space-y-3">
                {skillsList.map((skill, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm font-bold text-gray-700">
                    <span className="w-2 h-2 mt-1.5 rounded-sm shrink-0" style={{ backgroundColor: safeColor }}></span>
                    <span className="break-words">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {education?.length > 0 && education.some(e => e.degree) && (
            <div>
              <h2 className="text-xl font-black border-b-2 pb-2 mb-4 uppercase tracking-widest text-gray-900" style={{ borderColor: safeColor }}>Education</h2>
              {education.map((edu) => edu.degree && (
                <div key={edu.id} className="mb-5">
                  <h3 className="font-bold text-base text-gray-900 leading-tight mb-1 break-words">{edu.degree}</h3>
                  <p className="text-sm text-gray-600 break-words">{edu.college}</p>
                  <p className="text-sm font-bold mt-1 whitespace-nowrap" style={{ color: safeColor }}>{edu.year}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="w-2/3 space-y-8">
          {experience?.length > 0 && experience.some(e => e.title) && (
            <div>
              <h2 className="text-3xl font-black border-b-2 pb-3 mb-6 uppercase tracking-wider text-gray-900" style={{ borderColor: safeColor }}>Experience</h2>
              {experience.map((exp) => exp.title && (
                <div key={exp.id} className="mb-8 relative border-l-2 pl-6 ml-2" style={{ borderColor: `${safeColor}50` }}>
                  <div className="absolute w-4 h-4 rounded-full -left-[9px] top-1 border-4 border-white shadow-sm" style={{ backgroundColor: safeColor }}></div>
                  <div className="flex flex-wrap justify-between items-baseline gap-2 mb-1">
                    <h3 className="font-extrabold text-xl text-gray-900 break-words flex-1 min-w-[200px]">{exp.title}</h3>
                    <span className="text-sm font-bold uppercase tracking-wider text-gray-500 whitespace-nowrap" style={{ color: safeColor }}>{exp.duration}</span>
                  </div>
                  <p className="text-sm font-bold text-gray-700 mb-3 break-words">{exp.company}</p>
                  <p className="text-base text-gray-700 leading-relaxed break-words">{exp.description}</p>
                </div>
              ))}
            </div>
          )}

          {projects?.length > 0 && projects.some(p => p.title) && (
            <div>
              <h2 className="text-3xl font-black border-b-2 pb-3 mb-6 uppercase tracking-wider text-gray-900" style={{ borderColor: safeColor }}>Projects</h2>
              {projects.map((proj) => proj.title && (
                <div key={proj.id} className="mb-6 relative border-l-2 pl-6 ml-2" style={{ borderColor: `${safeColor}50` }}>
                  <div className="absolute w-4 h-4 rounded-full -left-[9px] top-1 border-4 border-white shadow-sm" style={{ backgroundColor: safeColor }}></div>
                  <div className="flex flex-wrap justify-between items-baseline gap-2 mb-1">
                    <h3 className="font-extrabold text-xl text-gray-900 break-words flex-1 min-w-[200px]">{proj.title} {proj.link && <span className="text-sm font-normal text-blue-500 ml-2 cursor-pointer break-all inline-block">({proj.link})</span>}</h3>
                  </div>
                  <p className="text-base text-gray-700 leading-relaxed break-words">{proj.description}</p>
                </div>
              ))}
            </div>
          )}

          {certifications?.length > 0 && certifications.some(c => c.name) && (
            <div>
              <h2 className="text-xl font-black border-b-2 pb-2 mb-4 uppercase tracking-widest text-gray-900" style={{ borderColor: safeColor }}>Certifications</h2>
              {certifications.map((cert) => cert.name && (
                <div key={cert.id} className="mb-5">
                  <h3 className="font-bold text-base text-gray-900 leading-tight mb-1 break-words">{cert.name}</h3>
                  <p className="text-sm text-gray-600 break-words">{cert.issuer}</p>
                  <p className="text-sm font-bold mt-1 whitespace-nowrap" style={{ color: safeColor }}>{cert.date}</p>
                </div>
              ))}
            </div>
          )}

          {customSections?.length > 0 && customSections.map((section) => (
            <div key={section.id}>
              <h2 className="text-3xl font-black border-b-2 pb-3 mb-6 uppercase tracking-wider text-gray-900" style={{ borderColor: safeColor }}>{section.title}</h2>
              {section.items.map((item) => (
                <div key={item.id} className="mb-6 relative border-l-2 pl-6 ml-2" style={{ borderColor: `${safeColor}50` }}>
                  <div className="absolute w-4 h-4 rounded-full -left-[9px] top-1 border-4 border-white shadow-sm" style={{ backgroundColor: safeColor }}></div>
                  <div className="flex flex-wrap justify-between items-baseline gap-2 mb-1">
                    <h3 className="font-extrabold text-xl text-gray-900 break-words flex-1 min-w-[200px]">{item.title}</h3>
                    <span className="text-sm font-bold uppercase tracking-wider text-gray-500 whitespace-nowrap" style={{ color: safeColor }}>{item.date}</span>
                  </div>
                  <p className="text-sm font-bold text-gray-700 mb-2 break-words">{item.subtitle}</p>
                  <p className="text-base text-gray-700 leading-relaxed break-words">{item.description}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}