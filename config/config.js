import profile from './profile.jpeg';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
  name: "Benjamin Heil",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Contact",
      link: "#contact",
    },
    {
      title: "Links",
      link: "/links",
    }
  ],
}

export const intro = {
  title: "Hey, I'm Benjamin",
  description: "A Senior Consultant & Java Developer specializing in cloud-native systems, distributed architectures, and event-driven microservices.",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "Resume",
      link: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
      isPrimary: false,
    },
  ],
}

export const about = {
  title: "Who I am",
  description: [
    "I am a Senior Consultant and Java Developer with a background in theoretical physics, passionate about cloud-native development and distributed systems. My work focuses on building scalable, resilient microservices using Java, Spring Boot, and Kubernetes.",
    "With extensive experience in event-driven architectures, I leverage Apache Kafka to create real-time data streaming solutions that enable seamless integration and processing. I bring deep expertise in designing and implementing systems that align with digital transformation goals, delivering value through agile development practices.",
    "I am actively engaged in the evolving landscape of AI and Large Language Models (LLMs), exploring ways to integrate these cutting-edge technologies into real-world applications to drive innovation and efficiency. Currently, I am excited about expanding my horizons and settling permanently in Barcelona.",
  ],
}

export const work = {
  title: "What I do",
  cards: [
    {
      title: "Cloud Native & Distributed Systems",
      description: "Designing and implementing cloud-native solutions using Spring Boot, Kubernetes, and ArgoCD, focusing on scalability and resilience.",
      icons: null,
    },
    {
      title: "Event-Driven Architectures with Kafka",
      description: "Building real-time, event-driven systems with Apache Kafka, enabling efficient data streaming, processing, and integration for complex workflows.",
      icons: null,
    },
    {
      title: "Digital Transformation Projects",
      description: "Leading backend development for digital transformation initiatives, deploying microservices on cloud platforms, and driving agile requirements engineering.",
      icons: null,
    },
    {
      title: "AI & Large Language Models (LLMs)",
      description: "Exploring and implementing applications of AI and LLMs, focusing on how these technologies can enhance software development and improve business processes.",
      icons: null,
    }
  ],
}

export const projects = {
  title: "Projects",
  cards: [
    {
      title: "ESG/CSRD Reporting",
      description: "Developed a data integrity framework for a Spring Boot & React-based Kafka connector, ensuring real-time data processing and compliance with ESG standards. Integrated CI/CD pipelines with GitHub Actions and deployed using ArgoCD in Azure.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/BLyndon",
        },
      ]
    },
    {
      title: "Digital Transformation",
      description: "Led backend development for microservices deployed on Azure Kubernetes Services, focusing on seamless deployment, scaling, and agile requirements engineering. Utilized Flyway for database migrations and collaborated closely with frontend teams.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/BLyndon",
        },
      ]
    },
    {
      title: "Kafka Data Streaming Platform",
      description: "Built a scalable event-driven architecture using Apache Kafka, enabling real-time data processing and analytics. Implemented Kafka Streams for complex joins and transformations, ensuring high throughput and low latency.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/BLyndon",
        },
      ]
    },
    {
      title: "Particle Simulation",
      description: "Research project at the University of Cologne focused on parallelized simulations of many-particle systems in C++. Published findings in a peer-reviewed journal, contributing to the field of computational physics.",
      icons: [
        {
          icon: faBook,
          link: "https://doi.org/10.1103/PhysRevB.100.134424",
        },
      ]
    },
  ],
}

export const contact = {
  title: "Get in touch",
  description: "Feel free to reach out for consulting opportunities or technical collaborations. I'm always open to connecting over coffee and discussing new projects.",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:Benjamin.Heil@mail.de",
      isPrimary: true,
    },
    {
      title: "Schedule Meeting",
      link: "https://calendly.com/benjamin-heil",
      isPrimary: false,
    },
  ]
}

// SEARCH ENGINE 
export const SEO = {
  title: "Benjamin Heil | Senior Consultant | Java Developer | Cloud Native & Kafka",
  description: "Senior Consultant specializing in cloud-native systems, event-driven architectures with Kafka, and digital transformation projects. Passionate about integrating AI and LLMs into innovative solutions.",
  image: profile.src,
}

export const links = {
  image: profile.src,
  title: "@BLyndon",
  description: "Senior Consultant | Java Developer | Cloud Native Enthusiast",
  cards: [
    {
      title: "My GitHub",
      link: "https://github.com/BLyndon",
    },
    {
      title: "Published Research",
      link: "https://doi.org/10.1103/PhysRevB.100.134424",
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/benjamin-heil/",
    },
    {
      title: "Amigoscode Course",
      link: "https://www.amigoscode.com/courses/microservices",
    },
    {
      title: "Coursera ML & Data Science",
      link: "https://www.coursera.org/",
    },
  ]
}
