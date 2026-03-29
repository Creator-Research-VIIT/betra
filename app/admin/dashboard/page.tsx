'use client';

import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    fetch('/api/membership/stats')
      .then((res) => res.json())
      .then(setStats);
  }, []);

  if (!stats) return <div className="p-10">Loading...</div>;

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      {/* Total */}
      <div className="bg-blue-100 p-4 rounded">
        <h2 className="text-lg font-semibold">Total Members</h2>
        <p className="text-3xl">{stats.total}</p>
      </div>

      {/* Monthly */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Monthly Growth</h2>
        <ul>
          {stats.monthly.map((m: any, i: number) => (
            <li key={i}>
              {new Date(m.month).toLocaleDateString()} - {m.count}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}