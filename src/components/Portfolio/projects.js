/* array of project objects
      {
        key: unique,
        title: project title,
        blurb: for tile preview,
        image: image for tile,
        technologies: technologies used for the project,
        codeLink: link to project code,
        demoLink: link to project demo,
        description: for expanded tile,
      }
*/

const projects = [
  {
    key: 0,
    title: 'Personal Portfolio',
    image: 'portfolio.png',
    technologies: ['React', 'AWS', 'HTML', 'CSS'],
    codeLink: 'https://github.com/jake-steeves/jake-portfolio',
    demoLink: '',
    description:
      'I started this personal website as part of my onboarding process at HSA DEV. As I developed better engineering and project planning skills, I used my new experience to implement this site and practice what I had learned. This is a static website created using the React JavaScript library, using styled components for CSS. The github repo was configured by DEV standards for linting and continuous integration with Travis CI. Distributed on Amazon Web Services with S3 for serverless hosting and CloudFront to provide content distribution and SSL certification through ACM.'
  },
  {
    key: 1,
    title: 'Blockchain Course Feedback',
    image: 'classroom.png',
    technologies: ['Node.js', 'Truffle', 'Ganache', 'HTML', 'CSS'],
    codeLink: 'https://github.com/Benjamin-Lee/affluent',
    demoLink: '',
    description:
      'Final project for CS144: Network Design Projects. Our group utilized the Truffle development suite to create a decentralized application on top of the Ethereum blockchain allowing students to give anonymous yet verifiable course feedback at a faster rate than the traditional Q Evaluation system. Utilized Ganache in order to develop course contract protocols that enabled storage of lecture feedback on the blockchain, allowing modular analysis through traversal of the chain. Developed a web interface for feedback with a node server combined with HTML and CSS.'
  },
  {
    key: 2,
    title: 'RH Playlist',
    image: 'stage.jpg',
    technologies: [
      'Python',
      'Flask',
      'JavaScript',
      'HTML',
      'CSS',
      'MySQL',
      'AWS'
    ],
    codeLink: '',
    demoLink: '',
    description:
      'A web application created for the Record Hospital department of WHRB Cambridge 95.3FM. This site provides tools for storing the current albums on the department playlist of new music. DJs can log tracks when they are played, and then the site can automatically generate a top twenty chart, used as a playlist for the weekly top twenty radio show during primetime department hours. Stores archived playlist albums and past top twenty charts. Developed with the python flask framework, hosted on AWS elastic beanstalk with an RDS database. Configured for SSL with ACM and routed to the web through NameCheap.'
  },
  {
    key: 3,
    title: 'Public Image Botnet Controller',
    image: 'bots.jpg',
    technologies: ['Python', 'Flask', 'shell'],
    codeLink: 'https://github.com/jake-steeves/cs263-final-project',
    demoLink: 'https://github.com/jake-steeves/exfiltration-server',
    description:
      'Final project for CS263: Systems Security. Creates a protocol for encoding arbitrary strings used to execute commands in publically accessible images posted on social media. Coded Python scripts to convert data to bytecode for embedding in images. Configured public/private key pair signing for a verification process in the bot code, ensuring that decoded commands come from the authenticated controller. Configured a basic exfiltration server with Flask on AWS Elastic Beanstalk for potential use case demonstration.'
  },
  {
    key: 4,
    title: 'GroupMe Bots',
    image: 'groupme.png',
    technologies: ['Python', 'Flask', 'GCP'],
    codeLink: '',
    demoLink: '',
    description:
      'I utilized the GroupMe API with Python to scrape the messages of a personal group chat with my friends, and generate a wordbank of some of our semi-frequently used words. With this collection of words, I wrote a script to get a variable number of secret words, and configured a PeeWee Hermandroid to alert a message when a secret word has been said. I also added a library of smiley face images to send when the text on these images has been written in a message by a user. The callback server for the GroupMe bot is written in Flask with Python and hosted on the Google Cloud Platform through App Engine.'
  }
]

export default projects
