import { Hero }            from "@/components/sections/Hero";
import { CredentialsBar }  from "@/components/sections/CredentialsBar";
import { Capabilities }    from "@/components/sections/Capabilities";
import { AboutSummary }    from "@/components/sections/AboutSummary";
import { Testimonial }     from "@/components/sections/Testimonial";
import { WhyTTK }          from "@/components/sections/WhyTTK";
import { CTABanner }       from "@/components/sections/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CredentialsBar />
      <Capabilities />
      <AboutSummary />
      <Testimonial />
      <WhyTTK />
      <CTABanner />
    </>
  );
}
