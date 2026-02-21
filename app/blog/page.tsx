import type { Metadata } from 'next';
import PostCard from '@/components/PostCard';
import { getAllPosts, getAllTags } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Articles on .NET, SQL, architecture, and software engineering.',
};

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">Blog</h1>
        <p className="text-gray-500 dark:text-gray-400">
          {posts.length} post{posts.length !== 1 ? 's' : ''} on .NET, SQL, architecture, and
          the craft of building software.
        </p>
      </div>

      {/* Tags filter */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-10">
          {tags.map(({ tag, count }) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
            >
              {tag}
              <span className="text-gray-400 dark:text-gray-500">{count}</span>
            </span>
          ))}
        </div>
      )}

      {/* Posts */}
      {posts.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400 py-12 text-center">
          No posts yet — check back soon!
        </p>
      ) : (
        <div className="grid gap-4">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
