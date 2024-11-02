import DiscussCard from "@/components/DiscussCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CaseStudies from "@/components/caseStudies";
import React from "react";

const OurWork: React.FC = () => {
  return (
    <div className="max-w-full">
      <Header />
      <CaseStudies />
      <DiscussCard
        title="Let's Discuss"
        subtitle="We'd love to hear from you!"
        buttonText="Get In Touch"
      />{" "}
      <Footer />
    </div>
  );
};

export default OurWork;
