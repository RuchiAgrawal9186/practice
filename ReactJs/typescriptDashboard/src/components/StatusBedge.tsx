import { IconPencil } from "@tabler/icons-react";
import type { Segment } from "../assets/types/segment";

const statusStyles = {
  Published: "bg-green-100 text-green-700",
  Draft: "bg-orange-100 text-orange-600",
  Pending: "bg-yellow-100 text-yellow-700",
};

type Status = Segment["status"];

type StatusBadgeProps = {
  status: Status;
};

const StatusBedge = ({status}:StatusBadgeProps) => {
  return (
    <span
      className={`flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium ${
        statusStyles[status] || "bg-gray-100 text-gray-700"
      }`}
    >
      <IconPencil size={12} />
      {status}
    </span>
  );
};

export default StatusBedge;
