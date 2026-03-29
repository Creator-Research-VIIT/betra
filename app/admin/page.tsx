'use client';

import { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';

export default function AdminPage() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/membership/list')
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-10">Loading...</div>;

  function exportToExcel(data: any[]) {
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(workbook, worksheet, 'Members');

  XLSX.writeFile(workbook, 'members.xlsx');
}

  return (

    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Membership Submissions</h1>

        <button
        onClick={() => exportToExcel(data)}
        className="mb-4 bg-green-600 text-white px-4 py-2 rounded"
        >
        Export to Excel
        </button>

      <div className="overflow-auto">
        <table className="min-w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Phone</th>
              <th className="p-2 border">Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i}>
                <td className="p-2 border">{item.name}</td>
                <td className="p-2 border">{item.email}</td>
                <td className="p-2 border">{item.cell_number}</td>
                <td className="p-2 border">
                  {new Date(item.created_at).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}