import React, { useRef, useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import mammoth from 'mammoth';

// Configure the PDF.js worker using a CDN to avoid bundler configuration issues
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

export default function Form({ resumeData = {}, setResumeData }) {
  const fileInputRef = useRef(null);
  const [isParsing, setIsParsing] = useState(false);

  // Extract raw text from PDF
  const extractTextFromPDF = async (file) => {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    let fullText = "";
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      fullText += content.items.map(item => item.str).join(" ") + "\n";
    }
    return fullText;
  };

  // Extract raw text from Word document
  const extractTextFromWord = async (file) => {
    const arrayBuffer = await file.arrayBuffer();
    const result = await mammoth.extractRawText({ arrayBuffer });
    return result.value;
  };

  // Handle the file upload and parsing
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    setIsParsing(true);
    try {
      let rawText = "";
      if (file.type === "application/pdf") {
        rawText = await extractTextFromPDF(file);
      } else if (
        file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" || 
        file.name.endsWith('.docx')
      ) {
        rawText = await extractTextFromWord(file);
      } else {
        alert("Unsupported file type. Please upload a PDF or DOCX file.");
        return;
      }

      // --- Naive text parsing ---
      // Note: For highly accurate mapping of Education/Experience, an LLM API is recommended.
      const emailMatch = rawText.match(/[\w.-]+@[\w.-]+\.\w+/);
      const email = emailMatch ? emailMatch[0] : "";
      
      const lines = rawText.split('\n').filter(line => line.trim().length > 0);
      const name = lines.length > 0 ? lines[0].trim() : "";

      // Update state with the newly extracted data
      if (setResumeData) {
        setResumeData(prev => ({
          ...prev,
          name: name || prev.name,
          email: email || prev.email,
          // Dumping all extra text into skills as an example
          skills: rawText.substring(0, 600) 
        }));
      }
      
    } catch (error) {
      console.error("Error parsing document:", error);
      alert("Failed to parse document. Please check the console for details.");
    } finally {
      setIsParsing(false);
      if (fileInputRef.current) fileInputRef.current.value = null; // Reset input
    }
  };

  const handleChange = (field, value) => {
    if (setResumeData) {
      setResumeData(prev => ({ ...prev, [field]: value }));
    }
  };

  return (
    <div className="p-8 max-w-xl mx-auto w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Personal Details</h2>
        <div>
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileUpload} 
            accept=".pdf,.docx" 
            className="hidden" 
          />
          <button 
            type="button"
            onClick={() => fileInputRef.current?.click()}
            disabled={isParsing}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors disabled:opacity-50"
          >
            {isParsing ? 'Reading...' : 'Import Resume'}
          </button>
        </div>
      </div>

      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input 
            type="text" 
            value={resumeData?.name || ''}
            onChange={(e) => handleChange('name', e.target.value)}
            placeholder="John Doe" 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input 
            type="email" 
            value={resumeData?.email || ''}
            onChange={(e) => handleChange('email', e.target.value)}
            placeholder="john@example.com" 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Skills</label>
          <textarea 
            rows="5" 
            value={resumeData?.skills || ''}
            onChange={(e) => handleChange('skills', e.target.value)}
            placeholder="React, Tailwind CSS, JavaScript..." 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          />
        </div>
      </form>
    </div>
  );
}