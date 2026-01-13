// api.js
const diplomas = [
  {
    id: "daa",
    name: "Diploma in Applied AI & Analytics (R13)",
    description:
      "Develop AI solutions with speed. Master Generative AI and practical deployment to build smarter, more efficient applications. Graduate ready to innovate and deliver impact.",
    modules: [
      {
        id: "dbsys",
        code: "C207",
        name: "Database Systems",
        desc: "Learn relational database concepts, SQL, and database design to support modern applications.",
        credits: 4,
        assessment: "Project + Quiz",
      },
      {
        id: "aiess",
        code: "C240",
        name: "AI Essentials and Innovations",
        desc: "Equips learners with essential knowledge of artificial intelligence, including generative models, prompt engineering, agentic AI systems, and techniques to reduce hallucinations and improve explainability.",
        credits: 4,
        assessment: "Lab + Test",
      },
    ],
  },
  {
    id: "csf",
    name: "Diploma in Cybersecurity & Digital Forensics (R55)",
    description:
      "Gain strong foundations in cybersecurity, networks, and digital forensics to protect systems and investigate cyber incidents.",
    modules: [
      {
        id: "cloud",
        code: "CS1111",
        name: "Cloud Computing Essentials",
        desc: "Provides hands-on experience with cloud infrastructure, including virtual machines, storage, identity and access management, and virtual private clouds.",
        credits: 4,
        assessment: "Practical + Report",
      },
      {
        id: "ethical",
        code: "CS1112",
        name: "Ethical Hacking",
        desc: "Introduces the fundamentals of penetration testing, covering reconnaissance, scanning, exploitation, post-exploitation, and documentation.",
        credits: 4,
        assessment: "Practical + Report",
      },
    ],
  },
  {
    id: "cip",
    name: "Common ICT Programme (R58)",
    description:
      "Build a strong foundation in information and communication technology before progressing into a specialised ICT diploma.",
    modules: [
      {
        id: "secman",
        code: "C235",
        name: "IT Security and Management",
        desc: "Covers best practices for managing effective security systems, including information, personnel, physical security, and risk analysis.",
        credits: 4,
        assessment: "Paper Test + Quiz",
      },
      {
        id: "osnet",
        code: "C227",
        name: "Operating Systems and Networking",
        desc: "Introduces core operating system concepts and networking fundamentals through hands-on command-line tasks, scripting, and practical exercises.",
        credits: 4,
        assessment: "Lab + Test",
      },
    ],
  },
];

export function getDiplomas() {
  return diplomas;
}

export function getDiploma(diplomaId) {
  return diplomas.find((d) => d.id === diplomaId);
}

export function getModule({ diplomaId, moduleId }) {
  const diploma = getDiploma(diplomaId);
  return diploma?.modules.find((m) => m.id === moduleId);
}
