import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";


export const DATA = {
  name: "Nursid Ansari",
  initials: "NA",
  url: "https://nursid.in",
  location: "Lucknow, Uttar Pradesh, India",
  locationLink: "https://www.google.co.in/maps",
  description:
    "I'm Nursid Ansari, a software engineer specializing in building scalable and user-centric web applications. Welcome to my portfolio.",
  summary:
    "As a passionate Full Stack Developer with 2+ years of experience, I specialize in building scalable web applications using JavaScript, React.js, and Node.js. I excel in creating intuitive UIs, designing RESTful APIs, and managing databases like MySQL and Cloudflare D1. I am a quick learner and always looking to improve my skills.",
  avatarUrl: "/me.jpeg",
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express.js",
    "Tailwind CSS",
    "Material UI",
    "Bootstrap",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Cloudflare D1",
    "Firebase"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "nursid299@gmail.com",
    tel: "+917081002501",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Nursid",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nursid-ansari-076772229/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/AnsariNursid",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "nursid299@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      "company": "Bhramm Technology Pvt Ltd",
      "href": "https://www.btpltech.com/",
      "badges": [],
      "location": "Lucknow",
      "title": "Associate Software Developer",
      "logoUrl": "/BTPLLOGO.jpg",
      "start": "May 2024",
      "end": "Present",
      "description": "Built and deployed multiple web platforms like CodeBolt's website, portal, and admin panel using Next.js, React, Node.js, and Firebase for seamless functionality and user experience. Developed the ArrowAI agent platform using React Flow to create dynamic workflows and automate AI agent management. Integrated Firebase for real-time database operations, user authentication, and secure data handling across all platforms. Designed scalable and responsive web applications, ensuring high performance and reliability for handling large datasets and user interactions."
    },
    {
      "company": "HashTagLabs Pvt Ltd",
      "href": "https://hashtaglabs.biz/",
      "badges": [],
      "location": "LUCKNOW",
      "title": "Software Developer",
      "logoUrl": "/HTL-Logo.png",
      "start": "March 2023",
      "end": "May 2024",
      "description": "Built a system to add/search customers by mobile number, manage family members, references, and dynamic membership plans with payment options. Automated order details, validated memberships, tracked service history, and integrated real-time service provider availability. Designed a module for managing monthly services, including service types, hourly slots, fees, and payment tracking."
    }
  ],
  education: [
    {
      school: "KMC Language University Lucknow",
      href: "https://kmclu.ac.in/",
      degree: "BCA",
      logoUrl: "/CLGLOGO.jpg",
      start: "2020",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Helper - Service Management Platform",
      href: "https://ssquickhelper.com/",
      dates: "Feb 2024 – Aug 2024",
      active: false,
      description:
        "Created a service management platform with modules for booking, tracking, and delivery, featuring real-time tracking, notifications, and secure payments. It allows efficient management for service providers and comprehensive oversight for admins.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MySQL",
        "Real-time Tracking",
        "Payment Gateway Integration"
      ],
      links: [{
        type: "Website",
        href: "https://ssquickhelper.com/",
        icon: <Icons.globe className="size-3" />,
      }],
      image: "/helper.png",
      video: ""
    },
    {
      title: "Arrow AI Agent",
      href: "https://agents.arrowai.com/",
      dates: "July 2024 - Present",
      active: true,
      description:
        "Building a platform for custom AI agents with a drag-and-drop interface using React Flow, featuring a robust backend for logic, API integrations, and real-time processing, supported by Cloudflare D1 and R2.",
      technologies: [
        "React.js",
        "React Flow",
        "Node.js",
        "Cloudflare D1",
        "Cloudflare R2",
      ],
      image: "/codebolt.png",
      video: "",
      links: [
        {
          type: "Website",
          href: "https://agents.arrowai.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "Network Management System",
      href: "https://medicinehub.in",
      dates: "Jan 2025 - Present",
      active: true,
      description:
        "A comprehensive **ISP (Internet Service Provider) network management platform** for handling customer connections, service requests, billing, and infrastructure monitoring. Designed for companies like Jio Fiber, ACT FiberNet, etc., it tracks customer onboarding, bandwidth allocation, outages, and technician assignments in real-time.",
      technologies: [
        "React.js",
        "Next.js",
        "Node.js",
        "Express",
        "MySQL",
        "PostgreSQL",
        "React flow",
        "Razorpay",
        "Stripe",
        "AWS EC2",
        "AWS S3",
      ],
      image: "/network.png",
      links: [
        {
          type: "Website",
          href: "https://medicinehub.in",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    }
  ],
  hackathons: [
    {
      "title": "Employee of the Month",
      "issuer": "Bhramm Technology Pvt Ltd",
      "date": "2024",
      "description": "Recognized for outstanding contributions to web platform development and innovation."
    },
    {
      "title": "Developer Virtual Experience Program",
      "issuer": "Accenture",
      "date": "2023",
      "description": "Completed intensive training in modern software development practices and cloud technologies."
    },
    {
      "title": "Career Edge - Young Professional",
      "issuer": "TCS ION",
      "date": "2023",
      "description": "Certified in professional workplace skills and technical competencies for IT careers."
    }
  ],
} as const;
