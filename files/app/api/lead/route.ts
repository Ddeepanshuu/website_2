import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  // Placeholder API — wire to CRM / email system
  const body = await request.json().catch(() => null);
  if (!body?.email || !body?.company) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  // TODO: send to secure backend, add rate-limiting, validation, and logging.
  return NextResponse.json({ ok: true, message: 'Lead received' });
}