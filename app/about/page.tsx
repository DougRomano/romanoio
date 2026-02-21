import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About',
  description: 'A bit about Doug Romano — .NET architect and software engineer.',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">About</h1>

        <div className="prose prose-gray dark:prose-invert prose-a:text-accent-600 dark:prose-a:text-accent-400">
          <p>
            Hey, I&apos;m <strong>Doug Romano</strong> — a software architect and .NET developer
            with a deep love for SQL, distributed systems, and writing code that still makes sense
            six months later.
          </p>

          <p>
            I&apos;ve spent years building backend systems with the Microsoft stack: C#, .NET,
            SQL Server, Azure, and the various libraries and patterns that orbit those technologies.
            I care a lot about performance, maintainability, and the gap between "it works" and
            "it&apos;s actually good."
          </p>

          <h2>What I write about</h2>
          <p>
            This blog is a place to document things I&apos;ve learned, patterns I keep returning to,
            and problems I&apos;ve wrestled with. Expect content on:
          </p>
          <ul>
            <li>.NET architecture and C# design patterns</li>
            <li>SQL Server performance and query optimization</li>
            <li>Azure services and cloud-native design</li>
            <li>Microservices, event-driven architecture, and distributed systems</li>
            <li>Entity Framework Core and ORMs</li>
            <li>Engineering culture and team practices</li>
          </ul>

          <h2>Get in touch</h2>
          <p>
            The best way to reach me is on{' '}
            <a href="https://github.com/DougRomano" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>{' '}
            or{' '}
            <a href="https://linkedin.com/in/dougromano" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            . If you spot a mistake in a post, pull requests are welcome.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent-600 hover:bg-accent-700 text-white font-medium text-sm transition-colors"
          >
            Read the blog
          </Link>
          <a
            href="https://github.com/DougRomano"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-accent-400 dark:hover:border-accent-600 font-medium text-sm transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
