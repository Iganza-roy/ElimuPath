import Link from "next/link";
import { ArrowRight, Linkedin, ExternalLink, AlertTriangle } from "lucide-react";

export default function Footer() {
  return (
    
    <footer className="bg-black text-[#fffef3] pt-20 pb-10 border-t-[10px] border-[#cce023]">
      
      <div className="container mx-auto px-4">
        
        {/* Main Grid */}
        <div className="grid md:grid-cols-4 gap-12 mb-10">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <Link href="/" className="inline-block">
              <h2 className="text-4xl font-black text-[#fffef3] tracking-tighter">
                Elimu<span className="text-[#cce023]">Path</span>
              </h2>
            </Link>
            <p className="max-w-md text-gray-400 font-medium text-lg leading-relaxed">
              Democratizing career guidance for every Kenyan student. We use data and AI to help you make informed decisions about your future.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-[#cce023] uppercase tracking-widest">Navigation</h3>
            <ul className="space-y-4 font-medium text-gray-300">
              <li><Link href="/" className="hover:text-white hover:translate-x-1 transition-all inline-block">Home</Link></li>
              <li><Link href="/guidance" className="hover:text-white hover:translate-x-1 transition-all inline-block">Guidance & Resources</Link></li>
              <li><Link href="/recommendations" className="hover:text-white hover:translate-x-1 transition-all inline-block">Course Recommender</Link></li>
              <li><Link href="/scholarships" className="hover:text-white hover:translate-x-1 transition-all inline-block">Scholarships</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-[#cce023] uppercase tracking-widest">Official Links</h3>
            <ul className="space-y-4 font-medium text-gray-300">
              <li><a href="https://students.kuccps.net/" target="_blank" rel="noopener" className="hover:text-white flex items-center gap-2 group"><ExternalLink size={14} className="group-hover:text-[#cce023]" /> KUCCPS Portal</a></li>
              <li><a href="https://www.kuccps.net/" target="_blank" rel="noopener" className="hover:text-white flex items-center gap-2 group"><ExternalLink size={14} className="group-hover:text-[#cce023]" /> KUCCPS Website</a></li>
              <li><a href="https://www.education.go.ke/" target="_blank" rel="noopener" className="hover:text-white flex items-center gap-2 group"><ExternalLink size={14} className="group-hover:text-[#cce023]" /> Ministry of Education</a></li>
              <li><a href="https://www.helb.co.ke/" target="_blank" rel="noopener" className="hover:text-white flex items-center gap-2 group"><ExternalLink size={14} className="group-hover:text-[#cce023]" /> HELB</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter & Disclaimer Split */}
        <div className="grid md:grid-cols-2 gap-8 border-t border-gray-800 pt-12 items-start">
           
           {/* Newsletter CTA */}
           <div className="bg-[#111] border border-gray-800 p-8 rounded-none relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#cce023] opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity"></div>
              <h4 className="font-black text-2xl mb-2 text-white">Stay Ahead of the Curve</h4>
              <p className="text-gray-400 mb-6">Get weekly updates on applications, scholarship deadlines, and career trends directly on your feed.</p>
              <a 
                href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7426612737658585088" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0077b5] hover:bg-[#006396] text-white font-bold py-3 px-6 transition-all"
              >
                <Linkedin size={20} /> Subscribe on LinkedIn
              </a>
              
           </div>

           {/* Disclaimer */}
           <div className="space-y-4">
              <div className="flex items-start gap-4 text-amber-500/80 p-4 border border-amber-900/30 bg-amber-900/10">
                 <AlertTriangle className="shrink-0 mt-1" />
                 <p className="text-sm font-medium leading-relaxed text-gray-300">
                    <span className="text-amber-500 font-bold uppercase block text-xs mb-1">Important Disclaimer</span>
                    ElimuPath is an independent career guidance platform and is <strong>NOT affiliated</strong> with KUCCPS, the Ministry of Education, or any government body. 
                    <br /><br />
                    Use our tools for estimation and guidance only. Always verify final cluster weights, requirements, and placement details on the official <a href="https://students.kuccps.net" target="_blank" className="underline hover:text-[#cce023]">KUCCPS Student Portal</a>.
                 </p>
              </div>
           </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-900 text-center text-sm text-gray-600 font-medium">
          <p>© {new Date().getFullYear()} ElimuPath. Built for Kenyan Students 🇰🇪</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ icon, href, label }: { icon: React.ReactNode, href: string, label: string }) {
   return (
      <a 
         href={href} 
         target="_blank" 
         rel="noopener noreferrer" 
         aria-label={label}
         className="w-10 h-10 bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-[#cce023] hover:text-black transition-colors"
      >
         {icon}
      </a>
   );
}
