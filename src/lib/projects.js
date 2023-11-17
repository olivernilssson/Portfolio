import glob from 'fast-glob'

async function importProject(projectFilename) {
  console.log("4")
  let { project } = await import(`../app/projects/${projectFilename}`)
  console.log("5")

  return {
    slug: projectFilename.replace(/(\/page)?\.mdx$/, ''),
    ...project,
  }
}

export async function getAllProjects() {
  console.log("0 test getAllProjects")
  let projectFilenames = await glob('*/page.mdx', {
    cwd: './src/app/projects',
  })
  console.log("1")
  return await Promise.all(projectFilenames.map(importProject)).then(projects => {
    console.log("2")
    const sortedProjects = projects.sort((a, z) => +new Date(z.date) - +new Date(a.date))
    console.log("3", sortedProjects)
    return sortedProjects
  })
}