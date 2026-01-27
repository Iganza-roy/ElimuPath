import Header from "./components/Header";
import Footer from "./components/Footer";
import CountdownTimer from "./components/CountdownTimer";
import Link from "next/link";
import { ArrowRight, BookOpen, Compass, GraduationCap } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center pt-32 pb-16 px-4 text-center bg-[#fffef3] relative overflow-hidden">
        {/* Abstract shapes/decorations could go here */}
        
        <div className="max-w-4xl z-10">
          <div className="mb-8 inline-block bg-[#ffdac1] px-4 py-1 rounded-full border-2 border-black font-bold text-sm uppercase tracking-wide transform -rotate-2">
            For KCSE 2025/2026 Graduates
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Find Your Path to <br/>
            <span className="text-[#cce023] text-stroke-black">University</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-medium mb-10 max-w-2xl mx-auto">
            Get personalized course recommendations based on your grades and interests, powered by AI.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-16">
            <Link href="/recommendations" className="bg-[#cce023] text-black text-lg font-bold py-4 px-8 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all flex items-center gap-2">
              Start Recommendation <ArrowRight size={24} />
            </Link>
          </div>

          <div className="bg-white border-2 border-black p-8 max-w-2xl mx-auto shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-xl font-black uppercase mb-4">KUCCPS Opening Countdown</h3>
            <CountdownTimer />
            <p className="mt-4 text-sm font-bold text-gray-500">Estimated Opening: Mid-April 2026</p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white border-t-2 border-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Compass size={40} />}
              title="AI Recommendations"
              description="Input your grades and interests to get tailored course suggestions."
              color="bg-[#cce023]"
            />
            <FeatureCard 
              icon={<BookOpen size={40} />}
              title="Career Guidance"
              description="Chat with our AI counselor to explore career paths and requirements."
              color="bg-[#ffdac1]"
            />
            <FeatureCard 
              icon={<GraduationCap size={40} />}
              title="Scholarships"
              description="Discover funding opportunities to support your education."
              color="bg-[#cce023]"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function FeatureCard({ icon, title, description, color }: { icon: any, title: string, description: string, color: string }) {
  return (
    <div className={`p-8 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] transition-transform ${color}`}>
      <div className="bg-white w-16 h-16 flex items-center justify-center border-2 border-black mb-6 rounded-full">
        {icon}
      </div>
      <h3 className="text-2xl font-black mb-3">{title}</h3>
      <p className="font-medium text-lg leading-relaxed border-t-2 border-black pt-4">
        {description}
      </p>
    </div>
  );
}
