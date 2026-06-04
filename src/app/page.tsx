import Navbar       from "@/components/sections/Navbar";
import Hero         from "@/components/sections/Hero";
import Steps        from "@/components/sections/Steps";
import Trust        from "@/components/sections/Trust";
import TasacionForm from "@/components/sections/TasacionForm";
import FAQ          from "@/components/sections/FAQ";
import Footer       from "@/components/sections/Footer";
import WhatsAppFab  from "@/components/ui/WhatsAppFab";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Steps />
        <Trust />
        <TasacionForm />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
