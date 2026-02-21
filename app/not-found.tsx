import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-32 text-center">
      <p className="text-6xl font-bold text-gray-200 dark:text-gray-800 mb-4">404</p>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Page not found</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-8">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent-600 hover:bg-accent-700 text-white font-medium text-sm transition-colors"
      >
        Go home
      </Link>
    </div>
  );
}
