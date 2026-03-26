import React from 'react';

export default function Template10({ resumeData }) {
  const { name, email, phone, linkedin, portfolio, summary, skills, experience, education, projects, certifications, themeColor } = resumeData;
  const skillsList = skills ? skills.split(',').map(s => s.trim()).filter(Boolean) : [];

  return (
    <div className="font-sans bg-white text-gray-900 w-full min-h-full border-8 border-black">
      <div className="bg-black text-white p-14 text-center border-b-8 border-black relative">
        <div className="absolute top-0 left-0 w-full h-4" style={{ backgroundColor: themeColor || '#facc15' }}></div>
        <h1 className="text-7xl font-black uppercase tracking-tighter mb-6 mt-2 break-words leading-tight">{name || 'JOHN DOE'}</h1>
        <div className="flex flex-wrap justify-center text-lg font-bold tracking-widest" style={{ color: themeColor || '#facc15' }}>
          {email && <span className="break-all mx-4 my-2">{email}</span>}
          {phone && <span className="whitespace-nowrap mx-4 my-2">{phone}</span>}
          {linkedin && <a href={linkedin} target="_blank" rel="noreferrer" className="break-all hover:underline mx-4 my-2">LINKEDIN</a>}
          {portfolio && <a href={portfolio} target="_blank" rel="noreferrer" className="break-all hover:underline mx-4 my-2">PORTFOLIO</a>}
        </div>
      </div>

      <div className="p-12 space-y-12">
        {summary && (
          <div className="border-l-8 pl-6" style={{ borderColor: themeColor || '#facc15' }}>
            <p className="text-xl font-bold leading-relaxed text-gray-800">"{summary}"</p>
          </div>
        )}

        {experience?.length > 0 && experience.some(e => e.title) && (
          <div>
            <h2 className="text-4xl font-black uppercase mb-8 border-b-4 border-black pb-2 flex justify-between items-end">Experience <span className="w-12 h-4 block mb-2" style={{ backgroundColor: themeColor || '#facc15' }}></span></h2>
            <div className="space-y-8">
              {experience.map((exp) => exp.title && (
                <div key={exp.id} className="bg-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                  <div className="flex flex-wrap gap-4 justify-between items-start mb-4 border-b-2 border-dashed border-gray-300 pb-4">
                    <h3 className="text-2xl font-black uppercase text-black break-words flex-1 min-w-[200px]">{exp.title}</h3>
                    <span className="text-sm font-black px-4 py-1 border-2 border-black uppercase whitespace-nowrap" style={{ backgroundColor: themeColor || '#facc15' }}>{exp.duration}</span>
                  </div>
                  <p className="text-lg font-bold text-gray-600 mb-4 break-words">{exp.company}</p>
                  <p className="text-base font-medium text-gray-800">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {projects?.length > 0 && projects.some(p => p.title) && (
          <div>
            <h2 className="text-4xl font-black uppercase mb-8 border-b-4 border-black pb-2 flex justify-between items-end">Projects <span className="w-12 h-4 block mb-2" style={{ backgroundColor: themeColor || '#facc15' }}></span></h2>
            <div className="space-y-8">
              {projects.map((proj) => proj.title && (
                <div key={proj.id} className="bg-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                  <div className="flex flex-wrap gap-4 justify-between items-start mb-4 border-b-2 border-dashed border-gray-300 pb-4">
                    <h3 className="text-2xl font-black uppercase text-black break-words flex-1 min-w-[200px]">{proj.title} {proj.link && <span className="text-lg font-bold lowercase text-blue-600 ml-2 inline-block break-all">({proj.link})</span>}</h3>
                  </div>
                  <p className="text-base font-medium text-gray-800">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 gap-12">
          {education?.length > 0 && education.some(e => e.degree) && (
            <div>
              <h2 className="text-3xl font-black uppercase mb-6 border-b-4 border-black pb-2">Education</h2>
              {education.map((edu) => edu.degree && (
                <div key={edu.id} className="mb-6 bg-white p-6 border-4 border-black">
                  <h3 className="font-black text-xl uppercase break-words">{edu.degree}</h3>
                  <p className="text-base font-bold text-gray-600 mt-2 mb-2 break-words">{edu.college}</p>
                  <p className="text-sm font-black inline-block px-2 py-1 whitespace-nowrap" style={{ backgroundColor: themeColor || '#facc15' }}>{edu.year}</p>
                </div>
              ))}
            </div>
          )}
          
          {certifications?.length > 0 && certifications.some(c => c.name) && (
            <div>
              <h2 className="text-3xl font-black uppercase mb-6 border-b-4 border-black pb-2">Certifications</h2>
              {certifications.map((cert) => cert.name && (
                <div key={cert.id} className="mb-6 bg-white p-6 border-4 border-black">
                  <h3 className="font-black text-xl uppercase break-words">{cert.name}</h3>
                  <p className="text-base font-bold text-gray-600 mt-2 mb-2 break-words">{cert.issuer}</p>
                  <p className="text-sm font-black inline-block px-2 py-1 whitespace-nowrap" style={{ backgroundColor: themeColor || '#facc15' }}>{cert.date}</p>
                </div>
              ))}
            </div>
          )}
          
          {skillsList.length > 0 && (
            <div>
              <h2 className="text-3xl font-black uppercase mb-6 border-b-4 border-black pb-2">Skills</h2>
              <p className="text-lg font-black leading-loose text-black uppercase tracking-wider">{skillsList.join('   /   ')}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}