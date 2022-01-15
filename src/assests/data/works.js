import placeholder from '../images/placeholder.png';
import ghoul_game from '../images/projects/ghoul_game.png';
import drWilk from '../images/projects/drWilk.png';
import cb from '../images/projects/cb.png';
import bigbrain from '../images/projects/bigbrain.jpg';
import webLogo from '../images/android-chrome-512x512.png';

// Projects I am working on
const works = [
  {
    id: 0,
    name: 'My Website',
    date: 'June 2021',
    flavorText: 'Personal website project to showcase my work and learn front-end development',
    desc:
      'I started working on my personal portfolio website in June 2021. In the beginning, it was made with plain HTML and CSS.' +
      'As of January 2021, I have updated the website to use React Js and given it a remodel.',
    img: webLogo,
    hasLink: true,
    link: 'https://robert-wilk.github.io/'
  },
  {
    id: 1,
    name: 'Clean Bot (CB)',
    date: 'August 2018 - December 2019',
    flavorText: 'A cleaning robot developed using the Lego NXT Platform',
    desc:
      'Cleanbot, nicknamed CB, was a robot I built as a high school senior for my graduation project. ' +
      'CB was built off of the Lego NXT platform with a few modifications to accomodate a rotating broom arm and dustpan. ' +
      'CB could move, sweep, and avoid obstacles just like a Roomba. ' +
      'Unlike a Roomba, Cleanbot used a ultrasonic sensor to observe its environment.',
    img: cb,
    hasLink: false,
    link: ''
  },
  {
    id: 2,
    name: 'D.R. Wilk Contracting Website',
    date: 'December 2021',
    flavorText: 'A website created for D.R. Wilk Contracting',
    desc:
      'D.R. Wilk Contracting is my Dad\'s business he has been running for 20+ years. His company has a presence on Facebook but an outdated website. ' +
      'As a winter project and test of my React knowledge, I created a website for him. I will place a link here once it is hosted',
    img: drWilk,
    hasLink: false,
    link: ''
  },
  {
    id: 3,
    name: 'Ghoul Game',
    date: 'October 2021',
    flavorText: 'A simple web game made for VolHacks V',
    desc:
      'Ghoul Game is a web game me and my partner Nick Jackson created at our first hackathon. The premise is simple, click to increase your score, but watch out! ' +
      'There is a chance that the Ghoul will appear. When the Ghoul appears, you will lose all of your points. ' +
      'The game was created using Django, PostgreSQL, JavaScript, HTML, and CSS',
    img: ghoul_game,
    hasLink: true,
    link: 'https://github.com/Robert-Wilk/Ghoul-Game'
  },
  {
    id: 4,
    name: 'Big Brain Bot',
    date: 'October 2019',
    flavorText: 'A Discord bot created in Java during my first semester of university',
    desc:
      'As an avid user of discord, I wanted to created a discord bot of my own. ' +
      'Using my limited programming knowledge, I gave the bot a few commands for users to test. ' +
      'I plan to come back to this bot to add extra features and possible change it over to JavaScript',
    img: bigbrain,
    hasLink: false,
    link: ''
  },
];

export default works;