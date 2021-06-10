import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Abjeet Singh', // e.g: 'Name | Developer'
  lang: 'EN', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio page', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'My name is ',
  name: 'Abjeet Singh',
  subtitle: 'Welcome to my portfolio page',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Aspiring Data Scientist currently pursuing MSc in Data Science at the University of Bristol with proven expertise in systems engineering and development with over two years of industry experience.',
  paragraphTwo: 'Skills: Python, R, AWS, Pytorch, Linux, GIT, PHP, MySQL, Tableau, NLP, Java',
  paragraphThree: 'Actively looking for data science and software engineering roles.',
  resume: 'https://drive.google.com/file/d/1El5dvL9IhyYivnP4Ki_8WpZSIdfuF2nz/view?usp=sharing', // if no resume, the button will not show up
};
// https://www.resumemaker.online/es.php
// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project_1.png',
    title: 'Analysis of retail-banking customer data - Lloyds Bank',
    info: 'Created machine learning models on a synthetic dataset provided by Lloyds Bank to predict anomaly detection and trend analysis on the dataset',
    info2: 'Performed feature engineering using Python notebooks in Jupyter using pandas, numpy, sklearn and other libraries.Implemented a custom decision tree to perform customer profiling and predict the low income customers in the dataset. Setup an environment on AWS EC2 to parallelize and remotely train the data model',
    //url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Project_2.png',
    title: 'Analysis of economic activity based on data from the UK census 2011',
    info: 'Created a Tableau Dashboard to analyse the diversity in the population living in England and Wales alongside their economic activity.',
    info2: 'Leveraged Parallel Coordinates Plot and Dimensionality Reduction Techniques like Principle Component Analysis and Gaussian Mixture Models to simplify the complicated data visualisations.',
    url: '',
    repo: 'https://github.com/Abjeet2/UK-census-2011-Analysis', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project_3.png',
    title: 'Personal Portfolio Website',
    info: 'Created a personal portfolio website by using domain from NameCheap, DNS by Cloudflare, static webpage using Gatsby.js and React.js, CI/CD pipelines using Netlify, custom domain mail hosting on Zoho and source code hosted on GitHub',
    info2: '',
    url: '',
    repo: 'https://github.com/Abjeet2/Abjeet2.github.io', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'hello@abjeetsingh.me',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/abjeetsingh/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Abjeet2',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
