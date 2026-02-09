"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { GraduationCap, BookOpen, Compass, AlertTriangle, Lightbulb, ExternalLink, ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function GuidancePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fffef3] text-black font-sans">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-16 space-y-24 animate-fade-in-up">
        
        {/* 1. Orientation & Context */}
        <section className="text-center max-w-4xl mx-auto space-y-6">
           <div className="inline-block bg-[#ffdac1] border-2 border-black px-4 py-1 font-black text-xs uppercase tracking-widest mb-4">
              Orientation
           </div>
           <h1 className="text-5xl md:text-7xl font-black uppercase leading-tight">
              Guidance & <br /><span className="text-gray-400">Resources</span>
           </h1>
           <p className="text-xl font-medium leading-relaxed max-w-2xl mx-auto">
              Your neutral, factual guide to navigating the Kenyan education system post-KCSE. 
              ElimuPath clarifies the process, but <span className="underline decoration-[#cce023] decoration-4">KUCCPS</span> makes the final placement.
           </p>
        </section>

        {/* 2. Post-KCSE Pathways */}
        <section>
           <h2 className="text-3xl font-black uppercase mb-12 flex items-center gap-3">
              <Compass className="text-[#cce023]" size={32} /> Your Pathways
           </h2>
           <div className="grid md:grid-cols-3 gap-8">
              <PathwayCard 
                 title="University Degree"
                 grade="C+ and Above"
                 description="Academic programs focusing on theory, research, and professional skills. Ideal for careers like Medicine, Engineering, Law, and Academia."
                 icon={<GraduationCap size={40} />}
              />
              <PathwayCard 
                 title="Diploma (TVET/College)"
                 grade="C- and Above"
                 description="Technical and vocational training emphasizing practical skills and industry readiness. Great for Technology, Hospitality, and specialised trades."
                 icon={<BookOpen size={40} />}
              />
              <PathwayCard 
                 title="Certificate & Artisan"
                 grade="D+ and Below"
                 description="Hands-on skills training for immediate employment or self-employment. A solid foundation that allows for progression to Diploma levels later."
                 icon={<Lightbulb size={40} />}
              />
           </div>
        </section>

        {/* 3. How Selection Works */}
        <section className="bg-white border-2 border-black p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
           <h2 className="text-3xl font-black uppercase mb-8">How KUCCPS Works</h2>
           <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 font-medium text-lg">
                 <p>
                    The <strong>Kenya Universities and Colleges Central Placement Service (KUCCPS)</strong> is the government body that places students into institutions.
                 </p>
                 <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                       <CheckCircle className="shrink-0 mt-1 text-[#cce023]" />
                       <span><strong>Cluster Points:</strong> Your 4-subject weighted score calculated against the competition.</span>
                    </li>
                    <li className="flex items-start gap-3">
                       <CheckCircle className="shrink-0 mt-1 text-[#cce023]" />
                       <span><strong>Subject Requirements:</strong> Minimum grades you must have in specific subjects (e.g., C+ in Biology) to even be considered.</span>
                    </li>
                    <li className="flex items-start gap-3">
                       <CheckCircle className="shrink-0 mt-1 text-[#cce023]" />
                       <span><strong>Cutoffs Vary:</strong> The cutoff points change every year based on how many students apply and their performance.</span>
                    </li>
                 </ul>
              </div>
              <div className="bg-[#f0f0f0] border-2 border-black p-6 flex flex-col items-center justify-center text-center space-y-4 h-full min-h-[300px]">
                 <div className="w-full max-w-[200px] h-4 bg-gray-300 rounded-full overflow-hidden border border-black">
                    <div className="w-[70%] h-full bg-[#cce023]"></div>
                 </div>
                 <p className="text-sm font-bold uppercase tracking-widest text-gray-500">Visualization</p>
                 <h3 className="text-2xl font-black">Supply vs. Demand</h3>
                 <p className="text-sm px-8">High demand courses (like CS or Med) have higher cutoffs because more 'A' students apply for limited slots.</p>
              </div>
           </div>
        </section>

        {/* 4. Decision Making (Accordion) */}
        <section>
           <h2 className="text-3xl font-black uppercase mb-12">Decision Framework</h2>
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <DecisionCard title="Interests" content="What do you enjoy doing in your free time? What subjects did you love?" />
              <DecisionCard title="Strengths" content="Which tasks come naturally to you? Where do you consistently perform well?" />
              <DecisionCard title="Market" content="Is there demand for this skill? What is the future outlook of the industry?" />
              <DecisionCard title="Cost & Location" content="Can you afford the fees (Cluster 3 vs Gov sponsored)? Are you okay moving far from home?" />
           </div>
        </section>

        {/* 5. Common Pitfalls */}
        <section>
          <div className="bg-red-50 border-2 border-black p-8 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                <AlertTriangle size={200} />
             </div>
             <h2 className="text-3xl font-black uppercase mb-8 flex items-center gap-3 text-red-600">
                <AlertTriangle /> Common Pitfalls
             </h2>
             <div className="grid md:grid-cols-2 gap-8 relative z-10">
                <PitfallItem title="Following the Crowd" text="Choosing a course just because your friends did. Stick to YOUR unique strengths." />
                <PitfallItem title="Ignoring Cluster Subjects" text="Applying for a course where you missed a subject requirement (e.g. C plain in Math when C+ is needed)." />
                <PitfallItem title="Waiting Until Deadline" text="KUCCPS portals can jam. Research early and submit choices well before the deadline." />
                <PitfallItem title="Overlooking TVETs" text="Ignoring diploma courses that often lead to faster employment than some general degrees." />
             </div>
          </div>
        </section>

        {/* 6. Career Awareness */}
        <section>
           <h2 className="text-3xl font-black uppercase mb-12">Explore Domains</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {DOMAINS.map((d) => (
                 <div key={d} className="p-6 border-2 border-black bg-white hover:bg-[#cce023] transition-colors cursor-default">
                    <h3 className="font-black text-lg uppercase">{d}</h3>
                 </div>
              ))}
           </div>
        </section>

        {/* 7. Application Guidance */}
        <section className="bg-black text-[#fffef3] p-12 border-2 border-black shadow-[8px_8px_0px_0px_rgba(204,224,35,1)]">
           <h2 className="text-3xl font-black uppercase mb-8 text-[#cce023]">The Application Journey</h2>
           <div className="space-y-8">
              <Step number="1" title="First Revision" text="Usually happens shortly after KCSE results. You can revise choices made in school." />
              <Step number="2" title="Second Revision" text="If you didn't get placed in round 1, you get another chance to pick from remaining slots." />
              <Step number="3" title="Placement Announcement" text="KUCCPS announces final placements. You will confirm via their portal or SMS." />
              <Step number="4" title="Inter-Institution Transfer" text="If unsatisfied, you can apply to transfer later, subject to approval by both institutions." />
           </div>
        </section>

        {/* 8. AI Assistant Intro */}
        <section className="text-center py-12">
            <h2 className="text-3xl font-black uppercase mb-4">Have Questions?</h2>
            <p className="mb-6 text-lg font-medium">Our AI assistant is here to explain terms, processes, and options 24/7.</p>
            <button 
               onClick={() => {
                  const toggle = document.getElementById('ai-chatbot-toggle');
                  if (toggle) toggle.click();
               }}
               className="inline-flex items-center gap-2 bg-[#cce023] text-black px-8 py-3 font-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
               Open Chat Assistant <ArrowRight size={20} />
            </button>
        </section>

        {/* 9. Scholarships */}
        <section className="border-t-4 border-black pt-16">
           <div className="bg-[#e0f7fa] border-2 border-black p-8 text-center md:text-left md:flex items-center justify-between gap-8">
              <div>
                 <h2 className="text-2xl font-black uppercase mb-2">Need Financial Support?</h2>
                 <p className="font-medium">
                    HELB, Government Scholarships, and Private funding are available. Don't let fees stop your dream.
                 </p>
              </div>
              <Link href="/scholarships" className="mt-4 md:mt-0 px-6 py-3 bg-white border-2 border-black text-black font-bold hover:bg-[#cce023] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] transition-all">
                 View Scholarships
              </Link>
           </div>
        </section>
        
        {/* 10. Trusted Resources */}
        <section>
           <h2 className="text-xl font-black uppercase mb-6">Official Resources & Downloads</h2>
           <div className="space-y-6">
              <div className="flex flex-wrap gap-4">
                 <ResourceLink name="KUCCPS Official Website" url="https://kuccps.net/" />
                 <ResourceLink name="Students Portal (KUCCPS)" url="https://students.kuccps.net" />
                 <ResourceLink name="HELB Portal" url="https://studentportal.helb.co.ke" />
                 <ResourceLink name="Education Ministry" url="https://education.go.ke" />
              </div>
              
              <div>
                 <h3 className="text-lg font-bold mb-3 uppercase">Essential Downloads (2025/2026)</h3>
                 <div className="flex flex-wrap gap-4">
                    <ResourceLink name="Degree Programmes" url="/DEGREE_PROGRAMMES.pdf" />
                    <ResourceLink name="Cluster Subjects" url="/DEGREE_CLUSTER_SUBJECTS.pdf" />
                 </div>
              </div>
           </div>
        </section>
        
        {/* 11. Navigation */}
        <section className="text-center py-12">
           <Link href="/recommendations" className="inline-flex items-center gap-2 text-xl font-black bg-black text-white px-12 py-5 border-2 border-transparent hover:bg-[#cce023] hover:text-black hover:border-black transition-all">
              Try Recommendations Tool <ArrowRight />
           </Link>
        </section>

      </main>

      <Footer />
    </div>
  );
}

// Sub-components for Cleaner Code

function PathwayCard({ title, grade, description, icon }: { title: string, grade: string, description: string, icon: React.ReactNode }) {
   return (
      <div className="bg-white border-2 border-black p-8 flex flex-col gap-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] h-full">
         <div className="w-16 h-16 bg-[#cce023] rounded-full border-2 border-black flex items-center justify-center">
            {icon}
         </div>
         <div>
            <span className="bg-black text-white text-xs font-bold px-2 py-1 uppercase">{grade}</span>
            <h3 className="text-2xl font-black mt-2 leading-none">{title}</h3>
         </div>
         <p className="font-medium text-sm leading-relaxed text-gray-600 border-t-2 border-gray-100 pt-4 mt-auto">
            {description}
         </p>
      </div>
   );
}

function DecisionCard({ title, content }: { title: string, content: string }) {
   const [open, setOpen] = useState(false);
   return (
      <div 
         className="border-2 border-black bg-white cursor-pointer hover:bg-gray-50 transition-colors"
         onClick={() => setOpen(!open)}
      >
         <div className="p-6 flex justify-between items-center">
            <h3 className="font-black text-lg uppercase">{title}</h3>
            <span className="font-bold text-2xl">{open ? "-" : "+"}</span>
         </div>
         {open && (
            <div className="p-6 pt-0 font-medium text-sm text-gray-600 animate-in slide-in-from-top-2">
               {content}
            </div>
         )}
      </div>
   );
}

function PitfallItem({ title, text }: { title: string, text: string }) {
   return (
      <div className="bg-white border-2 border-black p-4 flex gap-4">
         <div className="shrink-0 pt-1">
            <AlertTriangle className="text-red-500" size={24} />
         </div>
         <div>
            <h3 className="font-black uppercase text-sm mb-1">{title}</h3>
            <p className="text-sm font-medium">{text}</p>
         </div>
      </div>
   );
}

function Step({ number, title, text }: { number: string, title: string, text: string }) {
   return (
      <div className="flex gap-6 items-start">
         <div className="w-12 h-12 shrink-0 bg-[#fffef3] text-black font-black text-xl border-2 border-[#fffef3] rounded-full flex items-center justify-center">
            {number}
         </div>
         <div>
            <h3 className="text-xl font-bold uppercase">{title}</h3>
            <p className="text-gray-400 font-medium mt-1">{text}</p>
         </div>
      </div>
   );
}

function ResourceLink({ name, url }: { name: string, url: string }) {
   return (
      <a 
         href={url} 
         target="_blank" 
         rel="noopener noreferrer" 
         className="flex items-center gap-2 px-4 py-2 border-2 border-black font-bold hover:bg-[#cce023] bg-white transition-colors"
      >
         {name} <ExternalLink size={14} />
      </a>
   );
}

const DOMAINS = [
   "Health & Medicine", "Engineering & Tech", "Business & Economics", "Law & Governance", 
   "Computing & IT", "Media & Arts", "Agriculture & Food", "Education & Teaching"
];
