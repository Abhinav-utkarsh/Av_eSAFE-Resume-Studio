import React from 'react';

export default function Template29({ resumeData }) {
  const { name, email, phone, linkedin, portfolio, summary, skills, experience, education, projects, certifications, customSections, profileImage, themeColor } = resumeData;
  const skillsList = skills ? skills.split(',').map(s => s.trim()).filter(Boolean) : [];
  const safeColor = themeColor || '#14b8a6'; // Teal

  return (
    <div className="p-10 font-sans bg-gray-50 text-gray-900 w-full min-h-full space-y-6">
      
      <div className="bg-white border-4 border-gray-900 p-8 rounded-2xl shadow-[6px_6px_0px_0px_rgba(17,24,39,1)] flex items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black uppercase tracking-tight text-gray-900 mb-2">{name || 'John Doe'}</h1>
          <div className="flex flex-wrap gap-4 text-sm font-bold" style={{ color: safeColor }}>
            {email && <span>{email}</span>}
            {phone && <span>{phone}</span>}
            {linkedin && <a href={linkedin} className="underline text-gray-900">LinkedIn</a>}
            {portfolio && <a href={portfolio} className="underline text-gray-900">Portfolio</a>}
          </div>
        </div>
        {profileImage && <img src={profileImage} alt="Profile" className="w-20 h-20 rounded-xl border-4 border-gray-900 object-cover" />}
      </div>

      {summary && (
        <div className="bg-white border-4 border-gray-900 p-6 rounded-2xl shadow-[4px_4px_0px_0px_rgba(17,24,39,1)]">
          <p className="text-sm font-medium leading-relaxed text-gray-800">{summary}</p>
        </div>
      )}

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          {experience?.length > 0 && experience.some(e => e.title) && (
            <div className="bg-white border-4 border-gray-900 p-6 rounded-2xl shadow-[4px_4px_0px_0px_rgba(17,24,39,1)]">
              <h2 className="text-xl font-black uppercase mb-6 flex items-center gap-2 border-b-2 border-gray-900 pb-2"><span className="w-3 h-3 rounded-full bg-gray-900 inline-block"></span> Experience</h2>
              <div className="space-y-6">
                {experience.map((exp) => exp.title && (
                  <div key={exp.id}>
                    <h3 className="font-bold text-lg text-gray-900">{exp.title}</h3>
                    <div className="text-xs font-bold text-white px-2 py-1 inline-block rounded my-2 uppercase" style={{ backgroundColor: safeColor }}>{exp.company} | {exp.duration}</div>
                    <p className="text-sm text-gray-700 leading-relaxed font-medium">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {projects?.length > 0 && projects.some(p => p.title) && (
            <div className="bg-white border-4 border-gray-900 p-6 rounded-2xl shadow-[4px_4px_0px_0px_rgba(17,24,39,1)]">
              <h2 className="text-xl font-black uppercase mb-6 flex items-center gap-2 border-b-2 border-gray-900 pb-2"><span className="w-3 h-3 rounded-full bg-gray-900 inline-block"></span> Projects</h2>
              <div className="space-y-6">
                {projects.map((proj) => proj.title && (
                  <div key={proj.id}>
                    <h3 className="font-bold text-lg text-gray-900">{proj.title} {proj.link && <span className="text-xs font-bold text-blue-600 underline ml-2">({proj.link})</span>}</h3>
                    <p className="text-sm text-gray-700 leading-relaxed font-medium mt-1">{proj.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="col-span-1 space-y-6">
          {skillsList.length > 0 && (
            <div className="bg-white border-4 border-gray-900 p-5 rounded-2xl shadow-[4px_4px_0px_0px_rgba(17,24,39,1)]">
              <h2 className="text-lg font-black uppercase mb-4 border-b-2 border-gray-900 pb-2">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {skillsList.map((skill, idx) => (
                  <span key={idx} className="px-2 py-1 border-2 border-gray-900 rounded font-bold text-xs bg-gray-50">{skill}</span>
                ))}
              </div>
            </div>
          )}

          {education?.length > 0 && education.some(e => e.degree) && (
            <div className="bg-white border-4 border-gray-900 p-5 rounded-2xl shadow-[4px_4px_0px_0px_rgba(17,24,39,1)]">
              <h2 className="text-lg font-black uppercase mb-4 border-b-2 border-gray-900 pb-2">Education</h2>
              <div className="space-y-4">
                {education.map((edu) => edu.degree && (
                  <div key={edu.id}>
                    <h3 className="font-bold text-sm text-gray-900">{edu.degree}</h3>
                    <p className="text-xs font-semibold text-gray-600 my-1">{edu.college}</p>
                    <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded text-white" style={{ backgroundColor: safeColor }}>{edu.year}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}