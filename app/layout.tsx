import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Analytics from '@/components/Analytics';

export const metadata: Metadata = {
  title: {
    default: 'Doug Romano — AI-first .NET developer · romano.io',
    template: '%s · romano.io',
  },
  description:
    'Writing honestly about AI agents, Claude Code, agentic workflows, and 25+ years of .NET in production. By Doug Romano, St. Louis.',
  metadataBase: new URL('https://romano.io'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://romano.io',
    siteName: 'romano.io',
    images: [
      {
        url: '/og-thumbnail.png',
        width: 1200,
        height: 630,
        alt: 'romano.io — AI-First Developer. 20 Years of .NET Behind It.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-thumbnail.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevent FOUC on dark mode */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){const t=localStorage.getItem('theme');const d=window.matchMedia('(prefers-color-scheme:dark)').matches;if(t==='dark'||(t===null&&d)){document.documentElement.classList.add('dark')}})()`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Analytics />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
