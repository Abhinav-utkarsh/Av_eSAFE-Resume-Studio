import React from 'react';
import Form from '../components/Form';
import Preview from '../components/Preview';

export default function Home({ resumeData, setResumeData, selectedTemplate }) {
  return (
    <div className="flex flex-col lg:flex-row h-full w-full font-sans lg:overflow-hidden print:block print:h-auto print:bg-white print:overflow-visible bg-transparent">
      <div className="w-full lg:w-1/2 h-auto lg:h-full bg-transparent overflow-visible lg:overflow-y-auto p-4 sm:p-8 border-b lg:border-b-0 lg:border-r border-slate-200/60 z-10 pb-8 lg:pb-16 print:hidden">
        <Form resumeData={resumeData} setResumeData={setResumeData} />
      </div>
      <div className="w-full lg:w-1/2 h-auto lg:h-full bg-transparent overflow-visible lg:overflow-y-auto p-2 sm:p-8 flex justify-center items-start pb-16 print:w-full print:h-auto print:p-0 print:m-0 print:overflow-visible print:bg-white print:block">
        <Preview resumeData={resumeData} selectedTemplate={selectedTemplate} />
      </div>
    </div>
  );
}