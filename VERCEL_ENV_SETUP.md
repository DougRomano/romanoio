# Vercel Environment Variables Setup

Your Kit newsletter form and Google Analytics don't show on production because environment variables must be set in Vercel—`.env.local` is only used locally.

## Add These in Vercel

1. Go to [vercel.com](https://vercel.com) → your **romanoio** project
2. **Settings** → **Environment Variables**
3. Add each variable below (for **Production** and optionally **Preview**):

| Name | Value |
|------|-------|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | `G-01GK4VHGXW` |
| `NEXT_PUBLIC_KIT_FORM_UID` | `9cc0b13bba` |
| `NEXT_PUBLIC_KIT_FORM_SCRIPT_URL` | `https://dougromano.kit.com/9cc0b13bba/index.js` |

4. **Redeploy** after adding: **Deployments** → latest deployment → **⋮** → **Redeploy**

## Why This Is Required

- `NEXT_PUBLIC_*` variables are baked into the build at build time
- Vercel builds without access to your local `.env.local`
- Without these in Vercel, `NewsletterSignup` returns `null` and `Analytics` never loads

## Verify After Redeploy

1. Open https://www.romano.io/blog/ai-brain-fry-is-real
2. You should see "Get new posts in your inbox" and the Kit form in the footer and at the end of the post
3. Google Analytics will track page views (check GA4 Realtime report)
