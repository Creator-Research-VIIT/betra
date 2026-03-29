import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';

export async function GET() {
  try {
    const total = await sql`SELECT COUNT(*) FROM membership`;

    const monthly = await sql`
      SELECT DATE_TRUNC('month', created_at) AS month, COUNT(*) 
      FROM membership
      GROUP BY month
      ORDER BY month
    `;

    return NextResponse.json({
      total: total[0].count,
      monthly,
    });
  } catch {
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}