import { createClient } from "@/lib/supabase/server";

export default async function Home() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        {user ? (
          <>
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl text-green-600">
              ✓
            </div>

            <h1 className="text-2xl font-semibold">
              Logged in successful
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              You are authenticated.
            </p>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-semibold">
              Welcome
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Sign in with Google to continue.
            </p>

            <a
              href="/auth/login"
              className="mt-6 flex w-full items-center justify-center gap-3 rounded-lg bg-slate-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              <span className="text-lg">G</span>
              Continue with Google
            </a>
          </>
        )}
      </div>
    </main>
  );
}
