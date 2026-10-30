import { BRAND } from "@hackbits/shared";

// Phase 1 shell only. Protected /admin routes and RBAC arrive in Phases 3 and 5.
export default function AdminHome() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center">
      <h1 className="brand-gradient text-4xl font-extrabold">{BRAND.name} · Admin</h1>
      <p className="text-muted">Admin dashboard scaffold — authentication not yet implemented.</p>
    </main>
  );
}
