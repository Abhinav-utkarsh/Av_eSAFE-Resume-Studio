import React from 'react';

export default function Template14({ resumeData }) {
  const { name, email, phone, linkedin, portfolio, summary, skills, experience, education, projects, certifications, themeColor } = resumeData;
  const skillsList = skills ? skills.split(',').map(s => s.trim()).filter(Boolean) : [];
  const safeColor = themeColor || '#0284c7'; // Professional Light Blue

  return (
    <div className="p-12 font-sans bg-white text-gray-800 w-full min-h-full">
      <div className="mb-12 flex flex-col md:flex-row gap-8">
        <div className="w-[30%]">
          <h1 className="text-4xl font-black break-words leading-tight uppercase tracking-tight mb-4" style={{ color: safeColor }}>{name || 'John Doe'}</h1>
          <div className="flex flex-col text-sm font-bold text-gray-500 uppercase tracking-widest">
            {email && <p className="break-all mb-2">{email}</p>}
            {phone && <p className="whitespace-nowrap mb-2">{phone}</p>}
            {linkedin && <a href={linkedin} target="_blank" rel="noreferrer" className="break-all hover:underline text-blue-600 mb-2">LinkedIn</a>}
            {portfolio && <a href={portfolio} target="_blank" rel="noreferrer" className="break-all hover:underline text-blue-600 mb-2">Portfolio</a>}
          </div>
        </div>
        <div className="w-[70%] text-sm leading-relaxed font-medium text-gray-600 border-l-2 pl-8" style={{ borderColor: `${safeColor}30` }}>
          {summary}
        </div>
      </div>

      <div className="space-y-10">
        {experience?.length > 0 && experience.some(e => e.title) && (
          <div className="flex flex-col md:flex-row gap-8">
            <h2 className="w-[30%] text-sm font-black uppercase tracking-widest text-gray-400 mt-1">Experience</h2>
            <div className="w-[70%] space-y-8">
              {experience.map((exp) => exp.title && (
                <div key={exp.id}>
                  <div className="flex flex-wrap justify-between items-baseline gap-2 mb-1">
                    <h3 className="font-extrabold text-lg text-gray-900 break-words">{exp.title}</h3>
                    <span className="text-xs font-bold px-2 py-1 bg-gray-100 rounded text-gray-600 whitespace-nowrap">{exp.duration}</span>
                  </div>
                  <p className="text-sm font-bold mb-3 break-words" style={{ color: safeColor }}>{exp.company}</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {projects?.length > 0 && projects.some(p => p.title) && (
          <div className="flex flex-col md:flex-row gap-8">
            <h2 className="w-[30%] text-sm font-black uppercase tracking-widest text-gray-400 mt-1">Projects</h2>
            <div className="w-[70%] space-y-6">
              {projects.map((proj) => proj.title && (
                <div key={proj.id}>
                  <div className="flex flex-wrap justify-between items-baseline gap-2 mb-1">
                    <h3 className="font-extrabold text-base text-gray-900 break-words">{proj.title} {proj.link && <span className="font-medium text-xs ml-2 break-all text-blue-500">({proj.link})</span>}</h3>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {education?.length > 0 && education.some(e => e.degree) && (
          <div className="flex flex-col md:flex-row gap-8">
            <h2 className="w-[30%] text-sm font-black uppercase tracking-widest text-gray-400 mt-1">Education</h2>
            <div className="w-[70%] space-y-4">
              {education.map((edu) => edu.degree && (
                <div key={edu.id} className="flex flex-wrap justify-between items-baseline gap-2">
                  <div className="break-words flex-1"><span className="font-extrabold text-base text-gray-900">{edu.degree}</span> <span className="text-sm text-gray-500">| {edu.college}</span></div>
                  <span className="text-sm font-bold text-gray-500 whitespace-nowrap">{edu.year}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {certifications?.length > 0 && certifications.some(c => c.name) && (
          <div className="flex flex-col md:flex-row gap-8">
            <h2 className="w-[30%] text-sm font-black uppercase tracking-widest text-gray-400 mt-1">Certifications</h2>
            <div className="w-[70%] space-y-4">
              {certifications.map((cert) => cert.name && (
                <div key={cert.id} className="flex flex-wrap justify-between items-baseline gap-2">
                  <div className="break-words flex-1"><span className="font-extrabold text-base text-gray-900">{cert.name}</span> <span className="text-sm text-gray-500">| {cert.issuer}</span></div>
                  <span className="text-sm font-bold text-gray-500 whitespace-nowrap">{cert.date}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {skillsList.length > 0 && (
          <div className="flex flex-col md:flex-row gap-8">
            <h2 className="w-[30%] text-sm font-black uppercase tracking-widest text-gray-400 mt-1">Skills</h2>
            <div className="w-[70%]">
              <p className="text-sm font-bold text-gray-800 break-words leading-loose">{skillsList.join('  •  ')}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}