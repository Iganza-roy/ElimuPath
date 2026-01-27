import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-[#fffef3] py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-3xl font-black mb-4 text-[#cce023]">ElimuPath</h2>
          <p className="max-w-md text-gray-300">
            Guiding Kenyan graduates to their dream careers with AI-powered course recommendations and scholarship opportunities.
          </p>
        </div>
        
        <div>
          <h3 className="font-bold text-lg mb-4 text-[#ffdac1]">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-[#cce023]">Home</Link></li>
            <li><Link href="/guidance" className="hover:text-[#cce023]">Guidance</Link></li>
            <li><Link href="/scholarships" className="hover:text-[#cce023]">Scholarships</Link></li>
            <li><Link href="/contact" className="hover:text-[#cce023]">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4 text-[#ffdac1]">Resources</h3>
          <ul className="space-y-2">
            <li><a href="https://students.kuccps.net/" target="_blank" rel="noopener" className="hover:text-[#cce023]">KUCCPS Portal</a></li>
            <li><a href="https://www.helb.co.ke/" target="_blank" rel="noopener" className="hover:text-[#cce023]">HELB</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} ElimuPath. All rights reserved.
      </div>
    </footer>
  );
}
