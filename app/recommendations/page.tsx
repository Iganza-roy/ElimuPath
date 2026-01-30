"use client";

import { useState, useMemo } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CLUSTERS } from "../lib/clusters";
import { GRADE_POINTS, calculateClusterPoints, Course } from "../lib/kuccps";
import { getRecommendations } from "../actions/recommendations";
import { SimpleSelect } from "../components/ui-simple/Select";
import { Loader2, Sparkles, MapPin, TrendingUp, AlertCircle, CheckCircle, Info, ChevronDown, ChevronUp } from "lucide-react";
import { useAuth, SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Define Grade Options
const GRADES = ["A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "D-", "E"].map(g => ({ value: g, label: g }));

export default function RecommendationsPage() {
  const { isSignedIn } = useAuth();
  const router = useRouter();
  
  // State
  const [meanGrade, setMeanGrade] = useState("");
  const [clusterId, setClusterId] = useState("");
  const [subjectGrades, setSubjectGrades] = useState<Record<string, string>>({});
  const [careerGoals, setCareerGoals] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<{
    points: number;
    matches: Course[];
    reason?: string;
  } | null>(null);

  // Derived
  const selectedCluster = useMemo(() => CLUSTERS.find(c => c.id.toString() === clusterId), [clusterId]);

  // Handlers
  const handleScoreChange = (subject: string, grade: string) => {
    setSubjectGrades(prev => ({ ...prev, [subject]: grade }));
  };

  const handleGetMatches = async () => {
    // Validation
    if (!meanGrade || !clusterId || !selectedCluster) return;
    const requiredSubjects = selectedCluster.subjects;
    const allSubjectsFilled = requiredSubjects.every(s => subjectGrades[s]);
    
    if (!allSubjectsFilled) {
      alert("Please enter grades for all 4 core subjects.");
      return;
    }

    setLoading(true);
    
    try {
      const gradesArray = requiredSubjects.map(s => subjectGrades[s]);
      
      // Call Server Action
      const data = await getRecommendations(parseInt(clusterId), meanGrade, gradesArray);

      setResults({
        points: data.points,
        matches: data.matches,
      });
    } catch (error) {
      console.error(error);
      alert("Failed to fetch recommendations. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleAddToWishlist = (courseId: string) => {
    if (!isSignedIn) {
      // Redirect to login if not signed in (User requirement)
      // We can use the clerk redirect or router
      // Since we want to return here, maybe just push to sign-in?
      // Actually, standard Clerk behavior on protected route access is redirect.
      // But here we are on a public page clicking a button.
      // We'll force a redirect to sign-in page (which doesn't exist yet, we use Clerk's modal usually or hosted page).
      // Let's use router.push with a query param or just alert for now/open modal if possible.
      // Easiest: Redirect to /sign-in (Clerk hosted)
       window.location.href = "/sign-in?redirect_url=" + encodeURIComponent(window.location.href);
       return;
    }
    // TODO: Implement actual wishlist save to Firebase
    alert("Added to wishlist (Simulated)");
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fffef3] text-black font-sans">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-24">
        <div className="text-center mb-12">
           <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase">Find Your Recommendation</h1>
           <p className="max-w-xl mx-auto font-medium text-lg">
             Select your interest cluster and enter your grades. Our AI calculates your cluster points and finds your best university matches.
           </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
           
           {/* Left: Input Form */}
           <div className="md:col-span-5 lg:col-span-4 space-y-6">
              <div className="bg-white border-2 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-sm">
                  <h2 className="text-2xl font-black mb-6 flex items-center gap-2">
                    <TrendingUp /> Academic Profile
                  </h2>
                  
                  <div className="space-y-6">
                    <SimpleSelect 
                       label="KCSE Mean Grade" 
                       value={meanGrade} 
                       onChange={setMeanGrade} 
                       options={GRADES}
                       placeholder="Select Grade" 
                    />

                    <SimpleSelect 
                       label="Interest Cluster" 
                       value={clusterId} 
                       onChange={(val) => { setClusterId(val); setSubjectGrades({}); }} 
                       options={CLUSTERS.map(c => ({ value: c.id.toString(), label: `${c.id}. ${c.name}` }))}
                       placeholder="Select Cluster" 
                    />

                    {selectedCluster && (
                      <div className="space-y-4 pt-4 border-t-2 border-black animate-in fade-in slide-in-from-top-4">
                         <div className="flex items-center gap-2 text-sm font-bold bg-[#cce023] p-2 border border-black inline-block">
                            <Info size={16} /> Required Subjects for {selectedCluster.name.split(',')[0]}...
                         </div>
                         
                         <div className="grid grid-cols-1 gap-4">
                            {selectedCluster.subjects.map((subject, idx) => (
                              <SimpleSelect 
                                key={subject + idx}
                                label={subject}
                                value={subjectGrades[subject] || ""}
                                onChange={(val) => handleScoreChange(subject, val)}
                                options={GRADES}
                                placeholder="Select Grade"
                              />
                            ))}
                         </div>
                      </div>
                    )}

                    <div className="space-y-2">
                       <label className="text-sm font-bold">Career Goals (Optional)</label>
                       <textarea 
                          className="w-full min-h-[80px] border-2 border-black p-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#cce023]"
                          placeholder="e.g. I want to work in a rural hospital..."
                          value={careerGoals}
                          onChange={(e) => setCareerGoals(e.target.value)}
                       />
                    </div>

                    <button 
                      onClick={handleGetMatches}
                      disabled={loading}
                      className="w-full bg-[#cce023] text-black font-black py-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                       {loading ? <Loader2 className="animate-spin" /> : <Sparkles />} 
                       {loading ? "Calculating..." : "Get Matches"}
                    </button>
                  </div>
              </div>
           </div>

           {/* Right: Results Section */}
           <div className="md:col-span-7 lg:col-span-8">
              {!results && !loading && (
                 <div className="h-full min-h-[400px] flex flex-col items-center justify-center p-12 border-4 border-black border-dashed bg-[#fffef3] opacity-60 text-center">
                    <div className="w-20 h-20 bg-[#ffdac1] rounded-full border-2 border-black flex items-center justify-center mb-6">
                       <Sparkles size={40} />
                    </div>
                    <h3 className="text-2xl font-black mb-2">Ready to Discover</h3>
                    <p className="font-medium max-w-sm">Complete your profile on the left to unlock your personalized university recommendations.</p>
                 </div>
              )}

              {loading && (
                 <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center">
                    <Loader2 size={60} className="animate-spin text-[#cce023] mb-6" />
                    <h3 className="text-2xl font-black animate-pulse">Running Logic...</h3>
                    <p className="font-medium">Calculating cluster points and filtering cutoffs.</p>
                 </div>
              )}

              {results && (
                 <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8">
                    {/* Points Summary */}
                    <div className="bg-black text-[#fffef3] p-8 border-2 border-black shadow-[8px_8px_0px_0px_rgba(204,224,35,1)] flex flex-col md:flex-row items-center justify-between gap-6">
                       <div>
                          <h2 className="text-3xl font-black mb-2">Your Cluster Points</h2>
                          <p className="text-gray-400 font-medium">calculated using the official KUCCPS formula (48 pt scale)</p>
                       </div>
                       <div className="text-6xl font-black text-[#cce023]">
                          {results.points}
                       </div>
                    </div>

                    {/* Recommendations Grid */}
                    <div className="grid grid-cols-1 gap-6">
                       <h3 className="text-2xl font-black uppercase border-b-2 border-black pb-2">Top Matches</h3>
                       
                       {results.matches.length > 0 ? (
                          results.matches.map((course, i) => (
                             <div key={course.id} className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col md:flex-row gap-6 justify-between">
                                <div className="space-y-2 flex-1">
                                   <div className="flex items-center gap-2 mb-2">
                                      <span className="bg-[#ffdac1] text-xs font-bold px-2 py-1 border border-black uppercase">{course.type}</span>
                                      <span className="bg-gray-100 text-xs font-bold px-2 py-1 border border-black uppercase">{course.category}</span>
                                   </div>
                                   <h4 className="text-xl font-black">{course.name}</h4>
                                   <p className="font-bold text-gray-600 flex items-center gap-1">
                                      <MapPin size={16} /> {course.university}
                                   </p>
                                   <p className="text-sm font-medium bg-[#fffef3] p-3 border-l-4 border-[#cce023] mt-2">
                                      <span className="font-bold">Why it fits:</span> Your {results.points} points exceed the {course.cutoff} cutoff.
                                   </p>
                                </div>
                                <div className="flex flex-col items-end gap-4 min-w-[140px]">
                                   <div className="text-right">
                                      <div className="text-xs font-bold uppercase text-gray-500">Cutoff</div>
                                      <div className="text-2xl font-black">{course.cutoff}</div>
                                   </div>
                                   <button 
                                      onClick={() => handleAddToWishlist(course.id)}
                                      className="w-full md:w-auto px-4 py-2 bg-white border-2 border-black font-bold hover:bg-gray-50 text-sm"
                                   >
                                      Add to Wishlist
                                   </button>
                                   <a 
                                      href="https://students.kuccps.net/" 
                                      target="_blank" 
                                      rel="noopener"
                                      className="text-xs font-bold underline decoration-2 hover:text-[#cce023]"
                                   >
                                      View on KUCCPS
                                   </a>
                                </div>
                             </div>
                          ))
                       ) : (
                          <div className="p-8 border-2 border-black bg-red-50 text-center">
                             <AlertCircle size={48} className="mx-auto mb-4 text-red-500" />
                             <h4 className="text-xl font-black mb-2">No Direct Matches Found</h4>
                             <p className="font-medium mb-4">Your points ({results.points}) are below the cutoffs for the available courses in our database for this cluster.</p>
                             <div className="bg-white p-4 border border-black text-left mx-auto max-w-md">
                                <span className="font-bold block mb-2">Suggested Alternatives:</span>
                                <ul className="list-disc pl-5 space-y-1 text-sm font-medium">
                                   <li>Consider <strong>Diploma</strong> courses in this field (Lower entry requirements).</li>
                                   <li>Check <strong>TVET</strong> institutions for technical training.</li>
                                   <li>Try selecting a related cluster with lower requirements.</li>
                                </ul>
                             </div>
                          </div>
                       )}
                    </div>
                 </div>
              )}
           </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24 max-w-3xl mx-auto">
            <h2 className="text-3xl font-black uppercase text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
               <FAQItem question="How are cluster points calculated?" answer="We use the standard KUCCPS formula: WCP = (√(r/48 * t/84)) * 48, where 'r' is your cluster subject total and 't' is your aggregate points." />
               <FAQItem question="What if my points are below cutoffs?" answer="If you miss the degree cutoff, consider Diploma or Certificate courses. TVET institutions offer excellent practical skills and career pathways." />
               <FAQItem question="Can I change my choices?" answer="Yes, KUCCPS typically opens for a first revision and second revision period. You can adjust your choices during these windows." />
               <FAQItem question="How do safe matches work?" answer="We prioritize courses where your points are comfortably above the cutoff to maximize your chances of placement." />
               <FAQItem question="Is this official?" answer="No, ElimuPath is an advisory tool. Always confirm your final application details on the official student portal at students.kuccps.net." />
            </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
   const [isOpen, setIsOpen] = useState(false);
   return (
      <div className="border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
         <button 
            className="w-full flex items-center justify-between p-4 font-bold text-left hover:bg-gray-50 bg-[#fffef3]"
            onClick={() => setIsOpen(!isOpen)}
         >
            {question}
            {isOpen ? <ChevronUp /> : <ChevronDown />}
         </button>
         {isOpen && (
            <div className="p-4 border-t-2 border-black text-sm font-medium leading-relaxed">
               {answer}
            </div>
         )}
      </div>
   );
}
