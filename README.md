# romano.io

Personal blog for [romano.io](https://romano.io). Built with Next.js 14, MDX, and Tailwind CSS.

## Stack

- **Framework**: [Next.js 14](https://nextjs.org) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + `@tailwindcss/typography`
- **Content**: MDX via `next-mdx-remote`
- **Syntax highlighting**: `rehype-highlight` (GitHub Dark theme)
- **Date formatting**: `date-fns`

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Writing a post

Create a `.mdx` file in `content/posts/`:

```
---
title: "Your Post Title"
date: "2025-03-01"
excerpt: "A short summary shown in post cards."
tags: [".NET", "SQL Server"]
draft: false
---

Your content here. Full MDX — JSX components, code blocks with syntax highlighting, etc.
```

Set `draft: true` to hide a post from the public listing.

## Project structure

```
app/                 # Next.js App Router
  layout.tsx         # Root layout with Header + Footer
  page.tsx           # Homepage
  blog/
    page.tsx         # Blog listing
    [slug]/page.tsx  # Individual post
  about/page.tsx     # About page
components/
  Header.tsx
  Footer.tsx
  PostCard.tsx
content/posts/       # MDX blog posts
lib/posts.ts         # Post reading + metadata utilities
```

## Deployment

### Vercel (recommended)

1. Push to GitHub (the existing `DougRomano/romanoio` repo)
2. Import at [vercel.com/new](https://vercel.com/new)
3. Zero config needed — Vercel detects Next.js automatically
4. Add your custom domain `romano.io` in Vercel's domain settings

### GitHub Pages / other static hosts

Run `npm run build` then `npm run export` (add `output: 'export'` to `next.config.mjs` first).
