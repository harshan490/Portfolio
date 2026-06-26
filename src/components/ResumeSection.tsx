import React from "react";

export default function ResumeSection() {
  return (
    <section id="resume" className="w-full py-32 bg-brand-black relative overflow-hidden flex flex-col items-center justify-center">
      {/* Background ambient glows for the liquid glass effect to pop */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-brand-papaya/20 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center">
        <h2 className="text-4xl md:text-7xl font-display font-bold uppercase mb-16 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-silver">
            Professional
          </span>{" "}
          <span className="text-brand-papaya">Resume</span>
        </h2>

        {/* Liquid Glass Container */}
        <div className="w-full max-w-5xl h-[80vh] min-h-[700px] rounded-[2.5rem] overflow-hidden glass-strong shadow-[0_20px_60px_rgba(0,0,0,0.5),_0_0_40px_rgba(255,255,255,0.1)] border border-white/20 relative backdrop-blur-2xl transition-transform duration-700 hover:scale-[1.01] p-4 md:p-8 lg:p-12 flex items-center justify-center group/glass">
          {/* Liquid highlight reflection */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none z-0" />
          
          {/* PDF Frame */}
          <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-white/10 bg-white/5">
            <iframe 
              src="/A_HARSHAN_RESUME.pdf#toolbar=0&navpanes=0&scrollbar=0" 
              className="w-full h-full rounded-2xl"
              title="A Harshan Resume PDF"
            />
          </div>

          {/* Floating Download Button */}
          <a
            href="/A_HARSHAN_RESUME.pdf"
            download
            className="absolute z-30 bottom-8 right-8 md:bottom-14 md:right-14 flex items-center gap-3 bg-brand-papaya text-brand-black px-6 py-3 rounded-full font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(255,107,53,0.5)] hover:shadow-[0_0_30px_rgba(255,107,53,0.8)] hover:-translate-y-1 hover:bg-white transition-all duration-300"
          >
            <span>Download</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="w-5 h-5"
            >
              <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
