import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  concentrix,
  logo,
  effichat,
  hameshakem,
  clientsite,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Associate Cloud Engineer",
    icon: backend,
  },
  {
    title: "Videos & Images Editor",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Flutter Developer",
    company_name: "Self Employed",
    icon: logo,
    iconBg: "#383E56",
    date: "May 2022 - Oct 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Tech Training Labs",
    icon: "https://media.licdn.com/dms/image/C4D0BAQGTccrIrJyLNw/company-logo_200_200/0/1630475150663/yaniv_arad_tech_training_labs_logo?e=2147483647&v=beta&t=bg7pHgGrOi81eFne-ct2UMbWyt0tKkRmosx6VJfyqv4",
    iconBg: "#E6DEDD",
    date: "Dec 2022 - May 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Google Workspace TSR",
    company_name: "Concentrix",
    icon: concentrix,
    iconBg: "#383E56",
    date: "Nov 2022 - Aug 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Associate Cloud Engineer",
    company_name: "Concentrix",
    icon: concentrix,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Shon proved me wrong.",
    name: "Ofer Cohen",
    designation: "Founders",
    company: "OCDiamonds",
    image:
      "https://ocdiamonds.com/wp-content/uploads/2023/11/cropped-OC-Diamonds-Logo-Black-03-2.png",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Shon does.",
    name: "Yaron Sivan",
    designation: "CEO & Founders",
    company: "Ulpan Bayit",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Shon optimized our business' procedures, our deals were closing faster. I can't thank them enough!",
    name: "Elad Barzilay",
    designation: "Founders",
    company: "Romanobs LLC & Midas Investments LLC",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "EffiChat",
    description:
      "Web-based platform that allows users to chat efficiently using AI and privately as all of the messages are encrypted end to end.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongocluster",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: effichat,
    source_code_link: "https://github.com/Senior-ai/effichat_fe",
  },
  {
    name: "The Meshakem App",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "material-design",
        color: "pink-text-gradient",
      },
    ],
    image: hameshakem,
    source_code_link: "https://github.com/Senior-ai/the_meshakem",
  },
  {
    name: "Client's site",
    description:
      "A comprehensive business site that allows users to buy and offer high-end jewelry online with secure payment processing and inventory management.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: clientsite,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
