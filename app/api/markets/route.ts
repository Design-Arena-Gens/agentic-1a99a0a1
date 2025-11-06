import { NextResponse } from 'next/server';

export const revalidate = 60; // seconds

export async function GET() {
  try {
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false&price_change_percentage=24h';
    const res = await fetch(url, {
      // Force edge cache for 60s while still keeping it fresh
      headers: { 'accept': 'application/json' },
      next: { revalidate }
    });
    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to fetch markets' }, { status: 502 });
    }
    const data = await res.json();
    return NextResponse.json(data, { headers: { 'cache-control': 'public, s-maxage=60, stale-while-revalidate=300' } });
  } catch (e) {
    return NextResponse.json({ error: 'Unexpected error' }, { status: 500 });
  }
}
