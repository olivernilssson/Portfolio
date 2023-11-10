import glob from 'fast-glob'

async function importProject(projectFilename) {
  let { project } = await import(`../app/projects/${projectFilename}`)

  return {
    slug: projectFilename.replace(/(\/page)?\.mdx$/, ''),
    ...project,
  }
}

export async function getAllProjects() {
  let projectFilenames = await glob('*/page.mdx', {
    cwd: './src/app/projects',
  })

  console.log('projectFilenames:', projectFilenames)

  let projects = await Promise.all(projectFilenames.map(importProject))

  console.log('projects:', projects)

  return projects.sort((a, z) => +new Date(z.date) - +new Date(a.date))
}
