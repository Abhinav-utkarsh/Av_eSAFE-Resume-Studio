import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

import Template1 from '../components/Template1';
import Template2 from '../components/Template2';
import Template3 from '../components/Template3';
import Template4 from '../components/Template4';
import Template5 from '../components/Template5';
import Template6 from '../components/Template6';
import Template7 from '../components/Template7';
import Template8 from '../components/Template8';
import Template9 from '../components/Template9';
import Template10 from '../components/Template10';
import Template11 from '../components/Template11';
import Template12 from '../components/Template12';
import Template13 from '../components/Template13';
import Template14 from '../components/Template14';
import Template15 from '../components/Template15';
import Template16 from '../components/Template16';
import Template17 from '../components/Template17';
import Template18 from '../components/Template18';
import Template19 from '../components/Template19';
import Template20 from '../components/Template20';
import Template21 from '../components/Template21';
import Template22 from '../components/Template22';
import Template23 from '../components/Template23';
import Template24 from '../components/Template24';
import Template25 from '../components/Template25';
import Template26 from '../components/Template26';
import Template27 from '../components/Template27';
import Template28 from '../components/Template28';
import Template29 from '../components/Template29';
import Template30 from '../components/Template30';
import Template31 from '../components/Template31';
import Template32 from '../components/Template32';
import Template33 from '../components/Template33';
import Template34 from '../components/Template34';
import Template35 from '../components/Template35';
import Template36 from '../components/Template36';
import Template37 from '../components/Template37';
import Template38 from '../components/Template38';
import Template39 from '../components/Template39';
import Template40 from '../components/Template40';
import Template41 from '../components/Template41';
import Template42 from '../components/Template42';
import Template43 from '../components/Template43';
import Template44 from '../components/Template44';
import Template45 from '../components/Template45';
import Template46 from '../components/Template46';
import Template47 from '../components/Template47';
import Template48 from '../components/Template48';
import Template49 from '../components/Template49';
import Template50 from '../components/Template50';
import Template51 from '../components/Template51';
import Template52 from '../components/Template52';
import Template53 from '../components/Template53';
import Template54 from '../components/Template54';
import Template55 from '../components/Template55';

export default function TemplateSelector({ onSelect }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All Templates' },
    { id: 'ats', name: 'ATS Friendly' },
    { id: 'modern', name: 'Modern' },
    { id: 'classic', name: 'Classic' },
    { id: 'creative', name: 'Creative' },
  ];

  const dummyData = {
    name: 'Abhinav Utkarsh',
    email: 'alex@example.com',
    phone: '+1 234 567 8900',
    linkedin: 'linkedin.com/in/alexm',
    portfolio: 'alexm.dev',
    summary: 'Passionate software engineer with 5+ years of experience building scalable web applications and leading frontend teams. Proven track record in problem-solving and optimizing performance.',
    skills: 'React, TypeScript, Node.js, Tailwind CSS',
    experience: [
      { id: '1', title: 'Senior Engineer', company: 'TechCorp', duration: '2020 - Present', description: 'Led development of enterprise web applications.' },
      { id: '2', title: 'Web Developer', company: 'Innovate LLC', duration: '2018 - 2020', description: 'Built responsive UI components and integrated APIs.' }
    ],
    education: [
      { id: '1', degree: 'B.S. Computer Science', college: 'State University', year: '2018' }
    ],
    projects: [],
    certifications: [],
    themeColor: '',
    profileImage: '',
    customSections: [
      {
        id: 'mock1',
        title: 'Languages',
        items: [
          { id: 'item1', title: 'English', subtitle: 'Native / Bilingual', date: '', description: '' }
        ]
      }
    ]
  };

  const allTemplates = [
    { id: 'Template21', name: 'Simple Accent', desc: 'Clean lines with a bold pop of color.', component: Template21 },
    { id: 'Template22', name: 'Left Accent Border', desc: 'Distinctive colorful left border.', component: Template22 },
    { id: 'Template23', name: 'Top Banner Focus', desc: 'Large colored header block.', component: Template23 },
    { id: 'Template24', name: 'Minimalist Two-Column', desc: 'Airy, spacious dual column design.', component: Template24 },
    { id: 'Template25', name: 'Clean Classic Serif', desc: 'Strict ATS-friendly serif design.', component: Template25 },
    { id: 'Template26', name: 'Corporate Ribbon', desc: 'Full-width colored header block.', component: Template26 },
    { id: 'Template27', name: 'Elegant Duo', desc: 'Left-aligned titles with right-aligned details.', component: Template27 },
    { id: 'Template28', name: 'Minimalist Table', desc: 'Clean, structured grid-based layout.', component: Template28 },
    { id: 'Template29', name: 'Tech Card', desc: 'Modern boxed sections with thick borders.', component: Template29 },
    { id: 'Template30', name: 'Harvard Academic', desc: 'Dense, traditional CV format.', component: Template30 },
    { id: 'Template9', name: 'Tech & Startup', desc: 'Modern teal layout with sidebar focus.', component: Template9 },
    { id: 'Template1', name: 'Classic Professional', desc: 'Traditional ATS-friendly serif design.', component: Template1 },
    { id: 'Template2', name: 'Modern Corporate', desc: 'Clean, structured business layout.', component: Template2 },
    { id: 'Template15', name: 'High Density', desc: 'Compact layout for extensive experience.', component: Template15 },
    { id: 'Template6', name: 'Two-Column Modern', desc: 'Distinctive colored sidebar.', component: Template6 },
    { id: 'Template3', name: 'Executive Clean', desc: 'Subtle left column with sharp typography.', component: Template3 },
    { id: 'Template7', name: 'Creative Gradient', desc: 'Bold gradient header for creatives.', component: Template7 },
    { id: 'Template4', name: 'Compact ATS', desc: 'Minimalist density optimized for parsing.', component: Template4 },
    { id: 'Template11', name: 'Modern Minimal', desc: 'Airy, spacious, and highly legible.', component: Template11 },
    { id: 'Template13', name: 'Academic CV', desc: 'Traditional structured format for academia.', component: Template13 },
    { id: 'Template5', name: 'Elegant Serif', desc: 'Sophisticated typography and wide margins.', component: Template5 },
    { id: 'Template8', name: 'Dark Mode Minimal', desc: 'Striking dark theme with light accents.', component: Template8 },
    { id: 'Template10', name: 'Brutalist Bold', desc: 'High contrast, thick borders, loud design.', component: Template10 },
    { id: 'Template12', name: 'Corporate Standard', desc: 'Reliable, battle-tested standard format.', component: Template12 },
    { id: 'Template14', name: 'Executive Split', desc: 'Professional 30/70 split layout.', component: Template14 },
    { id: 'Template16', name: 'Modern Timeline', desc: 'Beautiful timeline-based experience.', component: Template16 },
    { id: 'Template17', name: 'Developer Mono', desc: 'Monospace font for a terminal feel.', component: Template17 },
    { id: 'Template18', name: 'Elegant Centered', desc: 'Perfectly centered, balanced typography.', component: Template18 },
    { id: 'Template19', name: 'Split Dark Mode', desc: 'High contrast dark sidebar.', component: Template19 },
    { id: 'Template20', name: 'Card Layout', desc: 'Modern boxed sections with drop shadows.', component: Template20 },
    { id: 'Template31', name: 'Creative Sidebar', desc: 'Modern layout with a creative left sidebar.', component: Template31 },
    { id: 'Template32', name: 'Minimal Grid', desc: 'Clean grid-based layout for precise alignment.', component: Template32 },
    { id: 'Template33', name: 'Bold Typography', desc: 'Typography-focused design for high impact.', component: Template33 },
    { id: 'Template34', name: 'Executive Timeline', desc: 'Sophisticated timeline for career progression.', component: Template34 },
    { id: 'Template35', name: 'Tech Innovator', desc: 'Modern aesthetic perfect for tech roles.', component: Template35 },
    { id: 'Template36', name: 'Classic Elegance', desc: 'Timeless design with elegant spacing.', component: Template36 },
    { id: 'Template37', name: 'Modern Accent', desc: 'Sleek look with subtle color accents.', component: Template37 },
    { id: 'Template38', name: 'Geometric Clean', desc: 'Structured layout with geometric elements.', component: Template38 },
    { id: 'Template39', name: 'Academic Detailed', desc: 'Comprehensive format for academic CVs.', component: Template39 },
    { id: 'Template40', name: 'Dynamic Split', desc: 'Eye-catching split layout for balance.', component: Template40 },
    { id: 'Template41', name: 'Professional Serif', desc: 'Traditional serif font for classic roles.', component: Template41 },
    { id: 'Template42', name: 'Minimalist Light', desc: 'Airy design with maximum whitespace.', component: Template42 },
    { id: 'Template43', name: 'Corporate Dark', desc: 'Bold dark header for corporate impact.', component: Template43 },
    { id: 'Template44', name: 'Startup Agile', desc: 'Dynamic and modern for agile professionals.', component: Template44 },
    { id: 'Template45', name: 'Creative Portfolio', desc: 'Visual-heavy design for creatives.', component: Template45 },
    { id: 'Template46', name: 'Structured Logic', desc: 'Highly organized, logical flow of information.', component: Template46 },
    { id: 'Template47', name: 'Elegant Minimal', desc: 'Refined minimalism for a chic look.', component: Template47 },
    { id: 'Template48', name: 'Impact Header', desc: 'Large header section to grab attention.', component: Template48 },
    { id: 'Template49', name: 'Modern Hybrid', desc: 'Hybrid layout blending traditional and modern.', component: Template49 },
    { id: 'Template50', name: 'Tech Forward', desc: 'Forward-looking design for modern industries.', component: Template50 },
    { id: 'Template51', name: 'Classic Border', desc: 'Framed with a classic border for neatness.', component: Template51 },
    { id: 'Template52', name: 'Executive Brief', desc: 'Concise format for executive summaries.', component: Template52 },
    { id: 'Template53', name: 'Dynamic Flow', desc: 'Smooth visual flow from top to bottom.', component: Template53 },
    { id: 'Template54', name: 'Clean Corporate', desc: 'No-nonsense corporate layout.', component: Template54 },
    { id: 'Template55', name: 'Ultimate Modern', desc: 'The ultimate modern resume template.', component: Template55 }
  ];

  const templates = allTemplates;

  const filteredTemplates = useMemo(() => {
    if (activeFilter === 'all') {
      return templates;
    }

    const filterMap = {
      ats: (template) => ['Template1', 'Template4', 'Template15', 'Template25', 'Template28', 'Template30', 'Template39', 'Template42', 'Template46', 'Template52'].includes(template.id),
      modern: (template) => ['Template2', 'Template6', 'Template9', 'Template11', 'Template14', 'Template16', 'Template19', 'Template20', 'Template21', 'Template24', 'Template29', 'Template32', 'Template34', 'Template35', 'Template37', 'Template38', 'Template40', 'Template44', 'Template49', 'Template50', 'Template53', 'Template55'].includes(template.id),
      classic: (template) => ['Template3', 'Template5', 'Template12', 'Template13', 'Template18', 'Template26', 'Template27', 'Template36', 'Template41', 'Template43', 'Template47', 'Template51', 'Template54'].includes(template.id),
      creative: (template) => ['Template7', 'Template8', 'Template10', 'Template17', 'Template22', 'Template23', 'Template31', 'Template33', 'Template45', 'Template48'].includes(template.id),
    };

    const filterFunction = filterMap[activeFilter];

    if (filterFunction) {
      return templates.filter(filterFunction);
    }
    return templates;
  }, [activeFilter, templates]);

  return (
    <div className="w-full h-full overflow-y-auto p-4 sm:p-8 md:p-12 bg-transparent">
      <div className="max-w-7xl mx-auto pb-24">
        <div className="text-center mb-12 sm:mb-16 mt-4 sm:mt-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 mb-3 sm:mb-4">Build Your Signature Resume</h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium px-4">Craft a resume that speaks before you do. Choose a design and start shaping your future.</p>

          <div className="mt-8 flex justify-center flex-wrap gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`
                  px-4 py-2 rounded-full text-sm font-semibold
                  ${activeFilter === filter.id
                    ? 'bg-indigo-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                  }
                  transition-colors duration-200
                `}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredTemplates.map((tpl, i) => (
            <motion.div
              key={tpl.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.03, translateY: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelect(tpl.id)}
              className="bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-2xl overflow-hidden shadow-sm cursor-pointer hover:border-indigo-300 hover:shadow-[0_10px_40px_rgba(99,102,241,0.15)] transition-all flex flex-col h-full group"
            >
              <div className="h-64 w-full bg-white relative overflow-hidden flex items-start justify-center border-b border-slate-100">
                <div
                  className="absolute top-0 origin-top pointer-events-none transition-transform duration-500 group-hover:scale-[0.34]"
                  style={{ transform: 'scale(0.32)', width: '800px', left: 'calc(50% - 400px)' }}
                >
                  <tpl.component resumeData={dummyData} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white group-hover:opacity-0 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">{tpl.name}</h3>
                  <p className="text-sm text-slate-600">{tpl.desc}</p>
                </div>
                <div className="mt-6 flex items-center text-indigo-600 text-sm font-semibold group-hover:text-blue-500 transition-colors">
                  <span>Use Template</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}