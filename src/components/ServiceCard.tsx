import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ServiceCard: React.FC = () => {
  const serviceData = [
    {
      heading: "Mobile app development",
      description:
        "Our talented team harnesses the latest technologies, innovative design, and rigorous testing to create user-friendly apps. We optimize search engine visibility, ensure accessibility, and maximize performance.",
      servicesIcon: "/appDevelopmentIcon.svg",
      imageLeft: true,
    },
    {
      heading: "Web software development",
      description:
        "Unlock the power of data with our MIS software development services. We specialize in designing and delivering. Our portfolio features award-winning websites designed to give users the best experience possible while also meeting business goals.",
      servicesIcon: "/webSoftwareDevelopmentIcon.svg",
      imageLeft: false,
    },
    {
      heading: "System integration",
      description:
        "Our team specializes in API integration, data synchronization, and cloud migration, ensuring connectivity and optimized workflows. We create memorable enterprise and consumer products as well as provide comprehensive design systems for effortless product iteration.",
      servicesIcon: "/systemIntegrationIcon.svg",
      imageLeft: true,
    },
    {
      heading: "Data analysis & reporting",
      description:
        "Unlock the power of data with our MIS software development services, designed to meet business goals and improve user experience.",
      servicesIcon: "/dataAnalysisIcon.svg",
      imageLeft: false,
    },
    {
      heading: "Cloud based solutions",
      description:
        "We specialize in providing customized Cloud-based solutions tailored to your business needs. Our cloud solutions and unlock. Our team specializes in creating and representing digital brand.",
      servicesIcon: "/cloudBasedArchitectureIcon.svg",
      imageLeft: true,
    },
  ];

  return (
    <div className="flex justify-center items-center md:flex-row flex-col md:mx-5 mx-3">
      <div className="md:w-1/3 w-full">
        <h5 className="font-semibold lg:text-4xl md:text-2xl text-base pb-[5px] text-black">
          OUR SERVICES
        </h5>
        <p className="font-normal lg:text-xl md:text-base text-sm text-black text-left pb-[10px] ">
          At Rootit, we redefine the standard for excellence in IT services.
          Backed by a team of experts, we&apos;re your strategic partner in achieving
          digital dominance. Choose us to experience unparalleled innovation,
          personalized support, and a commitment to your success.
          <b> Explore How Our Services Can Elevate Your Journey!</b>
        </p>
      </div>

      <div className="md:w-2/3  w-full md:max-h-[500px] max-h-[300px] overflow-y-scroll">
        <AnimatePresence initial={false}>
          {serviceData.map((service, index) => (
            <motion.div
              key={index}
              className="bg-[#7f47bf] p-4 m-2 rounded-lg shadow-md flex flex-col items-start space-y-2 w-1/2 h-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <div className={`flex justify-between w-full mb-2`}>
                <img
                  src={service.servicesIcon}
                  alt=""
                  className="w-8 h-8 bg-white rounded-full p-1 mt-2 "
                />
                <img
                  src="/cardscroll/Roundcolortop.svg"
                  alt="Top Icon"
                  className=" md:w-25 w-18 md:h-25 h-18 md:-mt-4 -mt-3"
                />
              </div>
              <h6 className="text-xl font-bold text-white ">
                {service.heading}
              </h6>
              <p className="text-sm text-white text-left">{service.description}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ServiceCard;
