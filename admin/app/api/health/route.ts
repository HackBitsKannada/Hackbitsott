import { NextResponse } from "next/server";

/** Liveness probe used by hosting + smoke tests. Reveals no secrets. */
export function GET() {
  return NextResponse.json({ app: "admin", status: "ok", time: new Date().toISOString() });
}
