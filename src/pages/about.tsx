import DiscussCard from "@/components/DiscussCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import RootitPrinciples from "@/components/RootitPrinciples";
import React from "react";

const About: React.FC = () => {
  return (
    <div>
      <Header />
      <section className="my-14 lg:max-w-6xl mx-auto px-4 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Left Side Text */}
          <div className="lg:col-span-2 col-span-1">
            <p className="text-justify lg:max-w-full">
              Imagine a team of passionate young professionals, united by a fire
              to bridge market gaps and deliver world-class service. That's us!
              We're a dynamic group of experts, each wielding specialized skills
              to craft exceptional products. Our approach is refreshingly unique
              - we leverage cutting-edge technology to tackle your challenges
              head-on and deliver innovative solutions that perfectly align with
              your needs. We don't just build products, we build partnerships.
              We believe in collaborating closely with our clients to understand
              their vision and craft solutions that exceed expectations.
            </p>
          </div>

          {/* Right Side Image */}
          <div className="lg:col-span-1 col-span-1">
            <img
              src="/aboutSideImg.svg"
              alt="aboutSide"
              className="w-full h-auto object-contain mx-auto"
            />
          </div>

          {/* Bottom Text */}
          <div className="lg:col-span-3 col-span-1">
            <p className="text-justify w-full mt-5">
              Think of us as your secret weapon in the digital arena. Forget
              about the competition - with our expertise by your side, victory
              is practically guaranteed. Our diverse team brings a wealth of
              specialized skills to the table, ensuring exceptional product
              creation every time. We're more than just a team; we're an
              extension of your own, driving innovation and propelling your
              success.
            </p>
          </div>
        </div>
      </section>
      <img
        src="/TeamAbout.gif"
        alt="Team"
        className="w-full object-contain mb-10"
      />
      <RootitPrinciples />
      <DiscussCard
        title="Let's Discuss"
        subtitle="We'd love to hear from you!"
        buttonText="Get In Touch"
      />{" "}
      <Footer />
    </div>
  );
};

export default About;
