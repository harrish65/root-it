import React from "react";

const RootitPrinciples = () => {
  const strategies = [
    {
      title: "Strategic Partnership",
      content:
        "We don't just build solutions, we become an extension of your team. Together, we craft a digital roadmap aligned with your long-term goals.",
      strategiesImg: "/strategicPartnershipIcon.svg",
    },
    {
      title: "Unwavering Helpfulness",
      content:
        "We provide ongoing support, clear communication, and expert guidance throughout every step of your digital journey.",
      strategiesImg: "/unwaveringHelpfulnessIcon.svg",
    },
    {
      title: "Revolutionary Thinking",
      content:
        "We challenge the status quo and embrace innovation. Our solutions push boundaries and redefine what's possible in the tech landscape.",
      strategiesImg: "/revolutionaryThinkingIcon.svg",
    },
    {
      title: "Disciplined Execution",
      content:
        "We combine creativity with a rigorous approach. We deliver projects on time, within budget, and exceeding your expectations.",
      strategiesImg: "/disciplinedExecutionIcon.svg",
    },
    {
      title: "Unmatched Expertise",
      content:
        "Our team is comprised of passionate tech savants with cutting-edge skills and a deep understanding of your industry's needs.",
      strategiesImg: "/unmatchedExpertiseIcon.svg",
    },
    {
      title: "Professionalism at its Core",
      content:
        "Transparency, integrity, and clear communication are the cornerstones of every interaction. We build trust and lasting relationships.",
      strategiesImg: "/professionalismIcon.svg",
    },
    {
      title: "Active Listening & Empathy",
      content:
        "We take the time to understand your unique challenges and goals. Our solutions are tailored to your specific needs and vision.",
      strategiesImg: "/activeListeningIcon.svg",
    },
  ];

  return (
    <div className="my-15 lg:max-w-6xl mx-auto px-4 lg:px-0">
      {/* Section Title */}
      <h5 className="text-lg lg:text-2xl font-normal text-left mb-8">
        OUR CORE PRINCIPLES
      </h5>

      {/* Grid Layout for Strategy */}
      {strategies.map((data,index)=>(
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 items-center max-w-5xl mx-auto mb-8" key={index}>
        {/* Image */}
        
        <div className="lg:col-span-1 flex justify-center lg:justify-start">
          <img
            src={data.strategiesImg}
            alt="strategiesImg"
            className="w-15 h-15 lg:w-20 lg:h-20 bg-[#dad1f4] rounded-full p-2"
          />
        </div>

        {/* Text */}
        <div className="lg:col-span-4 text-center lg:text-left">
          <p className="text-[#06040d] text-xl lg:text-2xl font-normal mb-1">
            {data.title}
          </p>
          <p className="text-[#505052] text-base lg:text-xl font-normal">
            {data.content}
          </p>
        </div>
         
      </div>
      ))

      
}
    </div>
  );
};

export default RootitPrinciples;
