'use client';

const KIT_FORM_ID = process.env.NEXT_PUBLIC_KIT_FORM_ID || '9195403';

export default function NewsletterSignup() {
  return (
    <div className="border-t border-gray-200 dark:border-gray-800 pt-8 mt-8">
      <p className="text-sm font-medium text-gray-900 dark:text-white mb-3">
        Get new posts in your inbox
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
        No spam. Unsubscribe anytime.
      </p>
      <form
        action={`https://app.kit.com/forms/${KIT_FORM_ID}/subscriptions`}
        method="post"
        className="flex flex-col sm:flex-row gap-2 max-w-md"
      >
        <input
          type="email"
          name="email_address"
          placeholder="Email address"
          required
          aria-label="Email address"
          className="flex-1 px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent text-sm"
        />
        <button
          type="submit"
          className="px-4 py-2 rounded-md bg-accent-600 hover:bg-accent-700 text-white font-medium text-sm transition-colors"
        >
          Subscribe
        </button>
      </form>
      <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
        <a href="https://kit.com" target="_blank" rel="nofollow noopener" className="hover:underline">
          Powered by Kit
        </a>
      </p>
    </div>
  );
}
