import fs from "fs"
import path from "path"
import matter from "gray-matter"

const NOTES_PATH = path.join(process.cwd(), "src/content/labnote")

export function getNoteSlugs() {
  return fs.readdirSync(NOTES_PATH).filter(file => file.endsWith(".mdx"))
}

export function getNoteBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, "")
  const filePath = path.join(NOTES_PATH, `${realSlug}.mdx`)
  const fileContent = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(fileContent)

  return {
    slug: realSlug,
    meta: data,
    content,
  }
}

export function getAllNotes() {
  return getNoteSlugs()
    .map(slug => getNoteBySlug(slug))
    .sort((a, b) =>
      new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
    )
}
