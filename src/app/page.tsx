import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandIntro from "@/components/BrandIntro";
import SignatureDish from "@/components/SignatureDish";
import Menu from "@/components/Menu";
import WhyHouseOfDum from "@/components/WhyHouseOfDum";
import DumProcess from "@/components/DumProcess";
import OurStory from "@/components/OurStory";
import InstagramGallery from "@/components/InstagramGallery";
import OrderSection from "@/components/OrderSection";
import Footer from "@/components/Footer";
import StickyOrderBar from "@/components/StickyOrderBar";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BrandIntro />
        <SignatureDish />
        <Menu />
        <WhyHouseOfDum />
        <DumProcess />
        <OurStory />
        <InstagramGallery />
        <OrderSection />
      </main>
      <Footer />
      <StickyOrderBar />
    </>
  );
}
