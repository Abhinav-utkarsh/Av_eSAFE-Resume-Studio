import React from 'react';

export default function Template36({ resumeData }) {
  const { name, email, phone, linkedin, portfolio, summary, skills, experience, education, projects } = resumeData;
  const skillsList = skills ? skills.split(',').map(s => s.trim()).filter(Boolean) : [];

  return (
    <div className="p-12 font-sans bg-white text-black w-full min-h-full text-sm">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold uppercase tracking-wider mb-2">{name || 'John Doe'}</h1>
        <div className="flex flex-wrap justify-center gap-4 text-xs">
          {email && <span className="break-all mx-3 my-1">{email}</span>}
          {phone && <span className="whitespace-nowrap mx-3 my-1">{phone}</span>}
          {linkedin && <a href={linkedin} target="_blank" rel="noreferrer" className="break-all hover:underline text-blue-600 mx-3 my-1">LinkedIn</a>}
          {portfolio && <a href={portfolio} target="_blank" rel="noreferrer" className="break-all hover:underline text-blue-600 mx-3 my-1">Portfolio</a>}
        </div>
      </div>

      <hr className="border-t-2 border-black my-6" />

      {/* Summary */}
      {summary && (
        <div className="mb-6">
          <h2 className="text-base font-bold uppercase tracking-widest mb-2">Professional Summary</h2>
          <p className="text-sm leading-relaxed">{summary}</p>
        </div>
      )}

      <hr className="border-t-2 border-black my-6" />

      {/* Experience */}
      {experience?.length > 0 && experience.some(e => e.title) && (
        <div className="mb-6">
          <h2 className="text-base font-bold uppercase tracking-widest mb-3">Work Experience</h2>
          {experience.map((exp) => exp.title && (
            <div key={exp.id} className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-sm">{exp.title}</h3>
                <span className="text-xs font-bold">{exp.duration}</span>
              </div>
              <div className="text-sm italic mb-1">{exp.company}</div>
              <p className="text-sm leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      )}

      <hr className="border-t-2 border-black my-6" />

      {/* Education */}
      {education?.length > 0 && education.some(e => e.degree) && (
        <div className="mb-6">
          <h2 className="text-base font-bold uppercase tracking-widest mb-3">Education</h2>
          {education.map((edu) => edu.degree && (
            <div key={edu.id} className="flex justify-between items-baseline mb-2">
              <div>
                <p className="font-bold text-sm">{edu.degree}</p>
                <p className="text-sm">{edu.college}</p>
              </div>
              <p className="font-bold text-sm">{edu.year}</p>
            </div>
          ))}
        </div>
      )}
      
      <hr className="border-t-2 border-black my-6" />

      {/* Skills */}
      {skillsList.length > 0 && (
        <div>
          <h2 className="text-base font-bold uppercase tracking-widest mb-2">Skills</h2>
          <p className="text-sm leading-relaxed">{skillsList.join(', ')}</p>
        </div>
      )}
    </div>
  );
}