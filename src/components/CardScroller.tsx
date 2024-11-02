import React, { useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import {
  useScroll,
  useMotionValueEvent,
  useTransform,
  motion,
} from "framer-motion";

const CardScroller: React.FC = () => {
  const cardScroll = [
    {
      title: "Gate security control",
      content:
        "Fortify your facility's security with RootIT’s advanced gate security control project. This meticulously crafted solution represents a revolutionary leap forward in physical security. RootIT seamlessly integrates cutting-edge technology with sophisticated design principles to deliver an unparalleled level of access control. Whether you prioritize future-proof technology or unparalleled security measures, RootIT offers a secure and sophisticated approach, ensuring the ongoing safety and protection of your premises.",
      button1: "License Plate Recognition",
      button2: "Fully customization feature",
      button3: "",
      imgCard: "/cardscroll/Gate.svg",
    },
    {
      title: "Canteen management",
      content:
        "Unleash a revolution in employee and student well-being with our innovative canteen project! Our team is on a mission to transform the traditional dining experience. We create dynamic and vibrant spaces that foster social interaction and a positive work/study environment. Through thoughtful design, the project ensures a smooth and efficient dining experience, saving valuable time. But the true focus lies in quality. We prioritize delicious and healthy food options, catering to diverse dietary needs and preferences. The result? Happier, healthier, and more productive employees and students - a direct investment in your organization's overall success. Let's create a canteen experience that fuels potential and sparks joy! ",
      button1: "User friendly UI",
      button2: "Sustainability Initiatives",
      button3: "User freedom",
      imgCard: "/cardscroll/canteenimage.svg",
    },
    {
      title: "Hotel management",
      content:
        "Ditch the hostel hassles and enter the RootIT era! Our innovative hostel management project isn't just software, it's a total game-changer. We're talking streamlined operations for administrators, a user-friendly platform for residents to connect and manage their stay, and powerful tools for staff to keep things running smoothly. Imagine happier residents, a more efficient team, and administrators with superpowers (well, almost!). RootIT means smoother living conditions, better communication, and a more positive experience for everyone. Level up your hostel with RootIT and unlock the ultimate fun-filled stay! ",
      button1: "Modern UI",
      button2: "Fully responsive",
      button3: "Role based control",
      imgCard: "/cardscroll/Hostelimages.svg",
    },
  ];
  const targetRef = useRef(null);
  const { scrollY } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollY, "change", () => {
    console.log(scrollY.get());
  });
  const scale = useTransform(scrollY, [0, 700], [1, 0.8]);
  const opacity = useTransform(scrollY, [0, 700], [0.5, 1]);
  // const slowScrollY = useTransform(scrollY, [0, 500], [0, 200]); // Adjust [0, 200] as needed

  return (
    <div className="flex lg:flex-row flex-col justify-center bg-[#dad1f4] mx-3 px-8 p-5 gap-x-3 rounded-xl ">
       <motion.div className="lg:w-1/4 w-4/5" /*style={{ y: slowScrollY }}*/> 
        <h5 className="font-semibold lg:text-4xl md:text-2xl text-base pb-[5px] text-black  ">
          OUR WORK
        </h5>
        <p className="font-normal lg:text-xl  md:text-base text-sm text-black text-left pb-[10px]">
          See how we help our clients become the future best versions of
          themselves each and every day.
        </p>
        <a
          href="/work"
          className="hidden lg:flex justify-center items-center pb-[5px] border-[3px] border-[#6633a0] p-3 bg-transparent rounded-full w-fit gap-x-1"
        >
          Our Work Projects <FaArrowRight />
        </a>
      </motion.div>
      <motion.div
        ref={targetRef}
        className="relative flex flex-col bg-[#dad1f4] lg:w-3/4 w-full mb-3 lg:px-4  lg:pt-3 gap-3 rounded-2xl "
        style={{ scale, opacity }}
      >
        {cardScroll.map((card, index) => (
          <div
            key={index}
            className="w-full bg-[#7f47bf] p-4 rounded-lg space-y-4 text-justify sticky top-0"
            
          >
            {" "}
            <img src={card.imgCard} alt="Gate" className="w-full pb-3" />
            <h5 className="text-[#fdfdfe] font-medium md:text-3xl text-lg pb-3">
              {card.title}
            </h5>
            <p className="font-normal text-[#fdfdfe] lg:text-base text-xs pb-3">
              {card.content}
            </p>
            <div className="flex flex-wrap justify-between items-center gap-2">
              <div className="flex flex-wrap justify-center items-center gap-3 w-full md:w-fit">
                {card.button1 && (
                  <p className="bg-[#6633a0] text-[#fdfdfe] px-2 py-1 rounded">
                    {card.button1}
                  </p>
                )}
                {card.button2 && (
                  <p className="bg-[#6633a0] text-[#fdfdfe] px-2 py-1 rounded">
                    {card.button2}
                  </p>
                )}
                {card.button3 && (
                  <p className="bg-[#6633a0] text-[#fdfdfe] px-2 py-1 rounded">
                    {card.button3}
                  </p>
                )}
              </div>
              <div>
                <img
                  src="/cardscroll/Roundcolorbottom.svg"
                  alt="Roundcolorbottom"
                />
              </div>
            </div>
          </div>
        ))}
      </motion.div>
      <div className=" lg:hidden flex justify-center">
        <a
          href="/work"
          className=" lg:hidden flex justify-center items-center border-[3px] border-[#6633a0] p-3 bg-transparent rounded-full w-fit gap-x-1"
        >
          Our Work Projects <FaArrowRight />
        </a>
      </div>
    </div>
  );
};

export default CardScroller;
