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
          <div className="text-left order-1">
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-[0.9] tracking-tight">
              Find Your <br/>
              Path to <br/>
              <span className="text-[#cce023] text-stroke-black">University</span>
            </h1>
            
            <p className="text-xl font-medium mb-8 max-w-lg">
              Confused by cluster points? Don't miss your chance. Get fast, AI-powered guidance to match your grades with the perfect course.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/recommendations" className="bg-[#cce023] text-black text-lg font-bold py-4 px-8 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2">
                Get Recommendations <ArrowRight size={24} />
              </Link>
              <Link href="/guidance" className="bg-[#ffdac1] text-black text-lg font-bold py-4 px-8 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2">
                Ask AI Guide
              </Link>
            </div>
            
            {/* Countdown aligned */}
            <div className="flex justify-center md:justify-start">
               <div className="p-6 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block">
                  <div className="flex items-center gap-2 mb-2 justify-center">
                     <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"/>
                     <span className="font-black uppercase text-sm">KUCCPS Countdown</span>
                  </div>
                  <CountdownTimer />
               </div>
            </div>
          </div>
          
          <div className="relative flex justify-center order-2">
             {/* Placeholder for the generated image with float animation */}
             {/* <div className="relative w-full aspect-square max-w-md bg-[#cce023] border-2 border-black rounded-full overflow-hidden flex items-center justify-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] animate-float"> */}
                <Image 
                  src="/hero_student.png" 
                  alt="Student finding their path" 
                  width={500} 
                  height={500} 
                  className="object-cover animate-float"
                  priority
                />
             {/* </div> */}
          </div>
        </div>
      </section>

      {/* What the Data Tells Us Section (Data Bars) */}
      <section className="py-20 bg-white border-b-2 border-black">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-black uppercase mb-16 text-center">What the Data Tells Us</h2>
            
            <div className="max-w-5xl mx-auto space-y-8">
                <DataBar 
                    percentage="17%"
                    title="Students Who Did Not Apply"
                    description="42,868 eligible students missed out on placement."
                    widthClass="w-[40%]"
                    colorClass="bg-[#ffdac1]" // Peach for warning/did not apply
                />
                 <DataBar 
                    percentage="80%"
                    title="Students Successfully Placed"
                    description="194,372 students secured degree or diploma spots."
                    widthClass="w-[80%]"
                    colorClass="bg-[#cce023]" // Lime for success
                />
                 <DataBar 
                    percentage="83%"
                    title="Students Who Applied"
                    description="201,695 students took the initiative to apply."
                    widthClass="w-[83%]"
                    colorClass="bg-black text-[#fffef3]" // Black for applied (contrast)
                    textContrast
                />
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

function DataBar({ percentage, title, description, widthClass, colorClass, textContrast }: { percentage: string, title: string, description: string, widthClass: string, colorClass: string, textContrast?: boolean }) {
    return (
        <div className="flex items-center">
             <div className={`h-full min-h-[140px] md:min-h-[120px] rounded-r-3xl p-6 md:p-8 flex flex-col justify-center border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${widthClass} ${colorClass} transition-all`}>
                 <h3 className={`text-xl md:text-2xl font-black leading-tight mb-2 ${textContrast ? 'text-[#fffef3]' : 'text-black'}`}>
                    {title}
                 </h3>
                 <p className={`text-sm md:text-base font-medium leading-normal ${textContrast ? 'text-gray-300' : 'text-gray-800'}`}>
                    {description}
                 </p>
             </div>
             <div className="pl-4 md:pl-6 text-5xl md:text-7xl font-black text-black">
                {percentage}
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
