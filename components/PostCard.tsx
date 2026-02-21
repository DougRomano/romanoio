import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import type { PostMeta } from '@/lib/posts';

interface Props {
  post: PostMeta;
}

export default function PostCard({ post }: Props) {
  return (
    <article className="group border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden hover:border-accent-300 dark:hover:border-accent-700 hover:shadow-md dark:hover:shadow-accent-900/20 transition-all duration-200">
      <Link href={`/blog/${post.slug}`} className="block">
        {/* Thumbnail */}
        {post.image && (
          <div className="relative w-full aspect-[1200/400] overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
        )}

        <div className="p-6">
          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
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

          {/* Title */}
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors mb-2">
            {post.title}
          </h2>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
              {post.excerpt}
            </p>
          )}

          {/* Meta */}
          <div className="flex items-center gap-3 text-xs text-gray-400 dark:text-gray-500">
            <time dateTime={post.date}>
              {format(new Date(post.date), 'MMM d, yyyy')}
            </time>
            <span>·</span>
            <span>{post.readingTime}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
