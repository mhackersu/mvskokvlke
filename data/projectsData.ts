interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'BFSIO',
    description: `A personal project where I am collecting various JS programs such as calculator, 
    calendar, task list, and weather app, into a collection of exercises for programming curriculum.`,
    imgSrc: '/static/images/bfsio.png',
    href: 'https://bfsio.net/',
  },
  {
    title: 'Foster CS',
    description: `Computer science curriculum for state-sponsored young-adults in foster care to
    have access to learn the basics of computer science and programming.`,
    imgSrc: '/static/images/foster-cs.png',
    href: 'https://fostercs.github.io/',
  },
]

export default projectsData
