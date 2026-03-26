import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TemplateSelector from "./pages/TemplateSelector";

const generateId = () => Math.random().toString(36).substr(2, 9);

const getInitialState = () => ({
  name: '', email: '', phone: '', linkedin: '', portfolio: '', summary: '', skills: '', themeColor: '', profileImage: '',
  experience: [{ id: generateId(), title: '', company: '', duration: '', description: '' }],
  education: [{ id: generateId(), degree: '', college: '', year: '' }],
  projects: [{ id: generateId(), title: '', link: '', description: '' }],
  certifications: [{ id: generateId(), name: '', issuer: '', date: '' }],
  customSections: []
});

function App() {
  const [resumeData, setResumeData] = useState(() => {
    const saved = localStorage.getItem('resumeData');
    if (saved) { try { return JSON.parse(saved); } catch (e) {} }
    return getInitialState();
  });
  const [selectedTemplate, setSelectedTemplate] = useState(() => {
    const savedTemplate = localStorage.getItem('selectedTemplate');
    return savedTemplate || 'Template21';
  });
  const [currentView, setCurrentView] = useState('templates'); // 'templates' | 'editor'

  useEffect(() => { localStorage.setItem('resumeData', JSON.stringify(resumeData)); }, [resumeData]);
  useEffect(() => { localStorage.setItem('selectedTemplate', selectedTemplate); }, [selectedTemplate]);

  const handleClear = () => { setResumeData(getInitialState()); localStorage.removeItem('resumeData'); };

  const handleDownload = () => {
    // Temporarily rename the document title to name the downloaded PDF file
    const originalTitle = document.title;
    document.title = `${resumeData.name || 'Resume'}_CV`;
    window.print();
    document.title = originalTitle;
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-slate-50 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] font-sans print:bg-none print:block print:h-auto print:bg-white print:overflow-visible">
      <style>
        {`
          @media print {
            @page { margin: 0; }
            body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          }
        `}
      </style>
      <Navbar 
        onClear={handleClear} 
        onDownload={handleDownload} 
        selectedTemplate={selectedTemplate} 
        setSelectedTemplate={setSelectedTemplate} 
        currentView={currentView}
        setCurrentView={setCurrentView}
      />
      <div className="flex-1 overflow-y-auto lg:overflow-hidden print:overflow-visible print:block">
        {currentView === 'templates' ? (
          <TemplateSelector onSelect={(id) => { setSelectedTemplate(id); setCurrentView('editor'); }} />
        ) : (
          <Home resumeData={resumeData} setResumeData={setResumeData} selectedTemplate={selectedTemplate} />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;