import React from 'react';
import { motion, Reorder } from 'framer-motion';

export default function Form({ resumeData, setResumeData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData(prev => ({ ...prev, [name]: value }));
  };

  const handleArrayChange = (e, id, field) => {
    const { name, value } = e.target;
    setResumeData(prev => ({
      ...prev,
      [field]: prev[field].map(item => 
        item.id === id ? { ...item, [name]: value } : item
      )
    }));
  };

  const addField = (field, defaultObj) => {
    setResumeData(prev => ({ ...prev, [field]: [...prev[field], { ...defaultObj, id: Math.random().toString(36).substr(2, 9) }] }));
  };

  const removeField = (field, id) => {
    setResumeData(prev => ({ ...prev, [field]: prev[field].filter(item => item.id !== id) }));
  };

  const handleReorder = (field, newOrder) => {
    setResumeData(prev => ({ ...prev, [field]: newOrder }));
  };

  // Image Upload Handler
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setResumeData(prev => ({ ...prev, profileImage: reader.result }));
      reader.readAsDataURL(file);
    }
  };

  // Import / Export JSON
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.name.endsWith('.json')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const json = JSON.parse(event.target.result);
          setResumeData(prev => ({ ...prev, ...json }));
        } catch (err) {
          alert("Invalid JSON format.");
        }
      };
      reader.readAsText(file);
    } else {
      alert("Deep PDF/DOCX parsing requires a backend AI integration. Please upload a previously exported JSON resume file.");
    }
  };

  const handleExportJSON = () => {
    const dataStr = JSON.stringify(resumeData, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${resumeData.name || "Resume"}_Data.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Custom Section Handlers
  const addCustomSection = () => {
    setResumeData(prev => ({ ...prev, customSections: [...(prev.customSections || []), { id: Math.random().toString(36).substr(2, 9), title: 'New Custom Section', items: [] }] }));
  };
  const removeCustomSection = (id) => setResumeData(prev => ({ ...prev, customSections: prev.customSections.filter(s => s.id !== id) }));
  const updateCustomSectionTitle = (id, title) => setResumeData(prev => ({ ...prev, customSections: prev.customSections.map(s => s.id === id ? { ...s, title } : s) }));
  const addCustomItem = (sectionId) => setResumeData(prev => ({ ...prev, customSections: prev.customSections.map(s => s.id === sectionId ? { ...s, items: [...s.items, { id: Math.random().toString(36).substr(2, 9), title: '', subtitle: '', date: '', description: '' }] } : s) }));
  const updateCustomItem = (sectionId, itemId, field, value) => setResumeData(prev => ({ ...prev, customSections: prev.customSections.map(s => s.id === sectionId ? { ...s, items: s.items.map(i => i.id === itemId ? { ...i, [field]: value } : i) } : s) }));
  const removeCustomItem = (sectionId, itemId) => setResumeData(prev => ({ ...prev, customSections: prev.customSections.map(s => s.id === sectionId ? { ...s, items: s.items.filter(i => i.id !== itemId) } : s) }));

  return (
    <motion.div 
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="p-4 sm:p-8 max-w-xl mx-auto w-full bg-white/80 backdrop-blur-xl border border-slate-200 shadow-xl rounded-2xl"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
          Build Your Legend
        </h2>
        <div className="flex flex-wrap gap-2 w-full sm:w-auto">
          <label className="cursor-pointer flex-1 sm:flex-none text-center px-4 py-2 bg-white text-slate-700 rounded-xl text-sm font-semibold hover:bg-slate-50 transition-all border border-slate-200 shadow-sm">
            Import Data
            <input type="file" accept=".json,.pdf,.docx" className="hidden" onChange={handleFileUpload} />
          </label>
          <button type="button" onClick={handleExportJSON} className="flex-1 sm:flex-none px-4 py-2 bg-indigo-50 text-indigo-700 rounded-xl text-sm font-semibold hover:bg-indigo-100 transition-all border border-indigo-100 shadow-sm">
            Export Data
          </button>
        </div>
      </div>
      
      <form className="space-y-8">
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-slate-900 border-b border-slate-200 pb-2">Personal Details</h3>
          
          <div className="flex items-center gap-4 sm:gap-6 group">
            <div className="relative w-20 h-20 rounded-full bg-white border border-slate-200 flex items-center justify-center overflow-hidden shrink-0 shadow-sm">
              {resumeData.profileImage ? (
                <img src={resumeData.profileImage} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              )}
            </div>
            <label className="cursor-pointer px-3 sm:px-4 py-2 bg-indigo-50 text-indigo-700 border border-indigo-100 rounded-xl text-xs sm:text-sm font-semibold hover:bg-indigo-100 transition-all shadow-sm">
              Upload Photo
              <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
            </label>
          </div>

          <div className="group">
            <label className="block text-sm font-medium text-slate-700 mb-2 transition-colors group-hover:text-indigo-600">Full Name</label>
            <input 
              type="text" 
              name="name"
              value={resumeData.name}
              onChange={handleChange}
              placeholder="John Doe" 
              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-300 hover:bg-slate-50 shadow-sm"
            />
          </div>
          <div className="group">
            <label className="block text-sm font-medium text-slate-700 mb-2 transition-colors group-hover:text-indigo-600">Email</label>
            <input 
              type="email" 
              name="email"
              value={resumeData.email}
              onChange={handleChange}
              placeholder="john@example.com" 
              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-300 hover:bg-slate-50 shadow-sm"
            />
          </div>
          <div className="group">
            <label className="block text-sm font-medium text-slate-700 mb-2 transition-colors group-hover:text-indigo-600">Phone</label>
            <input 
              type="tel" 
              name="phone"
              value={resumeData.phone || ''}
              onChange={handleChange}
              placeholder="+1 234 567 890" 
              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-300 hover:bg-slate-50 shadow-sm"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="group">
              <label className="block text-sm font-medium text-slate-700 mb-2 transition-colors group-hover:text-indigo-600">LinkedIn URL</label>
              <input 
                type="url" 
                name="linkedin"
                value={resumeData.linkedin || ''}
                onChange={handleChange}
                placeholder="https://linkedin.com/in/..." 
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-300 hover:bg-slate-50 shadow-sm"
              />
            </div>
            <div className="group">
              <label className="block text-sm font-medium text-slate-700 mb-2 transition-colors group-hover:text-indigo-600">Portfolio URL</label>
              <input 
                type="url" 
                name="portfolio"
                value={resumeData.portfolio || ''}
                onChange={handleChange}
                placeholder="https://yourportfolio.com" 
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-300 hover:bg-slate-50 shadow-sm"
              />
            </div>
          </div>
          <div className="group">
            <label className="block text-sm font-medium text-slate-700 mb-2 transition-colors group-hover:text-indigo-600">Professional Summary</label>
            <textarea 
              rows="3" 
              name="summary"
              value={resumeData.summary}
              onChange={handleChange}
              placeholder="A brief summary of your professional background..." 
              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-300 hover:bg-slate-50 shadow-sm resize-none"
            />
          </div>
          <div className="group">
            <label className="block text-sm font-medium text-slate-700 mb-2 transition-colors group-hover:text-indigo-600">Skills (comma separated)</label>
            <textarea 
              rows="3" 
              name="skills"
              value={resumeData.skills}
              onChange={handleChange}
              placeholder="React, Tailwind CSS, Framer Motion..." 
              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-300 hover:bg-slate-50 shadow-sm resize-none"
            />
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-slate-900 border-b border-slate-200 pb-2">Experience</h3>
          <Reorder.Group axis="y" values={resumeData.experience} onReorder={(newOrder) => handleReorder('experience', newOrder)} className="space-y-4">
            {resumeData.experience.map((exp) => (
              <Reorder.Item key={exp.id} value={exp} className="relative space-y-4 p-4 bg-slate-50 rounded-xl border border-slate-200 cursor-grab active:cursor-grabbing shadow-sm">
                <button type="button" onClick={() => removeField('experience', exp.id)} className="absolute top-2 right-2 text-red-500 hover:text-white text-xs font-bold w-6 h-6 rounded-full bg-red-50 hover:bg-red-500 flex items-center justify-center transition-all">✕</button>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <input type="text" name="title" value={exp.title} onChange={(e) => handleArrayChange(e, exp.id, 'experience')} placeholder="Job Title" className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all shadow-sm" />
                  <input type="text" name="company" value={exp.company} onChange={(e) => handleArrayChange(e, exp.id, 'experience')} placeholder="Company" className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all shadow-sm" />
                </div>
                <input type="text" name="duration" value={exp.duration} onChange={(e) => handleArrayChange(e, exp.id, 'experience')} placeholder="Duration (e.g. Jan 2020 - Present)" className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all shadow-sm" />
                <textarea rows="3" name="description" value={exp.description} onChange={(e) => handleArrayChange(e, exp.id, 'experience')} placeholder="Description" className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none resize-none transition-all shadow-sm" />
              </Reorder.Item>
            ))}
          </Reorder.Group>
          <button type="button" onClick={() => addField('experience', { title: '', company: '', duration: '', description: '' })} className="text-indigo-600 hover:text-indigo-700 text-sm font-bold transition-colors">+ Add Experience</button>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-slate-900 border-b border-slate-200 pb-2">Education</h3>
          <Reorder.Group axis="y" values={resumeData.education} onReorder={(newOrder) => handleReorder('education', newOrder)} className="space-y-4">
            {resumeData.education.map((edu) => (
              <Reorder.Item key={edu.id} value={edu} className="relative space-y-4 p-4 bg-slate-50 rounded-xl border border-slate-200 cursor-grab active:cursor-grabbing shadow-sm">
                <button type="button" onClick={() => removeField('education', edu.id)} className="absolute top-2 right-2 text-red-500 hover:text-white text-xs font-bold w-6 h-6 rounded-full bg-red-50 hover:bg-red-500 flex items-center justify-center transition-all">✕</button>
                <div className="pt-2">
                  <input type="text" name="degree" value={edu.degree} onChange={(e) => handleArrayChange(e, edu.id, 'education')} placeholder="Degree" className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all shadow-sm" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" name="college" value={edu.college} onChange={(e) => handleArrayChange(e, edu.id, 'education')} placeholder="College/University" className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all shadow-sm" />
                  <input type="text" name="year" value={edu.year} onChange={(e) => handleArrayChange(e, edu.id, 'education')} placeholder="Year" className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all shadow-sm" />
                </div>
              </Reorder.Item>
            ))}
          </Reorder.Group>
          <button type="button" onClick={() => addField('education', { degree: '', college: '', year: '' })} className="text-indigo-600 hover:text-indigo-700 text-sm font-bold transition-colors">+ Add Education</button>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-slate-900 border-b border-slate-200 pb-2">Projects ⭐</h3>
          <Reorder.Group axis="y" values={resumeData.projects} onReorder={(newOrder) => handleReorder('projects', newOrder)} className="space-y-4">
            {resumeData.projects.map((proj) => (
              <Reorder.Item key={proj.id} value={proj} className="relative space-y-4 p-4 bg-slate-50 rounded-xl border border-slate-200 cursor-grab active:cursor-grabbing shadow-sm">
                <button type="button" onClick={() => removeField('projects', proj.id)} className="absolute top-2 right-2 text-red-500 hover:text-white text-xs font-bold w-6 h-6 rounded-full bg-red-50 hover:bg-red-500 flex items-center justify-center transition-all">✕</button>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <input type="text" name="title" value={proj.title} onChange={(e) => handleArrayChange(e, proj.id, 'projects')} placeholder="Project Title" className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all shadow-sm" />
                  <input type="text" name="link" value={proj.link} onChange={(e) => handleArrayChange(e, proj.id, 'projects')} placeholder="Project Link" className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all shadow-sm" />
                </div>
                <textarea rows="2" name="description" value={proj.description} onChange={(e) => handleArrayChange(e, proj.id, 'projects')} placeholder="Description" className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none resize-none transition-all shadow-sm" />
              </Reorder.Item>
            ))}
          </Reorder.Group>
          <button type="button" onClick={() => addField('projects', { title: '', link: '', description: '' })} className="text-indigo-600 hover:text-indigo-700 text-sm font-bold transition-colors">+ Add Project</button>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-slate-900 border-b border-slate-200 pb-2">Certifications</h3>
          <Reorder.Group axis="y" values={resumeData.certifications} onReorder={(newOrder) => handleReorder('certifications', newOrder)} className="space-y-4">
            {resumeData.certifications.map((cert) => (
              <Reorder.Item key={cert.id} value={cert} className="relative space-y-4 p-4 bg-slate-50 rounded-xl border border-slate-200 cursor-grab active:cursor-grabbing shadow-sm">
                <button type="button" onClick={() => removeField('certifications', cert.id)} className="absolute top-2 right-2 text-red-500 hover:text-white text-xs font-bold w-6 h-6 rounded-full bg-red-50 hover:bg-red-500 flex items-center justify-center transition-all">✕</button>
                <div className="pt-2">
                  <input type="text" name="name" value={cert.name} onChange={(e) => handleArrayChange(e, cert.id, 'certifications')} placeholder="Certification Name" className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all shadow-sm" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" name="issuer" value={cert.issuer} onChange={(e) => handleArrayChange(e, cert.id, 'certifications')} placeholder="Issuing Organization" className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all shadow-sm" />
                  <input type="text" name="date" value={cert.date} onChange={(e) => handleArrayChange(e, cert.id, 'certifications')} placeholder="Date (e.g. May 2023)" className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all shadow-sm" />
                </div>
              </Reorder.Item>
            ))}
          </Reorder.Group>
          <button type="button" onClick={() => addField('certifications', { name: '', issuer: '', date: '' })} className="text-indigo-600 hover:text-indigo-700 text-sm font-bold transition-colors">+ Add Certification</button>
        </div>

        {/* Custom Sections Builder */}
        <div className="space-y-6">
          <div className="flex justify-between items-center border-b border-slate-200 pb-2">
            <h3 className="text-xl font-semibold text-slate-900">Custom Sections</h3>
            <button type="button" onClick={addCustomSection} className="text-sm font-bold text-blue-500 hover:text-blue-600 transition-colors">+ Add New Section</button>
          </div>
          
          {resumeData.customSections?.map(section => (
            <div key={section.id} className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-4 relative group shadow-sm">
              <button type="button" onClick={() => removeCustomSection(section.id)} className="absolute top-4 right-4 text-red-500 hover:text-red-600 font-bold text-sm">Delete Section</button>
              <input type="text" value={section.title} onChange={(e) => updateCustomSectionTitle(section.id, e.target.value)} className="text-lg font-bold bg-transparent text-slate-900 border-b border-dashed border-slate-300 outline-none focus:border-indigo-500 pb-1 w-full sm:w-2/3" placeholder="Section Title (e.g., Languages)" />
              
              <div className="space-y-4 mt-4">
                {section.items.map(item => (
                  <div key={item.id} className="relative p-4 bg-white rounded-lg border border-slate-200 shadow-sm space-y-3">
                    <button type="button" onClick={() => removeCustomItem(section.id, item.id)} className="absolute top-2 right-2 text-red-500 hover:text-white text-xs w-6 h-6 rounded-full bg-red-50 hover:bg-red-500 flex items-center justify-center transition-all">✕</button>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input type="text" value={item.title} onChange={(e) => updateCustomItem(section.id, item.id, 'title', e.target.value)} placeholder="Item Title" className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-md text-slate-900 text-sm outline-none focus:ring-1 focus:ring-indigo-500" />
                      <input type="text" value={item.date} onChange={(e) => updateCustomItem(section.id, item.id, 'date', e.target.value)} placeholder="Date / Value" className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-md text-slate-900 text-sm outline-none focus:ring-1 focus:ring-indigo-500" />
                    </div>
                    <input type="text" value={item.subtitle} onChange={(e) => updateCustomItem(section.id, item.id, 'subtitle', e.target.value)} placeholder="Subtitle / Role" className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-md text-slate-900 text-sm outline-none focus:ring-1 focus:ring-indigo-500" />
                    <textarea rows="2" value={item.description} onChange={(e) => updateCustomItem(section.id, item.id, 'description', e.target.value)} placeholder="Description" className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-md text-slate-900 text-sm outline-none focus:ring-1 focus:ring-indigo-500 resize-none" />
                  </div>
                ))}
              </div>
              <button type="button" onClick={() => addCustomItem(section.id)} className="text-indigo-600 hover:text-indigo-700 text-sm font-bold transition-colors">+ Add Item</button>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-slate-900 border-b border-slate-200 pb-2">Theme Customization</h3>
          <div className="group flex items-center gap-4">
            <label className="block text-sm font-medium text-slate-700 transition-colors group-hover:text-indigo-600">Accent Color</label>
            <div className="flex items-center gap-3">
              <input 
                type="color" 
                name="themeColor"
                value={resumeData.themeColor || '#000000'}
                onChange={handleChange}
                className="w-10 h-10 rounded cursor-pointer border border-slate-300 shadow-sm outline-none p-0 bg-transparent"
              />
              <button 
                type="button" 
                onClick={() => setResumeData(prev => ({ ...prev, themeColor: '' }))}
                className="px-3 py-1.5 text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors border border-slate-200 shadow-sm"
              >
                Reset to Default
              </button>
            </div>
          </div>
        </div>
      </form>
    </motion.div>
  );
}