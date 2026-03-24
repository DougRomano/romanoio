import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const POSTS_DIR = path.join(process.cwd(), 'content/posts');

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  readingTime: string;
  image?: string;
  draft?: boolean;
  /** Shared title groups posts into a series; use with seriesOrder */
  series?: string;
  /** Position within the series (1-based); posts with the same series are sorted by this */
  seriesOrder?: number;
}

export interface Post extends PostMeta {
  content: string;
}

function getPostSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.mdx') || f.endsWith('.md'))
    .map((f) => f.replace(/\.(mdx|md)$/, ''));
}

export function getPostBySlug(slug: string): Post | null {
  const mdxPath = path.join(POSTS_DIR, `${slug}.mdx`);
  const mdPath = path.join(POSTS_DIR, `${slug}.md`);
  const filePath = fs.existsSync(mdxPath) ? mdxPath : mdPath;

  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  return {
    slug,
    title: data.title ?? 'Untitled',
    date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
    excerpt: data.excerpt ?? '',
    tags: data.tags ?? [],
    readingTime: stats.text,
    image: data.image ?? `/post-images/${slug}.png`,
    draft: data.draft ?? false,
    series: typeof data.series === 'string' ? data.series : undefined,
    seriesOrder: typeof data.seriesOrder === 'number' ? data.seriesOrder : undefined,
    content,
  };
}

export function getAllPosts(includeDrafts = false): PostMeta[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is Post => p !== null)
    .filter((p) => includeDrafts || !p.draft);

  return posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map(({ content: _content, ...meta }) => meta);
}

export function getAllTags(): { tag: string; count: number }[] {
  const posts = getAllPosts();
  const tagMap: Record<string, number> = {};
  posts.forEach((p) => p.tags.forEach((t) => { tagMap[t] = (tagMap[t] ?? 0) + 1; }));
  return Object.entries(tagMap)
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}

/** Prev/next within the same `series` name, ordered by seriesOrder (then date as tiebreaker). */
export function getSeriesNavigation(
  slug: string,
  includeDrafts = false,
): {
  seriesTitle: string;
  partIndex: number;
  partCount: number;
  prev: PostMeta | null;
  next: PostMeta | null;
} | null {
  const post = getPostBySlug(slug);
  if (!post?.series) return null;

  const slugs = getPostSlugs();
  const inSeries = slugs
    .map((s) => getPostBySlug(s))
    .filter((p): p is Post => p !== null)
    .filter((p) => includeDrafts || !p.draft)
    .filter((p) => p.series === post.series)
    .sort((a, b) => {
      const oa = a.seriesOrder ?? Number.MAX_SAFE_INTEGER;
      const ob = b.seriesOrder ?? Number.MAX_SAFE_INTEGER;
      if (oa !== ob) return oa - ob;
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    })
    .map(({ content: _c, ...meta }) => meta);

  const idx = inSeries.findIndex((p) => p.slug === slug);
  if (idx === -1) return null;

  const partIndex = idx + 1;
  const partCount = inSeries.length;

  return {
    seriesTitle: post.series,
    partIndex,
    partCount,
    prev: idx > 0 ? inSeries[idx - 1]! : null,
    next: idx < inSeries.length - 1 ? inSeries[idx + 1]! : null,
  };
}
