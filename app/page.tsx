import Header from "./components/Header";
import Footer from "./components/Footer";
import CountdownTimer from "./components/CountdownTimer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Compass, GraduationCap, CheckCircle, AlertCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#fffef3] text-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 border-b-2 border-black">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-[0.9] tracking-tight">
              Find Your <br/>
              Path to <br/>
              <span className="text-[#cce023] text-stroke-black">University</span>
            </h1>
            
            <p className="text-xl font-medium mb-8 max-w-lg">
              Confused by cluster points? Don't miss your chance. Get fast, AI-powered guidance to match your grades with the perfect course.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/recommendations" className="bg-[#cce023] text-black text-lg font-bold py-4 px-8 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2">
                Get Recommendations <ArrowRight size={24} />
              </Link>
              <Link href="/guidance" className="bg-[#ffdac1] text-black text-lg font-bold py-4 px-8 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2">
                Ask AI Guide
              </Link>
            </div>
            
            <div className="mt-12 p-6 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block">
               <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"/>
                  <span className="font-black uppercase text-sm">KUCCPS Countdown</span>
               </div>
               <CountdownTimer />
            </div>
          </div>
          
          <div className="relative flex justify-center">
             {/* Placeholder for the generated image - using a div for now if image not ready, creates a nice frame */}
             {/* <div className="relative w-full aspect-square max-w-md bg-[#cce023] border-2 border-black rounded-full overflow-hidden flex items-center justify-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"> */}
                <Image 
                  src="/hero_student.png" 
                  alt="Student finding their path" 
                  width={500} 
                  height={500} 
                  className="object-cover"
                  priority
                />
             {/* </div> */}
          </div>
        </div>
      </section>

      {/* Problem-Solution Section */}
      <section className="py-20 bg-white border-b-2 border-black">
        <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-black uppercase mb-12 text-center">Why ElimuPath?</h2>
                
                <div className="space-y-8">
                    <ProblemSolution 
                        problem="Overwhelmed by confusing cluster point calculations?"
                        solution="Our AI engine instantly calculates your weighted points for every cluster."
                    />
                    <ProblemSolution 
                        problem="Unsure which courses match your career interests?"
                        solution="Get personalized course recommendations aligned with your passions and grades."
                    />
                    <ProblemSolution 
                        problem="Limited access to professional career guidance?"
                        solution="Free, 24/7 AI career counseling to answer natural language questions."
                    />
                </div>
            </div>
        </div>
      </section>

      {/* Features Teaser */}
      <section className="py-20 bg-[#fffef3] border-b-2 border-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black uppercase mb-12 text-center">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Compass size={40} />}
              title="AI Recommendations"
              description="Input your grades and interests to get tailored course suggestions."
              link="/recommendations" // Linking to recommendations flow
              cta="Start Now"
              color="bg-[#cce023]"
            />
            <FeatureCard 
              icon={<BookOpen size={40} />}
              title="Career Guidance"
              description="Chat with our AI counselor to explore career paths and requirements."
              link="/guidance" // Linking to guidance chat
              cta="Chat with AI"
              color="bg-[#ffdac1]"
            />
            <FeatureCard 
              icon={<GraduationCap size={40} />}
              title="Scholarships"
              description="Discover funding opportunities to support your education."
              link="/scholarships"
              cta="Find Aid"
              color="bg-[#cce023]"
            />
          </div>
        </div>
      </section>

      {/* Testimonials / Stats */}
      <section className="py-20 bg-white border-b-2 border-black">
        <div className="container mx-auto px-4">
           <div className="grid md:grid-cols-2 gap-12">
              <div>
                  <h2 className="text-4xl font-black uppercase mb-8">Trusted by Students</h2>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                      <StatBox value="15k+" label="Career Matches" />
                      <StatBox value="50+" label="Campuses" />
                  </div>
                  <p className="text-lg font-medium">
                      Join thousands of Kenyan graduates making informed choices about their future.
                  </p>
              </div>
              <div className="space-y-6">
                  {/* Placeholder Review Cards */}
                  <ReviewCard 
                    quote="The AI guidance helped me realize I qualified for courses I hadn't even considered!"
                    author="Brian M."
                    role="KCSE 2024 Graduate"
                  />
                  <ReviewCard 
                    quote="Simple, fast, and very accurate with the cluster points. Highly recommend."
                    author="Sarah K."
                    role="Future Engineer"
                  />
                   <div className="text-right">
                      <Link href="/reviews" className="inline-block hover:underline font-bold decoration-2 underline-offset-4">
                          Read more reviews →
                      </Link>
                   </div>
              </div>
           </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 bg-[#cce023] text-center px-4 border-b-2 border-black">
          <h2 className="text-5xl md:text-6xl font-black mb-8 max-w-4xl mx-auto leading-tight">
              Ready to Shape Your Future?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
               <Link href="/recommendations" className="bg-black text-white text-xl font-bold py-4 px-10 border-2 border-transparent shadow-[6px_6px_0px_0px_rgba(255,255,255,0.5)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                  Get Recommendations
              </Link>
          </div>
          <p className="mt-12 text-sm font-bold opacity-75 max-w-2xl mx-auto">
              Disclaimer: ElimuPath is an independent advisory platform and is not affiliated with KUCCPS or the Ministry of Education. Always verify final details on the official student portal.
          </p>
      </section>

      <Footer />
    </main>
  );
}

function FeatureCard({ icon, title, description, link, cta, color }: { icon: any, title: string, description: string, link: string, cta: string, color: string }) {
  return (
    <div className={`p-8 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] transition-transform ${color} flex flex-col h-full`}>
      <div className="bg-white w-16 h-16 flex items-center justify-center border-2 border-black mb-6 rounded-full">
        {icon}
      </div>
      <h3 className="text-2xl font-black mb-3">{title}</h3>
      <p className="font-medium text-lg leading-relaxed mb-6 flex-1">
        {description}
      </p>
      <Link href={link} className="inline-flex items-center gap-2 font-bold underline decoration-2 underline-offset-4 hover:decoration-4">
         {cta} <ArrowRight size={18} />
      </Link>
    </div>
  );
}

function ProblemSolution({ problem, solution }: { problem: string, solution: string }) {
    return (
        <div className="flex flex-col md:flex-row gap-6 p-6 border-2 border-black hover:bg-[#fffef3] transition-colors">
            <div className="md:w-1/2 flex gap-4 items-start text-red-600">
                <AlertCircle className="shrink-0 mt-1" size={28} />
                <p className="text-lg font-bold italic">"{problem}"</p>
            </div>
            <div className="hidden md:block w-px bg-black opacity-20"></div>
            <div className="md:w-1/2 flex gap-4 items-start text-green-700">
                 <CheckCircle className="shrink-0 mt-1" size={28} />
                 <p className="text-lg font-medium">{solution}</p>
            </div>
        </div>
    )
}

function StatBox({ value, label }: { value: string, label: string }) {
    return (
        <div className="p-4 border-2 border-black bg-[#ffdac1] text-center">
            <div className="text-3xl font-black">{value}</div>
            <div className="text-sm font-bold uppercase">{label}</div>
        </div>
    )
}

function ReviewCard({ quote, author, role }: { quote: string, author: string, role: string }) {
    return (
        <div className="p-6 border-2 border-black bg-[#fffef3] rounded-bl-[3rem]">
            <p className="text-lg italic mb-4">"{quote}"</p>
            <div>
                <div className="font-black">{author}</div>
                <div className="text-xs uppercase font-bold text-gray-500">{role}</div>
            </div>
        </div>
    )
}
