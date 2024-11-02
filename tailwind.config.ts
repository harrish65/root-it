import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
       
        scroll: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      
    },
  },
  plugins: [],
};

export default config;
/*const caseStudy = [
  {
    heading: "Gate Security Control",
    content:
      "Step into a new era of security with Root it advanced gate security control project. Our team has developed a state-of-the-art solution to enhance access control, ensuring the safety and security of your premises. This project combines cutting-edge technology with design to create a robust gate security system.",
    button1: "License Plate Recognition",
    button2: "Fully customization feature",
    imageA: `/gateSoftware1.svg`,
    imageRight: "true",
  },
  {
    heading: "Canteen management",
    content:
      "It's our innovative canteen project! Our team embarked on a mission to revolutionize the dining experience, creating a dynamic and vibrant space for our clients and their employees / students. The primary goal of this project is to enhance the overall dining experience through thoughtful design, efficient operations, and a commitment to quality.",
    button1: "User friendly UI",
    button2: "Sustainability Initiatives",
    button3: "User freedom",
    imageA: `/canteenSoftware2.svg`,
    imageRight: "false",
  },
  {
    heading: "Hostel management",
    content:
      "Discover the next level of hostel management with Root it's innovative solution. Our hostel management project aims to streamline and enhance the entire hostel experience, providing administrators, residents, and staff with powerful tools for efficient operations and improved living conditions.",
    button1: "Fully responsive",
    button2: "Role based control",
    imageA: `/hostelSoftware3.svg`,
    imageRight: "true",
  },
  {
    heading: "Quality control",
    content:
      "Embark on a journey of efficiency and sustainability with RootIt Cotton Mill Management project. Our innovative solution is designed to revolutionize the cotton manufacturing process, with a primary focus on minimizing wastage, optimizing machine performance, and promoting sustainable practices.",
    button1: "Wastage Monitoring System",
    button2: "Role based control",
    imageA: `/qualitySoftware4.svg`,
    imageRight: "false",
  },
];
 */