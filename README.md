# Next.js Google OAuth Frontend

Simple Next.js App Router frontend using Supabase Google OAuth.

## 1. Install

```bash
npm install
```

## 2. Environment variables

Copy `.env.example` to `.env.local` and fill in:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

## 3. Enable Google OAuth in Supabase

In your Supabase project:

- Authentication -> Providers -> Google -> Enable
- Add your Google OAuth Client ID and Client Secret
- Add your local/site URL to the allowed redirect URLs

For local development, the redirect URL used by this app is:

`http://localhost:3000/`

For production, replace it with your Vercel URL.

## 4. Run

```bash
npm run dev
```

Open:

`http://localhost:3000`

## Behavior

1. User clicks "Continue with Google".
2. Supabase redirects to Google.
3. Google redirects back to the app.
4. Supabase restores the session.
5. If the session contains an access token/JWT, the UI displays:

**Logged in successful**

The JWT is not rendered on the page.
