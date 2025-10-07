import Footer from "@/Layout/Footer";
import Header from "@/Layout/Header";
import Services from "@/components/Services";
import About from "@/components/section/About";
import Cta from "@/components/section/Cta";
import Hero from "@/components/section/Hero";
import Partners from "@/components/section/Partners";
import Testimonial from "@/components/section/Testimonial";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <About />
      <Partners />
      <Testimonial />
      <Cta />
      <Footer />
    </>
  );
}
