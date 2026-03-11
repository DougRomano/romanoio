'use client';

import Script from 'next/script';

const KIT_FORM_UID = process.env.NEXT_PUBLIC_KIT_FORM_UID;
const KIT_FORM_SCRIPT_URL = process.env.NEXT_PUBLIC_KIT_FORM_SCRIPT_URL;

export default function NewsletterSignup() {
  if (!KIT_FORM_UID || !KIT_FORM_SCRIPT_URL) {
    return null;
  }

  return (
    <div className="border-t border-gray-200 dark:border-gray-800 pt-8 mt-8">
      <p className="text-sm font-medium text-gray-900 dark:text-white mb-3">
        Get new posts in your inbox
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
        No spam. Unsubscribe anytime.
      </p>
      <div id="newsletter-form">
        <Script
          async
          data-uid={KIT_FORM_UID}
          src={KIT_FORM_SCRIPT_URL}
          strategy="afterInteractive"
        />
      </div>
    </div>
  );
}
