import { BRAND } from "@hackbits/shared";

// Phase 1 shell only. The real catalogue homepage (backend-driven) arrives in Phase 4.
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="brand-gradient animate-fadeUp text-5xl font-extrabold tracking-tight sm:text-7xl">
        {BRAND.name}
      </h1>
      <p className="animate-fadeUp text-muted">{BRAND.tagline}</p>
    </main>
  );
}
