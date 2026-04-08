import Link from 'next/link';

interface Props {
  currentPage: number;
  totalPages: number;
}

function hrefForPage(page: number): string {
  if (page <= 1) return '/blog';
  return `/blog?page=${page}`;
}

export default function BlogPagination({ currentPage, totalPages }: Props) {
  if (totalPages <= 1) return null;

  return (
    <nav
      className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
      aria-label="Blog pagination"
    >
      <div className="flex items-center gap-2">
        {currentPage > 1 ? (
          <Link
            href={hrefForPage(currentPage - 1)}
            className="inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-accent-400 dark:hover:border-accent-600 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
          >
            ← Previous
          </Link>
        ) : (
          <span className="inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium border border-transparent text-gray-400 dark:text-gray-600 cursor-not-allowed">
            ← Previous
          </span>
        )}
        {currentPage < totalPages ? (
          <Link
            href={hrefForPage(currentPage + 1)}
            className="inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-accent-400 dark:hover:border-accent-600 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
          >
            Next →
          </Link>
        ) : (
          <span className="inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium border border-transparent text-gray-400 dark:text-gray-600 cursor-not-allowed">
            Next →
          </span>
        )}
      </div>

      <ul className="flex flex-wrap items-center gap-1.5 justify-center sm:justify-end">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
          const isCurrent = page === currentPage;
          return (
            <li key={page}>
              {isCurrent ? (
                <span
                  className="inline-flex min-w-[2.25rem] justify-center px-2 py-1.5 rounded-lg text-sm font-semibold bg-accent-600 text-white"
                  aria-current="page"
                >
                  {page}
                </span>
              ) : (
                <Link
                  href={hrefForPage(page)}
                  className="inline-flex min-w-[2.25rem] justify-center px-2 py-1.5 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
                >
                  {page}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
