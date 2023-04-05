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
    flutter,
    mirante,
    placar,
    Edu,
    ecom,
    michel,
    braid,
    rede
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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Flutter Developer",
      icon: mobile,
    },
    {
      title: "People Management",
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
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "flutter",
      icon: flutter,
    },
  ];
  
  const experiences = [
    {
      title: "lawyer intern",
      company_name: "Braid Advogados Associados",
      icon: braid,
      iconBg: "#E6DEDD",
      date: "Fev 2016 - Set 2019",
      points: [
        "Corporate Law.",
        "Management, Team Leadership, Administrative Law",
        "Public Law, civil Law, employment Law.",
        "Microsoft Office."
      ],
    },
    {
      title: "lawyer",
      company_name: "AFG Advogados Associados",
      icon: michel,
      iconBg: "#E6DEDD",
      date: "Fev 2016 - Dez 2021",
      points: [
        "Corporate Law.",
        "Management, Team Leadership, Administrative Law",
        "Public Law, civil Law, employment Law.",
        "Microsoft Office."
      ],
    },
    {
      title: "Administrative",
      company_name: "Rede Sustentabildiade",
      icon: rede,
      iconBg: "#E6DEDD",
      date: "Set 2020 - Nov 2020",
      points: [
        "Contracts.",
        "Administrative organization."
      ],
    },
    {
      title: "React Js / Native Developer",
      company_name: "Grupo Mirante",
      icon: mirante,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Mobile Developer",
      company_name: "Imirante - Portal",
      icon: mirante,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - present",
      points: [
        "Developing and maintaining web applications using Flutter and other related technologies.",
        "Collaborating with cross-functional teams including product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },

  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Anonymous",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Anonymous",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Anonymous",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "+Educação",
      description:
        "Educational platform to assist in educational development",
      tags: [
        {
          name: "React Native",
          color: "blue-text-gradient",
        },
        {
          name: "Expo",
          color: "blue-text-gradient",
        },
        {
          name: "Native Base",
          color: "blue-text-gradient",
        },
      ],
      image: Edu,
      source_code_link: "https://github.com/rmo02/maisEduV2",
    },
    {
      name: "ScoreBoard",
      description:
        "Application to score points in matches.",
      tags: [
        {
          name: "Flutter",
          color: "blue-text-gradient",
        },
        {
          name: "Android",
          color: "green-text-gradient",
        }
      ],
      image: placar,
      source_code_link: "https://play.google.com/store/apps/details?id=com.rmo02.placar",
    },
    {
      name: "E-commerce Delivery",
      description:
        "Website for online sales.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "pink-text-gradient",
        },
      ],
      image: ecom,
      source_code_link: "https://github.com/rmo02/RestaurantApp",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };