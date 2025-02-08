'use client'
import Footer from "@/components/Footer";
import Carousel from "@/components/ItineraryDetail/Carousel";
import Overview from "@/components/ItineraryDetail/Overview";
import Pricing from "@/components/ItineraryDetail/Pricing";
import Summary from "@/components/ItineraryDetail/Summary";
import TopHeader from "@/components/ItineraryDetail/TopHeader";
import Navbar from "@/components/Navbar";

const ItineraryDetail = () => {
 

  return (
    <>
    <Navbar/>
    <div className="min-h-screen">
      <TopHeader/>
      <Carousel/>
      <Overview/>
      <Summary/>
      <Pricing/>
     
    </div>
    <Footer/>
    </>
  );
};

export default ItineraryDetail;
