import { Hero } from "@/components/sections/hero";
import { Experience } from "@/components/sections/experience";
import { HowItWorks } from "@/components/sections/how-it-works";
import { CoreFeatures } from "@/components/sections/core-features";
import { SecurityPayment } from "@/components/sections/security-payment";
import { Gallery } from "@/components/sections/gallery";
import { SocialProof } from "@/components/sections/social-proof";
import { FinalCTA } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#0D0D2B]">
      <Hero />
      <Experience />
      <HowItWorks />
      <CoreFeatures />
      <SecurityPayment />
      <Gallery />
      <SocialProof />
      <FinalCTA />
      <Footer />
    </main>
  );
}
