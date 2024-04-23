import Banner from "@/components/Banner";
import ExtraordinaryAwaits from "@/components/ExtraordinaryAwaits";
import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";
import Header from "@/components/Header";
import JoinOurBrands from "@/components/JoinOurBrands";
import Slider from "@/components/Slider";
import TuxedosExclusiveBenefits from "@/components/TuxedosExclusiveBenefits";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <ExtraordinaryAwaits />
      <TuxedosExclusiveBenefits />
      <Banner />
      <JoinOurBrands />
      <Slider />
      <GetInTouch />
      <Footer />
    </main>
  );
}
