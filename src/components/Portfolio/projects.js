/* array of project objects
      {
        key: unique,
        title: project title,
        blurb: for tile preview,
        description: for expanded tile,
        image: image for tile,
        technologies: technologies used for the project,
        codeLink: link to project code,
        demoLink: link to project demo
      }
*/

const projects = [
  {
    key: 0,
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
    codeLink: 'https://www.google.com',
    demoLink: 'https://rhplaylist.com',
    description:
      'A web application created for the Record Hospital department of WHRB Cambridge 95.3FM. This site provides tools for storing the current albums on the department playlist of new music. DJs can log tracks when they are played, and then the site can automatically generate a top twenty chart, used as a playlist for the weekly top twenty radio show during primetime department hours. Stores archived playlist albums and past top twenty charts. Developed with the python flask framework, hosted on AWS elastic beanstalk with an RDS database. Configured for SSL with ACM and routed to the web through NameCheap.'
  },
  {
    key: 1,
    title: 'Public Image Botnet Controller',
    description: 'TODO: add a description',
    image: 'bots.jpg',
    technologies: ['Python', 'Flask', 'shell'],
    codeLink: 'https://github.com/jake-steeves/cs263-final-project',
    demoLink: ''
  },
  {
    key: 2,
    title: 'GroupMe Bots',
    description: 'TODO: add a description',
    image: 'groupme.png',
    technologies: ['Python', 'Flask', 'shell', 'GCP'],
    codeLink: '',
    demoLink: ''
  }
]

export default projects
