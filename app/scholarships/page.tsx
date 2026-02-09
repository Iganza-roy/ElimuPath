"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { ExternalLink, Globe, Award, BookOpen } from "lucide-react";

export default function ScholarshipsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fffef3] text-black font-sans">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-16 space-y-16 animate-fade-in-up">
        
        {/* Title Section */}
        <section className="text-center max-w-4xl mx-auto space-y-6">
           <h1 className="text-4xl md:text-6xl font-black uppercase leading-tight">
              Scholarships & <br /><span className="text-gray-400">Certifications</span>
           </h1>
           <p className="text-xl font-medium leading-relaxed max-w-3xl mx-auto">
              Discover funding opportunities for your education and short professional courses to boost your skills. 
              These reliable programs can open doors to global education and career growth.
           </p>
        </section>

        {/* Scholarships Section */}
        <section>
           <div className="flex items-center gap-3 mb-8 border-b-4 border-black pb-4">
              <Globe className="text-[#cce023]" size={40} />
              <h2 className="text-3xl font-black uppercase">Scholarship Opportunities</h2>
           </div>
           
           <div className="grid md:grid-cols-2 gap-6">
              {SCHOLARSHIPS.map((item, idx) => (
                 <a 
                    key={idx}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[#cce023] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
                 >
                    <div className="flex justify-between items-start">
                       <div>
                          <h3 className="font-black text-lg group-hover:underline decoration-2">{item.name}</h3>
                          <p className="font-bold text-gray-600 mt-1 flex items-center gap-2">
                             <Award size={16} /> {item.host}
                          </p>
                       </div>
                       <ExternalLink className="shrink-0" size={20} />
                    </div>
                 </a>
              ))}
           </div>
        </section>

        {/* Certifications Section */}
        <section>
           <div className="flex items-center gap-3 mb-8 border-b-4 border-black pb-4">
              <BookOpen className="text-[#cce023]" size={40} />
              <h2 className="text-3xl font-black uppercase">Professional Courses & Certifications</h2>
           </div>
           
           <div className="grid md:grid-cols-3 gap-6">
              {CERTIFICATIONS.map((item, idx) => (
                 <div key={idx} className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col h-full">
                    <h3 className="font-black text-xl mb-4 bg-black text-white inline-block px-2 py-1 self-start uppercase">
                       {item.org}
                    </h3>
                    <p className="font-medium text-sm leading-relaxed text-gray-700 flex-1">
                       {item.courses}
                    </p>
                 </div>
              ))}
           </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

// Data Handling
// Defining consistent types for scholarship and certification data to ensure type safety.
type Scholarship = { name: string; host: string; link: string; };
type Certification = { org: string; courses: string; };

const SCHOLARSHIPS: Scholarship[] = [
  { name: "Stipendium Hungaricum Scholarship", host: "Hungary - Tempus Public Foundation", link: "https://stipendiumhungaricum.hu/" },
  { name: "Mastercard Foundation Scholars Program", host: "Various - Multiple Universities", link: "https://mastercardfdn.org/programs/mastercard-foundation-scholars-program/" },
  { name: "Türkiye Scholarships (Turkiye Burslari)", host: "Turkey - Türkiye Scholarships", link: "https://www.turkiyeburslari.gov.tr/" },
  { name: "Australia Awards Scholarships", host: "Australia - DFAT", link: "https://www.dfat.gov.au/people-to-people/australia-awards/australia-awards-scholarships" },
  { name: "Global Korea Scholarship (GKS)", host: "South Korea - NIIED", link: "https://www.studyinkorea.go.kr/en/sub/gks/all5.jsp" },
  { name: "KNB Scholarship", host: "Indonesia - Ministry of Education", link: "https://knb.kemdikbud.go.id/" },
  { name: "Wesleyan African Scholars Program", host: "United States - Wesleyan University", link: "https://www.wesleyan.edu/admission/undergraduate-admission/international/african-scholars.html" },
  { name: "Zawadi Africa Education Fund", host: "United States - Various Universities", link: "https://zawadiafrica.org/" },
  { name: "King-Morgridge Scholars Program", host: "United States - UW-Madison", link: "https://internationaldivision.wisc.edu/king-morgridge-scholars/" },
  { name: "Aga Khan Foundation Scholarship", host: "Various - Multiple Countries", link: "https://the.akdn.org/our-agencies/aga-khan-foundation/international-scholarship-programme" },
  { name: "Yale University Scholarships", host: "United States - Yale University", link: "https://finaid.yale.edu/costs-affordability/types-aid/scholarships-and-grants" },
  { name: "Chinese Government Scholarships", host: "China - Various Universities", link: "https://www.campuschina.org/scholarships/index.html" },
  { name: "DAAD Scholarships", host: "Germany - Various Universities", link: "https://www.daad.de/en/studying-in-germany/scholarships/daad-scholarships/" },
  { name: "Commonwealth Scholarships", host: "United Kingdom - Various", link: "https://cscuk.fcdo.gov.uk/scholarships/commonwealth-scholarships-developing-commonwealth-countries/" },
  { name: "Beit Trust Scholarships", host: "UK/South Africa - Various", link: "https://beittrust.org.uk/beit-trust-scholarships/" },
  { name: "Fulbright Foreign Student Program", host: "United States - Various", link: "https://foreign.fulbrightonline.org/" },
  { name: "University of Glasgow Excellence Award", host: "United Kingdom - U of Glasgow", link: "https://www.gla.ac.uk/scholarships/universityofglasgowafricanexcellenceaward/" },
  { name: "Konrad-Adenauer-Stiftung Scholarships", host: "Germany - Various", link: "https://www.kas.de/en/web/stipendium" },
  { name: "Eni-Oxford Africa Scholarships", host: "United Kingdom - Oxford", link: "https://www.sbs.ox.ac.uk/oxford-experience/scholarships-and-funding/eni-oxford-africa-scholarships" },
  { name: "University of Lincoln Africa Scholarship", host: "United Kingdom - U of Lincoln", link: "https://www.lincoln.ac.uk/studywithus/scholarshipsandbursaries/africascholarship/" },
];

const CERTIFICATIONS: Certification[] = [
  { org: "ALX Africa", courses: "Software Engineering, Data Analytics, AWS Cloud Practitioner, AI Career Essentials, Virtual Assistant, Graphic Design, Content Creation, Data Engineering" },
  { org: "Andela", courses: "Python Development, iOS Development, Android Development, QA Testing, DevOps, Machine Learning, Data Analytics, AI, Cloud Security, Azure Integration" },
  { org: "GOMYCODE", courses: "Full Stack Development, Data Science, UX/UI Design, Digital Marketing, Cybersecurity, Game Development, DevOps, Cloud Computing, Artificial Intelligence, Product Management" },
  { org: "AltSchool Africa", courses: "Software Engineering, Data Analysis, Product Management, Cybersecurity, Music Marketing & Promotion, Music Copyright & Publishing, Data Analytics with Excel, Launchpad Program" },
  { org: "WeThinkCode", courses: "Backend Development Tech Programme, Systems Development Qualification" },
  { org: "Umuzi", courses: "Data Engineering, Web Development, UX Design, Data Science, Full Stack Development" },
  { org: "HyperionDev", courses: "Software Engineering, Cyber Security, Web Development, Data Science, Digital Marketing, Artificial Intelligence Engineering, Project Management, Full Stack Web & Software Engineer" },
  { org: "MEST Africa", courses: "Software Development, Product Management, UX/UI Design, Entrepreneurship Training" },
  { org: "Zindi", courses: "Data Science Competitions, AI Hackathons (practical training through challenges)" },
  { org: "Data Science Nigeria", courses: "AI Fundamentals, Data Science Bootcamp, Machine Learning, Data Analytics" },
  { org: "Decagon Institute", courses: "Software Engineering Bootcamp" },
  { org: "Semicolon Africa", courses: "Software Development, Full Stack Engineering" },
  { org: "GetSmarter", courses: "Digital Marketing, Project Management, Leadership, Business Analytics, AI and Machine Learning" },
  { org: "YALI Regional Leadership Center", courses: "Leadership, Business & Entrepreneurship, Civic Leadership, Public Management" },
  { org: "Dot Campus", courses: "Frontend Development, UX/UI Design, Product Design, Backend Development" },
];
