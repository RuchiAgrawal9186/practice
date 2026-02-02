import React from "react";
import { IconSquareRoundedPlus } from "@tabler/icons-react";
import { IconCalendarEvent } from "@tabler/icons-react";
import { IconPin } from "@tabler/icons-react";
const DataTable = ({ rows }) => {

  return (
    <table className="w-full border text-sm table-auto border-2 table-fixed">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-2 text-left">Indicator</th>
          <th className="p-2">Range</th>
          <th className="p-2">Unit</th>
          <th className="p-2">Coverage</th>
          <th className="p-2">Actions</th>
        </tr>
      </thead>

      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="border-t">
            <td className="p-2 break-words max-w-[300px]">
              <p>{row.title}</p>
              <p className="bg-blue-300 min-w-3 rounded-2xl px-2 py-0.5 text-xs mt-1 inline-block">
                {row.cat}
              </p>
            </td>

            <td className="p-2 text-center whitespace-nowrap">{row.freq}</td>

            <td className="p-2 text-center break-words">{row.unit}</td>

            <td className="p-2 text-center break-words">
              {row.coverage || "-"}
            </td>
            <td className="flex items-center justify-center gap-2 p-2">
              <IconCalendarEvent size={16} stroke={1.5} />
              <IconSquareRoundedPlus size={16} stroke={1.5} />
              <IconPin size={16} stroke={1.5} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
