"use client";

import { About } from "@/components/About";
import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Newsletter } from "@/components/Newsletter";
import { Pricing } from "@/components/Pricing";
import { Services } from "@/components/Services";
import { Sponsors } from "@/components/Sponsors";
import { Team } from "@/components/Team";
import { Testimonials } from "@/components/Testimonials";

export default function Page() {
  return (
    <div className="h-screen flex flex-col">
      <main className="flex-1 overflow-y-auto p-4 md:p-6">
        <Hero />
        <HowItWorks />
        <Features />
        <Services />
        <Testimonials />
        <Team />
        <Pricing />
        <Sponsors />
        <About />
        <Newsletter />
        <FAQ />
      </main>
    </div>
  );
}
