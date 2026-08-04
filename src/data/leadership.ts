export type Leader = {
  name: string;
  role: string;
  bio: string;
  image?: string;
};

export const featuredLeaders: Leader[] = [
  {
    name: "Deka Abdulle",
    role: "Director of International Affairs",
    bio: "Deka is a dedicated Certified Nurse Midwife and the Director of International Affairs at Global Health Alliance. With a deep passion for maternal and child health, she combines clinical expertise with strategic leadership to drive global health initiatives and impactful collaborations with international organizations and communities.",
    image: "/leadership/deka-abdulle.png",
  },
  {
    name: "Farhiyo Abdulle",
    role: "Director of Domestic Affairs",
    bio: "Farhiyo is a board-certified OB/GYN at Allina Health, dedicated to giving back to communities in need across the globe. She brings extensive experience in prenatal care and surgery, and is recognized for exceptional clinical skills and patient care, including the Top Doctor Award.",
    image: "/leadership/farhiyo-abdulle.png",
  },
];

export const boardMembers: Leader[] = [
  {
    name: "Dr. Ilyas Alin",
    role: "Board Member",
    bio: "Physician with specialized training in neurosurgery and extensive experience in clinical care and international medical collaboration. Fluent in Somali, English, and Turkish, he advances medical education and access to quality healthcare across Africa and beyond.",
    image: "/leadership/dr-ilyas-alin.png",
  },
  {
    name: "Fowsiyo Abdulle",
    role: "Board Member",
    bio: "MSW, LGSW — Licensed Graduate Social Worker specializing in trauma-informed, culturally responsive mental health care for children, adolescents, adults, and families across inpatient, outpatient, and residential settings.",
    image: "/leadership/fowsiyo-abdulle.png",
  },
  {
    name: "Marjorie Hogan",
    role: "Board Member, Retired",
    bio: "Retired pediatrician and adolescent medicine specialist with over 40 years of practice at Children’s MN and Hennepin Healthcare, with special interests in parenting, global health, medical education, and care for underserved families.",
    image: "/leadership/marjorie-hogan.png",
  },
  {
    name: "Patrick Pariseau",
    role: "Board Member",
    bio: "Finance professional with over 40 years of experience spanning financial planning, community banking leadership, brokerage, and FinTech—now supporting BIPOC entrepreneurs through Minneapolis nonprofit work.",
    image: "/leadership/patrick-pariseau.png",
  },
  {
    name: "Abdul Suleyman",
    role: "Chief Financial Officer",
    bio: "Seasoned accountant and business professional with public and private sector experience, focused on internal controls, compliance, and strategic financial leadership.",
    image: "/leadership/abdul-suleyman.png",
  },
  {
    name: "Assad Omar",
    role: "Honorary Board Member",
    bio: "Honorary board member supporting Global Health Alliance’s mission.",
    image: "/leadership/assad-omar.png",
  },
  {
    name: "Mohamed Mohamed",
    role: "Honorary Board Member",
    bio: "Honorary board member supporting Global Health Alliance’s mission.",
    image: "/leadership/mohamed-mohamed.png",
  },
];

export const directors: Leader[] = [
  {
    name: "Hani Saciid, RRT",
    role: "Director of Respiratory Therapy",
    bio: "Respiratory Care Practitioner leading efforts to establish the first bachelor’s-level respiratory therapy program in Somalia and expand lifesaving respiratory care across Africa.",
    image: "/leadership/hani-saciid.png",
  },
  {
    name: "Naimo Farah",
    role: "Director of Resource and Education",
    bio: "Leads resource and education initiatives that support GHA’s training and capacity-building programs.",
    image: "/leadership/naimo-farah.png",
  },
  {
    name: "Yonis Osman",
    role: "In-Country Director, GHA Somalia",
    bio: "Provides strategic leadership for health programs and partnerships that strengthen healthcare systems across Somalia, leveraging technology, innovation, and collaboration.",
    image: "/leadership/yonis-osman.png",
  },
];

export const homepageLeaders: Leader[] = [
  featuredLeaders[0],
  featuredLeaders[1],
  boardMembers[0],
  boardMembers[1],
];

export const allLeaders: Leader[] = [
  ...featuredLeaders,
  ...boardMembers,
  ...directors,
];
