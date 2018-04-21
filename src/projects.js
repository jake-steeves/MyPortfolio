/* array of project objects
      { 'key': unique,
        'title': project title,
        'blurb': for tile preview,
        'description': for expanded tile,
        'image': image for tile,
        'languages': languages used for the project,
        'codeLink': link to project code,
        'demoLink': link to project demo
      }
*/

const projects = [
  { 'key': 0,
    'title': 'RH Playlist',
    'blurb': 'I created this web site for Record Hospital DJs to digitally log songs they play from the playlist of new music. It also automates the creation and publication of weekly top twenty charts.',
    'description': 'TODO: add a description',
    'image': 'TODO',
    'languages': ['Python', 'JavaScript', 'HTML', 'CSS', 'MySQL'],
    'codeLink': 'https://www.google.com',
    'demoLink': 'https://rhplaylist.com' },
  { 'key': 1,
    'title': 'CS263 Final Project',
    'blurb': 'Final project for CS263: Systems Security. We created a protocol for a botnet controller to communicate over Twitter replies via scripts encoded in publically posted images.',
    'description': 'TODO: add a description',
    'image': 'TODO',
    'languages': ['Python', 'shell'],
    'codeLink': 'https://github.com/jake-steeves/cs263-final-project',
    'demoLink': '' },
  { 'key': 2,
    'title': 'GroupMe Bots',
    'blurb': 'Using the GroupMe API and Google Cloud Platform\'s App Engine, I set up bots to perform functions in a personal group chat. A PeeWee Hermandroid stores a list of secret words, and another bot sends pictures of smiley faces that contain text corresponding to certain phrases.',
    'description': 'TODO: add a description',
    'image': 'TODO',
    'languages': ['Python', 'shell'],
    'codeLink': '',
    'demoLink': '' }
];

export default projects;
