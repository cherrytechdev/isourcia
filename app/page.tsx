import Header from "@/Layout/Header";
import Services from "@/components/Services";
import About from "@/components/section/About";
import Hero from "@/components/section/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <About />
    </>
  );
}
