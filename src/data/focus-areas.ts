export type FocusArea = {
  slug: string;
  title: string;
  summary: string;
  paragraphs: string[];
  image?: {
    src: string;
    alt: string;
  };
};

export const focusAreas: FocusArea[] = [
  {
    slug: "maternal-child-health",
    title: "Maternal & Child Health",
    summary:
      "Improving health outcomes for women, newborns, infants, children, and adolescents across the continuum of care.",
    image: {
      src: "/focus-areas/maternal-child-health.png",
      alt: "A mother holding her infant at a community health gathering",
    },
    paragraphs: [
      "Maternal and Child Health (MCH) is at the heart of Global Health Alliance's mission to improve health outcomes for women, newborns, infants, children, and adolescents. GHA is committed to reducing preventable maternal and child morbidity and mortality by strengthening the continuum of care—from preconception and pregnancy through childbirth, the postnatal period, infancy, and early childhood.",
      "Our interventions focus on improving access to quality antenatal care (ANC), skilled birth attendance, emergency obstetric services, postnatal care (PNC), childhood immunization, nutrition, growth monitoring, integrated management of childhood illnesses (IMCI), and reproductive health services. We prioritize reaching underserved and vulnerable populations through community-based health initiatives, mobile outreach services, and partnerships with public and private health institutions.",
      "By empowering healthcare providers, supporting health facilities, and engaging communities, GHA works to ensure that every mother and child has the opportunity to survive, thrive, and achieve their full potential.",
    ],
  },
  {
    slug: "newborn-care",
    title: "Newborn Care & Neonatal Health",
    summary:
      "Evidence-based care in the first 28 days of life to reduce preventable newborn deaths and disabilities.",
    image: {
      src: "/focus-areas/newborn-care.png",
      alt: "Mothers with newborns and young children in a community health setting",
    },
    paragraphs: [
      "The first 28 days of life represent the most vulnerable period for a child's survival. GHA is dedicated to improving neonatal survival through evidence-based interventions that provide high-quality care immediately after birth and throughout the neonatal period.",
      "Our programs strengthen health facilities to provide comprehensive newborn services, including neonatal resuscitation, thermal protection, breastfeeding support, infection prevention, kangaroo mother care (KMC), management of low birth weight and premature infants, neonatal intensive care support, and early identification of neonatal complications.",
      "GHA also supports the establishment and strengthening of Neonatal Intensive Care Units (NICUs), Special Care Baby Units (SCBUs), and referral systems while building the capacity of healthcare professionals to deliver lifesaving newborn care.",
      "Our goal is to reduce preventable newborn deaths and disabilities by ensuring every newborn receives safe, timely, and quality healthcare.",
    ],
  },
  {
    slug: "training",
    title: "Healthcare Worker Training & Capacity Building",
    summary:
      "Competency-based education, mentorship, and continuous professional development for a skilled health workforce.",
    image: {
      src: "/focus-areas/training.png",
      alt: "Healthcare capacity building training graduates with Global Health Alliance and Red Sea University",
    },
    paragraphs: [
      "A skilled and motivated health workforce is fundamental to delivering quality healthcare. GHA invests in strengthening the capacity of healthcare professionals through comprehensive education, competency-based training, mentorship, and continuous professional development.",
      "We collaborate with ministries of health, universities, teaching hospitals, professional associations, and international institutions to develop and deliver high-quality learning opportunities for doctors, nurses, midwives, laboratory professionals, pharmacists, public health specialists, and community health workers.",
      "Training areas include maternal and newborn care, emergency medicine, infection prevention and control (IPC), patient safety, clinical leadership, digital health, respiratory care, nutrition, monitoring and evaluation, humanitarian response, and health management.",
      "Beyond training, GHA promotes coaching, supportive supervision, simulation-based learning, clinical mentorship, and leadership development to improve workforce performance and strengthen institutional capacity.",
    ],
  },
  {
    slug: "digital-health",
    title: "Digital Health Solutions (DynaMed & Dynamic Health)",
    summary:
      "Evidence-based digital tools and health technologies that improve clinical decisions and system efficiency.",
    image: {
      src: "/focus-areas/digital-health.png",
      alt: "Community health workers using a digital tablet alongside a paper health register",
    },
    paragraphs: [
      "GHA promotes the use of digital technologies to improve healthcare quality, clinical decision-making, and health system efficiency. Through partnerships with globally recognized digital platforms such as DynaMed and Dynamic Health, GHA supports healthcare professionals with access to up-to-date, evidence-based clinical information and decision-support tools.",
      "Digital health initiatives include electronic health records, telemedicine, digital learning platforms, health information systems, mobile health applications, remote consultations, data analytics, and digital monitoring systems.",
      "By integrating digital innovation into healthcare delivery, GHA enhances diagnostic accuracy, clinical competence, patient safety, health data management, and evidence-based practice while supporting continuous professional education for healthcare providers.",
      "Digital transformation is a cornerstone of GHA's strategy to modernize health services and strengthen resilient health systems.",
    ],
  },
  {
    slug: "enc",
    title: "Emergency & Essential Newborn Care (ENC)",
    summary:
      "Lifesaving care in the first minutes and hours after birth for every baby.",
    image: {
      src: "/focus-areas/enc.png",
      alt: "Healthcare worker supporting a mother and newborn in an Emergency and Essential Newborn Care unit",
    },
    paragraphs: [
      "GHA strengthens the capacity of health facilities to provide high-quality Emergency and Essential Newborn Care (ENC) to every baby at birth. Our interventions focus on ensuring newborns receive immediate lifesaving care during and after delivery.",
      "Programs include neonatal resuscitation, essential newborn care, delayed cord clamping, infection prevention, breastfeeding initiation, thermal care, management of birth asphyxia, stabilization of sick newborns, referral systems, and quality improvement initiatives.",
      "We provide training, simulation exercises, clinical mentorship, equipment, and standardized clinical protocols that enable healthcare workers to respond effectively to newborn emergencies.",
      "By improving the quality of care during the critical first minutes and hours of life, GHA contributes significantly to reducing neonatal mortality and long-term disability.",
    ],
  },
  {
    slug: "respiratory-care",
    title: "Respiratory Care & Oxygen Therapy",
    summary:
      "Stronger oxygen systems, clinical capacity, and respiratory emergency preparedness.",
    image: {
      src: "/focus-areas/respiratory-care.png",
      alt: "Ventilator and oxygen therapy training setup with healthcare professionals observing",
    },
    paragraphs: [
      "Respiratory illnesses remain one of the leading causes of preventable deaths among newborns, children, and critically ill patients. GHA works to strengthen respiratory care services by improving oxygen systems, clinical capacity, and emergency preparedness across health facilities.",
      "Our programs support the procurement and maintenance of oxygen concentrators, oxygen plants, pulse oximeters, CPAP systems, ventilators, respiratory monitoring equipment, and related biomedical technologies.",
      "We train healthcare professionals in respiratory assessment, oxygen therapy protocols, neonatal respiratory support, critical care, emergency airway management, infection prevention, and equipment maintenance.",
      "GHA also collaborates with health authorities to improve oxygen supply chains, biomedical engineering capacity, and sustainable oxygen ecosystems that ensure uninterrupted lifesaving care.",
    ],
  },
  {
    slug: "medical-equipment",
    title: "Medical Equipment & Hospital Support",
    summary:
      "Equipping facilities with functional infrastructure, biomedical systems, and quality standards.",
    image: {
      src: "/focus-areas/medical-equipment.png",
      alt: "Array of hospital medical equipment including monitors, incubators, and clinical workstations",
    },
    paragraphs: [
      "Quality healthcare depends on well-equipped and functional health facilities. GHA supports hospitals and primary healthcare centers by strengthening infrastructure, improving medical equipment availability, and enhancing biomedical engineering systems.",
      "Support includes procurement, installation, maintenance, calibration, and training on essential medical equipment such as ultrasound machines, patient monitors, incubators, delivery beds, laboratory equipment, oxygen systems, sterilization equipment, surgical instruments, and emergency care devices.",
      "In addition, GHA assists health facilities in improving infection prevention and control standards, facility management, quality assurance systems, supply chain management, and equipment maintenance plans.",
      "Through these interventions, GHA helps health facilities deliver safe, effective, and high-quality healthcare services.",
    ],
  },
  {
    slug: "community-education",
    title: "Community Health Education & Awareness",
    summary:
      "Informed communities with the knowledge and skills to prevent disease and access care.",
    image: {
      src: "/focus-areas/community-education.png",
      alt: "Health worker distributing medicines and supplies to women and children in a community clinic",
    },
    paragraphs: [
      "Healthy communities begin with informed communities. GHA empowers individuals, families, and communities with the knowledge and skills needed to prevent disease, adopt healthy behaviors, and access essential healthcare services.",
      "Community engagement programs focus on maternal health, newborn care, child nutrition, immunization, family planning, adolescent health, hygiene promotion, disease prevention, mental health awareness, gender equality, and community-based surveillance.",
      "Working alongside community health workers, local leaders, women's groups, youth organizations, schools, and civil society organizations, GHA promotes inclusive participation and locally driven solutions.",
      "Behavior change communication campaigns, health promotion activities, community dialogues, radio programs, digital campaigns, and outreach initiatives help build healthier and more resilient communities.",
    ],
  },
  {
    slug: "health-systems",
    title: "Health Systems Strengthening",
    summary:
      "Resilient, well-governed systems that deliver equitable, people-centered care.",
    paragraphs: [
      "GHA recognizes that sustainable improvements in health outcomes require strong, resilient, and well-governed health systems. Our health systems strengthening initiatives support national and subnational institutions in improving leadership, governance, service delivery, health financing, workforce development, supply chain systems, health information systems, and quality assurance.",
      "We collaborate with ministries of health, district health authorities, healthcare facilities, academic institutions, and development partners to improve policy implementation, strategic planning, resource management, health workforce performance, monitoring and evaluation, and accountability mechanisms.",
      "GHA also supports emergency preparedness, health security, disease surveillance, quality improvement, accreditation, and institutional capacity development to ensure health systems can respond effectively to current and future health challenges.",
      "Our objective is to build resilient health systems capable of delivering equitable, efficient, and people-centered healthcare services.",
    ],
  },
  {
    slug: "partnerships",
    title: "Partnerships, Research & Innovation",
    summary:
      "Collaboration, evidence, and innovation that improve policy and healthcare delivery.",
    paragraphs: [
      "Collaboration and innovation are fundamental to achieving sustainable health improvements. GHA builds strategic partnerships with governments, United Nations agencies, international and local NGOs, universities, hospitals, professional associations, private sector organizations, donors, and community institutions.",
      "We promote collaborative research, implementation science, operational research, health innovation, and knowledge generation to improve healthcare policies and practices.",
      "GHA supports data-driven decision-making through monitoring, evaluation, learning, and research (MEL), enabling continuous improvement and accountability across all programs.",
      "Innovation is embedded throughout our work—from introducing digital health technologies and new clinical approaches to testing scalable community health models and strengthening local capacity. By fostering partnerships and advancing evidence-based solutions, GHA aims to influence policy, improve healthcare delivery, and create lasting, sustainable impact for communities across Somalia.",
    ],
  },
];

export const homepageFocusAreas = focusAreas.filter(
  (area): area is FocusArea & { image: NonNullable<FocusArea["image"]> } =>
    Boolean(area.image),
);

export const featuredHomepagePrograms = homepageFocusAreas.slice(0, 4);

export function getFocusArea(slug: string): FocusArea | undefined {
  return focusAreas.find((area) => area.slug === slug);
}
