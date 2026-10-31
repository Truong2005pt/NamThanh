const fs = require('fs');

const p1 = JSON.parse(fs.readFileSync('scratch/blog_post1_translations.json', 'utf8'));
const p2 = JSON.parse(fs.readFileSync('scratch/blog_post2_translations.json', 'utf8'));
const p3 = JSON.parse(fs.readFileSync('scratch/blog_post3_translations.json', 'utf8'));

// Load current blog-data.ts
const ts = require('typescript');
const code = fs.readFileSync('lib/blog-data.ts', 'utf8');
const js = ts.transpileModule(code, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
const m = { exports: {} };
const fn = new Function('module', 'exports', 'require', js);
fn(m, m.exports, require);
const posts = m.exports.BLOG_POSTS;

// Update translations for each post
posts[0].translations = {
  ...posts[0].translations,
  ...p1,
};

posts[1].translations = {
  ...posts[1].translations,
  ...p2,
};

posts[2].translations = {
  ...posts[2].translations,
  ...p3,
};

const updatedFileContent = `// lib/blog-data.ts

export interface BlogContentSection {
  heading?: string;
  paragraphs: string[];
}

export interface BlogPostData {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  category: string;
  coverGradient: string;
  content: BlogContentSection[];
  translations?: Record<string, {
    title: string;
    excerpt: string;
    category: string;
    readTime: string;
    authorRole: string;
    content: BlogContentSection[];
  }>;
}

export const BLOG_POSTS: BlogPostData[] = ${JSON.stringify(posts, null, 2)};

export function getLocalizedPost(post: BlogPostData, lang: string): BlogPostData {
  if (lang === 'vi') return post;
  const trans = post.translations?.[lang] || post.translations?.en;
  if (!trans) return post;
  return {
    ...post,
    title: trans.title,
    excerpt: trans.excerpt,
    category: trans.category,
    readTime: trans.readTime,
    authorRole: trans.authorRole,
    content: trans.content,
  };
}
`;

fs.writeFileSync('lib/blog-data.ts', updatedFileContent, 'utf8');
console.log('Successfully updated lib/blog-data.ts with all 19 languages for all 3 posts!');
