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
    blurb: 'RH Playlist',
    description: 'TODO: add a description',
    image: 'stage.jpg',
    technologies: ['Python', 'JavaScript', 'HTML', 'CSS', 'MySQL'],
    codeLink: 'https://www.google.com',
    demoLink: 'https://rhplaylist.com'
  },
  {
    key: 1,
    title: 'CS263 Final Project',
    blurb: 'Public Image Botnet Controller',
    description: 'TODO: add a description',
    image: 'bots.jpg',
    technologies: ['Python', 'shell'],
    codeLink: 'https://github.com/jake-steeves/cs263-final-project',
    demoLink: ''
  },
  {
    key: 2,
    title: 'GroupMe Bots',
    blurb: 'GroupMe Bots',
    description: 'TODO: add a description',
    image: 'groupme.png',
    technologies: ['Python', 'shell'],
    codeLink: '',
    demoLink: ''
  }
]

export default projects
