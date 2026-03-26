import React from 'react';

export default function Template24({ resumeData }) {
  const { name, email, phone, linkedin, portfolio, summary, skills, experience, education, projects, certifications, customSections, profileImage, themeColor } = resumeData;
  const skillsList = skills ? skills.split(',').map(s => s.trim()).filter(Boolean) : [];
  const safeColor = themeColor || '#10b981'; // Emerald

  return (
    <div className="p-12 font-sans bg-gray-50 text-gray-900 w-full min-h-full">
      <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 mb-8 text-center">
        {profileImage && <img src={profileImage} alt="Profile" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />}
        <h1 className="text-5xl font-black tracking-tight mb-4">{name || 'John Doe'}</h1>
        <div className="flex justify-center gap-4 text-sm font-bold text-gray-500 uppercase tracking-widest">
          {email && <span>{email}</span>}
          {phone && <span>{phone}</span>}
          {linkedin && <a href={linkedin} target="_blank" rel="noreferrer" className="hover:text-gray-900 transition-colors">LinkedIn</a>}
          {portfolio && <a href={portfolio} target="_blank" rel="noreferrer" className="hover:text-gray-900 transition-colors">Portfolio</a>}
        </div>
      </div>

      <div className="space-y-8">
        {summary && (
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <p className="text-center text-sm font-medium leading-relaxed text-gray-600">{summary}</p>
          </div>
        )}

        {experience?.length > 0 && experience.some(e => e.title) && (
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-black uppercase text-center mb-8" style={{ color: safeColor }}>Experience</h2>
            <div className="space-y-8">
              {experience.map((exp) => exp.title && (
                <div key={exp.id} className="text-center">
                  <h3 className="font-bold text-lg text-gray-900">{exp.title}</h3>
                  <div className="text-sm font-bold text-gray-500 my-1">{exp.company} | {exp.duration}</div>
                  <p className="text-sm text-gray-600 leading-relaxed mt-3 max-w-2xl mx-auto">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {education?.length > 0 && education.some(e => e.degree) && (
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-black uppercase text-center mb-8" style={{ color: safeColor }}>Education</h2>
            <div className="grid grid-cols-2 gap-6 text-center">
              {education.map((edu) => edu.degree && (
                <div key={edu.id}>
                  <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                  <p className="text-sm text-gray-600 my-1">{edu.college}</p>
                  <p className="text-xs font-bold text-gray-400">{edu.year}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {skillsList.length > 0 && (
          <div className="text-center">
            <p className="text-sm font-bold tracking-widest leading-loose" style={{ color: safeColor }}>{skillsList.join('   /   ')}</p>
          </div>
        )}
      </div>
    </div>
  );
}