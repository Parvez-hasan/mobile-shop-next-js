import CustomerReviews from "@/components/CustomerReviews";
import FeaturedMobiles from "@/components/FeaturedMobiles";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import NewsletterCTA from "@/components/NewsletterCTA";
import TopBrands from "@/components/TopBrands";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
 
    <>
      <Hero></Hero>
      <FeaturedMobiles></FeaturedMobiles>
      <TopBrands></TopBrands>
      <WhyChooseUs></WhyChooseUs>
      <HowItWorks></HowItWorks>
      <CustomerReviews></CustomerReviews>
      <NewsletterCTA></NewsletterCTA>
    </>

   
  );
}
