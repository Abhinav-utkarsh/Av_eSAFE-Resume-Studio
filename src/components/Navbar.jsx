import React, { useState } from 'react';

export default function Navbar({ onClear, onDownload, selectedTemplate, setSelectedTemplate, currentView, setCurrentView }) {
  const [showSupport, setShowSupport] = useState(false);
  
  // Replace this with your actual UPI ID
  const upiId = "abhinavutkarsh22@ybl"; 

  const handleCopy = () => {
    navigator.clipboard.writeText(upiId);
    alert("UPI ID copied to clipboard!");
  };

  return (
    <>
      <nav className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 py-3 bg-white/60 backdrop-blur-2xl backdrop-saturate-150 border-b border-white/40 sticky top-0 z-50 shadow-[0_4px_30px_rgba(0,0,0,0.05)] print:hidden gap-3 transition-all text-gray-800">
      <div className="flex items-center gap-3 sm:gap-4 cursor-pointer group w-full lg:w-auto justify-center lg:justify-start" onClick={() => setCurrentView('templates')}>
        <img src="/logo.png" alt="Av_eSAFE Resume Studio" className="h-14 sm:h-16 w-auto object-contain group-hover:scale-105 transition-transform" />
      </div>

      <div className="flex flex-wrap items-center gap-2 sm:gap-4 w-full lg:w-auto justify-center lg:justify-end">
        <button onClick={() => setShowSupport(true)} className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-rose-50 text-rose-600 font-bold border border-rose-200/50 hover:bg-rose-100 hover:shadow-sm transition-all flex items-center gap-2 text-xs sm:text-sm">
          Support Us ❤️
        </button>
        {currentView === 'editor' && (
          <>
            <button onClick={() => setCurrentView('templates')} className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-white/50 text-gray-700 font-semibold border border-gray-200/50 hover:bg-white hover:shadow-sm transition-all flex items-center gap-2 text-xs sm:text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
              <span className="hidden sm:inline">Templates</span>
            </button>
            <select 
              value={selectedTemplate}
              onChange={(e) => setSelectedTemplate(e.target.value)}
              className="px-2 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-white/50 text-gray-800 border border-gray-200/50 outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer transition-colors hover:bg-white font-medium text-xs sm:text-sm max-w-[110px] sm:max-w-[200px] truncate"
            >
              <option value="Template21" className="text-black">1. Simple Accent</option>
              <option value="Template22" className="text-black">2. Left Accent Border</option>
              <option value="Template23" className="text-black">3. Top Banner Focus</option>
              <option value="Template24" className="text-black">4. Minimalist Two-Column</option>
              <option value="Template25" className="text-black">5. Clean Classic Serif</option>
              <option value="Template26" className="text-black">6. Corporate Ribbon</option>
              <option value="Template27" className="text-black">7. Elegant Duo</option>
              <option value="Template28" className="text-black">8. Minimalist Table</option>
              <option value="Template29" className="text-black">9. Tech Card</option>
              <option value="Template30" className="text-black">10. Harvard Academic</option>
              <option value="Template9" className="text-black">11. Tech & Startup</option>
              <option value="Template1" className="text-black">12. Classic Professional</option>
              <option value="Template2" className="text-black">13. Modern Corporate</option>
              <option value="Template15" className="text-black">14. High Density</option>
              <option value="Template6" className="text-black">15. Two-Column Modern</option>
              <option value="Template3" className="text-black">16. Executive Clean</option>
              <option value="Template7" className="text-black">17. Creative Gradient</option>
              <option value="Template4" className="text-black">18. Compact ATS</option>
              <option value="Template11" className="text-black">19. Modern Minimal</option>
              <option value="Template13" className="text-black">20. Academic CV</option>
              <option value="Template5" className="text-black">21. Elegant Serif</option>
              <option value="Template8" className="text-black">22. Dark Mode Minimal</option>
              <option value="Template10" className="text-black">23. Brutalist Bold</option>
              <option value="Template12" className="text-black">24. Corporate Standard</option>
              <option value="Template14" className="text-black">25. Executive Split</option>
              <option value="Template16" className="text-black">26. Modern Timeline</option>
              <option value="Template17" className="text-black">27. Developer Mono</option>
              <option value="Template18" className="text-black">28. Elegant Centered</option>
              <option value="Template19" className="text-black">29. Split Dark Mode</option>
              <option value="Template20" className="text-black">30. Card Layout</option>
              <option value="Template31" className="text-black">31. Creative Sidebar</option>
              <option value="Template32" className="text-black">32. Minimal Grid</option>
              <option value="Template33" className="text-black">33. Bold Typography</option>
              <option value="Template34" className="text-black">34. Executive Timeline</option>
              <option value="Template35" className="text-black">35. Tech Innovator</option>
              <option value="Template36" className="text-black">36. Classic Elegance</option>
              <option value="Template37" className="text-black">37. Modern Accent</option>
              <option value="Template38" className="text-black">38. Geometric Clean</option>
              <option value="Template39" className="text-black">39. Academic Detailed</option>
              <option value="Template40" className="text-black">40. Dynamic Split</option>
              <option value="Template41" className="text-black">41. Professional Serif</option>
              <option value="Template42" className="text-black">42. Minimalist Light</option>
              <option value="Template43" className="text-black">43. Corporate Dark</option>
              <option value="Template44" className="text-black">44. Startup Agile</option>
              <option value="Template45" className="text-black">45. Creative Portfolio</option>
              <option value="Template46" className="text-black">46. Structured Logic</option>
              <option value="Template47" className="text-black">47. Elegant Minimal</option>
              <option value="Template48" className="text-black">48. Impact Header</option>
              <option value="Template49" className="text-black">49. Modern Hybrid</option>
              <option value="Template50" className="text-black">50. Tech Forward</option>
              <option value="Template51" className="text-black">51. Classic Border</option>
              <option value="Template52" className="text-black">52. Executive Brief</option>
              <option value="Template53" className="text-black">53. Dynamic Flow</option>
              <option value="Template54" className="text-black">54. Clean Corporate</option>
              <option value="Template55" className="text-black">55. Ultimate Modern</option>
            </select>
            <button onClick={onClear} className="px-3 py-1.5 sm:px-6 sm:py-2 rounded-xl bg-white/50 text-gray-700 font-semibold border border-gray-200/50 hover:bg-white hover:shadow-sm transition-all text-xs sm:text-sm">Clear</button>
            <button onClick={onDownload} className="px-3 py-1.5 sm:px-6 sm:py-2 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 hover:scale-105 transition-all shadow-[0_4px_14px_rgba(37,99,235,0.3)] flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              Save
            </button>
          </>
        )}
        {currentView === 'templates' && (
          <button onClick={() => setCurrentView('editor')} className="px-4 py-1.5 sm:px-6 sm:py-2 rounded-xl bg-white/50 text-gray-800 font-bold hover:bg-white transition-all shadow-sm flex items-center gap-2 border border-gray-200/50 text-xs sm:text-sm">
            Editor <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </button>
        )}
        </div>
      </nav>

      {/* Support Us Modal */}
      {showSupport && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm" onClick={() => setShowSupport(false)}>
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden relative border border-slate-100 transform transition-all" onClick={e => e.stopPropagation()}>
            <div className="bg-gradient-to-br from-rose-500 to-pink-600 p-6 text-center text-white relative">
              <button onClick={() => setShowSupport(false)} className="absolute top-4 right-4 text-white/80 hover:text-white hover:bg-white/20 p-1.5 rounded-full transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
              <h3 className="text-2xl font-black mb-1">Support Our Work</h3>
              <p className="text-pink-100 text-sm font-medium">Your contribution helps us keep this tool free!</p>
            </div>
            <div className="p-8 text-center">
              <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 inline-block mb-6">
                <img src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=${upiId}&pn=Av_eSAFE`} alt="Donate QR Code" className="w-40 h-40 object-contain" />
              </div>
              <div className="mb-2 text-sm font-semibold text-slate-500 uppercase tracking-widest">Scan or Use UPI ID</div>
              <div className="flex items-center justify-center gap-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
                <span className="font-bold text-slate-800 tracking-wide select-all">{upiId}</span>
                <button onClick={handleCopy} className="p-1.5 bg-white rounded-lg text-slate-500 hover:text-blue-600 border border-slate-200 shadow-sm transition-colors" title="Copy UPI ID">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
