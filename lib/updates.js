import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { remark } from 'remark'
import html from 'remark-html'

const updatesDirectory = path.join(process.cwd(), 'updates')

export function getSortedUpdatesData() {
  const fileNames = fs.readdirSync(updatesDirectory)
  const allUpdatesData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '')

    const fullPath = path.join(updatesDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    return {
      id,
      ...matterResult.data,
    }
  })

  return allUpdatesData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    } else {
      return 0
    }
  })
}

export function getAllUpdateIds() {
  const fileNames = fs.readdirSync(updatesDirectory)

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    }
  })
}

export async function getUpdateData(id) {
  const fullPath = path.join(updatesDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString('utf-8')

  return {
    id,
    contentHtml,
    ...matterResult.data,
  }
}
