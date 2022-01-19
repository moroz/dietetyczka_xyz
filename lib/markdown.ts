import { marked } from "marked";

export async function formatMarkdown(md: string) {
  return marked(md);
}
