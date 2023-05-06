import portfolioImg01 from "../images/realtor.jpeg";
import portfolioImg02 from "../images/chief.jpeg";
import portfolioImg04 from "../images/royalkingdom.jpeg";
import portfolioImg03 from "../images/hollyhill ag.jpeg";
import portfolioImg05 from "../images/fots.jpeg";
import portfolioImg06 from "../images/blueprintloung.jpeg";
import Android from "../images/Android Large - 1.png";
import Desktop from "../images/Desktop - Active.png";
import icgc from "../images/icgc.jpeg";
import Ipad from "../images/iPad Pro.png";

const portfolios = [
  {
    id: "01",
    imgUrl: portfolioImg01,
    category: "Web Design",
    title: "Real Estate Website",
    description:
      "This is a landing website Page of Real Estate company displaying some of thier product and thier contact information",
    technologies: ["HTML", "Tailwind css", ],
    siteUrl: "https://communitylandingpage.netlify.app" ,
    target: "_blank",
  },
  {
    id: "02",
    imgUrl: portfolioImg04,
    category: "Web Design",
    title: "Royal Kingdom Website",
    description:
      "Explore Royal Kingdom Estates' exquisite properties fit for royalty on our user-friendly website. Browse detailed listings and interactive maps, and get exceptional service from our experienced team of real estate professionals. Find your dream home today and start your journey to your new kingdom!",
    technologies: ["HTML", "Bootsrap css", "Javascript", "php"],
    siteUrl: "https://royalkingdomestate.com/",
  },
  {
    id: "03",
    imgUrl: portfolioImg02,
    category: "Web Design",
    title: "Abuoum Community website",
    description:
      "This is a website for Abuom community inside the central region of Ghana. It demonstrates the rich culture of the people as well as their chieftancy procedures",
    technologies: ["HTML","Customed Css", "JavaScript", "AOS-Animate", "Tailwind css", ],
    siteUrl: "https://traditionalcheckwebsite.netlify.app",
  },
  {
    id: "04",
    imgUrl: portfolioImg05,
    category: "Web Design",
    title: "Fots International School",
    description:
      "This is website for an International School based in Accra. This websites uses beautiful design concept and pictures to attract people to the page.  ",
    technologies: ["HTML","Customed Css", "JavaScript", "Bootstrap"],
    siteUrl: "https://fotsinternationalschool.com/",
  },
  {
    id: "05",
    imgUrl: portfolioImg03,
    category: "Web Design",
    title: "Holy Hill Assemblies of God Church System",
    description:
      "This is a system for a church to manage members within the church. This system manages the Assets, financial records and Leaders of the church",
    technologies: ["HTML", "Bootstrapcss", "JavaScript", "PhP", "MySQL"],
    siteUrl: "#",
  },

  {
    id: "06",
    imgUrl: Desktop,
    category: "Ux",
    title: "Suit Collect Design",
    description:
      "This is a design demonstrating a website made with Figma",
    technologies: ["Figma"],
    siteUrl: "#",
  },
  {
    id: "07",
    imgUrl: Android,
    category: "Ux",
    title: "Food Odering Design",
    description:
      "This is a mobile application Design for a restaurant, where customers can easily make request",
    technologies: ["Figma"],
    siteUrl: "#",
  },
  {
    id: "08",
    imgUrl: icgc,
    category: "Web Design",
    title: "ICGC UPPER ROOM TEMPLE",
    description:
      "This is a system for a church to manage members within the church. This system manages the Assets, financial records and Leaders of the church",
    technologies: ["HTML", "Bootstrapcss", "JavaScript", "PhP", "MySQL"],
    siteUrl: "#",
  },
  {
    id: "09",
    imgUrl: portfolioImg06,
    category: "Web Design",
    title: "BLUE PRINT LOUNGE",
    description:
      "This is a webiste for blueprintlounge displaying thier daily activities and also how the pub is being run",
    technologies: ["HTML", "Bootstrapcss", "JavaScript", ],
    siteUrl: "https://blueprintloungegh.com/",
  },
  {
    id: "10",
    imgUrl: Ipad,
    category: "Ux",
    title: "Food Odering Admin Design",
    description:
      "This is an Admin Page of a Restaurant food ordering system",
    technologies: ["Figma"],
    siteUrl: "#",
  }
];

export default portfolios;
