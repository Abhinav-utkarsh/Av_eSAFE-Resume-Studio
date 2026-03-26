import React from 'react';

export default function Template26({ resumeData }) {
  const { name, email, phone, linkedin, portfolio, summary, skills, experience, education, projects, certifications, customSections, profileImage, themeColor } = resumeData;
  const skillsList = skills ? skills.split(',').map(s => s.trim()).filter(Boolean) : [];
  const safeColor = themeColor || '#0369a1'; // Sky Blue

  return (
    <div className="font-sans bg-white text-gray-800 w-full min-h-full">
      {/* Header Ribbon */}
      <div className="px-12 py-10 text-white flex flex-col md:flex-row items-center md:items-end justify-between gap-6" style={{ backgroundColor: safeColor }}>
        <div className="flex-1">
          <h1 className="text-5xl font-black uppercase tracking-tight mb-3">{name || 'John Doe'}</h1>
          <div className="flex flex-wrap gap-4 text-sm font-semibold opacity-90">
            {email && <span>{email}</span>}
            {phone && <span>{phone}</span>}
            {linkedin && <a href={linkedin} target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>}
            {portfolio && <a href={portfolio} target="_blank" rel="noreferrer" className="hover:underline">Portfolio</a>}
          </div>
        </div>
        {profileImage && <img src={profileImage} alt="Profile" className="w-28 h-28 rounded-full border-4 border-white/20 shadow-md object-cover" />}
      </div>

      <div className="p-12 space-y-8">
        {summary && (
          <div className="mb-8">
            <h2 className="text-lg font-bold uppercase border-b-2 pb-1 mb-3 text-gray-900" style={{ borderColor: safeColor }}>Professional Summary</h2>
            <p className="text-sm text-gray-700 leading-relaxed">{summary}</p>
          </div>
        )}

        {experience?.length > 0 && experience.some(e => e.title) && (
          <div className="mb-8">
            <h2 className="text-lg font-bold uppercase border-b-2 pb-1 mb-4 text-gray-900" style={{ borderColor: safeColor }}>Experience</h2>
            <div className="space-y-6">
              {experience.map((exp) => exp.title && (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-bold text-gray-900 text-base">{exp.title}</h3>
                    <span className="text-sm font-bold" style={{ color: safeColor }}>{exp.duration}</span>
                  </div>
                  <p className="text-sm font-medium text-gray-500 mb-2 uppercase tracking-wide">{exp.company}</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {projects?.length > 0 && projects.some(p => p.title) && (
          <div className="mb-8">
            <h2 className="text-lg font-bold uppercase border-b-2 pb-1 mb-4 text-gray-900" style={{ borderColor: safeColor }}>Projects</h2>
            <div className="space-y-6">
              {projects.map((proj) => proj.title && (
                <div key={proj.id}>
                  <h3 className="font-bold text-gray-900 text-base mb-1">{proj.title} {proj.link && <span className="text-sm font-normal ml-2" style={{ color: safeColor }}>({proj.link})</span>}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 gap-8">
          {education?.length > 0 && education.some(e => e.degree) && (
            <div>
              <h2 className="text-lg font-bold uppercase border-b-2 pb-1 mb-4 text-gray-900" style={{ borderColor: safeColor }}>Education</h2>
              <div className="space-y-4">
                {education.map((edu) => edu.degree && (
                  <div key={edu.id}>
                    <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                    <p className="text-sm text-gray-600">{edu.college}</p>
                    <p className="text-xs font-bold mt-1" style={{ color: safeColor }}>{edu.year}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {skillsList.length > 0 && (
            <div>
              <h2 className="text-lg font-bold uppercase border-b-2 pb-1 mb-4 text-gray-900" style={{ borderColor: safeColor }}>Skills</h2>
              <p className="text-sm font-medium leading-loose text-gray-700">{skillsList.join(' • ')}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}