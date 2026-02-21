import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500 dark:text-gray-400">
        <p>© {new Date().getFullYear()} Doug Romano. All rights reserved.</p>
        <div className="flex items-center gap-5">
          <Link href="https://github.com/DougRomano" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white transition-colors">
            GitHub
          </Link>
          <Link href="https://linkedin.com/in/dougromano" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white transition-colors">
            LinkedIn
          </Link>
          <Link href="/blog" className="hover:text-gray-900 dark:hover:text-white transition-colors">
            Blog
          </Link>
        </div>
      </div>
    </footer>
  );
}
