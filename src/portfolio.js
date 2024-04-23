/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Sai's Portfolio",
  description:
    "A passionate individual who always thrives to make a difference.",
  og: {
    title: "Sai Baba Portfolio",
    type: "website",
    url: "http://saibaba.com/",
  },
};

//Home Page
const greeting = {
  title: "Sai Baba K",
  logo_name: "SaiBaba",
  nickname: "Raghuvaran",
  subTitle: "A passionate individual who always thrives to make a difference.",
  resumeLink:
    "https://drive.google.com/file/d/1vfSOjj8UM0wDkO6Q51II3KNMIsnc1UXY/view?usp=sharing",
  portfolio_repository: "https://github.com/Saibaba161/Portfolio",
  githubProfile: "https://github.com/Saibaba161",
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
    link: "https://github.com/Saibaba161",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sai-baba-569a01255/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:kothasaibaba460@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/venkat_1610",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },

  {
    name: "Instagram",
    link: "https://www.instagram.com/giridhar_134/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React",

        "⚡ Creating application backend using Node, Express & MongoDB",
      ],
      softwareSkills: [
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
          skillName: "TypeScript",
          fontAwesomeClassname: "skill-icons:typescript",
          style: {
            color: "#F7DF1E",
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
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },

        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "RVR & JC College of Engineering",
      subtitle: "B.Tech. in Electronics and Communication Engineering",
      logo_path: "rvrjc.png",
      alt_name: "RVR & JC",
      duration: "2020 - 2024",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS.",
        "⚡ Apart from this, I have done courses on Web Development during my internships here.",
      ],
      website_link: "http://iiitk.ac.in",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Web Development",
      subtitle: "- Internshala",
      logo_path: "internshala.png",
      certificate_link:
        "https://drive.google.com/file/d/1_isQVFD55TjaZYcQl_Qg186wFdBXxZTH/view?usp=drive_link",
      alt_name: "Internshala",
      color_code: "#8C151599",
    },
    {
      title: "Introduction to Generative AI",
      subtitle: "- Google",
      logo_path: "googleskillsboost.png",
      certificate_link:
        "https://www.cloudskillsboost.google/course_templates/536",
      alt_name: "googleskillsboost",
      color_code: "#00000099",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internships",
  description:
    "As a fresher, I have done some internships during my college years. They helped me gain knowledge and exposure to the competetive world. I love organising events and that is why I am also involved with the SICO( Student Integration Committee) of our college. I also love writing articles and blogs",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      work: true,
      experiences: [
        {
          title: "Internship and Training on Web Development",
          company: "Internshala",
          company_url: "https://internshala.com/",
          logo_path: "internshala.png",
          duration: "May 2023 - June 2023",
          location: "Remote",
          description:
            "This is my introductory course to Web Development. Here, I got to learn about the basics of Web Development like HTML, CSS, JavaScript, PHP.",
          color: "#000000",
        },
        {
          title: "Content Writing Intern",
          company: "Bookswagon",
          company_url: "https://www.bookswagon.com/",
          logo_path: "bookswagon_logo.png",
          duration: "Dec 2023 - Jan 2024",
          location: "Remote",
          description:
            "At Bookswagon, I have got the opportunity to showcase my Content Writing skills. I have written about 30+ articles in a limited amount of time.",
          color: "#0879bf",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects are the breeding grounds of my knowledge and experience. I mostly look to learn from projects",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },
  blogSection: {},
  addressSection: {
    title: "Address",
    subtitle: "Guntur, Andhra Pradesh",
    locality: "Guntur",
    country: "India",
    region: "Andhra Pradesh",
    postalCode: "522403",
    streetAddress: "Railway Station Road",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/contrib/107715541095419479318/place/ChIJAQAAQOd2SjoRoG1ccZiEHMQ/@16.2547606,80.2846976,13z/data=!4m6!1m5!8m4!1e2!2s107715541095419479318!3m1!1e1?entry=ttu",
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
