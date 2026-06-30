export const conference = {
  shortName: "AISRI 2026",
  fullName:
    "International Symposium on AI and Cyber Security and Innovations",
  mode: "Hybrid Mode",
  dates: "September 18–19, 2026",
  location: "Taichung, Taiwan",
  venue: "National Chung Hsing University, Taichung, Taiwan",
  tagline:
    "Bridging artificial intelligence, cyber security, and next-generation innovations for a safer digital future.",
  email: "aisri2026@conference.org",
  social: {
    twitter: "#",
    linkedin: "#",
    facebook: "#",
  },
};

export const navigation = [
  { label: "Home", path: "/" },
  {
    label: "Submission",
    children: [
      { label: "Call for Papers", path: "/call-for-papers" },
      { label: "Paper Submission", path: "/paper-submission" },
      { label: "Paper Review", path: "/paper-review" },
    ],
  },
  {
    label: "Conference",
    children: [
      { label: "Important Dates", path: "/important-dates" },
      { label: "Keynote Speakers", path: "/keynote-speakers" },
      { label: "Committees", path: "/committees" },
      { label: "Venue", path: "/venue" },
    ],
  },
  {
    label: "Registration",
    children: [
      { label: "Paper Registration", path: "/paper-registration" },
      { label: "Author Guidelines", path: "/call-for-papers#guidelines" },
      { label: "Camera-Ready Submission", path: "/paper-submission#camera-ready" },
    ],
  },
];

export const importantDates = [
  {
    event: "Paper Submission Deadline",
    date: "June 30, 2026",
    status: "upcoming",
  },
  {
    event: "Notification of Acceptance",
    date: "July 25, 2026",
    status: "upcoming",
  },
  {
    event: "Camera-Ready & Registration",
    date: "August 15, 2026",
    status: "upcoming",
  },
  {
    event: "Early Bird Registration",
    date: "August 1, 2026",
    status: "upcoming",
  },
  {
    event: "Conference Dates",
    date: "September 18–19, 2026",
    status: "highlight",
  },
];

export const topics = [
  "AI for Cyber Threat Detection & Response",
  "Machine Learning in Network Security",
  "Generative AI & Security Implications",
  "Blockchain & Distributed Security",
  "Privacy-Preserving AI",
  "IoT & Edge Security",
  "Digital Forensics & Incident Response",
  "Secure Cloud & DevSecOps",
  "Adversarial Machine Learning",
  "Human-Centric Cyber Security",
];

export const keynoteSpeakers = [
  {
    name: "Dr. Elena Nakamura",
    title: "Chief AI Security Architect",
    affiliation: "CyberTech Institute, Tokyo",
    topic: "Trustworthy AI in Critical Infrastructure",
    bio: "Dr. Nakamura leads research on resilient AI systems for national-scale cyber defense and has published over 120 peer-reviewed papers.",
    image: null,
  },
  {
    name: "Prof. James Whitfield",
    title: "Director, Center for Cyber Intelligence",
    affiliation: "Global Security University, UK",
    topic: "The Future of Autonomous Threat Hunting",
    bio: "Prof. Whitfield pioneers autonomous cyber defense frameworks adopted by Fortune 500 enterprises worldwide.",
    image: null,
  },
  {
    name: "Dr. Mei-Ling Chen",
    title: "Senior Research Scientist",
    affiliation: "Institute of Information Science, Taiwan",
    topic: "AI-Driven Zero Trust Architectures",
    bio: "Dr. Chen specializes in zero-trust security models enhanced by deep learning for hybrid cloud environments.",
    image: null,
  },
];

export const committees = {
  general: [
    { name: "Prof. Wei-Lin Huang", role: "General Chair", affiliation: "NCHU, Taiwan" },
    { name: "Dr. Sarah Mitchell", role: "Co-General Chair", affiliation: "MIT, USA" },
  ],
  program: [
    { name: "Prof. Rajesh Kumar", role: "Program Chair", affiliation: "IIT Delhi, India" },
    { name: "Dr. Anna Kowalski", role: "Co-Program Chair", affiliation: "Warsaw University, Poland" },
    { name: "Prof. Hiroshi Tanaka", role: "Program Co-Chair", affiliation: "Keio University, Japan" },
  ],
  technical: [
    { name: "Dr. Michael O'Brien", role: "Technical Program Chair", affiliation: "Trinity College, Ireland" },
    { name: "Prof. Li Wei", role: "Publication Chair", affiliation: "Tsinghua University, China" },
    { name: "Dr. Fatima Al-Rashid", role: "Publicity Chair", affiliation: "KAUST, Saudi Arabia" },
  ],
  local: [
    { name: "Prof. Chen Yu-Ming", role: "Local Arrangement Chair", affiliation: "NCHU, Taiwan" },
    { name: "Dr. Lin Hao", role: "Finance Chair", affiliation: "NCHU, Taiwan" },
  ],
};

export const registrationFees = [
  { category: "Regular (In-Person)", early: "$450", regular: "$550" },
  { category: "Student (In-Person)", early: "$250", regular: "$320" },
  { category: "Virtual Attendance", early: "$180", regular: "$220" },
  { category: "Extra Paper", early: "$150", regular: "$180" },
];

export const reviewProcess = [
  {
    step: 1,
    title: "Initial Screening",
    description:
      "All submissions undergo a desk review to verify scope, originality, and formatting compliance.",
  },
  {
    step: 2,
    title: "Double-Blind Review",
    description:
      "Each paper is evaluated by at least three independent reviewers using standardized criteria.",
  },
  {
    step: 3,
    title: "Meta Review",
    description:
      "Program chairs consolidate reviewer feedback and make final acceptance decisions.",
  },
  {
    step: 4,
    title: "Author Notification",
    description:
      "Authors receive detailed feedback along with acceptance, revision, or rejection decisions.",
  },
];

export const highlights = [
  {
    icon: "🛡️",
    title: "Cutting-Edge Research",
    description: "Present groundbreaking work at the intersection of AI and cyber security.",
  },
  {
    icon: "🌐",
    title: "Hybrid Experience",
    description: "Join in person in Taichung or participate virtually from anywhere in the world.",
  },
  {
    icon: "🤝",
    title: "Global Networking",
    description: "Connect with researchers, industry leaders, and policymakers from 40+ countries.",
  },
  {
    icon: "📜",
    title: "Indexed Proceedings",
    description: "Accepted papers will be published in SCOPUS-indexed conference proceedings.",
  },
];

export const stats = [
  { value: "500+", label: "Expected Participants" },
  { value: "40+", label: "Countries Represented" },
  { value: "200+", label: "Paper Submissions" },
  { value: "12+", label: "Technical Tracks" },
];

export const venueInfo = {
  name: "National Chung Hsing University",
  address: "145 Xingda Rd., South Dist., Taichung City 402, Taiwan",
  description:
    "Located in the heart of Taichung, NCHU offers state-of-the-art conference facilities with full hybrid streaming capabilities. The campus is easily accessible from Taichung International Airport (30 min) and High-Speed Rail Taichung Station (20 min).",
  facilities: [
    "Main Auditorium (800 seats)",
    "Hybrid streaming studios",
    "Breakout rooms & poster halls",
    "High-speed Wi-Fi throughout campus",
    "On-campus dining & accommodation nearby",
  ],
  travel: [
    { mode: "By Air", detail: "Taichung International Airport (RMQ) — 30 min by taxi" },
    { mode: "By HSR", detail: "Taichung HSR Station — 20 min by taxi or bus" },
    { mode: "By Train", detail: "Taichung Railway Station — 25 min by bus" },
  ],
};
