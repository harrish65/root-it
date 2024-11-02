import React from "react";

// Define the shape of the Text objects
interface TextItem {
  title: string;
  subTitle: string;
}

interface LogosProps {
  logos?: string[];
  Text?: TextItem[]; 
}

const LogoScroller: React.FC<LogosProps> = ({ logos, Text }) => {
  return (
    <div className="logo-scroller overflow-hidden bg-[#dad1f4]">
      {logos && (
        <div className="logo-track flex gap-8 animate-scroll">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index + 1}`}
              className="h-16 w-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
            />
          ))}

          {logos.map((logo, index) => (
            <img
              key={`repeat-${index}`}
              src={logo}
              alt={`Logo ${index + 1}`}
              className="h-16 w-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
            />
          ))}
        </div>
      )}

      {Text && (
        <div className="logo-track flex gap-x-8 justify-start items-center  grid-flow-col  animate-scroll my-8">
          {Text.map((textItem,index) => (
            <p key={index} className="flex justify-center mx-5 items-center gap-1">
            <span className="text-[#3a1465] lg:text-5xl md:text-3xl   font-bold">{textItem.title}</span>
            <span className="text-[#3a1465]  lg:text-xl md:text-base text-sm font-medium">{textItem.subTitle}</span>
          </p>
          ))}

          { Text.map((textItem,index) => (
             <p key={index} className="flex justify-center mx-5 items-center gap-1">
             <span className="text-[#3a1465] lg:text-5xl md:text-3xl   font-bold">{textItem.title}</span>
             <span className="text-[#3a1465]  lg:text-xl md:text-base text-sm font-medium">{textItem.subTitle}</span>
           </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default LogoScroller;
