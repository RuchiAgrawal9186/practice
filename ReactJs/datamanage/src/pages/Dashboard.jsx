import React, { useMemo, useState } from "react";
import data1 from "../data/response1.json";
import data2 from "../data/response2.json";
import Sidebar from "../components/Sidebar";
import DataTable from "../components/DataTable";
import Pagination from "../components/Pagination";

const Dashboard = () => {
  const [dataset, setDataset] = useState("default");
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 10;
  const data = dataset === "default" ? data1 : data2;

  const visibleRows = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return data.frequent.slice(start, start + PAGE_SIZE);
  }, [page, data]);

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Header */}
      <div className="bg-indigo-300 text-black p-3 flex justify-between">
        <span className="font-semibold">IndiaDataHub</span>

        <select
          className="text-black p-1 rounded"
          value={dataset}
          onChange={(e) => {
            setDataset(e.target.value);
            setPage(1); // reset page on dataset change
          }}
        >
          <option value="default">Default</option>
          <option value="imf">IMF</option>
        </select>
      </div>

      {/* Body */}
      <div className="flex h-[calc(100vh-48px)] overflow-hidden">
        {/* Sidebar */}
        <div className="overflow-y-auto">
          <Sidebar categories={Object.keys(data.categories)} />
        </div>

        {/* Right Content */}
        <div className="flex-1 p-6 flex flex-col overflow-hidden">
          <h2 className="font-semibold mb-4">Economic Monitor</h2>

          {/* Table wrapper → ONLY this scrolls horizontally */}
          <div className="flex overflow-x-auto">
            <DataTable rows={visibleRows} />
          </div>

          {/* Pagination */}
          <Pagination
            page={page}
            total={data.frequent.length}
            pageSize={PAGE_SIZE}
            onPageChange={setPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
