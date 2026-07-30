import { IconDotsVertical,} from "@tabler/icons-react";
import StatusBedge from "../StatusBedge";
import AvtarGroup from "../AvtarGroup";
import type { Segment } from "../../assets/types/segment";

type SegmentCardProps = {
  segment: Segment;
};

const SegmentCard = ({ segment }:SegmentCardProps) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-200 hover:shadow-md">
      {/* Header */}
      <div className="flex items-start justify-between">
        <StatusBedge status={segment.status} />

        <button className="rounded-md p-1 hover:bg-gray-100">
          <IconDotsVertical size={18} />
        </button>
      </div>

      {/* Title */}
      <h3 className="mt-3 text-[17px] font-sm leading-6 text-gray-600">
        {segment.title}
      </h3>

      {/* Users */}
      <div className="mt-3 flex items-end gap-2">
        <h2 className="text-3xl font-bold text-gray-900">
          {segment.totalUsers}
        </h2>

        <span className="pb-1 text-sm text-gray-500">{segment.userType}</span>
      </div>

      {/* Divider */}
      <div className="my-3 border-t border-gray-200"></div>

      {/* Footer */}
      <div className="flex items-end justify-between">
        <div className="space-y-1 text-xs text-gray-500">
          <p>
            Last Updated:{" "}
            <span className="text-gray-700">{segment.updatedAt}</span>
          </p>

          <p>
            Created On:{" "}
            <span className="text-gray-700">{segment.createdAt}</span>
          </p>
        </div>

        <AvtarGroup users={segment.collaborators} />
      </div>
    </div>
  );
};

export default SegmentCard;
