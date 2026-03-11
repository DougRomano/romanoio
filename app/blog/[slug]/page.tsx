import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { format } from 'date-fns';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { getPostBySlug, getAllPosts } from '@/lib/posts';

// Syntax highlighting theme (GitHub Dark)
import 'highlight.js/styles/github-dark.css';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `https://romano.io/blog/${params.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

export default function PostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const mdxOptions = {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeHighlight,
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'wrap' }],
    ] as any[],
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: 'Doug Romano',
    },
    publisher: {
      '@type': 'Organization',
      name: 'romano.io',
    },
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Back link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-accent-600 dark:hover:text-accent-400 mb-10 transition-colors"
      >
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        All posts
      </Link>

      {/* Header */}
      <header className="mb-12">
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-2 py-0.5 rounded-full bg-accent-50 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
          {post.title}
        </h1>
        {post.excerpt && (
          <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
            {post.excerpt}
          </p>
        )}
        <div className="flex items-center gap-3 text-sm text-gray-400 dark:text-gray-500 border-b border-gray-100 dark:border-gray-800 pb-8">
          <span className="font-medium text-gray-600 dark:text-gray-300">Doug Romano</span>
          <span>·</span>
          <time dateTime={post.date}>{format(new Date(post.date), 'MMMM d, yyyy')}</time>
          <span>·</span>
          <span>{post.readingTime}</span>
        </div>
      </header>

      {/* Content */}
      <article className="prose prose-gray dark:prose-invert max-w-none
        prose-headings:font-bold prose-headings:tracking-tight
        prose-a:text-accent-600 dark:prose-a:text-accent-400 prose-a:no-underline hover:prose-a:underline
        prose-code:font-mono prose-code:text-sm
        prose-pre:p-0 prose-pre:bg-transparent
        prose-img:rounded-xl prose-img:shadow-md
        prose-blockquote:border-accent-500 prose-blockquote:bg-accent-50 dark:prose-blockquote:bg-accent-900/10 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-lg
      ">
        <MDXRemote source={post.content} options={{ mdxOptions }} />
      </article>

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-800">
        <div className="flex items-center justify-between">
          <Link href="/blog" className="text-sm text-accent-600 dark:text-accent-400 hover:underline font-medium">
            ← All posts
          </Link>
          <a
            href={`https://github.com/DougRomano/romanoio`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            Edit on GitHub →
          </a>
        </div>
      </div>
    </div>
  );
}
