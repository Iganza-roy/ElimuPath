import { useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Loader2, Sparkles, MapPin, TrendingUp, DollarSign } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Cluster Mapping based on KUCCPS data
const clusters = [
  { id: 1, name: "Law", subjects: ["English", "Math", "History", "Best in Group 3"] },
  { id: 2, name: "Business, Hospitality & Related", subjects: ["Math", "English", "Kiswahili", "Best in Group 3"] },
  { id: 3, name: "Social Sciences, Media Studies, Fine Arts, Film, Animation, Graphics & Related", subjects: ["English", "Kiswahili", "Best in Group 3", "Best in Group 4/5"] },
  { id: 4, name: "Geosciences & Related", subjects: ["Math", "Geography", "Physics", "Chemistry"] },
  { id: 5, name: "Engineering, Engineering Technology & Related", subjects: ["Math", "Physics", "Chemistry", "Best in Group 4/5"] },
  { id: 6, name: "Architecture, Building Construction & Related", subjects: ["Math", "Physics", "Chemistry", "Best in Group 3"] },
  { id: 7, name: "Computing, IT & Related", subjects: ["Math", "Physics", "English", "Best in Group 3"] },
  { id: 8, name: "Agribusiness & Related", subjects: ["Math", "Biology", "Chemistry", "Agriculture"] },
  { id: 9, name: "General Science, Biological Sciences, Physics, Chemistry & Related", subjects: ["Biology", "Chemistry", "Math", "Physics"] },
  { id: 10, name: "Actuarial Science, Accountancy, Mathematics, Economics, Statistics & Related", subjects: ["Math", "English", "Kiswahili", "Best in Group 3"] },
  { id: 11, name: "Interior Design, Fashion Design, Textiles & Related", subjects: ["Art", "Home Science", "Math", "English"] },
  { id: 12, name: "Sport Science & Related", subjects: ["Biology", "Physical Education", "Math", "English"] },
  { id: 13, name: "Medicine, Health, Veterinary Medicine & Related", subjects: ["Biology", "Chemistry", "Math", "English/Kiswahili"] },
  { id: 14, name: "History, Archaeology & Related", subjects: ["History", "English", "Kiswahili", "Best in Group 3"] },
  { id: 15, name: "Agriculture, Animal Health, Food Science, Nutrition, Dietetics, Environmental Sciences, Natural Resources & Related", subjects: ["Biology", "Chemistry", "Agriculture", "Math"] },
  { id: 16, name: "Geography & Related", subjects: ["Geography", "Math", "English", "Kiswahili"] },
  { id: 17, name: "French & German", subjects: ["French/German", "English", "Kiswahili", "Math"] },
  { id: 18, name: "Music & Related", subjects: ["Music", "English", "Kiswahili", "Best in Group 3"] },
  { id: 19, name: "Education & Related", subjects: ["English", "Kiswahili", "Math", "Subject 1"] },
  { id: 20, name: "Religious Studies, Theology, Islamic Studies & Related", subjects: ["CRE/IRE/HRE", "English", "Kiswahili", "Math"] }
];

const generateRecommendations = async (data: any) => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return [
    {
      id: 1,
      course: `BSc. in ${data.clusterName}`,
      university: "University of Nairobi",
      location: "Nairobi",
      match: 98,
      reason: "Your subject scores are well above the requirements for this cluster.",
      tuition: "Ksh 28,000/sem (Govt Sponsored)"
    },
    {
      id: 2,
      course: `B.A. in ${data.clusterName}`,
      university: "JKUAT",
      location: "Juja",
      match: 92,
      reason: "Excellent match based on your strong performance in core subjects.",
      tuition: "Ksh 32,000/sem (Govt Sponsored)"
    }
  ];
};

const formSchema = z.object({
  meanGrade: z.string().min(1, "Mean grade is required"),
  clusterId: z.string().min(1, "Cluster selection is required"),
  scores: z.record(z.string().min(1, "Grade is required")),
  location: z.string().optional(),
});

export default function DetailsCollection() {
  const [results, setResults] = useState<any[] | null>(null);
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      meanGrade: "",
      clusterId: "",
      scores: {},
      location: "any",
    },
  });

  const selectedClusterId = form.watch("clusterId");
  const selectedCluster = useMemo(() => clusters.find(c => c.id.toString() === selectedClusterId), [selectedClusterId]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    const recs = await generateRecommendations({ ...values, clusterName: selectedCluster?.name });
    setResults(recs);
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-black mb-4">Elimu Path Recommendations</h1>
          <p className="text-black/60 max-w-xl mx-auto font-medium">
            Select your interest cluster and enter your KCSE grades to discover your best university matches.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card className="border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white">
              <CardHeader>
                <CardTitle>Academic Profile</CardTitle>
                <CardDescription>Enter your results accurately.</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="meanGrade"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mean Grade</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="border-2 border-black">
                                <SelectValue placeholder="Select Grade" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {["A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "D-", "E"].map((g) => (
                                <SelectItem key={g} value={g}>{g}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="clusterId"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Interest Cluster</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="border-2 border-black">
                                <SelectValue placeholder="Select Cluster" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {clusters.map((c) => (
                                <SelectItem key={c.id} value={c.id.toString()}>{c.name}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <AnimatePresence mode="wait">
                      {selectedCluster && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-4 pt-4 border-t-2 border-black"
                        >
                          <p className="text-xs font-bold uppercase tracking-wider text-black/60">Core Cluster Subjects</p>
                          <div className="grid grid-cols-1 gap-4">
                            {selectedCluster.subjects.map((subject) => (
                              <FormField
                                key={subject}
                                control={form.control}
                                name={`scores.${subject}`}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className="text-xs font-bold">{subject}</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                      <FormControl>
                                        <SelectTrigger className="border-2 border-black h-8">
                                          <SelectValue placeholder="Grade" />
                                        </SelectTrigger>
                                      </FormControl>
                                      <SelectContent>
                                        {["A", "A-", "B+", "B", "B-", "C+", "C", "C-"].map((g) => (
                                          <SelectItem key={g} value={g}>{g}</SelectItem>
                                        ))}
                                      </SelectContent>
                                    </Select>
                                  </FormItem>
                                )}
                              />
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <Button type="submit" className="w-full font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" disabled={loading}>
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Analyzing...
                        </>
                      ) : (
                        <>
                          <Sparkles className="mr-2 h-4 w-4" /> Get Matches
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            {!results && !loading && (
              <div className="h-full flex flex-col items-center justify-center p-8 border-4 border-black border-dashed rounded-xl bg-secondary/20 text-center">
                <div className="h-16 w-16 bg-primary rounded-full border-2 border-black flex items-center justify-center mb-4">
                  <Sparkles className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-black">Ready to Discover</h3>
                <p className="text-black/60 max-w-xs font-medium mt-2">Choose an interest cluster and enter your grades to see your personalized university matches.</p>
              </div>
            )}

            {results && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-primary" /> Top Matches for You
                </h2>
                <AnimatePresence>
                  {results.map((rec, i) => (
                    <motion.div
                      key={rec.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Card className="overflow-hidden border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h3 className="text-xl font-bold text-black">{rec.course}</h3>
                              <p className="text-black/60 font-bold flex items-center gap-1 mt-1">
                                {rec.university} <span className="text-black/20">•</span> <span className="text-sm font-medium flex items-center"><MapPin className="h-3 w-3 mr-1"/> {rec.location}</span>
                              </p>
                            </div>
                            <div className="bg-primary text-black px-4 py-2 rounded-full text-xs font-black border-2 border-black">
                              {rec.match}% Match
                            </div>
                          </div>
                          
                          <p className="text-black/80 text-sm mb-4 leading-relaxed bg-secondary/20 p-4 rounded-md border-l-4 border-black font-medium">
                            <span className="font-bold text-black block mb-1 underline">Why this fits:</span> {rec.reason}
                          </p>

                          <div className="flex items-center justify-between text-sm mt-4 pt-4 border-t-2 border-black">
                            <div className="flex items-center gap-2 text-black font-bold">
                              <DollarSign className="h-4 w-4 text-primary" /> {rec.tuition}
                            </div>
                            <Button variant="outline" size="sm" className="border-2 border-black font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">View Details</Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
