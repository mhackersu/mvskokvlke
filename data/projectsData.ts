interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'BFSIO',
    description: `IaaS Research Collection`,
    imgSrc: '/static/images/bfsio.png',
    href: 'https://bfsio.net/',
  },
  {
    title: 'Foster Academy',
    description: `Foster Academy is an Online Computer Science College Prep Specifically Designed for K-12 in Foster Care.`,
    imgSrc: '/static/images/foster-academy.png',
    href: 'https://foster-academy.github.io/',
  },
]

export default projectsData
