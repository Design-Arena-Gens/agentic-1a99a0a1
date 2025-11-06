"use client";

import useSWR from 'swr';
import { useMemo, useState } from 'react';

type Market = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number | null;
  total_volume: number;
  market_cap: number;
  sparkline_in_7d?: { price: number[] };
};

const fetcher = (url: string) => fetch(url).then(r => r.json());

export default function CryptoTable() {
  const { data, isLoading } = useSWR<Market[]>('/api/markets', fetcher, { refreshInterval: 60_000 });
  const [query, setQuery] = useState('');
  const [sortKey, setSortKey] = useState<'market_cap' | 'price_change_percentage_24h' | 'total_volume'>('market_cap');

  const filtered = useMemo(() => {
    const list = (data ?? []).filter(m =>
      m.name.toLowerCase().includes(query.toLowerCase()) || m.symbol.toLowerCase().includes(query.toLowerCase())
    );
    const sorter: Record<string, (a: Market, b: Market) => number> = {
      market_cap: (a, b) => (b.market_cap ?? 0) - (a.market_cap ?? 0),
      total_volume: (a, b) => (b.total_volume ?? 0) - (a.total_volume ?? 0),
      price_change_percentage_24h: (a, b) => (b.price_change_percentage_24h ?? -Infinity) - (a.price_change_percentage_24h ?? -Infinity)
    };
    return list.sort(sorter[sortKey]);
  }, [data, query, sortKey]);

  return (
    <section id="market" className="section container-max">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h2 className="section-heading">Comprehensive crypto data</h2>
          <p className="subtext mt-2">Live market overview with filters</p>
        </div>
        <div className="flex gap-3">
          <input
            aria-label="Search coins"
            placeholder="Search by name or symbol"
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <select
            aria-label="Sort results"
            className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
            value={sortKey}
            onChange={(e) => setSortKey(e.target.value as any)}
          >
            <option value="market_cap">Market cap</option>
            <option value="total_volume">Volume</option>
            <option value="price_change_percentage_24h">24h change</option>
          </select>
        </div>
      </div>

      <div role="table" aria-label="Crypto markets" className="card overflow-hidden">
        <div role="rowgroup">
          <div role="row" className="grid grid-cols-12 gap-2 px-4 py-3 bg-white/5 text-xs uppercase tracking-wide text-white/60">
            <div role="columnheader" className="col-span-5">Asset</div>
            <div role="columnheader" className="col-span-2 text-right">Price</div>
            <div role="columnheader" className="col-span-2 text-right">24h</div>
            <div role="columnheader" className="col-span-3 text-right">Market Cap</div>
          </div>
        </div>
        <div role="rowgroup" className="divide-y divide-white/10">
          {isLoading && (
            <div className="px-4 py-6 text-center subtext">Loading market data?</div>
          )}
          {filtered?.map((m) => (
            <div role="row" key={m.id} className="grid grid-cols-12 gap-2 px-4 py-3 items-center hover:bg-white/5">
              <div role="cell" className="col-span-5 flex items-center gap-3">
                <img src={m.image} alt="" className="w-6 h-6 rounded-full" />
                <div>
                  <div className="font-medium">{m.name} <span className="text-white/50 text-xs">{m.symbol.toUpperCase()}</span></div>
                </div>
              </div>
              <div role="cell" className="col-span-2 text-right tabular-nums">${m.current_price.toLocaleString()}</div>
              <div role="cell" className={`col-span-2 text-right tabular-nums ${((m.price_change_percentage_24h ?? 0) >= 0) ? 'text-accent-green' : 'text-red-400'}`}>
                {(m.price_change_percentage_24h ?? 0).toFixed(2)}%
              </div>
              <div role="cell" className="col-span-3 text-right tabular-nums">${m.market_cap.toLocaleString()}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
