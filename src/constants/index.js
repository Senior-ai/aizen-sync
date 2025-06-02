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
  wordpress,
} from "../../public/assets";

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
    title: "SEO Optimizer",
    icon: mobile,
  },
  {
    title: "Cloud Engineer",
    icon: backend,
  },
  {
    title: "Automations Engineer",
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
    name: "Wordpress",
    icon: wordpress,
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
      "Developing and maintaining cross-platform mobile applications using Flutter and Dart.",
      "Integrating Firebase services for backend functionalities like authentication, database, and storage.",
      "Building responsive UIs based on Material Design and Cupertino guidelines.",
      "Collaborating with UI/UX designers to translate wireframes and mockups into functional app screens.",
      "Managing application state using providers like Provider or Riverpod.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Tech Training Labs",
    icon: "https://media.licdn.com/dms/image/C4D0BAQGTccrIrJyLNw/company-logo_200_200/0/1630475150663/yaniv_arad_tech_training_labs_logo?e=2147483647&v=beta&t=bg7pHgGrOi81eFne-ct2UMbWyt0tKkRmosx6VJfyqv4",
    iconBg: "#E6DEDD",
    date: "Dec 2022 - May 2023",
    points: [
      "Designing and developing RESTful APIs using Node.js and Express.js.",
      "Building interactive and responsive user interfaces with React.js, Redux, and modern JavaScript (ES6+).",
      "Working with databases like MongoDB and PostgreSQL, including schema design and query optimization.",
      "Implementing authentication and authorization mechanisms (e.g., JWT, OAuth).",

    ],
  },
  {
    title: "Google Workspace TSR",
    company_name: "Concentrix",
    icon: concentrix,
    iconBg: "#383E56",
    date: "Nov 2022 - Aug 2023",
    points: [
      "Providing technical support and troubleshooting for Google Workspace applications (Gmail, Drive, Calendar, Meet, Cloud Identity, etc.).",
      "Assisting enterprise clients with configuration, and administration of Google Workspace services.",
      "Diagnosing and resolving issues related to email deliverability, data migration, and security policies.",
      "Guiding businesses on best practices for utilizing Google Workspace features to enhance productivity and collaboration.",
 
    ],
  },
  {
    title: "Associate Cloud Engineer",
    company_name: "Concentrix",
    icon: concentrix,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Nov 2024",
    points: [
      "Advising for enterprise clients the best practices for implementation of different services and management of cloud infrastructure on GCP.",
      "Reproducing bugs and providing solutions for different services on GCP.",
      "Monitoring cloud resource utilization, performance, and security.",
      "Providing consulting for cloud-based applications and services, troubleshooting connectivity and performance issues.",
    ],
  },
  {
    title: "GCP Consultant",
    company_name: "Cognizant",
    icon: concentrix,
    iconBg: "#383E56",
    date: "Dec 2024 - Present",
    points: [
      "Advising enterprise clients on Google Cloud Platform (GCP) solutions, with a focus on AI/ML, BigData (BigQuery, Dataflow, Dataproc), Serverless (Cloud Functions, Cloud Run), and Database services (Cloud SQL, Spanner, Bigtable).",
      "Developing and delivering technical workshops and training sessions on GCP's AI, BigData, Serverless, and Database services for client teams.",
      "Recommending optimizations for clients\' in existing GCP environments for performance, cost, and security, particularly for their AI/ML models, data pipelines, serverless applications, and database deployments.",
    ],
  }
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
    name: "OCDiamonds",
    description:
      "A comprehensive business site that allows users to buy and offer a price for high-end jewelry online with secure payment processing and inventory management.",
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
    source_code_link: "https://ocdiamonds.com/",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
};
