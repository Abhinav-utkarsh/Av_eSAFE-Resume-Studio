import React from 'react';

export default function Template28({ resumeData }) {
  const { name, email, phone, linkedin, portfolio, summary, skills, experience, education, projects, certifications, customSections, profileImage, themeColor } = resumeData;
  const skillsList = skills ? skills.split(',').map(s => s.trim()).filter(Boolean) : [];
  const safeColor = themeColor || '#475569'; // Slate

  return (
    <div className="p-10 font-sans bg-white text-gray-900 w-full min-h-full border-[12px]" style={{ borderColor: safeColor }}>
      <div className="border-b-2 pb-6 mb-6 flex items-end justify-between" style={{ borderColor: safeColor }}>
        <div>
          <h1 className="text-4xl font-bold uppercase tracking-tight text-gray-900 mb-2">{name || 'John Doe'}</h1>
          <div className="flex flex-col text-sm font-medium text-gray-600">
            {email && <span>{email}</span>}
            {phone && <span>{phone}</span>}
            {linkedin && <a href={linkedin} className="hover:underline">LinkedIn</a>}
            {portfolio && <a href={portfolio} className="hover:underline">Portfolio</a>}
          </div>
        </div>
        {profileImage && <img src={profileImage} alt="Profile" className="w-20 h-20 object-cover shadow-sm border" style={{ borderColor: safeColor }} />}
      </div>

      {summary && (
        <div className="mb-6 pb-6 border-b" style={{ borderColor: `${safeColor}30` }}>
          <p className="text-sm text-gray-800 leading-relaxed text-justify">{summary}</p>
        </div>
      )}

      <div className="space-y-6">
        {experience?.length > 0 && experience.some(e => e.title) && (
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <h2 className="text-sm font-bold uppercase tracking-widest bg-gray-100 p-3 border-b border-gray-200" style={{ color: safeColor }}>Experience</h2>
            <div className="divide-y divide-gray-200">
              {experience.map((exp) => exp.title && (
                <div key={exp.id} className="p-4 bg-white">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-bold text-gray-900 text-sm">{exp.title}</h3>
                    <span className="text-xs font-semibold text-gray-500 whitespace-nowrap">{exp.duration}</span>
                  </div>
                  <div className="text-xs font-bold text-gray-600 mb-2">{exp.company}</div>
                  <p className="text-sm text-gray-700 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {projects?.length > 0 && projects.some(p => p.title) && (
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <h2 className="text-sm font-bold uppercase tracking-widest bg-gray-100 p-3 border-b border-gray-200" style={{ color: safeColor }}>Projects</h2>
            <div className="divide-y divide-gray-200">
              {projects.map((proj) => proj.title && (
                <div key={proj.id} className="p-4 bg-white">
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{proj.title} {proj.link && <span className="text-xs font-normal text-blue-500 ml-2">({proj.link})</span>}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 gap-6">
          {education?.length > 0 && education.some(e => e.degree) && (
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <h2 className="text-sm font-bold uppercase tracking-widest bg-gray-100 p-3 border-b border-gray-200" style={{ color: safeColor }}>Education</h2>
              <div className="divide-y divide-gray-200">
                {education.map((edu) => edu.degree && (
                  <div key={edu.id} className="p-4 bg-white">
                    <h3 className="font-bold text-gray-900 text-sm">{edu.degree}</h3>
                    <div className="text-xs text-gray-600 mt-1">{edu.college}</div>
                    <div className="text-xs font-semibold text-gray-500 mt-1">{edu.year}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {skillsList.length > 0 && (
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <h2 className="text-sm font-bold uppercase tracking-widest bg-gray-100 p-3 border-b border-gray-200" style={{ color: safeColor }}>Skills</h2>
              <div className="p-4 bg-white text-sm text-gray-800 leading-loose">
                {skillsList.join(', ')}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}