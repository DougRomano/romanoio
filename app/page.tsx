import Link from 'next/link';
import PostCard from '@/components/PostCard';
import { getAllPosts } from '@/lib/posts';

export default function HomePage() {
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      {/* Hero */}
      <section className="py-20 sm:py-28">
        <p className="text-sm font-medium text-accent-500 mb-3 tracking-wider uppercase">
          Hey, I&apos;m Doug
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
          .NET Architect &amp; <br className="hidden sm:block" />
          Software Engineer
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed mb-10">
          I write about .NET architecture, SQL performance, distributed systems, and the
          craft of building reliable software. Occasional deep-dives, occasional shower thoughts.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent-600 hover:bg-accent-700 text-white font-medium text-sm transition-colors"
          >
            Read the blog
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center px-5 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-accent-400 dark:hover:border-accent-600 font-medium text-sm transition-colors"
          >
            About me
          </Link>
        </div>
      </section>

      {/* Skills strip */}
      <section className="border-t border-b border-gray-100 dark:border-gray-800 py-6 mb-20">
        <div className="flex flex-wrap gap-3">
          {['.NET / C#', 'SQL Server', 'Azure', 'Microservices', 'EF Core', 'REST APIs', 'Performance Tuning'].map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-full px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Latest posts */}
      {latestPosts.length > 0 && (
        <section className="pb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Latest posts</h2>
            <Link href="/blog" className="text-sm text-accent-600 dark:text-accent-400 hover:underline font-medium">
              View all →
            </Link>
          </div>
          <div className="grid gap-4">
            {latestPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
