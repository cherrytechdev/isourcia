import Header from "@/Layout/Header";
import Services from "@/components/Services";
import About from "@/components/section/About";
import Hero from "@/components/section/Hero";
import Partners from "@/components/section/Partners";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <About />
      <Partners />
    </>
  );
}
