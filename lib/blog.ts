import fs from "fs";
import matter from "gray-matter";
import path from "path";

const postsDirectory = path.join(process.cwd(), "content/blog");
const pagesDirectory = path.join(process.cwd(), "content/pages");

export async function getAllSlugs(directory: string) {
  return fs
    .readdirSync(directory)
    .filter((fn) => fn.match(/\.md$/))
    .map((name) => path.basename(name, ".md"));
}

export async function getAllPages() {
  return getAllSlugs(pagesDirectory);
}

export async function getAllBlogaseks() {
  return getAllSlugs(postsDirectory);
}

export async function getPageData(slug: string) {
  const postPath = path.join(pagesDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(postPath, "utf8");
  const parsed = matter(fileContents);
  const { data, content } = parsed;
  return {
    slug: data.slug,
    title: data.title,
    content: content,
    filename: postPath
  };
}
