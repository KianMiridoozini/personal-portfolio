import {
    frontEndIcon,
    backEndIcon,
    toolsIcon,
    interpersonalIcon,
    web_1,
    web_2,
    web_3,
    web_4,
    // experience logos
    ITMesterenLogo,
    BrandBarLogo,
    // education logos
    easvIcon,
    seaIcon,
    ///photography
    // bbq 
    photo_bbq_1,
    photo_bbq_2,
    photo_bbq_3,
    photo_bbq_4,
    photo_bbq_5,
    photo_bbq_6,
    // boat
    photo_boat_1,
    photo_boat_2,
    photo_boat_3,
    // other
    photo_other_1,
    photo_other_2,
    photo_other_3,
    photo_other_4,
    photo_other_5,
    photo_other_6,
    photo_other_7,
    photo_other_8,
    photo_other_9,
    photo_other_10,
    photo_other_11,
    photo_other_12,
    photo_other_13,
    photo_other_14,
    photo_other_15,
    photo_other_16,
    photo_other_17,
    photo_other_18,
    photo_other_19,
    photo_other_20,
    photo_other_21,
    photo_other_22,
    photo_other_23,
    photo_other_24,
    photo_other_25,
    photo_other_26,
    photo_other_27,
    photo_other_28,
    ///design
    //hpbc
    design_hbpc_1,
    design_hbpc_2,
    //kmc
    design_kmc_1,
    design_kmc_2,
    //mandula
    design_mandula_1,
    design_mandula_2,
    design_mandula_3,
    design_mandula_4,
    design_mandula_5,
    design_mandula_6,
    //other
    design_other_1,
    design_other_2,
    design_other_3,
} from './imgImport';



export const SKILLS = [
    {
        title: "Frontend",
        icon: frontEndIcon,
        skills: [
            { skill: "HTML", percentage: "80%" },
            { skill: "CSS", percentage: "75%" },
            { skill: "TypeScript", percentage: "70%" },
            { skill: "Vue.js", percentage: "70%" },
            { skill: "Angular", percentage: "55%" },
            { skill: "Laravel", percentage: "65%" },
            { skill: "React.js", percentage: "50%" },
        ],
    },
    {
        title: "Backend",
        icon: backEndIcon,
        skills: [
            { skill: "PHP", percentage: "80%" },
            { skill: "Node.js", percentage: "70%" },
            { skill: "Express.js", percentage: "65%" },
            { skill: "Nest.js", percentage: "70%" },
            { skill: "SQL", percentage: "90%" },
            { skill: "NoSQL", percentage: "75%" },
        ],
    },
    {
        title: "Tools",
        icon: toolsIcon,
        skills: [
            { skill: "Git & GitHub", percentage: "80%" },
            { skill: "Visual Studio Code", percentage: "80%" },
            { skill: "Wordpress", percentage: "75%" },
            { skill: "Tailwind", percentage: "70%" },
            { skill: "Bootstrap", percentage: "70%" },
            { skill: "AI", percentage: "85%" },
        ],
    },
    {
        title: "Interpersonal",
        icon: interpersonalIcon,
        skills: [
            { skill: "Problem Solving", percentage: "85%" },
            { skill: "Collaboration", percentage: "85%" },
            { skill: "Attention to Detail", percentage: "75%" },
            { skill: "English", percentage: "95%" },
            { skill: "Danish", percentage: "60%" },
        ],
    },
];

export const EXPERIENCE = [
    {
        title: "Web Development Intern",
        company: "IT-Mesteren",
        duration: "2025 (10 weeks)",
        location: "Esbjerg, Denmark",
        description: "During my internship at IT-Mesteren, I had the opportunity to work on various tasks, gaining hands-on experience with the development of custom Wordpress solutions. This experience allowed me to enhance my coding skills, understand real-world implementations, and improve my ability to work more effectively in a professional environment.",
        logo: ITMesterenLogo,
        link: "https://www.it-mesteren.dk",
    },
    {
        title: "Multimedia Intern",
        company: "Brand Bar",
        duration: "2024 (10 weeks)",
        location: "Budapest, Hungary",
        description: "During my international internship in Hungary I was tasked to provide digital solutions such as designing logos and creating website prototypes, and general work regarding the brand identity of clients.",
        logo: BrandBarLogo,
        link: "https://www.brandbar.hu/",
    }
]

export const EDUCATION = [
    {
        title: "Web Development",
        institute: "Syddansk Erhvervsakademi",
        duration: "2024 - 2026",
        location: "Esbjerg, Denmark",
        logo: seaIcon,
        Description: [
            "I have honed my skills in both frontend and backend development. Gained experience with SQL and NoSQL databases to build robust server environments using frameworks ranging from the opinionated NestJS to more flexible options like Express. On the frontend, I develop dynamic applications with Vue, React, Laravel, and Angular, as well as custom solutions built from scratch using my own coding principles. Additionally, I design REST APIs, leverage GraphQL for efficient data querying, and implement AAA testing with Playwright.",
        ],
    },
    {
        title: "Multimedia Design",
        institute: "Erhvervsakademi Sydvest",
        duration: "2022 - 2024",
        location: "Esbjerg, Denmark",
        logo: easvIcon,
        Description: [
            "Learned and gained experience working with various forms of digital and physical media. From web-design utilizing HTML & CSS along with PHP and JavaScript to using frameworks such as Vue and CMSs such as Wordpress to content creation via digital media and camera handling.",
        ],

    }
];

export const PROJECTS = [
    {
        category: 'web',
        title: "Portfolio",
        description: "A portfolio website where you can view my projects, skills, and experience. Built using ReactJS.",
        imgUrl: web_1,
        link: "https://github.com/kianmiridoozini/portfolio",
    },
    {
        category: 'web',
        title: "CheekStash",
        description: "A platform where users can share what they believe are useful websites or tools. Built using Nest.js and Angular.",
        imgUrl: web_2,
        link: "https://github.com/kianmiridoozini/cheekstash",
    },
    {
        category: 'web',
        title: "Drinx",
        description: "A platform where users can share their favorite drink recipes. Built ground up using PHP.",
        imgUrl: web_3,
        link: "https://drinx.info",
    },
    {
        category: 'web',
        title: "BBQ Catering",
        description: "A website for a local BBQ catering company. Developed using Wordpress.",
        imgUrl: web_4,
        link: "https://bbqcatering.dk",
    },
    {
        category: 'photography',
        imgUrl: photo_bbq_1,
    },
    {
        category: 'photography',
        imgUrl: photo_bbq_2,
    },
    {
        category: 'photography',
        imgUrl: photo_bbq_3,
    },
    {
        category: 'photography',
        imgUrl: photo_other_27,
    },
    {
        category: 'photography',
        imgUrl: photo_other_28,
    },
    {
        category: 'photography',
        imgUrl: photo_bbq_4,
    },
    {
        category: 'photography',
        imgUrl: photo_bbq_5,
    },
    {
        category: 'photography',
        imgUrl: photo_bbq_6,
    },
    {
        category: 'photography',
        imgUrl: photo_boat_1,
    },
    {
        category: 'photography',
        imgUrl: photo_boat_2,
    },
    {
        category: 'photography',
        imgUrl: photo_boat_3,
    },
    {
        category: 'photography',
        imgUrl: photo_other_1,
    },
    {
        category: 'photography',
        imgUrl: photo_other_2,
    },
    {
        category: 'photography',
        imgUrl: photo_other_3,
    },
    {
        category: 'photography',
        imgUrl: photo_other_4,
    },
    {
        category: 'photography',
        imgUrl: photo_other_5,
    },
    {
        category: 'photography',
        imgUrl: photo_other_6,
    },
    {
        category: 'photography',
        imgUrl: photo_other_7,
    },
    {
        category: 'photography',
        imgUrl: photo_other_8,
    },
    {
        category: 'photography',
        imgUrl: photo_other_9,
    },
    {
        category: 'photography',
        imgUrl: photo_other_10,
    },
    {
        category: 'photography',
        imgUrl: photo_other_11,
    },
    {
        category: 'photography',
        imgUrl: photo_other_12,
    },
    {
        category: 'photography',
        imgUrl: photo_other_13,
    },
    {
        category: 'photography',
        imgUrl: photo_other_14,
    },
    {
        category: 'photography',
        imgUrl: photo_other_15,
    },
    {
        category: 'photography',
        imgUrl: photo_other_16,
    },
    {
        category: 'photography',
        imgUrl: photo_other_17,
    },
    {
        category: 'photography',
        imgUrl: photo_other_18,
    },
    {
        category: 'photography',
        imgUrl: photo_other_19,
    },
    {
        category: 'photography',
        imgUrl: photo_other_20,
    },
    {
        category: 'photography',
        imgUrl: photo_other_21,
    },
    {
        category: 'photography',
        imgUrl: photo_other_22,
    },
    {
        category: 'photography',
        imgUrl: photo_other_23,
    },
    {
        category: 'photography',
        imgUrl: photo_other_24,
    },
    {
        category: 'photography',
        imgUrl: photo_other_25,
    },
    {
        category: 'photography',
        imgUrl: photo_other_26,
    },
    {
        category: 'design',
        imgUrl: design_hbpc_1,
    },
    {
        category: 'design',
        imgUrl: design_hbpc_2,
    },
    {
        category: 'design',
        imgUrl: design_kmc_1,
    },
    {
        category: 'design',
        imgUrl: design_kmc_2,
    },
    {
        category: 'design',
        imgUrl: design_mandula_1,
    },
    {
        category: 'design',
        imgUrl: design_mandula_2,
    },
    {
        category: 'design',
        imgUrl: design_mandula_3,
    },
    {
        category: 'design',
        imgUrl: design_mandula_4,
    },
    {
        category: 'design',
        imgUrl: design_mandula_5,
    },
    {
        category: 'design',
        imgUrl: design_mandula_6,
    },
    {
        category: 'design',
        imgUrl: design_other_1,
    },
    {
        category: 'design',
        imgUrl: design_other_2,
    },
    {
        category: 'design',
        imgUrl: design_other_3,
    },

];