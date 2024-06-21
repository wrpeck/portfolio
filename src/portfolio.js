/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Wesley Peck | Technical Product Manager",
  description:
    "A technical product manager focused on bringing innovation, collaboration, and a sense of humor to software development.",
  og: {
    title: "Wesley Peck Portfolio",
    type: "website",
    url: "http://www.wesleyp.dev",
  },
};

//Home Page
const greeting = {
  title: "Wesley Peck",
  logo_name: "AshutoshHathidara",
  // nickname: "layman_brother",
  subTitle:
    "A technical product manager focused on bringing innovation, collaboration, and a sense of humor to software development.",
  // resumeLink:
  //   "https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvI/view?usp=sharing",
  // portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/wrpeck",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/wrpeck",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/wesley-peck/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:wesley@wesleyp.dev",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://x.com/Icaruswes",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/waaasley/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Product Management",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Agile and Scrum software development methodologies",
        "⚡ Portfolio management, feature prioritization, and backlog management",
        "⚡ Complex stakeholder management",
        "⚡ UI/UX design, refinement, and user testing",
      ],
      softwareSkills: [],
    },
    {
      title: "Data & Data Analysis",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Cost, price, and revenue modeling for technology products",
        "⚡ Linear regression and statistical analysis",
        "⚡ SQL and NoSQL data sources",
      ],
      softwareSkills: [],
    },

    {
      title: "Cloud Tools",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ SQL and NoSQL database solutions",
        "⚡ Cloud authentication setup and customization",
        "⚡ Fullstack and backend application hosting",
        "⚡ REST and GraphQL APIs",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
      ],
    },
    {
      title: "Languages and Frameworks",
      fileName: "FullStackImg",
      skills: [
        "⚡ Cross-Platform mobile app development with Flutter",
        "⚡ Fullstack web development with React and NodeJS",
        "⚡ Game development with Unity and C#",
      ],
      softwareSkills: [
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Unity",
          fontAwesomeClassname: "simple-icons:unity",
          style: {
            color: "#4A4A4A",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "LeetCode",
    //   iconifyClassname: "simple-icons:leetcode",
    //   style: {
    //     color: "#F79F1B",
    //   },
    //   profileLink: "https://leetcode.com/layman_brother/",
    // },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of San Diego",
      subtitle: "Masters of Business Administration",
      // logo_path: "iu_logo.png",
      alt_name: "Indiana University Bloomington",
      duration: "Graduated 2019",
      descriptions: [
        "⚡ Concentrated in corporate finance and studied project valuation, international finance, and small business profitability",
        "⚡ Also took courses in data anlysis, unstructured data transformation, and machine learning",
        "⚡ Led study and presented on environmental impact of university beef sourcing",
      ],
      website_link: "https://www.sandiego.edu/",
    },
    {
      title: "Azusa Pacific University",
      subtitle: "B.A. in English Literature",
      // logo_path: "apu.jpg",
      alt_name: "Azusa Pacific University",
      duration: "Graduated 2012",
      descriptions: [
        "⚡ Specialty in late American literature and the Southern Gothics",
        "⚡ Also studied linguistics, language acquisition, and psycho/sociolinguistics",
        "⚡ Published critical gender analysis of Chuck Palahniuk's novel 'Fight Club'",
      ],
      website_link: "http://www.apu.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "Machine Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "stanford_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
    // {
    //   title: "Deep Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "Data Science",
    //   subtitle: "- Alex Aklson",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Professional Experience",
  // subtitle: "Work, Internship and Volunteership",
  description:
    "Developer Tooling | Ecommerce | Supply Chain | Support Technology",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Senior Product Manager - Technical",
          company: "Amazon Web Services",
          company_url: "https://www.aws.com/",
          logo_path: "aws.svg",
          duration: "June 2022 - November 2023",
          location: "Remote",
          description: [
            "Owned and managed product portfolio strategy, vision, and roadmap for Amplify Studio, a global SaaS devtool",
            "Created and implemented Amplify Hosting pricing model, leading to 75% retention and high profitability",
            "Designed and tested user workflows for Amplify Gen2 CLI and infrastructure-as-code iteration cycle",
            "Led zero-to-one cross-functional product design and implementation of Amplify Gen2 DevOps web console",
            "Drove 30% growth in 6 months for Amplify Studio by adjusting product roadmap based on customer feedback",
            "Defined, tracked, and presented data on user acquisition, engagement, retention/churn, and industry trends",
            "Used SQL and advanced data analysis to create and standardize KPIs across all Amplify services",
            "Conducted research and user interviews to identify customer pain points and inform feature prioritization",
            "Successfully navigated flexible projects with highly ambiguous requirements",
            "Created and presented monthly business reports, including performance, strategy, and long term product vision",
            "Exhibited confident decision making, strong analytical skills, and well-attuned customer empathy",
          ],
          color: "#000000",
        },
        {
          title: "Technical Product Manager",
          company: "Petco Pet Supplies, inc.",
          company_url: "https://petco.com/",
          logo_path: "petco.svg",
          duration: "June 2021 - June 2022",
          location: "San Diego, CA",
          description: [
            "Owned and managed product roadmap and backlog for omnichannel Ecommerce Order Management system",
            "Managed and influenced stakeholder relationships without formal authority, including C-level stakeholders",
            "Implemented next-gen sourcing system, generating $2.5M annual savings",
            "Overcame technical constraints to repeat delivery engine feature, saving over $2M annually",
            "Established and managed a data-driven prioritization and road-mapping process that aligned with strategic goals",
            "Communicated complex topics to stakeholders and partners with varying levels of technical background",
          ],
          color: "#0879bf",
        },
        {
          title: "Support Technology Product Manager",
          company: "University of San Diego",
          company_url: "https://www.sandiego.edu/",
          logo_path: "usd.png",
          duration: "July 2017 - June 2021",
          location: "San Diego, CA",
          description: [
            "Owned and managed product roadmap and backlog for call center and ITSM products",
            "Designed, user tested, and implemented complex UX for computer repair workflow, reducing user errors by 87%",
            "Shipped soft-phone call routing feature that reduced time-to-answer KPI by 75%",
            "Led zero-to-one design and implementation of internal webapp (JQuery / PHP) for scheduling and communication",
            "Rapidly designed and implemented Twilio telephony/IVR MVP in 3 weeks to address COVID crisis",
            "Managed team of 5 full-time and 35 part-time customer service agents for USD Contact Center",
          ],
          color: "#9b1578",
        },
        {
          title: "Lead Technology Support Analyst",
          company: "University of San Diego",
          company_url: "https://www.sandiego.edu/",
          logo_path: "usd.png",
          duration: "September 2012 - November 2017",
          location: "San Diego, CA",
          description: [
            "Led a team of four full-time staff in supporting technology for students, staff, and faculty at the University of San Diego",
            "Designed first metrics and KPIs for USD IT department call center",
            "Designed and executed training for student employees",
            "Provided campus training on anti-phishing practices and personal IT security",
            "Developed IT Help Desk professional development program",
          ],
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Consultation",
      experiences: [
        {
          title: "Coming soon...",
          company: "TBD",
          company_url: "https://about.google/",
          // logo_path: "usd.png",
          duration: "June 2019 - April 2020",
          location: "San Diego, CA",
          description: ["Example consulting coming soon"],
          color: "#4285F4",
        },
        // {
        //   title: "Microsoft Student Partner",
        //   company: "Microsoft",
        //   company_url: "https://www.microsoft.com/",
        //   logo_path: "microsoft_logo.png",
        //   duration: "Aug 2019 - May 2020",
        //   location: "Hyderabad, Telangana",
        //   description:
        //     "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
        //   color: "#D83B01",
        // },
        // {
        //   title: "Mozilla Campus Captain",
        //   company: "Mozilla",
        //   company_url: "https://www.mozilla.org/",
        //   logo_path: "mozilla_logo.png",
        //   duration: "Oct 2019 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
        //   color: "#000000",
        // },
        // {
        //   title: "Developer Students Club Member",
        //   company: "DSC IIITDM Kurnool",
        //   company_url:
        //     "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
        //   logo_path: "dsc_logo.png",
        //   duration: "Jan 2018 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
        //   color: "#0C9D58",
        // },
        // {
        //   title: "Developer Program Member",
        //   company: "Github",
        //   company_url: "https://github.com/",
        //   logo_path: "github_logo.png",
        //   duration: "July 2019 - PRESENT",
        //   location: "Work From Home",
        //   description:
        //     "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
        //   color: "#181717",
        // },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
