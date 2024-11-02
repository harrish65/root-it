
import CardScroller from "@/components/CardScroller";
import DiscussCard from "@/components/DiscussCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LogoScroller from "@/components/LogoScroller";
import ServiceCard from "@/components/ServiceCard";
import Testimonial from "@/components/Testimonial";
import React from "react";
export default function Home() {
  const Text = [
    { title: "50+", subTitle: "Projects Done" },
    { title: "18K+", subTitle: "Customer Visits" },
    { title: "50+", subTitle: "Happy Clients" },
    { title: "20K+", subTitle: "Working Hours" },
  ];
 
  return (
    <div>
      <Header />
      <LogoScroller Text={Text} />
      <section className="mt-10">
      <ServiceCard /> 
      </section>
      <section className="mt-10">
        <CardScroller  />
      </section>
      <section className="my-10">
        <Testimonial />
      </section>
      <DiscussCard
        title="Let's Discuss"
        subtitle="We'd love to hear from you!"
        buttonText="Get In Touch"
      />
      <Footer />
    </div>
  );
}
