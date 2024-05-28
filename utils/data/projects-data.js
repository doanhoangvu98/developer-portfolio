import ayla from "/public/image/ayla.jpg"
import crefin from "/public/image/crefin.jpg"
import realEstate from "/public/image/real-estate.jpg"
import travel from "/public/image/travel.jpg"

export const projectsData = [
  {
    id: 1,
    name: "Contract System",
    description:
      "Online contract creation and signing system. The system will create contracts, allowing you to choose signers in order. Besides, the creator can drag and drop to select the signing location corresponding to each related party. The signer will receive a notification email to sign, and the system will connect with a third party is Docusign to proceed with the signing.",
    tools: [
      "ReactJS",
      "TypeScript",
      "Redux",
      "Java",
      "SQL Server",
      "Tailwind",
      "Material UI",
      "PdfDist",
      "InteractJS",
      "Docusign",
      "Jenkins",
    ],
    role: "Front-End Developer",
    code: "",
    demo: "",
    image: crefin,
  },
  {
    id: 2,
    name: "Health Solution",
    description:
      " The system is used to track the transportation of test samples from laboratories or hospitals to each other.",
    tools: [
      "ReactJS",
      "TypeScript",
      "Redux",
      "NodeJS",
      "Bootstrap",
      "Google Maps",
      "Dynamo DB",
      "AWS Amplify",
      "AWS S3",
    ],
    role: "Front-End Developer",
    code: "",
    demo: "",
    image: travel,
  },
  {
    id: 3,
    name: "Confidential",
    description:
      "Develop the system to manage collections, analytics and review of digital data like documents, emails, files from custodian’s mobile devices, computers, etc.",
    tools: [
      "ReactJS",
      "TypeScript",
      "Redux",
      "Bootstrap",
      "SCSS",
      ".NET",
      "SQL Server",
      "Azure",
      "Auth0",
      "Socket",
      "Cronjob",
    ],
    code: "",
    role: "Front-End Developer",
    demo: "",
    image: realEstate,
  },
  {
    id: 4,
    name: "Soum",
    description:
      "Develop an E-commerce system providing an immersive and unique experience that makes online shopping a much simpler",
    tools: ["React-Native", "NodeJS", "Redux", "Stripe"],
    code: "",
    demo: "",
    image: ayla,
    role: "Mobile Developer",
  },
  {
    id: 5,
    name: "Equipment Management",
    description:
      "Build a management system for cars and equipment. Allows you to save periodic maintenance information and estimate the next maintenance time. Fuel costs used for equipment.",
    tools: ["React-Native", "NodeJS", "Redux", "MongoDB", "CronJob"],
    code: "",
    demo: "",
    image: ayla,
    role: "Full Stack Developer",
  },
  {
    id: 6,
    name: "Vegan App",
    description:
      "Build an application that helps users log in with social accounts. For vegetarians, you can find restaurants that suit your taste. Users can rate and add locations.",
    tools: ["React-Native", "NodeJS", "Redux", "MongoDB", "Firebase"],
    code: "",
    demo: "",
    image: ayla,
    role: "Full Stack Developer",
  },
]

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
