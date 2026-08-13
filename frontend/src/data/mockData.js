// Comprehensive Ethiopian workplace dataset for X-Ray
export const MOCK_COMPANIES = [
  {
    id: "safaricom-ethiopia",
    name: "Safaricom Telecommunications Ethiopia",
    shortName: "Safaricom Ethiopia",
    tagline: "Transforming lives through technological innovation",
    industry: "Telecommunications",
    location: "Addis Ababa, Bole",
    size: "1,000 - 5,000 employees",
    website: "https://safaricom.et",
    verified: true,
    rating: 4.5,
    reviewCount: 342,
    salaryCount: 218,
    interviewCount: 89,
    openJobsCount: 14,
    bannerImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    logoText: "STE",
    logoBg: "bg-emerald-600 text-white",
    description: "Safaricom Ethiopia is a purpose-led technology company providing world-class mobile communications, data services, and financial technology across Ethiopia.",
    ratingsSnapshot: {
      overall: 4.5,
      workLife: 4.3,
      management: 4.1,
      careerGrowth: 4.6,
      compensation: 4.7,
      culture: 4.4,
      ceoApproval: 92,
      recommendToFriend: 88,
    },
    officialResponse: {
      author: "Safaricom Talent Team",
      date: "2026-06-15",
      text: "We value every piece of candid feedback on X-Ray. Our hybrid work arrangements and competitive compensation packages reflect our commitment to build Ethiopia's premier tech workplace."
    },
    benefits: [
      { name: "Full Medical Coverage", detail: "In-patient & out-patient for family", icon: "Medical" },
      { name: "Hybrid Work Flexibility", detail: "2 days WFH per week for eligible roles", icon: "Laptop" },
      { name: "Fuel & Transport Allowance", detail: "Monthly stipend based on level", icon: "Car" },
      { name: "Performance Bonus", detail: "Bi-annual performance incentives", icon: "Dollar" },
      { name: "Learning & Certification Budget", detail: "ETB 150,000 annual allowance", icon: "Book" }
    ],
    photos: [
      { id: 1, url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80", caption: "Bole HQ Open Collaboration Workspace", category: "Office" },
      { id: 2, url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80", caption: "Engineering & Product Hackathon", category: "Team" },
      { id: 3, url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80", caption: "Town Hall & Annual Celebration", category: "Events" },
      { id: 4, url: "https://images.unsplash.com/photo-1531973573860-f930d6870b92?auto=format&fit=crop&w=800&q=80", caption: "Cafeteria & Lounge", category: "Workplace" }
    ]
  },
  {
    id: "cbe",
    name: "Commercial Bank of Ethiopia",
    shortName: "CBE",
    tagline: "The bank you can always rely on",
    industry: "Banking & Financial Services",
    location: "Addis Ababa, Ras Abebe Aregay St",
    size: "10,000+ employees",
    website: "https://combanketh.et",
    verified: true,
    rating: 4.2,
    reviewCount: 890,
    salaryCount: 650,
    interviewCount: 142,
    openJobsCount: 28,
    bannerImage: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1600&q=80",
    logoText: "CBE",
    logoBg: "bg-amber-600 text-white",
    description: "The Commercial Bank of Ethiopia is the largest commercial bank in Ethiopia, pioneer in digital banking solutions with over 1,900 branches across the nation.",
    ratingsSnapshot: {
      overall: 4.2,
      workLife: 3.8,
      management: 3.9,
      careerGrowth: 4.4,
      compensation: 4.5,
      culture: 4.1,
      ceoApproval: 85,
      recommendToFriend: 81,
    },
    benefits: [
      { name: "Low-interest Housing Loans", detail: "Staff concessionary mortgage rates", icon: "Home" },
      { name: "Comprehensive Health Insurance", detail: "100% coverage at partner hospitals", icon: "Medical" },
      { name: "Annual Salary Increments", detail: "Grade-based annual adjustments", icon: "TrendingUp" }
    ],
    photos: [
      { id: 1, url: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=800&q=80", caption: "CBE Headquarters Tower", category: "Office" },
      { id: 2, url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80", caption: "Digital Banking Core Team", category: "Team" }
    ]
  },
  {
    id: "ethio-telecom",
    name: "Ethio Telecom",
    shortName: "Ethio Telecom",
    tagline: "Connecting Ethiopia to the Future",
    industry: "Telecommunications & Mobile Money",
    location: "Addis Ababa, Churchill Road",
    size: "10,000+ employees",
    website: "https://ethiotelecom.et",
    verified: true,
    rating: 4.1,
    reviewCount: 1120,
    salaryCount: 780,
    interviewCount: 210,
    openJobsCount: 19,
    bannerImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80",
    logoText: "ET",
    logoBg: "bg-blue-600 text-white",
    description: "Ethio Telecom is Ethiopia's state-owned telecommunications service provider and operator of telebirr mobile financial services.",
    ratingsSnapshot: {
      overall: 4.1,
      workLife: 4.0,
      management: 3.7,
      careerGrowth: 4.2,
      compensation: 4.3,
      culture: 4.0,
      ceoApproval: 89,
      recommendToFriend: 79,
    },
    benefits: [
      { name: "telebirr Staff Bonus", detail: "Quarterly division performance bonus", icon: "Dollar" },
      { name: "Subsidized Mobile & Data", detail: "Unlimited internal voice and data", icon: "Phone" }
    ],
    photos: [
      { id: 1, url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80", caption: "Data Center Operations Hub", category: "Office" }
    ]
  },
  {
    id: "kacha-digital",
    name: "Kacha Digital Financial Services",
    shortName: "Kacha",
    tagline: "First private payment issuer in Ethiopia",
    industry: "Fintech",
    location: "Addis Ababa, Kazanchis",
    size: "100 - 500 employees",
    website: "https://kacha.et",
    verified: false,
    rating: 4.7,
    reviewCount: 68,
    salaryCount: 45,
    interviewCount: 22,
    openJobsCount: 8,
    bannerImage: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=80",
    logoText: "K",
    logoBg: "bg-indigo-600 text-white",
    description: "Kacha is the pioneer private payment instrument issuer licensed by the National Bank of Ethiopia, driving financial inclusion through digital wallets.",
    ratingsSnapshot: {
      overall: 4.7,
      workLife: 4.5,
      management: 4.6,
      careerGrowth: 4.8,
      compensation: 4.6,
      culture: 4.8,
      ceoApproval: 96,
      recommendToFriend: 94,
    },
    benefits: [
      { name: "Stock Options / Equity", detail: "Early employee equity pool", icon: "TrendingUp" },
      { name: "Flexible Work Hours", detail: "Core hours 10 AM - 4 PM", icon: "Clock" }
    ],
    photos: []
  },
  {
    id: "ethiopian-airlines",
    name: "Ethiopian Airlines Group",
    shortName: "Ethiopian Airlines",
    tagline: "The New Spirit of Africa",
    industry: "Aviation & Logistics",
    location: "Addis Ababa, Bole International Airport",
    size: "10,000+ employees",
    website: "https://ethiopianairlines.com",
    verified: true,
    rating: 4.3,
    reviewCount: 1450,
    salaryCount: 920,
    interviewCount: 310,
    openJobsCount: 35,
    bannerImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=80",
    logoText: "ET",
    logoBg: "bg-amber-700 text-white",
    description: "Ethiopian Airlines is the largest aviation group in Africa and a SkyTeam partner airline, serving over 130 international destinations.",
    ratingsSnapshot: {
      overall: 4.3,
      workLife: 3.6,
      management: 4.0,
      careerGrowth: 4.7,
      compensation: 4.4,
      culture: 4.3,
      ceoApproval: 94,
      recommendToFriend: 86,
    },
    benefits: [
      { name: "Free & Discounted Flights", detail: "Concessionary airfare for staff & family", icon: "Plane" },
      { name: "Aviation Academy Sponsorship", detail: "Sponsored specialized training", icon: "Book" }
    ],
    photos: []
  }
];

export const MOCK_REVIEWS = [
  {
    id: "rev-1",
    companyId: "safaricom-ethiopia",
    companyName: "Safaricom Telecommunications Ethiopia",
    jobTitle: "Senior Software Engineer",
    department: "Technology & Digital",
    employmentStatus: "Current Employee",
    tenure: "More than 2 years",
    rating: 4.8,
    date: "2026-07-28",
    title: "Best engineering culture and compensation in Addis",
    pros: "Exceptional modern tech stack (React, Node, Go, Kubernetes). Great compensation package paid on time, zero bureaucratic drag compared to legacy enterprises, genuine hybrid work options.",
    cons: "Rapid growth means shifting priorities during quarterly sprints. High expectations for delivery.",
    adviceToManagement: "Keep investing in junior mentorship and local engineering talent development.",
    recommend: true,
    approveCeo: true,
    ratings: {
      workLife: 4.5,
      management: 4.5,
      growth: 5.0,
      compensation: 5.0,
      culture: 4.8
    }
  },
  {
    id: "rev-2",
    companyId: "safaricom-ethiopia",
    companyName: "Safaricom Telecommunications Ethiopia",
    jobTitle: "Product Manager",
    department: "Enterprise Business Unit",
    employmentStatus: "Former Employee",
    tenure: "1 - 2 years",
    rating: 4.2,
    date: "2026-06-12",
    title: "Fast-paced environment with unmatched growth",
    pros: "You get to launch products used by millions of Ethiopians. Solid leadership and great international exposure.",
    cons: "Long working hours during product launches.",
    adviceToManagement: "Ensure team sizing keeps up with product expansion.",
    recommend: true,
    approveCeo: true,
    ratings: {
      workLife: 3.5,
      management: 4.0,
      growth: 4.8,
      compensation: 4.5,
      culture: 4.2
    }
  },
  {
    id: "rev-3",
    companyId: "cbe",
    companyName: "Commercial Bank of Ethiopia",
    jobTitle: "Core Banking Specialist",
    department: "IT & Digital Banking",
    employmentStatus: "Current Employee",
    tenure: "More than 5 years",
    rating: 4.0,
    date: "2026-07-14",
    title: "Unbeatable job security and staff financial perks",
    pros: "Staff mortgage rates are life-changing. Great job stability, respect in the financial industry, and massive scale.",
    cons: "Approval processes can be slow due to compliance and government regulations.",
    adviceToManagement: "Accelerate cloud adoption and streamline internal developer workflows.",
    recommend: true,
    approveCeo: true,
    ratings: {
      workLife: 4.0,
      management: 3.5,
      growth: 4.0,
      compensation: 4.5,
      culture: 3.8
    }
  },
  {
    id: "rev-4",
    companyId: "kacha-digital",
    companyName: "Kacha Digital Financial Services",
    jobTitle: "Fullstack Developer",
    department: "Engineering",
    employmentStatus: "Current Employee",
    tenure: "1 - 2 years",
    rating: 4.9,
    date: "2026-08-02",
    title: "True startup energy with market-leading agility",
    pros: "We move extremely fast. Direct line of sight to executives, high autonomy, great team spirit.",
    cons: "We need more senior hires to spread the workload.",
    adviceToManagement: "Maintain this transparent culture as we scale.",
    recommend: true,
    approveCeo: true,
    ratings: {
      workLife: 4.5,
      management: 5.0,
      growth: 5.0,
      compensation: 4.8,
      culture: 5.0
    }
  }
];

export const MOCK_SALARIES = [
  {
    id: "sal-1",
    companyId: "safaricom-ethiopia",
    companyName: "Safaricom Telecommunications Ethiopia",
    role: "Senior Software Engineer",
    experience: "3 - 5 years",
    netMonthlySalary: "ETB 78,000",
    numericSalary: 78000,
    payPeriod: "Monthly Net",
    bonus: "ETB 120,000 / yr",
    updatedDate: "2026-07"
  },
  {
    id: "sal-2",
    companyId: "safaricom-ethiopia",
    companyName: "Safaricom Telecommunications Ethiopia",
    role: "Software Engineer",
    experience: "1 - 2 years",
    netMonthlySalary: "ETB 48,000",
    numericSalary: 48000,
    payPeriod: "Monthly Net",
    bonus: "ETB 60,000 / yr",
    updatedDate: "2026-06"
  },
  {
    id: "sal-3",
    companyId: "safaricom-ethiopia",
    companyName: "Safaricom Telecommunications Ethiopia",
    role: "Product Manager",
    experience: "3 - 5 years",
    netMonthlySalary: "ETB 85,000",
    numericSalary: 85000,
    payPeriod: "Monthly Net",
    bonus: "ETB 150,000 / yr",
    updatedDate: "2026-07"
  },
  {
    id: "sal-4",
    companyId: "cbe",
    companyName: "Commercial Bank of Ethiopia",
    role: "Database Administrator",
    experience: "5+ years",
    netMonthlySalary: "ETB 65,000",
    numericSalary: 65000,
    payPeriod: "Monthly Net",
    bonus: "Concessionary Loan Perks",
    updatedDate: "2026-05"
  },
  {
    id: "sal-5",
    companyId: "cbe",
    companyName: "Commercial Bank of Ethiopia",
    role: "Junior Developer",
    experience: "0 - 1 years",
    netMonthlySalary: "ETB 28,000",
    numericSalary: 28000,
    payPeriod: "Monthly Net",
    bonus: "Annual increment",
    updatedDate: "2026-06"
  },
  {
    id: "sal-6",
    companyId: "kacha-digital",
    companyName: "Kacha Digital Financial Services",
    role: "Backend Engineer",
    experience: "2 - 4 years",
    netMonthlySalary: "ETB 62,000",
    numericSalary: 62000,
    payPeriod: "Monthly Net",
    bonus: "Stock Options + Bonus",
    updatedDate: "2026-08"
  }
];

export const MOCK_INTERVIEWS = [
  {
    id: "int-1",
    companyId: "safaricom-ethiopia",
    companyName: "Safaricom Telecommunications Ethiopia",
    role: "Senior Software Engineer",
    difficulty: "Medium",
    outcome: "Accepted Offer",
    duration: "3 weeks",
    experience: "Positive",
    stages: [
      "Online Technical Screening (LeetCode style DSA + System Design)",
      "Technical Deep Dive with Principal Architect (1.5 hrs)",
      "Behavioral & Culture Fit with HR & Department Head"
    ],
    questions: [
      "How would you architect a distributed subscriber metering pipeline under high concurrency?",
      "Explain your approach to database indexing and query optimization in PostgreSQL."
    ],
    tips: "Focus heavily on real-world system resilience and clean API architectural patterns.",
    date: "2026-06-20"
  },
  {
    id: "int-2",
    companyId: "cbe",
    companyName: "Commercial Bank of Ethiopia",
    role: "Core Banking Systems Specialist",
    difficulty: "Medium",
    outcome: "Accepted Offer",
    duration: "4 weeks",
    experience: "Neutral",
    stages: [
      "Written Aptitude & Technical Exam (In-person)",
      "Panel Technical Interview with Engineering Committee",
      "Executive HR Verification"
    ],
    questions: [
      "What measures ensure transactional consistency across ISO 8583 banking switches?",
      "Walk us through disaster recovery protocols for database replication."
    ],
    tips: "Brush up on fundamental database transaction isolation levels and banking security protocols.",
    date: "2026-05-18"
  }
];

export const MOCK_JOBS = [
  {
    id: "job-1",
    companyId: "safaricom-ethiopia",
    companyName: "Safaricom Telecommunications Ethiopia",
    companyLogoText: "STE",
    companyLogoBg: "bg-emerald-600 text-white",
    title: "Senior Backend Engineer (Go / Node.js)",
    location: "Addis Ababa, Bole (Hybrid)",
    workType: "Hybrid",
    employmentType: "Full-Time",
    department: "Digital Financial Services (M-PESA)",
    salaryRange: "ETB 75,000 - 95,000 / month Net",
    postedDate: "2 days ago",
    featured: true,
    rating: 4.5,
    reviewCount: 342,
    description: "We are seeking a Senior Backend Engineer to build high-throughput microservices powering transaction routing, payment gateway integrations, and financial API orchestration.",
    requirements: [
      "5+ years backend software development experience in Go, Node.js, or Java",
      "Demonstrated experience designing high-scale RESTful & gRPC APIs",
      "Solid knowledge of PostgreSQL, Redis, Kafka, and Docker/Kubernetes",
      "Bachelor's degree in Computer Science or equivalent practical experience"
    ]
  },
  {
    id: "job-2",
    companyId: "safaricom-ethiopia",
    companyName: "Safaricom Telecommunications Ethiopia",
    companyLogoText: "STE",
    companyLogoBg: "bg-emerald-600 text-white",
    title: "Product Designer (UI/UX)",
    location: "Addis Ababa, Bole",
    workType: "On-site",
    employmentType: "Full-Time",
    department: "Digital Products",
    salaryRange: "ETB 55,000 - 75,000 / month Net",
    postedDate: "4 days ago",
    featured: false,
    rating: 4.5,
    reviewCount: 342,
    description: "Shape the digital consumer experience for millions of users across mobile apps and web platforms in Ethiopia.",
    requirements: [
      "3+ years experience designing mobile-first applications in Figma",
      "Strong portfolio demonstrating user research, wireframing, and design system usage"
    ]
  },
  {
    id: "job-3",
    companyId: "kacha-digital",
    companyName: "Kacha Digital Financial Services",
    companyLogoText: "K",
    companyLogoBg: "bg-indigo-600 text-white",
    title: "Fullstack React Developer",
    location: "Addis Ababa, Kazanchis",
    workType: "Hybrid",
    employmentType: "Full-Time",
    department: "Engineering",
    salaryRange: "ETB 60,000 - 80,000 / month Net",
    postedDate: "1 day ago",
    featured: true,
    rating: 4.7,
    reviewCount: 68,
    description: "Join our agile engineering team building next-generation digital wallet web interfaces and merchant dashboards.",
    requirements: [
      "3+ years experience with React.js, Tailwind CSS, and JavaScript",
      "Familiarity with REST APIs, state management, and web security"
    ]
  },
  {
    id: "job-4",
    companyId: "cbe",
    companyName: "Commercial Bank of Ethiopia",
    companyLogoText: "CBE",
    companyLogoBg: "bg-amber-600 text-white",
    title: "Cybersecurity Analyst",
    location: "Addis Ababa, HQ",
    workType: "On-site",
    employmentType: "Full-Time",
    department: "IT Security Operations",
    salaryRange: "ETB 50,000 - 70,000 / month Net",
    postedDate: "1 week ago",
    featured: false,
    rating: 4.2,
    reviewCount: 890,
    description: "Monitor and defend core digital banking infrastructure against cyber threats, manage SOC incidents, and perform vulnerability assessments.",
    requirements: [
      "Certifications such as CEH, CISSP, or CompTIA Security+",
      "Experience with SIEM tools, network traffic analysis, and incident response"
    ]
  }
];
