import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Brandon | Intern Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Brandon Roberts',
  subtitle: 'Intern Developer.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Hi, my name is Brandon Roberts, Intern Developer. Currently studying Computer Science at Northern Arizona University. Looking to work with a company that will advance my skills as a developer while also making an impact in the innovations of tomorrow.',
  paragraphTwo: 'Worked with Yavapai County GIS to develop applications for implementing systems and databases for geospatial data. Well-versed in Java/Python having 4+ years of experience. 2 years with C/C++/C# as well as PHP development in a web dev environment.',
  paragraphThree: 'Thank you for taking the time to look at who I am!',
  resume: 'https://drive.google.com/file/d/10cOqXK1Oau7AQnhNYaarcQHSlodmKRyl/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'capture.jpg',
    title: 'Peer Pad',
    info: 'A web based system for students / writers where members create a profile and upload their papers to get their work peer reviewed in exchange for peer reviewing other members work. We are driving for a healthy community and would like to thank you for your interest or viewing of Peer Pad.',
    info2: '',
    url: '',
    repo: 'https://github.com/brobert8/CS386-Group2', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Compare Geodatabases ',
    info: 'The tool developed during my time with Yavapai County, creates a list of discrepancies between two geodatabases.',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  }
//  {
//    id: nanoid(),
//    img: 'project.jpg',
//    title: '',
//    info: '',
//    info2: '',
//    url: '',
//    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
//  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Contact me!',
  btn: 'dagger8121@gmail.com',
  email: 'dagger8121@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    //{
    //  id: nanoid(),
    //  name: 'twitter',
    // url: '',
    //},
    //{
    //  id: nanoid(),
    // name: 'codepen',
    // url: '',
    //},
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/brandon-roberts-a8b128147/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/brobert8',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
