"use client";

import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-[#fffef3] ">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black tracking-tighter">
          ElimuPath
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-bold">
          <Link href="/" className="hover:underline decoration-2 underline-offset-4">
            Home
          </Link>
          <Link href="/recommendations" className="hover:underline decoration-2 underline-offset-4">
            Recommendation
          </Link>
          <Link href="/guidance" className="hover:underline decoration-2 underline-offset-4">
            Guidance
          </Link>
          <Link href="/scholarships" className="hover:underline decoration-2 underline-offset-4">
            Scholarships
          </Link>

          <SignedIn>
            <Link href="/reviews" className="hover:underline decoration-2 underline-offset-4">
              Reviews
            </Link>
          </SignedIn>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <SignedOut>
            <div className="flex gap-4">
              <Link href="/sign-in">
                <button className="bg-[#fffef3] hover:bg-[#f6f6f6] text-black font-bold py-2 px-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                  Sign In
                </button>
              </Link>
              <Link href="/sign-up">
                <button className="bg-[#cce023] hover:bg-[#b5c71e] text-black font-bold py-2 px-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                  Sign Up
                </button>
              </Link>
            </div>
          </SignedOut>
          <SignedIn>
            <UserButton 
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10 border-2 border-black"
                }
              }}
            />
          </SignedIn>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#fffef3] border-t border-black p-4 flex flex-col gap-4 font-bold">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link href="/recommendations" onClick={() => setIsMenuOpen(false)}>Recommendation</Link>
          <Link href="/guidance" onClick={() => setIsMenuOpen(false)}>Guidance</Link>
          <Link href="/scholarships" onClick={() => setIsMenuOpen(false)}>Scholarships</Link>

          <SignedIn>
            <Link href="/reviews" onClick={() => setIsMenuOpen(false)}>Reviews</Link>
          </SignedIn>
          <div className="pt-4 border-t border-black/10">
            <SignedOut>
              <div className="flex flex-col gap-4">
                <Link href="/sign-in" onClick={() => setIsMenuOpen(false)}>
                  <button className="w-full bg-[#fffef3] text-black font-bold py-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    Sign In
                  </button>
                </Link>
                <Link href="/sign-up" onClick={() => setIsMenuOpen(false)}>
                  <button className="w-full bg-[#cce023] text-black font-bold py-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    Sign Up
                  </button>
                </Link>
              </div>
            </SignedOut>
            <SignedIn>
              <div className="flex items-center gap-4">
                <span>Account:</span>
                <UserButton />
              </div>
            </SignedIn>
          </div>
        </div>
      )}
    </header>
  );
}
