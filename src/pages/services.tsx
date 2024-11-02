import DiscussCard from "@/components/DiscussCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LogoScroller from "@/components/LogoScroller";
import ServicesGiven from "@/components/ServicesGiven";
import React from "react";

const OurServices: React.FC = () => {
  const logos: string[] = [
   "/Logos/AgularimagesLogo.svg",
   "/Logos/canvaIconLogo.svg",
   "/Logos/ExcelimagesLogos.svg",
   "/Logos/figmaimageLogo.svg",
   "/Logos/githubIconLogo.svg",
   "/Logos/msTeamsIconLogo.svg",
   "/Logos/reactimageLogo.svg",
   "/Logos/AgularimagesLogo.svg",
   "/Logos/vsCodeIconLogo.svg",
  ];

  return (
    <div>
      <Header />
      <ServicesGiven />
      <LogoScroller logos={logos} />
      <DiscussCard
        title="Let's Discuss"
        subtitle="We'd love to hear from you!"
        buttonText="Get In Touch"
      />
      <Footer />
    </div>
  );
};

export default OurServices;
