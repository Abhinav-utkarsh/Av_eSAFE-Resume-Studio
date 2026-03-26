import React from 'react';

export default function Template6({ resumeData }) {
  const { name, email, phone, linkedin, portfolio, summary, skills, experience, education, projects, certifications, themeColor } = resumeData;
  const skillsList = skills ? skills.split(',').map(s => s.trim()).filter(Boolean) : [];
  const safeColor = themeColor || '#0ea5e9'; // Blue sidebar

  return (
    <div className="font-sans flex bg-white text-gray-800 w-full min-h-full">
      {/* Left Sidebar */}
      <div className="w-[30%] p-8 text-white flex flex-col gap-6" style={{ backgroundColor: safeColor }}>
        <div className="mb-4">
          <h1 className="text-3xl font-black uppercase tracking-tighter break-words leading-tight mb-5">{name || 'John Doe'}</h1>
          <div className="flex flex-col text-xs font-bold opacity-80">
            {email && <p className="break-all mb-2">{email}</p>}
            {phone && <p className="whitespace-nowrap mb-2">{phone}</p>}
            {linkedin && <a href={linkedin} target="_blank" rel="noreferrer" className="break-all hover:underline mb-2">LinkedIn</a>}
            {portfolio && <a href={portfolio} target="_blank" rel="noreferrer" className="break-all hover:underline mb-2">Portfolio</a>}
          </div>
        </div>

        {skillsList.length > 0 && (
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest mb-2 border-b border-white/20 pb-1">Skills</h2>
            <div className="flex flex-col gap-1 mt-2">
              {skillsList.map((skill, idx) => (
                <span key={idx} className="text-xs font-medium break-words leading-tight">{skill}</span>
              ))}
            </div>
          </div>
        )}

        {education?.length > 0 && education.some(e => e.degree) && (
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest mb-2 border-b border-white/20 pb-1">Education</h2>
            <div className="space-y-4 mt-2">
              {education.map((edu) => edu.degree && (
                <div key={edu.id}>
                  <p className="font-bold text-sm leading-tight break-words">{edu.degree}</p>
                  <p className="text-xs opacity-90 break-words mt-1">{edu.college}</p>
                  <p className="text-xs font-semibold opacity-75 mt-1">{edu.year}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {certifications?.length > 0 && certifications.some(c => c.name) && (
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest mb-2 border-b border-white/20 pb-1">Certifications</h2>
            <div className="space-y-3 mt-2">
              {certifications.map((cert) => cert.name && (
                <div key={cert.id}>
                  <p className="font-bold text-sm leading-tight break-words">{cert.name}</p>
                  <p className="text-[10px] opacity-80 break-words mt-1">{cert.issuer}</p>
                  <p className="text-[10px] font-semibold opacity-75">{cert.date}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Right Content */}
      <div className="w-[70%] p-10 py-10">
        {summary && (
          <div className="mb-8">
            <h2 className="text-xl font-black uppercase tracking-widest mb-3 text-gray-900 border-b-2 border-gray-100 pb-1">Profile</h2>
            <p className="text-sm text-gray-700 leading-relaxed font-medium">{summary}</p>
          </div>
        )}

        {experience?.length > 0 && experience.some(e => e.title) && (
          <div className="mb-8">
            <h2 className="text-xl font-black uppercase tracking-widest mb-4 text-gray-900 border-b-2 border-gray-100 pb-1">Experience</h2>
            <div className="space-y-6">
              {experience.map((exp) => exp.title && (
                <div key={exp.id}>
                  <h3 className="font-extrabold text-gray-900 text-base break-words">{exp.title}</h3>
                  <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-wide my-1">
                    <span className="break-words" style={{ color: safeColor }}>{exp.company}</span>
                    <span className="text-gray-400">|</span>
                    <span className="whitespace-nowrap text-gray-500">{exp.duration}</span>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed mt-2">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {projects?.length > 0 && projects.some(p => p.title) && (
          <div>
            <h2 className="text-xl font-black uppercase tracking-widest mb-4 text-gray-900 border-b-2 border-gray-100 pb-1">Projects</h2>
            <div className="space-y-5">
              {projects.map((proj) => proj.title && (
                <div key={proj.id}>
                  <h3 className="font-extrabold text-gray-900 text-base break-words">{proj.title} {proj.link && <span className="text-xs font-bold ml-2 break-all" style={{ color: safeColor }}>({proj.link})</span>}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed mt-1">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}