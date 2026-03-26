import React from 'react';

export default function Template23({ resumeData }) {
  const { name, email, phone, linkedin, portfolio, summary, skills, experience, education, projects, certifications, customSections, profileImage, themeColor } = resumeData;
  const skillsList = skills ? skills.split(',').map(s => s.trim()).filter(Boolean) : [];
  const safeColor = themeColor || '#be123c'; // Rose

  return (
    <div className="font-sans bg-white text-gray-800 w-full min-h-full">
      <div className="p-12 text-white flex justify-between items-center" style={{ backgroundColor: safeColor }}>
        <div>
          <h1 className="text-5xl font-black uppercase tracking-tight mb-2">{name || 'John Doe'}</h1>
          <div className="flex gap-4 text-sm font-bold opacity-90">
            {email && <span>{email}</span>}
            {phone && <span>{phone}</span>}
            {linkedin && <a href={linkedin} className="underline">LinkedIn</a>}
            {portfolio && <a href={portfolio} className="underline">Portfolio</a>}
          </div>
        </div>
        {profileImage && <img src={profileImage} alt="Profile" className="w-24 h-24 rounded border-4 border-white/20 shadow-lg object-cover" />}
      </div>

      <div className="p-12 space-y-10">
        {summary && (
          <p className="text-sm font-medium leading-relaxed text-gray-700 border-l-4 pl-4" style={{ borderColor: safeColor }}>
            {summary}
          </p>
        )}

        <div className="grid grid-cols-3 gap-10">
          <div className="col-span-2 space-y-10">
            {experience?.length > 0 && experience.some(e => e.title) && (
              <div>
                <h2 className="text-2xl font-black uppercase mb-6 text-gray-900 border-b-2 pb-2" style={{ borderColor: safeColor }}>Experience</h2>
                <div className="space-y-6">
                  {experience.map((exp) => exp.title && (
                    <div key={exp.id}>
                      <h3 className="font-bold text-lg text-gray-900">{exp.title}</h3>
                      <p className="text-sm font-bold my-1" style={{ color: safeColor }}>{exp.company} • {exp.duration}</p>
                      <p className="text-sm text-gray-700 leading-relaxed mt-2">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="col-span-1 space-y-10">
            {skillsList.length > 0 && (
              <div>
                <h2 className="text-xl font-black uppercase mb-4 text-gray-900 border-b-2 pb-2" style={{ borderColor: safeColor }}>Skills</h2>
                <div className="flex flex-col gap-2">
                  {skillsList.map((skill, idx) => (
                    <span key={idx} className="text-sm font-bold text-gray-700 border border-gray-200 px-3 py-1 rounded shadow-sm">{skill}</span>
                  ))}
                </div>
              </div>
            )}

            {education?.length > 0 && education.some(e => e.degree) && (
              <div>
                <h2 className="text-xl font-black uppercase mb-4 text-gray-900 border-b-2 pb-2" style={{ borderColor: safeColor }}>Education</h2>
                <div className="space-y-4">
                  {education.map((edu) => edu.degree && (
                    <div key={edu.id}>
                      <h3 className="font-bold text-sm text-gray-900">{edu.degree}</h3>
                      <p className="text-sm text-gray-600 my-1">{edu.college}</p>
                      <p className="text-xs font-bold text-gray-400">{edu.year}</p>
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