import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/Activity.jpg';
import UTrackerImg from '../images/overflow.jpg';
import GreenCtgImg from '../images/Number.png';
import CoinTrackerImg from '../images/Github.png';
import CavinImg from '../images/frolic.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Stack Overflow Developer Survey Analysis',
    desc:
      'Data analysis and visualization of Stack Overflow Developer using Machine Learning.',
    img: UTrackerImg,
    link: 'https://github.com/Shemonti/Project-Stack-overflow-survey',
  },
  {
    id: uuidv4(),
    name: 'Guess_The_Number',
    desc:
      'A number guessing game where people guess the number within three time.it is mainly a javascript project.',
    img: GreenCtgImg,
    link: 'https://shemonti.github.io/Guess_The_Number/',
  },
  {
    id: uuidv4(),
    name: 'Github_Finder',
    desc:
      'A javascript project where people can find the profile of github user and their details.',
    img: CoinTrackerImg,
    link: 'https://shemonti.github.io/github_finder/',
  },
  {
    id: uuidv4(),
    name: 'Frolic_City',
    desc:
      'An entertainment place where people can pass their free time by listening music , reading books and what not. .',
    img: CavinImg,
    link: 'https://shemonti.github.io/',
  },
  {
    id: uuidv4(),
    name: 'Human activity Recognition With smartphone',
    desc:
      'A Machine Learning model using Python and Logistic Regression to classify activities into one of the six activities performed.',
    img: ProjectImg,
    link:
      'https://github.com/Shemonti/Project-Human_Activity_Recognition_Using_Smartphone',
  },
];

export default projects;
