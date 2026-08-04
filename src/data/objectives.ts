export type Objective = {
  title: string;
  body: string;
};

export const objectives: Objective[] = [
  {
    title: "Strengthen Health Systems",
    body: "Support national and local health institutions through technical assistance, infrastructure development, and improved healthcare management.",
  },
  {
    title: "Improve Maternal, Newborn and Child Health",
    body: "Reduce preventable maternal and child morbidity and mortality by increasing access to quality reproductive, maternal, newborn, child, and adolescent health services.",
  },
  {
    title: "Build Health Workforce Capacity",
    body: "Enhance the knowledge and skills of healthcare professionals through continuous education, clinical mentorship, research, and professional development programs.",
  },
  {
    title: "Expand Access to Essential Health Services",
    body: "Improve access to preventive, curative, rehabilitative, and emergency health services for underserved and vulnerable populations.",
  },
  {
    title: "Promote Public Health and Disease Prevention",
    body: "Strengthen community awareness, health promotion, disease surveillance, immunization, nutrition, water, sanitation, hygiene (WASH), and outbreak preparedness.",
  },
  {
    title: "Advance Digital Health and Innovation",
    body: "Leverage digital technologies, health information systems, and innovative solutions to improve healthcare delivery, data management, and decision-making.",
  },
  {
    title: "Support Humanitarian and Emergency Response",
    body: "Provide timely, coordinated, and effective humanitarian assistance during emergencies, disease outbreaks, disasters, and conflicts.",
  },
  {
    title: "Foster Research, Learning, and Evidence-Based Practice",
    body: "Conduct operational research, monitoring and evaluation, and knowledge-sharing initiatives to improve healthcare outcomes and inform policy.",
  },
  {
    title: "Strengthen Partnerships and Advocacy",
    body: "Collaborate with governments, academic institutions, development partners, civil society, and communities to promote equitable healthcare policies and sustainable development.",
  },
  {
    title: "Promote Organizational Sustainability",
    body: "Develop strong governance systems, financial accountability, resource mobilization, and institutional capacity to ensure long-term organizational growth.",
  },
];

export const featuredHomepageObjectives = objectives.slice(0, 5);
