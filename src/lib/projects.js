import glob from 'fast-glob'

export async function importProject(projectFilename) {
  let { project } = await import(`../app/projects/${projectFilename}`)
  console.log("test")
  console.log(project.title)

  return {
    slug: projectFilename.replace(/(\/page)?\.mdx$/, ''),
    ...project,
  }
}

export async function getAllProjects() {
  let projectFilenames = await glob('*/page.mdx', {
    cwd: './src/app/projects',
  })

  let projects = await Promise.all(projectFilenames.map(importProject))

  return projects.sort((a, z) => +new Date(z.date) - +new Date(a.date))
}
