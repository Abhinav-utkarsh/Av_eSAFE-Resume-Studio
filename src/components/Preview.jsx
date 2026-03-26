import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Template1 from './Template1';
import Template2 from './Template2';
import Template3 from './Template3';
import Template4 from './Template4';
import Template5 from './Template5';
import Template6 from './Template6';
import Template7 from './Template7';
import Template8 from './Template8';
import Template9 from './Template9';
import Template10 from './Template10';
import Template11 from './Template11';
import Template12 from './Template12';
import Template13 from './Template13';
import Template14 from './Template14';
import Template15 from './Template15';
import Template16 from './Template16';
import Template17 from './Template17';
import Template18 from './Template18';
import Template19 from './Template19';
import Template20 from './Template20';
import Template21 from './Template21';
import Template22 from './Template22';
import Template23 from './Template23';
import Template24 from './Template24';
import Template25 from './Template25';
import Template26 from './Template26';
import Template27 from './Template27';
import Template28 from './Template28';
import Template29 from './Template29';
import Template30 from './Template30';
import Template31 from './Template31';
import Template32 from './Template32';
import Template33 from './Template33';
import Template34 from './Template34';
import Template35 from './Template35';
import Template36 from './Template36';
import Template37 from './Template37';
import Template38 from './Template38';
import Template39 from './Template39';
import Template40 from './Template40';
import Template41 from './Template41';
import Template42 from './Template42';
import Template43 from './Template43';
import Template44 from './Template44';
import Template45 from './Template45';
import Template46 from './Template46';
import Template47 from './Template47';
import Template48 from './Template48';
import Template49 from './Template49';
import Template50 from './Template50';
import Template51 from './Template51';
import Template52 from './Template52';
import Template53 from './Template53';
import Template54 from './Template54';
import Template55 from './Template55';

export default function Preview({ resumeData, selectedTemplate }) {
  const templates = { Template1, Template2, Template3, Template4, Template5, Template6, Template7, Template8, Template9, Template10, Template11, Template12, Template13, Template14, Template15, Template16, Template17, Template18, Template19, Template20, Template21, Template22, Template23, Template24, Template25, Template26, Template27, Template28, Template29, Template30, Template31, Template32, Template33, Template34, Template35, Template36, Template37, Template38, Template39, Template40, Template41, Template42, Template43, Template44, Template45, Template46, Template47, Template48, Template49, Template50, Template51, Template52, Template53, Template54, Template55 };
  const SelectedTemplate = templates[selectedTemplate] || Template1;

  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [height, setHeight] = useState('auto');

  useEffect(() => {
    const updateLayout = () => {
      if (containerRef.current && contentRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const contentHeight = contentRef.current.offsetHeight;
        const targetWidth = 800; // Fixed A4 width for consistency
        const newScale = containerWidth < targetWidth ? containerWidth / targetWidth : 1;
        
        setScale(newScale);
        setHeight(`${contentHeight * newScale}px`);
      }
    };

    const observer = new ResizeObserver(updateLayout);
    if (containerRef.current) observer.observe(containerRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div 
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      className="w-full flex justify-center print:block print:m-0 print:p-0 print:!transform-none"
    >
      <div
        ref={containerRef}
        className="w-full max-w-[800px] relative shadow-2xl rounded-2xl border border-gray-100 overflow-hidden bg-white print:shadow-none print:border-none print:rounded-none print:overflow-visible print:!h-auto print:max-w-full print:w-full print:mx-auto"
        style={{ height }}
      >
        <div
          className="origin-top-left absolute top-0 left-0 print:relative print:!transform-none print:!w-full print:mx-auto"
          style={{ transform: `scale(${scale})`, width: '800px' }}
        >
          <div
            ref={contentRef}
            id="resume-preview"
            className="w-[800px] min-h-[1131px] bg-white print:!w-full print:min-h-0 print:mx-auto"
          >
            <SelectedTemplate resumeData={resumeData} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}