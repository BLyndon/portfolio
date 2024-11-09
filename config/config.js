import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { faBook, faCloud } from '@fortawesome/free-solid-svg-icons';

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
  description: "A Senior Consultant & Software Engineer specializing in cloud-native systems, distributed data-intensive systems, and event-driven microservices.",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "Resume",
      link: "https://www.linkedin.com/in/benjamin-heil-0b02b0197/",
      isPrimary: false,
    },
  ],
}

export const about = {
  title: "Who I am",
  description: [
    "I am a Senior Consultant and Software Engineer in the financial sector with a background in theoretical physics, passionate about cloud-native development and distributed systems. My work focuses on building microservices using Java, Spring Boot, and Kubernetes.",
    "With a solid foundation in event-driven architectures, I leverage Confluent Kafka to create real-time data streaming solutions that enable seamless integration and processing. I bring deep expertise in designing and implementing data-intensive systems that align with digital transformation goals, delivering value through strong communication and expertise in requirements engineering.",
    "I am actively engaged in the evolving landscape of AI and Large Language Models (LLMs), exploring ways to integrate these cutting-edge technologies into real-world applications to drive innovation and efficiency. Currently, I am excited about expanding my horizons and settling permanently in Barcelona.",
],
}

export const work = {
  title: "What I do",
  cards: [
    {
      title: "Cloud Native Java Development",
      description: "Designing and implementing cloud-native solutions using Spring Boot, Kubernetes, and ArgoCD, leveraging GitOps for streamlined deployments.",
      icons: null
    },
    {
      title: "Event-Driven Architectures with Kafka",
      description: "Building event-driven systems with Confluent Kafka, focusing on data integrity and data quality in streaming, processing, and integration for complex workflows.",
      icons: null,
    },
    {
      title: "Communication",
      description: "Collaborating with international teams and stakeholders to deliver high-quality solutions, ensuring alignment with business goals and technical requirements.",
    },
    {
      title: "Digital Transformation",
      description: "Implementing solutions in data-intensive digital transformation projects, managing data migration strategies, and supporting MVP delivery and successful go-live in production environments.",
      icons: null,
    },
    {
      title: "Analytics & LLMs",
      description: "Exploring and implementing applications based on LLMs, leveraging classical Machine Learning techniques to provide well-suited solutions for various use cases and challenges.",
      icons: null,
    }
  ],
}

export const projects = {
  title: "Projects",
  cards: [
    {
      title: "Sustainability Reporting",
      description: "Developed a data integrity framework for a Spring Boot & React-based Kafka connector, ensuring real-time data processing and compliance with ESG standards. Integrated CI/CD pipelines with GitHub Actions and deployed using ArgoCD in Azure.",
    },
    {
      title: "Digital Transformation",
      description: "Led backend development for microservices deployed on Azure Kubernetes Services, focusing on seamless deployment, scaling, and agile requirements engineering. Utilized Flyway for database migrations and collaborated closely with frontend teams.",
    },
    {
      title: "Kafka Data Streaming Platform",
      description: "Built a scalable event-driven architecture using Apache Kafka, enabling real-time data processing and analytics. Implemented Kafka Streams for complex joins and transformations, ensuring high throughput and low latency.",
    },
    {
      title: "Many-Particle Simulation",
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

export const education = {
  title: "Education & Certifications",
  cards: [
    {
      title: "MSc in Physics",
      description: "University of Cologne, Germany",
    },
    // {
    //   title: "IREB Requirements Engineering",
    //   description: "Certified by the International Requirements Engineering Board for expertise in requirements engineering.",
    // },
    // {
    //   title: "Kafka Certification CCDAK",
    //   description: "Designing and implementing cloud-native solutions using Spring Boot, Kubernetes, and ArgoCD, with a focus on GitOps for streamlined deployments.",
    //   icons: null,
    // }
  ]
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
  title: "Benjamin Heil | Senior Consultant | Software Engineer | Cloud Native & Kafka",
  description: "Senior Consultant specializing in cloud-native systems, event-driven architectures with Kafka, and digital transformation projects. Passionate about integrating AI and LLMs into innovative solutions.",
  image: profile.src,
}

export const links = {
  image: profile.src,
  title: "@BLyndon",
  description: "Senior Consultant | Software Engineer | Cloud Native | Data Enthusiast",
  cards: [
    {
      title: "My GitHub",
      link: "https://github.com/BLyndon",
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/benjamin-heil-0b02b0197/",
    },
    {
      title: "Published Research",
      link: "https://doi.org/10.1103/PhysRevB.100.134424",
    },
    // {
    //   title: "Amigoscode Course",
    //   link: "https://www.amigoscode.com/courses/microservices",
    // },
    // {
    //   title: "Coursera ML & Data Science",
    //   link: "https://www.coursera.org/",
    // },
  ]
}
