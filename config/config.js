import profile from './profile.png';
import { FaReact, FaBrain, FaChartPie, FaGitAlt } from 'react-icons/fa';
import { SiPython, SiCplusplus, SiJavascript, SiSap, SiApachemaven, SiJirasoftware, FaConfluence, SiFlyway, SiOpenapiinitiative, SiLangchain, SiKubernetes, SiHelm, SiApachekafka, SiSpring, SiMicrosoftazure, SiConfluence } from 'react-icons/si';
import { LiaGlobeSolid } from "react-icons/lia";
import { GiCamel } from "react-icons/gi";
import { PiFileSqlLight } from "react-icons/pi";
import { AiOutlineFileText } from 'react-icons/ai';

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
      icons: [
        { link: 'https://kubernetes.io', icon: SiKubernetes }, 
        { link: 'https://helm.sh', icon: SiHelm },
        { link: 'https://argo-cd.readthedocs.io/en/stable/', icon: FaGitAlt },  // Corrected icon for ArgoCD
        { link: 'https://azure.microsoft.com', icon: SiMicrosoftazure },
      ],
    },
    {
      title: "Event-Driven Architectures with Kafka",
      description: "Building event-driven systems with Confluent Kafka, focusing on data integrity and data quality in streaming, processing, and integration for complex workflows.",
      icons: [
        { link: 'https://kafka.apache.org', icon: SiApachekafka },
        { link: 'https://spring.io', icon: SiSpring },  // Corrected link for Spring
        { link: 'https://maven.apache.org', icon: SiApachemaven },  // Corrected link for Maven
      ],
    },    
    {
      title: "Communication",
      description: "Collaborating with international teams and stakeholders to deliver high-quality solutions, ensuring alignment with business goals and technical requirements.",
      icons: [
        { icon: LiaGlobeSolid }, // Represents communication and collaboration
        { link: 'https://www.atlassian.com/software/confluence', icon: SiConfluence }, // Corrected link for Confluence
        { link: 'https://www.atlassian.com/software/jira', icon: SiJirasoftware }, // Corrected link for Jira Software
      ],
    },
    {
      title: "System Integration & Digital Transformation",
      description: "Designing and implementing solutions in data-intensive digital transformation and integration projects, managing data migration strategies, and supporting MVP delivery and successful go-live in production environments.",
      icons: [
        { link: 'https://www.openapis.org', icon: SiOpenapiinitiative }, // Represents engineering and tool-based transformation processes
        { link: 'https://kafka.apache.org', icon: SiApachekafka }, // Represents engineering and tool-based transformation processes
        { link: 'https://camel.apache.org/', icon: GiCamel } // Represents MVP delivery and fast deployments
      ],
    },
    {
      title: "Analytics & LLMs",
      description: "Exploring and implementing applications based on LLMs, leveraging classical Machine Learning techniques to provide well-suited solutions for various use cases and challenges.",
      icons: [
        { icon: FaChartPie }, // Represents analytics and data visualization
        { link: 'https://huggingface.co', icon: FaBrain }, // Represents AI and LLM exploration
        { link: 'https://www.python.org', icon: SiLangchain }, // Represents programming in Python and related frameworks
      ],
    },    
  ],
}


export const projects = {
  title: "Projects",
  cards: [
    {
      title: "ESG/CSRD Reporting",
      description: "Developed a data integrity framework for a Spring Boot & React-based Kafka connector, ensuring real-time data processing and compliance with ESG standards. Integrated CI/CD pipelines with GitHub Actions and deployed using ArgoCD in Azure.",
      icons: [
        { link: 'https://kafka.apache.org', icon: SiApachekafka }, // Represents Kafka for data streaming
        { link: 'https://spring.io', icon: SiSpring }, // Represents Spring Boot
        { link: 'https://azure.microsoft.com', icon: SiMicrosoftazure }, // Represents cloud deployment on Azure
        { link: 'https://reactjs.org', icon: FaReact }, // Represents React for frontend
      ]
    },
    {
      title: "Digital Transformation",
      description: "Led backend development for microservices deployed on Azure Kubernetes Services, focusing on seamless deployment, scaling, and agile requirements engineering. Utilized Flyway for database migrations and collaborated closely with frontend teams.",
      icons: [
        { link: 'https://spring.io', icon: SiSpring }, // Represents Spring Boot for backend
        { link: 'https://www.openapis.org', icon: SiOpenapiinitiative }, // Represents OpenAPI for documentation
        { link: 'https://azure.microsoft.com', icon: SiMicrosoftazure }, // Represents Azure/Kubernetes deployment
        { link: 'https://flywaydb.org', icon: SiFlyway }, // Represents Flyway for database migrations
      ]
    },
    {
      title: "SAP HANA Integration",
      description: "TODO",
      icons: [
        { link: 'https://kafka.apache.org', icon: PiFileSqlLight }, // Represents SQL for data processing
        { link: 'https://www.sap.com/products/hana.html', icon: SiSap }, // Represents SAP HANA integration
        { link: 'https://www.python.org', icon: SiPython }, // Represents Python for scripting
        { link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', icon: SiJavascript }, // Represents JavaScript
      ]
    },
    {
      title: "Many-Particle Simulation",
      description: "Research project at the University of Cologne focused on parallelized simulations of many-particle systems in C++. Published findings in a peer-reviewed journal, contributing to the field of computational physics.",
      icons: [
        { link: 'https://isocpp.org/', icon: SiCplusplus }, // Represents C++ for simulations
        { link: 'https://www.python.org', icon: SiPython }, // Represents Python for analysis
        { link: 'https://doi.org/10.1103/PhysRevB.100.134424', icon: AiOutlineFileText } // Represents publication on LinkedIn
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
