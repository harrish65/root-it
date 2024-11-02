import React from "react";

interface Service {
  heading: string;
  description: string;
  points: string[];
  servicesIcon: string;
  imageRight: boolean;
}

const ServicesGiven: React.FC = () => {
  const serviceData: Service[] = [
    {
      heading: "Mobile app development",
      description:
        "Our talented team harnesses the latest technologies, innovative design, and rigorous testing to create user-friendly apps. We optimize search engine visibility, ensure accessibility, and maximize performance.",
      points: [
        "Technology Consulting",
        "Architecture Planning",
        "Mobile App Development",
        "Frontend Web Development",
        "Backend Development & API Integration",
        "Emerging Tech (AI, AR/VR, Wearables, Web3)",
      ],
      servicesIcon: "/appDevelopmentIcon.svg",
      imageRight: true,
    },
    {
      heading: "Web software development",
      description:
        "Unlock the power of data with our MIS software development services. We specialize in designing and delivering. Our portfolio features award-winning websites designed to give users the best experience possible while also meeting business goals.",
      points: [
        "Content Strategy",
        "Web Design",
        "Interactive Experiences",
        "Content Production",
        "Frontend & Backend Development",
        "CMS Implementation",
      ],
      servicesIcon: "/webSoftwareDevelopmentIcon.svg",
      imageRight: false,
    },
    {
      heading: "System integration",
      description:
        "Our team specializes in API integration, data synchronization, and cloud migration, ensuring connectivity and optimized workflows. We create memorable enterprise and consumer products as well as provide comprehensive design systems for effortless product iteration.",
      points: [
        "Consumer & Enterprise Software",
        "User Research & Testing",
        "CX, UX & Interaction Design",
        "UI Design",
        "Motion Design",
        "Design Systems",
      ],
      servicesIcon: "/systemIntegrationIcon.svg",
      imageRight: true,
    },
    {
      heading: "Data analysis & reporting",
      description:
        "Unlock the power of data with our MIS software development services. We specialize in designing and delivering. Our portfolio features award-winning websites designed to give users the best experience possible while also meeting business goals.",
      points: [
        "Art Direction",
        "Illustration & Graphic Design",
        "Iconography",
        "Animation",
        "Photo & Video",
        "3D",
      ],
      servicesIcon: "/dataAnalysisIcon.svg",
      imageRight: false,
    },
    {
      heading: "Cloud based solutions",
      description:
        "We specialize in providing customized Cloud-based solutions tailored to your business needs. Our cloud solutions and unlock. Our team specializes in creating and representing digital brand.",
      points: [
        "Brand Strategy",
        "Brand Architecture",
        "Verbal Identity",
        "Visual Identity",
        "Brand Guidelines",
        "Brand Experiences",
      ],
      servicesIcon: "/cloudBasedArchitectureIcon.svg",
      imageRight: true,
    },
  ];

  return (
    <div className="my-10 lg:max-w-5xl mx-auto grid gap-8">
      {serviceData.map((service, index) => (
        <div
          key={index}
          className={`flex ${
            service.imageRight ? "flex-col-reverse" : "flex-col"
          } lg:flex-row
          lg:items-center items-start bg-white p-6 lg:justify-between`}
        >
          {/* Left Content */}
          {service.imageRight ? (
            <div className="flex-1 lg:w-1/2">
              <h5 className="lg:text-xl md:text-lg text-sm font-semibold mb-2">
                {service.heading}
              </h5>
              <p className="text-gray-600 mb-3 text-justify lg:text-lg md:text-base text-xs">
                {service.description}
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-1 lg:text-base md:text-sm text-xs">
                {service.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="flex-1 lg:w-1/2 flex  justify-start lg:items-center items-start  my-4 lg:my-0">
              <img
                src={service.servicesIcon}
                alt={`${service.heading} Icon`}
                className="w-1/2 lg:w-1/3 bg-[#dad1f4] lg:rounded-md lg:px-2 lg:py-1 rounded-full p-2"
              />
            </div>
          )}
          {service.imageRight ? (
            <div className="flex-1 lg:w-1/2 flex lg:justify-center justify-start lg:items-center items-start  my-4 lg:my-0">
              <img
                src={service.servicesIcon}
                alt={`${service.heading} Icon`}
                className="w-1/2 lg:w-1/3 bg-[#dad1f4] lg:rounded-md lg:px-2 lg:py-1 rounded-full p-2"
              />
            </div>
          ) : (
            <div className="flex-1 lg:w-1/2">
              <h5 className="lg:text-xl md:text-lg text-sm font-semibold mb-2">
                {service.heading}
              </h5>
              <p className="text-gray-600 mb-3 text-justify lg:text-lg md:text-base text-xs">
                {service.description}
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-1 lg:text-base md:text-sm text-xs">
                {service.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ServicesGiven;
